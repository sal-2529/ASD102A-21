// Ask the user to enter test scores
let input = prompt("Enter test scores separated by commas:");

// Check if the user entered anything
if (input === null || input.trim() === "") {
    alert("No scores were entered.");
} else {

    // Turn the input into an array
    let scores = input.split(",");

    // Convert each item to a number
    for (let i = 0; i < scores.length; i++) {
        scores[i] = Number(scores[i]);
    }

    // Find the total
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    // Find the average
    let average = total / scores.length;

    // Find the lowest and highest scores
    let lowScore = Math.min(...scores);
    let highScore = Math.max(...scores);

    // Display the results
    alert(
        "Scores: " + scores.join(", ") +
        "\nLow Score: " + lowScore +
        "\nHigh Score: " + highScore +
        "\nAverage Score: " + average.toFixed(1)
    );
}