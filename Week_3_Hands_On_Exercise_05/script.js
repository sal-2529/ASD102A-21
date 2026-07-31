// Week 3 Hands on Exercise 05
let input = prompt("Enter test scores separated by commas:");

if (input === null || input.trim() === "") {
    alert("No scores were entered.");
} else {

    let scores = input.split(",");

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