import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="text-white bg-[#303030] flex justify-around max-md:justify-center tracking-widest">
        <div className="max-md:hidden">
          <h1 className="text-5xl text-[#D6FD51] ">
            GYM
          </h1>
          <p>
            Transform your fitness journey with our state-of-the-art Join us
            today and take the first step toward a stronger, healthier you.
          </p>
        </div>
        <div className="flex space-x-10 max-md:space-x-80 max-sm:space-x-64">
          <div>
            <h1 className="text-3xl  text-[#D6FD51] ">Pages</h1>
            <div className="mt-[1em]">
              <a className="footerLinks" href={"./home"}>
                Home
              </a>
              <br />
              <a className="footerLinks" href={"./services"}>
                Services
              </a>
              <br />
              <a className="footerLinks" href={"./bmr"}>
                Bmr
              </a>
              <br />
              <a className="footerLinks" href={"./contact"}>
                Contact
              </a>
              <br />

              <a className="footerLinks" href={"./privacy"}>
                Privacy
              </a>
              <br />
            </div>
          </div>

          <div>
            <h1 className="text-3xl  text-[#D6FD51]">
              Social Media
            </h1>
            <div className="h-full flex justify-center items-center space-x-5">
              <a
                className="text-2xl text-[#D6FD51] cursor-pointer hover:animate-bounce"
                href="https://github.com/Mostafa-Shehata"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                className="text-2xl text-[#D6FD51] cursor-pointer hover:animate-bounce"
                href="https://www.linkedin.com/in/moustafa-shehata-baa030292/?originalSubdomain=eg"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
