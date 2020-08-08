import React from "react";
import config from "../../editable-stuff/config.js";

function GetInTouch() {
  const { footerMessage, emailAddress } = config;
  return (
    <>
      <h2 className="display-4 pb-3 text-center">Get In Touch</h2>
      <p className="lead text-center pb-3">
        {footerMessage}, <a href={`mailto:${emailAddress}`}>{emailAddress}</a>.
      </p>
    </>
  );
}

export default GetInTouch;
