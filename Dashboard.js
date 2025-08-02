import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const unlockableRewards = [
  {
    title: 'Unlockable Reward 1',
    description: 'Reach $500 in donations to unlock this reward.',
    image: 'https://img.icons8.com/color/96/000000/medal.png',
  },
  {
    title: 'Unlockable Reward 2',
    description: 'Reach $1,000 in donations to unlock this reward.',
    image: 'https://img.icons8.com/fluency/96/000000/gift.png',
  },
  {
    title: 'Unlockable Reward 3',
    description: 'Reach $2,000 in donations to unlock this reward.',
    image: 'https://img.icons8.com/fluency/96/000000/trophy.png',
  },
];

function Dashboard() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (!storedName) {
      alert('Please login first.');
      navigate('/');
    } else {
      setUserName(storedName);
    }
  }, [navigate]);

  const referralCode = userName.toLowerCase().replace(/\s/g, '') + '2025';

  const rewards = ['T-shirt', 'Certificate', 'Shoutout'];
  const donations = 2500;

  return (
    <>
      {/* Fixed Logout Button Top Right Under Navbar */}
      <button
        aria-label="Logout"
        className="btn btn-danger"
        style={{
          position: 'fixed',
          top: '72px', 
          right: '20px',
          zIndex: 3000,
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          border: 'none',
          backgroundColor: '#dc3545',

          transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
          opacity: 1,
          animation: 'fadeIn 0.5s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 14px rgba(0,0,0,0.4)';
          e.currentTarget.style.backgroundColor = '#c82333'; 
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
          e.currentTarget.style.backgroundColor = '#dc3545';
        }}
        onClick={() => {
          localStorage.removeItem('userName');
          navigate('/');
        }}
      >
        Logout
      </button>

      <div className="container mt-5" style={{ paddingTop: '10px' }}>
        <h2 className="mb-4">Welcome back, {userName}</h2>

        <h5>Your Referral Code</h5>
        <input
          type="text"
          className="form-control mb-4"
          value={referralCode}
          readOnly
        />

        <h5>Total Donations Raised</h5>
        <div className="bg-light p-4 rounded mb-5">
          <h6>Total</h6>
          <h2>${donations}</h2>
        </div>

        <h4 className="mb-3">Your Rewards</h4>
        {/* Rewards as badges */}
        <div className="mb-5">
          {rewards.map((reward, idx) => (
            <span key={idx} className="badge bg-success me-2">
              {reward}
            </span>
          ))}
        </div>

        <h4 className="mb-3">Unlockable Rewards</h4>
        <div className="row">
          {unlockableRewards.map((reward, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card p-3 d-flex flex-row align-items-center shadow-sm">
                <div className="flex-grow-1">
                  <h5>{reward.title}</h5>
                  <p className="text-muted">{reward.description}</p>
                </div>
                <img
                  src={reward.image}
                  alt={reward.title}
                  onError={(e) => (e.target.style.display = 'none')}
                  style={{
                    width: '120px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes for fadeIn animation */}
      <style>{`
        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
      `}</style>
    </>
  );
}

export default Dashboard;
