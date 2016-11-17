function updateTimer(){
    // Get the element to append to
    var counter = document.getElementById("counter");
    // Set the targetDate
    var targetDate = new Date("January 15, 2017 10:00:00");

    var remainingSeconds = ~ ~((targetDate - new Date()) / 1000);
    var remainingTime = {
        "days": remainingSeconds / (60 * 60 * 24),
        "hours": (remainingSeconds % (60 * 60 * 24)) / (60 * 60),
        "minutes": (remainingSeconds % (60 * 60)) / 60,
        "seconds": remainingSeconds % 60
    };

    var str = "";
    for (var i in remainingTime) {
        str += ~ ~remainingTime[i] + " " + i + ": ";
    }
    // Store the result in the element
    counter.innerHTML = str.substring(0, str.length - 2);
 }

 // Update the timer every 1 second
 setInterval(updateTimer, 1000);
