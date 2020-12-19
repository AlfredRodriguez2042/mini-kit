import React, { Component } from "react";
import programing from "./programing.png";

import Typed from "../../Components/Typed";
class Home extends Component {
  render() {
    return (
      <>
        <h1> Component home</h1>
        <Typed />
        <p>
          nota: <br /> alcualizado, con algunos bugs por resolver, node-sass
          corre con la version 4.14{" "}
        </p>
        <div>
          <img src={programing} />
        </div>
      </>
    );
  }
}

export default Home;
