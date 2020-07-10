function displayHome() {
    $("#cart").hide();
    $("#home").show();

}
function displayCart() {
    $("#home").hide();
    $("#cart").show();
}

function drag(event) {
    // console.log(event.id);
    $("#" + event.id).draggable();
    $("#home Img").draggable({
        containment: "#home"
    });

}


