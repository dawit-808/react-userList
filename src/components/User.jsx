import { Component } from "react";

class User extends Component {
  render() {
    const { id, name, email, age, profession } = this.props;

    return (
      <>
        <div className="user-row">
          <div>{id}</div>
          <div>{name}</div>
          <div>{email}</div>
          <div>{age}</div>
          <div>
            <span className="badge bg-primary badge-role">{profession}</span>
          </div>
          <div className="action-icons">
            <i className="bi bi-pencil-square" title="Edit"></i>
            <i className="bi bi-trash" title="Delete"></i>
          </div>
        </div>
      </>
    );
  }
}

export default User;
