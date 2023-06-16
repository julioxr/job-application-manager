import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send({ test: "All good!" });
});

app.listen(port || 5000, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
