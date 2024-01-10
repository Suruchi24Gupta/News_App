const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/news', async (req, res) => {
    try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=69ce1d5304034a3ba30c1149e349d407');
    res.json(response.data);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch news' });
}
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});