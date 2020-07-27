import React from "react";
import Typist from "react-typist";
import {
  FirstName,
  LastName,
  MiddleName,
  devDesc,
  icons,
} from "../../editable-stuff/configurations.json";

const MainBody = React.forwardRef((props, ref) => {
  return (
    <div>
      <div
        id="home"
        className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <div className="container container-fluid text-center ">
          <h1 ref={ref} className="display-1">
            {FirstName + " " + MiddleName + " " + LastName}
          </h1>
          <Typist className="lead typist"> {devDesc}</Typist>
          <div className="p-5">
            {icons.map((icon) => (
              <a
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </div>
      </div>
    </div>
  );
});

export default MainBody;
