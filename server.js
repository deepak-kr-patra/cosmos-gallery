import express from 'express'
import path from 'path'
import dotenv from 'dotenv'


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/dist")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Space Gallery server listening on port ${port}`);
});