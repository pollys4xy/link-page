const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  const ua = req.headers['user-agent'] || '';
  const isInApp = /tiktok|instagram|fbav|facebook/i.test(ua);
  if (!isInApp) {
    return res.redirect('https://getallmylinks.com/pollys4xy');
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
