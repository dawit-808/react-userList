import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <>
        <div className="container gx-0 user-container">
          <Header />
          <User
            id={1}
            name={"abebe"}
            email={"abbeee@gmail.com"}
            age={28}
            profession={"Frontend Dev"}
          />
        </div>
      </>
    );
  }
}

export default App;
