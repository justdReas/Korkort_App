import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import "./postForm.css";
import Reaptcha from "reaptcha";

const initialState = {
    firstname: "",
    lastname:"",
    email: "",
    phone: "",
    date:"",
    city:"",
}

const PostForm = () => {
    const [state, setState] = useState(initialState);
    const {firstname, lastname, email, phone, date, city} = state;

    const {id} = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:4000/users/${id}`)
        .then((resp) => setState({...resp.data[0]}))
     }, [id]);
     const handleSubmit = (e) => {
        e.preventDefault();
        if(!firstname || !lastname || !email || !phone || !date || !city) {
            console.log("Please provide value into each input field")
        }else {
            if(!id) {
              axios
              .post("http://localhost:4000/users",{
                  firstname,
                  lastname,
                  email,
                  phone,
                  date,
                  city,
              })
            
        
        .then(() => {
                  setState({firstname: "", lastname: "", email: "", phone:"", date: "", city: ""});
            })
          .catch((err) => console.log(err.response.data));
          console.log("Course Added Successfully");
            }else {
                axios
                .put(`http://localhost:4000/users/${id}`,{
                    firstname,
                    lastname,
                    email,
                    phone,
                    date,
                    city,
                })
                .then(() => {
                    setState({firstname: "", lastname: "", email: "", phone:"", date: "", city: ""});
            })
            .catch((err) => console.log(err.response.data));
            console.log("Course Updated Successfully");
               }      
             
            }
          };
          const handleInputChange = (e) => {
            const {name, value} = e.target;
            setState({...state, [name]: value});
            console.log("hello");
        };
        const [first, setFirst] = useState(true);
        const [second, setSecond] = useState(true);

        const handleChange = (e) => {
            setFirst(e.target.value);
            setSecond(e.target.value);
          }
    
  return (
    <div style={{marginTop: "50px"}}>
        <form style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "300px",
            alignContent: "center",
        }}
        onSubmit={handleSubmit}
        >        
         <h1 className="register">Register Form</h1>
         <label htmlFor="firstname">First Name</label>
         <input
          type="text"
          id="firstname"
          name="firstname" 
          placeholder="First Name..."
          value={firstname || ""}
          onChange={handleInputChange} 
          />
           <label htmlFor="lastname">Last Name</label>
         <input
          type="text"
          id="lastname"
          name="lastname" 
          placeholder="Last Name..."
          value={lastname || ""}
          onChange={handleInputChange} 
          />
           <label htmlFor="email">Email</label>
         <input
          type="email"
          id="email"
          name="email" 
          placeholder="Email..."
          value={email || ""}
          onChange={handleInputChange} 
          />
           <label htmlFor="phone">Phone</label>
         <input
          type="tel"
          id="phone"
          name="phone" 
          placeholder="Phone..."
          value={phone || ""}
          onChange={handleInputChange} 
          />
              <label htmlFor="date">Date</label>
         <input
          type="date"
          id="date"
          name="date" 
          placeholder="Date..."
          value={date || ""}
          onChange={handleInputChange} 
          />
                <label htmlFor="city">City</label>
         <input
          type="text"
          id="city"
          name="city" 
          placeholder="City..."
          value={city || ""}
          onChange={handleInputChange} 
          />

            <input className="checkbox" type="checkbox" value={first} onChange={handleChange} /> Email
            <input className="checkbox1" type="checkbox" value={second} onChange={handleChange} /> Sms
            <Reaptcha
          sitekey="6Lfh-xoeAAAAAL6D9bn_LABq10M1ZtpYup5-wksY"
        />
          <input type="submit" value={id ? "Update" : "Submit" } />
        </form>
    </div>
  )
  };

export default PostForm;