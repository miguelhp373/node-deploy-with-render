const express = require("express")
const { userRoutes } = require("./routes/routes")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes);

app.listen(port, ()=> console.log(`HTTP Server Running on Port: ${port}`))