$(".d-block").click(function () {
    $("ul.dropdown-menu").slideToggle();  // Togle the DRopdown 
});

$(document).ready(function(){
    $("#renter").click(function(){
        window.location.href ='renter.html'; // Send TO Renter PAge
    })
});

$(document).ready(function(){
    $("#home").click(function(){
        window.location.href ='index.html'; // Send TO Home PAge
    })
});
$("#about").click(function(){
    $("#navbarHeader").slideToggle();
})
