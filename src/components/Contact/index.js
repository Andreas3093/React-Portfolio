import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src="https://user-images.githubusercontent.com/78828396/127605407-4165f7c2-ddc1-4776-a076-e904af3e7562.jpg"
            class="pr-4 pb-3 img-fluid"
            alt="Andreas Irta"
          />
          <h4>
            I recently graduated a Full Stack Web Development Bootcamp at the
            Denver University. I was given a certificate of completion from the
            University. Now I am actively looking for a Junior Web Development
            position, below I have linked my e-mail and cell phone number.
            Please feel free to contact me at any time and if I do not
            immediately respond I will respond within the next buisness day.
            Thank you!
          </h4>
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:720-620-7070">
            <MDBIcon icon="phone-alt" /> 720-620-7070
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:kucikuci87@gmail.com">
            <MDBIcon icon="envelope" /> kucikuci87@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
