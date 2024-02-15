const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: 'public/Images',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('image'), (req, res) => {
  const imageUrl = `/Images/${req.file.filename}`;
  res.json({ imageUrl });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
