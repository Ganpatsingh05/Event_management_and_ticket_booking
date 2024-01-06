function bookTicket() {



    alert("Ticket booked successfully!");

           
    document.getElementById("ticketForm").style.display = "none";
    document.getElementById("ticketConfirmation").style.display = "block";
    document.getElementById("confirmationMessage").innerHTML = "Thank you for booking your ticket!";
}