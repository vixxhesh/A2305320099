import fetch from "node-fetch";

const API_BASE_URL = "http://20.244.56.144/train";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIzNjczODgsImNvbXBhbnlOYW1lIjoiTWFjcm8gSGFyZCIsImNsaWVudElEIjoiZWQ0YTZlYzItODkyNS00YTk3LWIzM2ItZDVlNmZhZDI5ZTIyIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjY1ODM5NCJ9.ingtS5MGvsCbj9E8P8CotDjFJvFr92p1PQpJrTwBceI";
const TRAIN_NUMBER = "2344"; 

const fetchSpecificTrainDetails = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/trains/${TRAIN_NUMBER}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    const responseBody = await response.json();
    console.log("Response Body:", responseBody);

    if (response.status === 200) {
      const trainDetails = responseBody; 
      console.log("Train Details:");
      console.log("Train Name:", trainDetails.trainName);
      console.log("Train Number:", trainDetails.trainNumber);
      console.log(
        "Departure Time:",
        `${trainDetails.departureTime.Hours}:${trainDetails.departureTime.Minutes}:${trainDetails.departureTime.Seconds}`
      );
      console.log(
        "Seats Available (Sleeper):",
        trainDetails.seatsAvailable.sleeper
      );
      console.log("Seats Available (AC):", trainDetails.seatsAvailable.AC);
      console.log("Price (Sleeper):", trainDetails.price.sleeper);
      console.log("Price (AC):", trainDetails.price.AC);
      console.log("Delayed By (Minutes):", trainDetails.delayedBy);
    } else {
      console.log("Failed to fetch train details:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching train details:", error);
  }
};

fetchSpecificTrainDetails();
