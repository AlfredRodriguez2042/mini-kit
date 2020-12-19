import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <>
        <h1>
          este proyecto fue hecho para entener webpack y conocer una altermativa
          mas custom a create-react-app
        </h1>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  suggestions: state.suggestions,
});

export default connect(mapStateToProps)(About);
