"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    const calendarBody = getElement("#calendar_body");

    // Get today's date
    const today = new Date();

    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDay = today.getDate();


    // Get the first day of the current month
    const firstDay = new Date(currentYear, currentMonth, 1);

    // Get the last day of the current month
    const lastDay = new Date(currentYear, currentMonth + 1, 0);


    // Find number of days in the month
    const daysInMonth = lastDay.getDate();


    // Find which day of the week the month starts on
    const startingDay = firstDay.getDay();


    let date = 1;


    // Create calendar rows
    for (let row = 0; row < 6; row++) {

        const tr = document.createElement("tr");


        // Create calendar cells
        for (let column = 0; column < 7; column++) {

            const td = document.createElement("td");


            // Leave blank cells before the first day of the month
            if (row === 0 && column < startingDay) {

                td.textContent = "";

            } 
            // Add dates to calendar
            else if (date <= daysInMonth) {

                td.textContent = date;


                // Highlight today's date
                if (date === currentDay) {
                    td.className = "today";
                }


                date++;

            }


            // Add cell to row
            tr.appendChild(td);

        }


        // Add row to calendar table
        calendarBody.appendChild(tr);


        // Stop when all dates have been added
        if (date > daysInMonth) {
            break;
        }

    }


    // Display current month and year if element exists
    const monthYear = getElement("#month_year");

    if (monthYear) {
        monthYear.textContent = today.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric"
        });
    }

});