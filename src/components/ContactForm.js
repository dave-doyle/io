import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input, Button } from "@chakra-ui/react";
import { AiTwotoneMail } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";

export const ContactForm = () => {
  const form = useRef();
  const toast = useToast();

  const service_id = process.env.REACT_APP_SERVICE_ID;
  const public_id = process.env.REACT_APP_PUBLIC_KEY;
  const template_id = process.env.REACT_APP_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_id,
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast({
            title: "Email sent.",
            description:
              "Thank you for your email, I'll reply as soon as I can!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          // Show an error toast
          toast({
            title: "Email Sending Failed",
            description:
              "There was an error sending your email. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      });
  };

  return (
    <form ref={form} 
    onSubmit={sendEmail}
    >
      <Input
       isRequired
        type="text"
        name="user_name"
        placeholder="Name"
        focusBorderColor="turquoise"
        textColor={"white"}
        
      />

      <Input
       isRequired
        type="email"
        name="user_email"
        placeholder="Email Address"
        focusBorderColor="turquoise"
        textColor={"white"}

      />

      <Input
      isRequired
        type="text"
        name="message"
        placeholder="Message"
        focusBorderColor="turquoise"
        size="lg"
        textColor={"white"}

      ></Input>
      

      <Button
        leftIcon={<AiTwotoneMail />}
        colorScheme="teal"
        variant="solid"
        type="submit"
        value="Send"
        marginTop={"3%"}

      >
        Email
      </Button>
    </form>
  );
};
export default ContactForm;
