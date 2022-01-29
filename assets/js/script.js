
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
   
    let nineAm = localStorage.getItem("9am");
    let tenAm = localStorage.getItem("10am");
    let elevenAm = localStorage.getItem("11am");
    let twelvePm = localStorage.getItem("12pm");
    let onePm = localStorage.getItem("1pm");
    let twoPm = localStorage.getItem("2pm");
    let threePm = localStorage.getItem("3pm");
    let fourPm = localStorage.getItem("4pm");
    let fivePm = localStorage.getItem("5pm");

    
    /* ---- Use jquery syntax to target description in specific time block --- */
        /* ----------- set value to local storage of corresponding hour ---------- */
        $("#9am .description").val(nineAm);
        $("#10am .description").val(tenAm);
        $("#11am .description").val(elevenAm);
        $("#12pm .description").val(twelvePm);
        $("#1pm .description").val(onePm);
        $("#2pm .description").val(twoPm);
        $("#3pm .description").val(threePm);
        $("#4pm .description").val(fourPm);
        $("#5pm .description").val(fivePm);

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



