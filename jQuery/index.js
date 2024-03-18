$("button").click(function(){
    $("h1").fadeToggle();
})

$(document).keypress(function(event){
    $("h1").text(event.key)
})

