import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="https://user-images.githubusercontent.com/78828396/127604437-f4d3638f-ce8f-4bd3-8790-1ff2255d9598.jpg"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Andreas Irta"
          />
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Andreas Irta. I recently graduated a Full Stack
            Web Developer program at the Bootcamp of Denver University and received
            certificate of completion. Currently I live in Lafayette, CO. I am
            actively looking for job opportunities as a Junior Web Developer in
            Colorado. When I am not creating websites some of my hobbies
            include video games, and walk with my dog.
          </p>
          <p style={{ fontSize: "27px" }}>
            I am proficient with computers and have good understanding of
            Microsoft OS and Microsoft Office. I am committed to high standards of user experience,
            usability, and speed. I am detail focused and an ambitious problem solver with
            a passion for learning new skills.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
