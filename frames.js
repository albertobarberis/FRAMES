// sticky effect
let mynavbar = $("#myframe");
let mytitle = $("#mytitle");
let myjumbo;

let titleDim =mytitle.height();

let detectMenuChanges=false;

window.onscroll = function() {myFunction()};

function myFunction() {
    
    myjumbo = $("#jumbo");
    
    if (window.pageYOffset >= titleDim+45) { // 40=somma dei padding e margin
        mynavbar.addClass("fixed-top");
        myjumbo.removeClass("myjumbotron");
        myjumbo.addClass("myjumbosticky");
    } else {
        mynavbar.removeClass("fixed-top");
        myjumbo.removeClass("myjumbosticky");
        myjumbo.addClass("myjumbotron");
    }
}

// carico il giusto html a ogni click sulla navbar
$("ul.navbar-nav li").each(function() {
   
    $(this).on("click", function(){
        $(".container").load($(this).attr("data-page")+".html");
        $("#myButton").addClass("collapsed");
        $("#myButton").attr("aria-expanded","false");
        $("#navbarCollapse").removeClass("show");
    });
});

// inserisco i dati della introduzione
$(document).ready(function() {
    $(".container").load("home.html");  
    
});

