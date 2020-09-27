import React, { useState, useEffect, Profiler } from "react";
import TS from "../../editable-stuff/ts_logo.png";
import UHH from "../../editable-stuff/UHH_LOGO_S.png"
import UPF from "../../editable-stuff/UPF_LOGO.png"
import MHH from "../../editable-stuff/DHZMHH.png"
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={TS}
                        alt="1000Shapes logo"
                        width="250"
                        height="220"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Machine Learning (Computer Vision) Intern
                        <br/>
                        May 2019 - Aug 2020
                    </p>
                    {/* <h3>Dell Technologies</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={UHH}
                        alt="uni hamburg logo"
                        width="250"
                        height="220"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Signal Processing Research Assistant and IT Technician
                        <br/>
                        Nov 2017 - May 2019
                    </p>
                    {/* <h3>Boeing</h3> */}
                </div>
            </div>
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={UPF}
                        alt="UPF logo"
                        width="250"
                        height="220"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Nonlinear Time Series Analysis Group Member
                        <br/>
                        Sep 2016 - Aug 2017
                    </p>
                    {/* <h3>Dell Technologies</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={MHH}
                        alt="MHH logo"
                        width="250"
                        height="220"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Signal Processing Research Assistant
                        <br/>
                        Jul 2016 - Sep 2016
                    </p>
                    {/* <h3>Boeing</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;