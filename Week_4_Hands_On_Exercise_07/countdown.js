"use strict";

const getElement = selector => document.querySelector(selector);

let timer = null;

document.addEventListener("DOMContentLoaded", () => {

    getElement("#countdown").addEventListener("click", () => {
        const eventName = getElement("#event").value;
        const eventDateString = getElement("#date").value;
        const messageLbl = getElement("#message");

        // Cancel previous countdown timer
        if (timer !== null) {
            clearInterval(timer);
        }

        // make sure user entered event and date
        if (eventName == "" || eventDateString == "") {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }

        // convert event date string to Date object and check for validity
        const eventDate = new Date(eventDateString);

        if (eventDate.toString() == "Invalid Date") {
            messageLbl.textContent = "Please enter a valid date.";
            return;
        }


        // create countdown function
        const updateCountdown = () => {

            const today = new Date();

            // calculate difference in seconds
            let seconds = Math.floor((eventDate - today) / 1000);


            // check if event has passed
            if (seconds <= 0) {
                clearInterval(timer);
                messageLbl.textContent = `Hooray! Today is ${eventName}!`;
                return;
            }


            // calculate days, hours, minutes, seconds
            const days = Math.floor(seconds / 86400);
            seconds = seconds % 86400;

            const hours = Math.floor(seconds / 3600);
            seconds = seconds % 3600;

            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;


            // display countdown message
            const displayDate = eventDate.toDateString();

            messageLbl.textContent =
                `${days} day(s), ${hours} hour(s), ` +
                `${minutes} minute(s), ${remainingSeconds} second(s) ` +
                `until ${eventName}! (${displayDate})`;
        };


        // run immediately when button is clicked
        updateCountdown();

        // update every second
        timer = setInterval(updateCountdown, 1000);

    });


    // set focus on first text box
    getElement("#event").focus();

});