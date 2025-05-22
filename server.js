const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: анализируем User-Agent
app.use((req, res, next) => {
  const ua = req.headers['user-agent'] || '';
  const isTiktok = /tiktok/i.test(ua);
  const isInstagram = /instagram/i.test(ua);
  const isFacebook = /fbav/i.test(ua);

  if (!isTiktok && !isInstagram && !isFacebook) {
    return res.redirect('https://getallmylinks.com/pollys4xy');
  }

  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
