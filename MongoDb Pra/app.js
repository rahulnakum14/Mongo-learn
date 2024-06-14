// app.js
const express = require('express');
const app = express();
const { mongoRouter } = require('./router/mongo_router');
const { connectDb } = require('./config/db');

app.use(express.json());
app.use('/', mongoRouter);

(async () => {
  try {
    await connectDb();
    app.listen(3000, () => {
      console.log("DB and Server Started on port 3000");
    });
  } catch (error) {
    console.log("Error Occurred While Starting Server And Db", error);
  }
})();
