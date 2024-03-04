const express = require("express");
const app = express();
require("./src/associations"); // Import the associations file

// path for routes
const parkingLotRoutes = require("./src/routes/theatreRoutes");
const parkingFloorRoutes = require("./src/routes/movieRoutes");
const entryPanelRoutes = require("./src/routes/showtimeRoutes");
const exitPanelRoutes = require("./src/routes/screenRoutes");
const parkingSpotRoutes = require("./src/routes/seatRoutes");
const displayBoardRoutes = require("./src/routes/ticketRoutes");
const parkingTicketRoutes = require("./src/routes/userRoutes");
const paymentRoutes = require("./src/routes/cityRoutes");

// to use
app.use("parkingLot", parkingLotRoutes);
app.use("parkingFloor", parkingFloorRoutes);
app.use("entryPanel", entryPanelRoutes);
app.use("exitPanel", exitPanelRoutes);
app.use("parkingSpot", parkingSpotRoutes);
app.use("displayBoard", displayBoardRoutes);
app.use("parkingTicket", parkingTicketRoutes);
app.use("payment", paymentRoutes);
const sequelize = require("./src/dbConnection"); // database connection file

// Connect to the database
sequelize.sync({ force: false }).then(() => {
  console.log("Database synced successfully");
});

app.use(express.json());
const path = require("path");

/* Sample Endpoint */
app.get("/", (req, res) => {
  res.send("Welcome to Smart Parking Lot Application");
});

// Call the function
addForeignKeyConstraint();

/** Start the Server */
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("some error encountered");
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});

//npm init -y
//npm install sequelize - orm
//npm install mysql2
// npm install --save express
//npm install --save-dev nodemon
//npm install -g sequelize-cli

// 1. Define models
// 2. Define associations
// 3. Create the necessary APIs to fetch theatre, dates, and movies
