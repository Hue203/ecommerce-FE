import React from "react";
import { Container } from "react-bootstrap";
import girl from "../../images/girl.jpg";

const AboutUs = () => {
  return (
    <Container className="aboutus">
      <h2>MEET THE DETOX BOX</h2>
      <br />
      <h4>WELCOME! YES, YOU! WE ARE SO GLAD YOU’RE HERE. THE BEGINNING</h4>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        vitae exercitationem molestiae distinctio incidunt ad laudantium? Error
        commodi quam, quas accusamus quos voluptatibus minus adipisci provident,
        et vel harum quia? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Saepe libero, ad, praesentium ipsam eligendi dolor officia esse
        quae voluptatum quos unde vitae ab? Excepturi ipsam commodi omnis eos
        delectus beatae! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Deleniti laborum illo similique repudiandae sequi eius pariatur
        corrupti ut eos quo! Alias inventore dolor nostrum corporis omnis enim
        ullam, quod dolorem! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ad corrupti ex tempore unde, magni mollitia perspiciatis
        aspernatur blanditiis, animi eligendi voluptate id aliquam doloremque
        architecto molestiae quo minus, ipsum obcaecati.
      </p>
      <br />
      <h4>Healthy Life Style</h4>
      <br />
      <img src={girl} alt="thegirl" />
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quia
        harum recusandae tempora autem obcaecati libero dolore nulla culpa ad
        cumque quaerat rem saepe voluptate consequuntur, tenetur, enim
        praesentium possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus, natus nisi. Mollitia voluptatum veniam sequi voluptatibus
        aperiam soluta id eligendi cupiditate totam, optio deleniti assumenda
        aut laborum blanditiis inventore? Reprehenderit?
      </p>
    </Container>
  );
};

export default AboutUs;
