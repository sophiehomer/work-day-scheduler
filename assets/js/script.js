
$(document).ready(function() {
    let time;
    $(".saveBtn").on("click", function() {
         /* ------------------------------ Variables ------------------------------ */
         time = $(this).parent().attr("id")
        console.log(time)
        let description = $(this).siblings(".description").val()
        console.log(description)
        /* ---------------------------- Local Storage ---------------------------- */
         localStorage.setItem(time, description);
    })
   
    let aValue = localStorage.getItem(time);
    console.log(aValue)
    // Use jquery syntax to target description in specific time block
        // set value to local storage of corresponding hour
        $("#9am .description").val(aValue);
})

/* ---------------------------------- DATE ---------------------------------- */
let currentDay;
currentDay = new Date();
document.querySelector("#currentDay").innerHTML = currentDay
console.log(currentDay.toString());







/* --------------- Background Color - Past, Present, Future --------------- */

/* ------------------------------- Textarea ------------------------------ */

/* ----------------------------- Time Blocks ----------------------------- */

/* --------------------------- Time Block Event -------------------------- */

/* ----------------------------- Save Button ----------------------------- */

/* ------------------- Refresh -- Saved Events Persist ------------------- */



