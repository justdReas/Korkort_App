
import FormInput from "./components/FormInput.js";
import "./App.css";
import "./input.css";
import "./components/form.css";




import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { FooterContainer } from "./containers/footer.js";



function App() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);


  const handleChange = (data) => {
    console.log(data);
  }
  //const [username,setUsername] = useState("")
  const [values, setValues] = useState({
    username: "",
    email: "",
    datum: "",
    password: "",
    confirmPassword: "",
  });
  

  const inputs = [
    {
      id: 1,
      name: "Förnamn",
      type: "text",
      placeholder: "Förnamn",
      //errorMessage:
     // "Username should be 3-16 characters and shouldn't include any special character!",
    //label: "Användarnamn",
     // pattern: "^[A-Za-z0-9]{3,16}$",
      label: "Förnamn",
      required: true,
    },
    {
      id: 2,
      name: "Efternamn",
      type: "test",
      placeholder: "Efternamn",
      label: "Efternamn",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
      {
      id: 4,
      name: "Mobilnummer",
      type: "Mobilnummer",
      placeholder: "Mobilnummer",
     // errorMessage:
       // "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Mobilnummer",
      //pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },


    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Datum",
      label: "Datum",
    },
    
  //   {
  //     id: 5,
  //     name: "confirmPassword",
  //     type: "password",
  //     placeholder: "Confirm Password",
  //     errorMessage: "Passwords don't match!",
  //     label: "Confirm Password",
  //     pattern: values.password,
  //     required: true,
  //   },
  ];
  <div>
   
</div>

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="wrapper">
      <nav className="bg-gradient-to-r from-cyan-400 to-blue-400">
     
   
        <Spline
          className="car"
          scene="https://prod.spline.design/xXq89CAzYxe9LNrY/scene.splinecode"
        />
      </nav>
      <div className="hero">
        <h1 className="header">
         
        </h1>
        <form onSubmit={handleSubmit}>
        <h1 className="register">Registrera dig</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            
          />
          
        ))}
          <div className="App">
            <input className="checkbox" type="checkbox" value={first} onChange={() => handleChange("First")} /> Email
            <input className="checkbox1" type="checkbox" value={second} onChange={() => handleChange("Second")} /> Sms
            <div className="g-recaptcha" data-sitekey="6Lfh-xoeAAAAAL6D9bn_LABq10M1ZtpYup5-wksY"></div>
            
          </div>
        <button>Submit</button>
        </form>
      
      </div>
   
      <FooterContainer />
    </div>
  );
}

export default App;
