const btn = document.getElementById("helloBtn");
const greeting = document.getElementById("greeting");

btn.addEventListener("click", () => {
    greeting.textContent = "Hello, World!";
});

btn.addEventListener("click", () => { greeting.textContent = "Oops!" });

const button = document.getElementById('helloBtn');

button.addEventListener('click', function() {

    button.style.backgroundColor = 'green';
    
    button.style.color = 'white'; 
});