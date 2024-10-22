const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
  });
//mine above
app.use(express.json());

// Register Agent
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      'INSERT INTO agents (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Agent Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM agents WHERE email = $1', [email]);
    const agent = result.rows[0];

    if (!agent || !(await bcrypt.compare(password, agent.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: agent.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /companies route (optional - for fetching all companies)
app.get('/companies', (req, res) => {
    res.status(200).json([{ id: 1, name: 'Acme Corp', status: 'census' }]);
  });

  // POST /companies route
app.post('/companies', (req, res) => {
    const company = req.body;
    // For now, just return the data to confirm it’s working.
    res.status(201).json({
      message: 'Company added successfully',
      company,
    });
  });
  

// Get Companies for an Agent
app.get('/companies', async (req, res) => {
  const { agent_id } = req.query;

  try {
    const result = await pool.query('SELECT * FROM companies WHERE agent_id = $1', [agent_id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
