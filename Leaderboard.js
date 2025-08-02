import React from 'react';

function Leaderboard() {
  const leaders = [
    { name: "Naveen P", donations: 3700 },
    { name: "Rahul M", donations: 3500 },
    { name: "Yahvi N", donations: 3200 },
    { name: "Sarah K", donations: 2900 }, 
    { name: "Sam T", donations: 2600 },
    { name: "Aisha L", donations: 2200 },
    { name: "Aarav S", donations: 2000 },
    { name: "Lakshita N", donations: 1800 },
    { name: "Pooja S", donations: 1600 },
    { name: "Roshan G", donations: 1400 }, 
    { name: "Madhan K", donations: 1300 },
    { name: "Kayal C", donations: 1100 },
  ];

  return (
    <div className="container mt-5">
  <div className="card shadow p-4">
    <h2 className="mb-4">Leaderboard</h2>
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Donations (₹)</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, index) => (
            <tr
              key={index}
              className={
                index === 0
                  ? 'table-warning'
                  : index === 1
                  ? 'table-secondary'
                  : index === 2
                  ? 'table-info'
                  : ''
              }
            >
              <td>{index + 1}</td>
              <td>{leader.name}</td>
              <td>{leader.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
}

export default Leaderboard;