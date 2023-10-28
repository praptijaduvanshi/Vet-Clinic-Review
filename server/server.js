require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3006;

app.get("/getClinics",(request, response) => {
    response.json({
        status: "success",
        clinic: "Pet Care"
    });
}); 


app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);

});