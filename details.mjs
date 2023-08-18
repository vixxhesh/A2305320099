import fetch from "node-fetch";

const API_BASE_URL = "http://20.244.56.144/train";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIzNjU3MjksImNvbXBhbnlOYW1lIjoiTWFjcm8gSGFyZCIsImNsaWVudElEIjoiZWQ0YTZlYzItODkyNS00YTk3LWIzM2ItZDVlNmZhZDI5ZTIyIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjY1ODM5NCJ9.hClVHTuG2WrrQBhD5UKyDTQdk-gDku43b15r_Ek1cv4";

const fetchTrainDetails = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/trains`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    if (response.status === 200) {
      const trainDetails = await response.json();

      if (Array.isArray(trainDetails)) {
        trainDetails.forEach((train) => {
          console.log("Train Name:", train.trainName);
          console.log("Train Number:", train.trainNumber);
          console.log(
            "Departure Time:",
            `${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`
          );
          console.log(
            "Seats Available (Sleeper):",
            train.seatsAvailable.sleeper
          );
          console.log("Seats Available (AC):", train.seatsAvailable.AC);
          console.log("Price (Sleeper):", train.price.sleeper);
          console.log("Price (AC):", train.price.AC);
          console.log("Delayed By (Minutes):", train.delayedBy);
          console.log("-------------------------------");
        });
      } else {
        console.log("Invalid response format:", trainDetails);
      }
    } else {
      console.log("Failed to fetch train details:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching train details:", error);
  }
};

fetchTrainDetails();
