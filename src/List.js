import React from "react";

export default ({ members }) => {
  return (
    <div>
      <h2>List of Members</h2>
      <h5>Total {members.length}</h5>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => {
            return (
              <tr key={member.id}>
                <td>{member.fn}</td>
                <td>{member.ln}</td>
                <td>{member.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
