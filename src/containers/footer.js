import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons";
import "../input.css";

export function FooterContainer() {
  return (
    <Footer className="bg-gradient-to-r from-cyan-400 to-blue-400">
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Marketing</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact us</Footer.Title>
            <Footer.Link href="#">Sweden</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              {" "}
              <Icon classname="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              {" "}
              <Icon classname="fab fa-intagram-f" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              {" "}
              <Icon classname="fab fa-linkedin-f" />
              LinkedIn
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}