require("dotenv").config()
const app = require("./app")

app.listen(3000, () => {
    console.log("server is listening to port 3000");
})