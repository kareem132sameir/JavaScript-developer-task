const fs = require("fs/promises");

// Handler function to calculate rank based on player's score
const getRank = async (req, res, next) => {
  try {
    // Read data from TestData.json
    const data = await fs.readFile("TestData.json", { encoding: "utf8" });
    const scores = JSON.parse(data); // Parse the data as JSON object
    const { playerScore } = req.body; // Extract player's score from the request body
    const parsedPlayerScore = parseInt(playerScore); // Convert player's score to integer
    let counter = 0; // Counter to track number of scores lower than player's score

    // Iterate through each score in scoresList
    scores.scoresList.forEach((score) => {
      if (parsedPlayerScore > score) {
        counter++; // Increment counter if player's score is higher than the current score
      }
    });

    // Calculate rank as a percentage based on the counter and the total number of scores
    const rank = ((counter / scores.scoresList.length) * 100).toFixed(2);
    res.send("Your rank is " + rank); // Send the rank as a response
  } catch (error) {
    return next(error); // Pass any errors to the error-handling middleware
  }
};

module.exports = { getRank };
