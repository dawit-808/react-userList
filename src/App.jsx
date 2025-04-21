import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import users from "./assets/data";

class App extends Component {
  render() {
    return (
      <>
        <div className="container gx-0 user-container">
          <Header />
          {users.map(({ id, name, email, age, profession }) => {
            const btnClass =
              profession === "Frontend Dev"
                ? "bg-primary"
                : profession === "Data Analyst"
                ? "bg-warning text-dark"
                : profession === "UI/UX Designer"
                ? "bg-success"
                : profession === "Project Manager"
                ? "bg-dark"
                : profession === "Backend Dev"
                ? "bg-secondary"
                : "bg-info text-dark";
            return (
              <User
                key={id}
                id={id}
                name={name}
                email={email}
                age={age}
                profession={profession}
                btnClass={btnClass}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
