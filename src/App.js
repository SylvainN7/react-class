import React, { Component } from "react";

import AppHeader from "./components/AppHeader";

/**
 * creat-react-app default webpack configuration handles css files in two ways:
 *  - importing "<filepath>.css" will add it's content to the global css file, whithout any tranformation
 *  - importing "<filepath>.module.css" will handle it as a 'css module':
 *    (https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet)
 *    Class names are returned as an object from the import, to be used as object keys in className attributes.
 *    They will be renamed on build time in order to have unique names, avoiding potentialname clashes,
 *    and allowing you to name your css classes without worring if they havae already been used elsewhere.
 *
 *  Css files path resolution follow the standard import rules
 *  (relative to current location if starting with . or .. , in node_modules elseway)
 */

import "semantic-ui-css/semantic.min.css";
import "./app.css";
import styles from "./app.module.css";

class App extends Component {
  render() {
    return (
      <>
        {/** 
          A component must render a single node (Single React element, array of elements, or a primitive type).
          React provides a <React.Fragment> (or <>) component as wrapping element, to be able
          to return multiple elements without wrapping them in an additional DOM node.
          See https://reactjs.org/docs/fragments.html
        */}
        <AppHeader />
        <div className={styles.main}>
          <main className={styles.mainInner}>Hello React</main>
        </div>
      </>
    );
  }
}

export default App;