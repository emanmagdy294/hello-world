

day = document.getElementById('day');
month = document.getElementById('month');
year = document.getElementById('year');

//day
var theDate = new Date();
theDay = theDate.getDate();
var theDate = new Date();
theDay = theDate.getFullYear();
console.log(theDay);
//month
var theDate = new Date();
theMonth = theDate.getMonth();
console.log(theMonth);
//year
var theDate = new Date();
theyear = theDate.getDate();
console.log(theyear);

day.innerHTML = theDay + " . ";
month.innerHTML = theMonth + " . ";
year.innerHTML = theyear ;

/***********************************************************/
/* counter */

function countdown() {
    var now = new Date();
    var eventDate = new Date(2022, 9, 20);
    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTiime;
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;
    h %= 24;
    m %= 60;
    s %= 60;
    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("days").innerHTML = "<h3>" + d + "</h3>" + "<h2>" + "Day" + "</h2>"  ;
    document.getElementById("hours").innerHTML = "<h3>" + h + "</h3>" + "<h2>" + "Hours" +"</h2>" ;
    document.getElementById("minutes").innerHTML = "<h3>" + m + "</h3>" + "<h2>" + "Minutes" + "</h2>" ;
    document.getElementById("seconds").innerHTML = "<h3>" + s + "</h3>" + "<h2>" + "second" + "</h2>" ;
    setTimeout(countdown, 1000);
}

countdown();


// owl carsoul
$(document).ready(function () {

    $(".owl-carousel").owlCarousel({ items: 4, loop: true, margin: 10 });
    owl.prev()

})
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 2,
    navigation: true,
    navigationText: true,
    navigationText: ["prev", "next"],
    autoPlay: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        960: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});

