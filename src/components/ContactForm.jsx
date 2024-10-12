import emailjs from "@emailjs/browser"
import { useState } from "react"

const Contact = () => {
  const [formData, setForData] = useState({
    name:"",
    email:"",
    message:"",
  })

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  }



  return (
    <div>ContactForm</div>
  )
}

export default Contact