import React from "react";
import ReactDOM from "react-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
const Privacy = () => {
  return (
    <>
      <Nav />
      {/* Section-One-Start */}
      <section className=" my-[12em]  ml-[2em] h-[230vh] flex flex-col justify-start items-start space-y-10  text-white ">
        <h1 className="font-sans text-3xl ">
          Suggested text: Our website address is:{" "}
          <a
            className="text-orange-600 transition-all hover:text-white duration-300 delay-150 ease-in"
            href="./login"
          >
            http://localhost:3000
          </a>
        </h1>
        <h1 className="font-sans text-3xl">Comments</h1>
        <p className="max-w-[100em]">
          Suggested text: When visitors leave comments on the site we collect
          the data shown in the comments form, and also the visitor’s IP address
          and browser user agent string to help spam detection
        </p>
        <p className="max-w-[100em]">
          An anonymized string created from your email address (also called a
          hash) may be provided to the Gravatar service to see if you are using
          it. The Gravatar service privacy policy is available here:
          https://automattic.com/privacy/. After approval of your comment, your
          profile picture is visible to the public in the context of your
          comment.
        </p>
        <h1 className="font-sans text-3xl">Media</h1>
        <p className="max-w-[100em]">
          Suggested text: If you upload images to the website, you should avoid
          uploading images with embedded location data (EXIF GPS) included.
          Visitors to the website can download and extract any location data
          from images on the website. .
        </p>
        <h1 className="font-sans text-3xl">Cookies</h1>
        <p className="max-w-[100em]">
          Suggested text: If you leave a comment on our site you may opt-in to
          saving your name, email address and website in cookies. These are for
          your convenience so that you do not have to fill in your details again
          when you leave another comment. These cookies will last for one year.
        </p>
        <p className="max-w-[100em]">
          If you visit our login page, we will set a temporary cookie to
          determine if your browser accepts cookies. This cookie contains no
          personal data and is discarded when you close your browser.
        </p>
        <p className="max-w-[100em]">
          When you log in, we will also set up several cookies to save your
          login information and your screen display choices. Login cookies last
          for two days, and screen options cookies last for a year. If you
          select "Remember Me", your login will persist for two weeks. If you
          log out of your account, the login cookies will be removed.
        </p>
        <p className="max-w-[100em]">
          If you edit or publish an article, an additional cookie will be saved
          in your browser. This cookie includes no personal data and simply
          indicates the post ID of the article you just edited. It expires after
          1 day.
        </p>
        <h1 className="font-sans text-3xl">
          Embedded content from other websites
        </h1>
        <p className="max-w-[100em]">
          Suggested text: Articles on this site may include embedded content
          (e.g. videos, images, articles, etc.). Embedded content from other
          websites behaves in the exact same way as if the visitor has visited
          the other website.
        </p>
        <p className="max-w-[100em]">
          These websites may collect data about you, use cookies, embed
          additional third-party tracking, and monitor your interaction with
          that embedded content, including tracking your interaction with the
          embedded content if you have an account and are logged in to that
          website.
        </p>
        <h1 className="font-sans text-3xl ">Who we share your data with</h1>
        <p className="max-w-[100em]">
          Suggested text: If you request a password reset, your IP address will
          be included in the reset email.
        </p>

        <h1 className="font-sans text-3xl ">How long we retain your data</h1>
        <p className="max-w-[100em]">
          Suggested text: If you leave a comment, the comment and its metadata
          are retained indefinitely. This is so we can recognize and approve any
          follow-up comments automatically instead of holding them in a
          moderation queue.
        </p>

        <p className="max-w-[100em]">
          For users that register on our website (if any), we also store the
          personal information they provide in their user profile. All users can
          see, edit, or delete their personal information at any time (except
          they cannot change their username). Website administrators can also
          see and edit that information.
        </p>
        <h1 className="font-sans text-3xl ">
          What rights you have over your data
        </h1>
        <p className="max-w-[100em]">
          Suggested text: If you have an account on this site, or have left
          comments, you can request to receive an exported file of the personal
          data we hold about you, including any data you have provided to us.
          You can also request that we erase any personal data we hold about
          you. This does not include any data we are obliged to keep for
          administrative, legal, or security purposes.
        </p>
      </section>
      {/* Section-One-Start */}
      <Footer />
    </>
  );
};

export default Privacy;
