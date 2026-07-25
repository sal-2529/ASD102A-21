"use strict";

let command = "";

while (command != "exit") {

    command = prompt(
        "Contact Viewer\n\n" +
        "Commands:\n" +
        "list - List all contacts\n" +
        "get - Get contact by number\n" +
        "exit - Exit program"
    );

    if (command == null) {
        break;
    }

    if (command == "list") {

        let message = "";

        for (let i = 0; i < contacts.length; i++) {

            let contact = contacts[i].split("|");
            message += (i + 1) + ". " + contact[0] + "\n";

        }

        alert(message);
    }

    else if (command == "get") {

        let number = prompt("Enter the contact number:");

        number = parseInt(number);

        if (number >= 1 && number <= contacts.length) {

            let contact = contacts[number - 1].split("|");

            alert(
                "Name: " + contact[0] +
                "\nEmail: " + contact[1] +
                "\nPhone: " + contact[2]
            );
        }
        else {

            alert("Contact not found.");

        }

    }

    else if (command == "exit") {

        alert("Goodbye!");

    }

    else {

        alert("Invalid command.");

    }

}