import React from "react";
class Register extends React.Component {
  state = {
    fn: "",
    ln: "",
    email: "",
  };
  handleSubmit = async (e) => {
    const { members, setMembers } = this.props;
    e.preventDefault();

    const newMember = {
      fn: this.state.fn,
      ln: this.state.ln,
      email: this.state.email,
      id: new Date().getTime(),
    };

    setMembers([...members, newMember]);
    this.setState({ fn: "", ln: "", email: "" });
    alert("Thanks !, Your account has been registered");
  };

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2 mb-sm-0"
          placeholder="First Name"
          value={this.state.fn}
          onChange={(event) => this.setState({ fn: event.target.value })}
        />
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={this.state.ln}
            onChange={(event) => this.setState({ ln: event.target.value })}
          />
        </div>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    );
  }
}
export default Register;
