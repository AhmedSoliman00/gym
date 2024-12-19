import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ username: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <>
      <Nav />
      <section className="my-[5em] h-[100vh] sign flex justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h1 className="text-[#D6FD51] text-5xl text-center tracking-widest ">
              Contact Us
            </h1>
            <div className="input-group">
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input w-full h-[3.5em] border-[0.2em] border-white rounded-xl "
              type="text"
              required
            />
            <label className="user-label text-xl">UserName</label>
            </div>

            <div className="input-group">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input w-full h-[3.5em] border-[0.2em] border-white rounded-xl "
              type="email"
              required
            />
            <label className="user-label text-xl">Email</label>
            </div>

            <div className="input-group">
            <input
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input w-full h-[3.5em] border-[0.2em] border-white rounded-xl text-xl"
              type="text"
              required
            />
            <label className="user-label text-xl">Message</label>
            </div>
            <button
              type="submit"
              className="btn-submit text-black text-2xl w-[15em] h-[2.5em] bg-[#D6FD51] rounded-xl tracking-widest"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="loginandSign-photo max-md:hidden"></div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
