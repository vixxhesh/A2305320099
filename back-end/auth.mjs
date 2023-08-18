import fetch from "node-fetch";

const API_BASE_URL = "http://20.244.56.144/train";

const getAuthToken = async () => {
  try {
    const authRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName: "Macro Hard",
        clientID: "ed4a6ec2-8925-4a97-b33b-d5e6fad29e22",
        ownerName: "Elon Zuckerberg",
        ownerEmail: "vishesh@gmail.com",
        rollNo: "658394",
        clientSecret: "WPUlWAcidRlufmYW",
      }),
    };

    const response = await fetch(`${API_BASE_URL}/auth`, authRequest);

    if (response.status === 200) {
      const authData = await response.json();
      console.log("Authorization Successful:");
      console.log("Access Token:", authData.access_token);
      console.log("Token Type:", authData.token_type);
      console.log("Expires In:", authData.expires_in);
    } else {
      console.log("Authorization Failed:", response.statusText);
    }
  } catch (error) {
    console.error("Error during authorization:", error);
  }
};

getAuthToken();
