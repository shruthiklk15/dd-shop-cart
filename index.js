const newLineStart = "<div class='column col-md-12 col-sm-12'>";
const newLineEnd = "</div>";
const sameLineStart = "<div class='imgSpace col-md-3 col-sm-3'><div id='";
const sameLineMiddle = "'><img class='homeImg' src='images\\";
const sameLineEnd = "'></div></div>";

function displayHome() {
    $("#cart").hide();
    $("#home").show();
}

function purchase() {
    localStorage.setItem("cartItems", JSON.stringify([]));
    displayHome();
    successAlert("#purchased");
}

function displayCart() {
    $("#home").hide();
    $("#cart").show();
    let items = localStorage.getItem("cartItems");
    items = JSON.parse(items);
    if (items && items.length > 0) {
        var displayText = "";
        items.forEach(element => {
            let maker = "";
            if (items.indexOf(element) === 0 || (items.indexOf(element) % 4) === 0) {
                maker += newLineStart;
            }
            maker += sameLineStart +
                items.indexOf(element) + sameLineMiddle + element;
            if (items.indexOf(element) !=0 && (items.indexOf(element) % 3) === 0) {
                maker += sameLineEnd + newLineEnd;
            } else {
                maker += sameLineEnd;
            }
            displayText += maker;
        });
        document.getElementById("assignDisplayText").innerHTML = displayText;
        $("#purchaseBtn").show();
    } else {
        console.log("I am here");
        displayText = "<div class='col-md-12 col-sm-12'><h3>Cart is Empty</h3></div>";
        document.getElementById("assignDisplayText").innerHTML = displayText;
    }
}

function drag(event) {
    $("#" + event.id).draggable({
        containment: "#homeWithNav"
    });
}

function addToCart(str) {
    let items = localStorage.getItem("cartItems");
    items = JSON.parse(items);
    if (!items || items.length === 0) {
        localStorage.setItem("cartItems", JSON.stringify([str]));
        successAlert("#success");
    } else {
        if (items.indexOf(str) < 0) {
            items.push(str);
            localStorage.setItem("cartItems", JSON.stringify(items));
            successAlert("#success");
        } else {
            successAlert("#warning");
        }
    }
}

function successAlert(id) {
    $(id).show();
    setTimeout(() => {
        $(id).hide();
    }, 3000);
}


