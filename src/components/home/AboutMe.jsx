import React from "react";
import Pdf from "../../editable-stuff/resume.pdf";
import config from "../../editable-stuff/config.js";
import axios from "axios";
const AboutMe = () => {
  const [resumeURL] = React.useState(Pdf);
  const {
    aboutHeading,
    aboutDescription,
    showProfilePicture,
    instaLink,
    instaUsername,
    instaQuery,
  } = config;

  const [instaProfilePic, setInstaProfilePic] = React.useState("");
  const [showPic, setShowPic] = React.useState(showProfilePicture);

  React.useEffect(() => {
    if (showProfilePicture) {
      handleRequest();
    }
  }, [showProfilePicture]);

  const handleRequest = async (e) => {
    try {
      const response = await axios.get(instaLink + instaUsername + instaQuery);
      console.log(response);
      setInstaProfilePic(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  };
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src={instaProfilePic}
                alt="profilepicture"
              />
            )}
          </div>

          <div className={`col-lg-${showPic ? "7" : "12"}`}>
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
