import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pdf from "../editable-stuff/resume.pdf";
import { showBlog, FirstName } from "../editable-stuff/configurations.json";
import styles from "./Navbar.module.css";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
const Navbar = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const navbarMenuRef = React.useRef();
  const [scrollPosition, setScrollPosition] = useState(false);
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 10
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navbarDimensions && navbarDimensions.bottom]
  );
  React.useEffect(() => {
    navbarDimensions &&
    navbarDimensions.bottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navbarDimensions && navbarDimensions.bottom]);

  return (
    <nav
      className={`navbar fixed-top navbar-light navbar-expand-xl ${
        !isTop ? styles.navbarWhite : styles.navbarTransparent
      }`}
      id="main-navbar"
      ref={navbarMenuRef}
    >
      <a
        className={`navbar-brand ${styles.brand}`}
        href={process.env.PUBLIC_URL + "/#home"}
      >
        {`<${FirstName} />`}
      </a>
      <button
        className={`navbar-toggler ml-auto ${styles.toggler}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarTogglerDemo02"
      >
        <ul className={`navbar-nav mr-auto mt-2 mt-lg-0`}>
          {showBlog && (
            <li className="nav-item">
              <Link
                className={`nav-link lead ${styles.navItem}`}
                to={process.env.PUBLIC_URL + "/blog"}
              >
                Blog
              </Link>
            </li>
          )}
          <li className="nav-item">
            <a
              className={`nav-link lead ${styles.navItem}`}
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link lead ${styles.navItem}`}
              href={Pdf}
              target="_blank"
              rel="noreferrer noopener"
            >
              <b>Resume</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link lead ${styles.navItem}`}
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              <b>About</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
