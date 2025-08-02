import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      alert("Please enter a valid name");
      return;
    }

    localStorage.setItem('userName', trimmedName);
    navigate('/dashboard');
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
          <div className="card p-4 shadow rounded-4">
            <h2 className="text-center mb-4">Intern Login</h2>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown} 
            />
            <button onClick={handleLogin} className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
