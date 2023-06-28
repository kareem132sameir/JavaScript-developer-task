const fs = require("fs/promises");

// Function to randomize and select words 
const randomizeWords = (arr) => {
  const selectedWords = [];
  const wordTypes = ['verb', 'adverb', 'noun', 'adjective'];

  while (selectedWords.length < 10) {
    const randomIndex = Math.floor(Math.random() * 15);
    const firstWord = arr[randomIndex];

    // Check if the word's part of speech is in the desired types and it hasn't been selected before
    if (wordTypes.includes(firstWord.pos) && !selectedWords.includes(firstWord)) {
      selectedWords.push(firstWord);
      const index = wordTypes.indexOf(firstWord.pos);
      wordTypes.splice(index, 1); // Remove the used part of speech from the array to make sure you have at least 4 diffirent kind of words
    }
    // If all desired types have been selected or the word hasn't been selected before, add it to the list
    else if (!selectedWords.includes(firstWord) && wordTypes.length === 0) {
      selectedWords.push(firstWord);
    }
  }

  return selectedWords;
};

// Handler function to retrieve words from TestData.json
const getWords = async (req, res, next) => {
  try {
    const data = await fs.readFile("TestData.json", { encoding: "utf8" });
    const words = JSON.parse(data).wordList;
    const firstWord = randomizeWords(words);
    res.send(firstWord);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getWords };
