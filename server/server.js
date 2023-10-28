require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");

const app = express();

// express middleware
app.use(express.json());

const port = process.env.PORT || 3006;

// get all clinics
app.get("/api/v1/clinics", async(request, response) => {
    const results= await db.query("SELECT * FROM clinics")
    console.log(results);
    response.status(200).json({
        status: "success",
        data: {
            clinic: ["Pet Care","Furry"]
        }
        
    });
}); 

// get a clinic
app.get("/api/v1/clinics/:id",(request, response) => {
    response.status(200).json({
        status: "success",
        data: {
            clinic: ["Pet Care","Furry"]
        }
        
    });
}); 

// create a clinic
app.post("/api/v1/clinics",(request, response) => {
    response.status(201).json({
        status: "success",
        data: {
            clinic: ["Pet Care","Furry"]
        }
        
    });
}); 

// update a clinic
app.put("/api/v1/clinics/:id",(request, response) => {
    response.status(200).json({
        status: "success",
        data: {
            clinic: ["Pet Care","Furry"]
        }
        
    });
}); 

// delete a clinic
app.delete("/api/v1/clinics/:id",(request, response) => {
    response.status(204).json({
        status: "success",        
    });
}); 

app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);

});