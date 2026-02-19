const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/say", (req, res) =>{
    const message = req.query.message || "Hello!";
    res.send(`You said: ${message}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});