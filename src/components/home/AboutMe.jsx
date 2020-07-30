import React, { useState, useEffect } from "react";
import Pdf from "../../editable-stuff/resume.pdf";
import {
  aboutHeading,
  aboutDescription,
  showInstaProfilePic,
  facebookId,
  googleId,
  gitHubUsername,
  twitterHandle,
  FirstName,
  LastName,
  instaLink,
  instaUsername,
  instaQuery,
} from "../../editable-stuff/configurations.json";
import axios from "axios";
import Avatar from "react-avatar";

const AboutMe = () => {
  const [instaProfilePic, setInstaProfilePic] = useState("");
  const [showInsta, setShowInsta] = useState(showInstaProfilePic);
  const [resumeURL] = useState(Pdf);

  useEffect(() => {
    if (showInsta) {
      handleRequest();
    }
  }, [showInsta]);

  const handleRequest = async (e) => {
    try {
      const response = await axios.get(instaLink + instaUsername + instaQuery);
      console.log(response);
      setInstaProfilePic(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowInsta(false);
      console.error(error.message);
    }
  };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          {/*{showInsta && (
            
              {/*<img
                className="border border-secondary rounded-circle"
                src={instaProfilePic}
                alt="profilepicture"
              />
              )}*/}
          <div className="col-5 d-none d-lg-block align-self-center">
            <Avatar
              className="border border-secondary rounded-circle"
              googleId={googleId}
              twitterHandle={twitterHandle}
              githubHandle={gitHubUsername}
              facebookId={facebookId}
              name={`${FirstName} ${LastName}`}
              size={350}
            />
          </div>

          <div className={`col-lg-${showInsta ? "7" : "12"}`}>
            <h2 className="display-4 mb-5 text-center">{aboutHeading}</h2>
            <p className="lead text-center">{aboutDescription}</p>
            {resumeURL && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
