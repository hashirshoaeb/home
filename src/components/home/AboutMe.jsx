import React, { useState } from "react";
import Pdf from "../../editable-stuff/resume.pdf";
import config from "../../editable-stuff/config.js";
import Avatar from "react-avatar";

const AboutMe = () => {
  const [resumeURL] = useState(Pdf);
  const {
    aboutHeading,
    aboutDescription,
    showProfilePicture,
    avatarFallbackImgSrc,
    facebookId,
    //googleId,
    gitHubUsername,
    twitterHandle,
    FirstName,
    LastName,
  } = config;
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          {showProfilePicture && (
            <div className="col-5 d-none d-lg-block align-self-center">
              <Avatar
                className="border border-secondary rounded-circle"
                //googleId=""
                twitterHandle={twitterHandle}
                githubHandle={gitHubUsername}
                facebookId={facebookId}
                src={avatarFallbackImgSrc}
                name={`${FirstName} ${LastName}`}
                size={350}
              />
            </div>
          )}

          <div className={`col-lg-${showProfilePicture ? "7" : "12"}`}>
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
