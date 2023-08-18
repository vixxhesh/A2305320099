import fetch from "node-fetch";

const BASE_TARGET = "http://20.244.56.144/train";
const ACCESS_CODE = "oJnNPG";

const registerCompany = async () => {
  try {
    const registrationData = {
      companyName: "MacroHard",
      ownerName: "Elon Zuckerberg",
      rollNo: "A2305320099",
      ownerEmail: "visheshbverma@gmail.com",
      accessCode: ACCESS_CODE,
    };

    const response = await fetch(`${BASE_TARGET}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "app  lication/json",
      },
      body: JSON.stringify(registrationData),
    });

    if (response.status === 200) {
      const registrationInfo = await response.json();
      console.log("Registration Successful:");
      console.log("Company Name:", registrationInfo.companyName);
      console.log("Client ID:", registrationInfo.clientID);
      console.log("Client Secret:", registrationInfo.clientSecret);
    } else {
      console.log("Registration Failed:", response.statusText);
    }
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

registerCompany();
