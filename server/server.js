require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");

const app = express();

// express middleware
app.use(express.json());

const port = process.env.PORT || 3006;

// get all clinics
app.get("/api/v1/clinics", async (request, response) => {
    try {
      const results = await db.query("SELECT * FROM clinics");
      console.log(results);
      //const restaurantRatingsData = await db.query(
        //"select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
      //);
      response.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
          clinics: results.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
  });

// get a clinic 
app.get("/api/v1/clinics/:id", async(request, response) => {
    try {
        const results = await db.query("SELECT * FROM clinics WHERE id = $1", [request.params.id]);
        response.status(200).json({
          status: "success",
          data: {
            clinics: results.rows[0],
          },
        });
      } catch (err) {
        console.log(err);
      }
});

// create a clinic
app.post("/api/v1/clinics", async(request, response) => {
    try {
        const results = await db.query("INSERT INTO clinics (name, address, city, state, open_hours, phone_number, email, established_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [
            request.body.name,
            request.body.address,
            request.body.city,
            request.body.state,
            request.body.open_hours,
            request.body.phone_number,
            request.body.email,
            request.body.established_date
          ]);
        response.status(201).json({
          status: "success",
          data: {
            clinics: results.rows[0],
          },
        });
      } catch (err) {
        console.log(err);
      }
});

// update a clinic
app.put("/api/v1/clinics/:id", async(request, response) => {
    try {
        const results = await db.query("UPDATE clinics SET name = $1, address = $2, city = $3, state = $4, open_hours = $5, phone_number = $6, email = $7 WHERE id = $8 RETURNING *", [
            request.body.name,
            request.body.address,
            request.body.city,
            request.body.state,
            request.body.open_hours,
            request.body.phone_number,
            request.body.email,
            request.params.id
          ]);          
        response.status(200).json({
          status: "success",
          data: {
            clinics: results.rows[0],
          },
        });
      } catch (err) {
        console.log(err);
      }
});

// delete a clinic
app.delete("/api/v1/clinics/:id", async(request, response) => {
    try {
        const results = db.query("DELETE FROM clinics WHERE id= $1", [request.params.id]);          
        response.status(204).json({
          status: "success",
        });
      } catch (err) {
        console.log(err);
      }
});

app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);

});