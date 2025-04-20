import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className="user-header">
          <div>#</div>
          <div>Name</div>
          <div>Email</div>
          <div>Age</div>
          <div>Profession</div>
          <div>Actions</div>
        </div>
      </>
    );
  }
}

export default Header;
