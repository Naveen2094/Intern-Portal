const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Dummy users data
const users = {
  "Naveen": {
    name: "Naveen",
    referralCode: "naveen2025",
    donations: 2700,
    rewards: ["T-shirt", "Certificate", "Shoutout"]
  },
  "Sathya": {
    name: "Sathya",
    referralCode: "sathya2025",
    donations: 1250,
    rewards: ["T-shirt"]
  },
  "Vinoth": {
    name: "Vinoth",
    referralCode: "vinoth2025",
    donations: 800,
    rewards: []
  }
};

// API route
app.get('/api/user', (req, res) => {
  const name = req.query.name?.toLowerCase();
  const user = Object.values(users).find(u => u.name.toLowerCase() === name);

  if (user) {
    const { name, referralCode, donations, rewards } = user;
    res.json({ name, referralCode, donations, rewards });
  } else {
    res.status(404).json({ error: `User '${req.query.name}' not found.` });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

