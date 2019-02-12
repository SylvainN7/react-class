import React from "react";

import { Header } from "semantic-ui-react";
import { connect } from "react-redux";

import { updateTitle, updateClock } from "../actions";

const AboutPage = ({ title, handleTitleChange, clock, handleClockHide }) => (
  <>
    <Header>About this site</Header>
    <p><input value={title} onChange={e => handleTitleChange(e.target.value)} /></p>
    <p><label>Hide Clock </label><input checked={clock} type="checkbox" onChange={e => handleClockHide(e.target.checked)} /></p>
  </>
);
AboutPage.defaultProps = {
  handleTitleChange: a => a
};

const mapStateToProps = state => ({
  title: state.appTitle,
  clock: state.appClock
});

const mapDispatchToProps = dispatch => ({
  handleTitleChange: value => dispatch(updateTitle(value)),
  handleClockHide: value => dispatch(updateClock(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);
