import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


class Footer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        bgStyle: { backgroundColor: "#f5f5f5" }
      };
    }
    render() {
      return (
        <footer style={this.state.bgStyle} className=" mt-auto py-3 text-center">
          {/* <strong> &copy; 2019 </strong>*/}
          <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
          <a
            className=" badge badge-dark"
            target="noopener"
            href={"https://github.com/hashirshoaeb"}
          >
            Hashir Shoaib
          </a>{" "}
          using <i className="fab fa-react"></i>
          <p>
            <small className="text-muted">
              {" "}
              Project code is open source. Feel free to fork and make your own
              version.
            </small>
          </p>
        </footer>
      );
    }
  }

  export default Footer;