import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2019 </strong>*/}
      <i className="fas fa-code"></i> com <i className="fas fa-heart"></i> por{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/hashirshoaeb"
        aria-label="My GitHub"
      >
        Hashir Shoaib
      </a>{" "}
      usando <i className="fab fa-react"></i>
      <p>
        <small className="text-muted">
          {" "}
          O projeto é open source, fique a vontade para fazer um fork e criar sua própria versão.
        </small>
      </p>
    </footer>
  );
};

export default Footer;
