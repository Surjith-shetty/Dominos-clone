document.getElementById("b1").style.backgroundColor = "rgb(21, 12, 12,0.9)";
    document.getElementById("b1").style.color = "white";
    document.getElementById("b2").style.backgroundColor = "rgb(21, 12, 12,0.1)";
    document.getElementById("b2").style.color = "black";
    document.getElementById("b3").style.backgroundColor = "rgb(21, 12, 12,0.1)";
    document.getElementById("b3").style.color = "black";
    document.getElementById("address").innerHTML="Delivery";
    let mode = "delivery";
    
function delivery()
{
    document.getElementById("b1").style.backgroundColor = "rgb(21, 12, 12,0.9)";
    document.getElementById("b1").style.color = "white";
    document.getElementById("b2").style.backgroundColor = "rgb(21, 12, 12,0.1)";
    document.getElementById("b2").style.color = "black";
    document.getElementById("b3").style.backgroundColor = "rgb(21, 12, 12,0.1)";
    document.getElementById("b3").style.color = "black";
    document.getElementById("address").innerHTML="Delivery";
    mode="delivery";
}

function takeaway()
{
    document.getElementById("b2").style.backgroundColor = "rgb(21, 12, 12,0.9)";
    document.getElementById("b2").style.color = "white";
    document.getElementById("b1").style.backgroundColor = "rgb(21, 12, 12,0.1)";
    document.getElementById("b1").style.color = "black";
    document.getElementById("b3").style.backgroundColor = "rgb(21, 12, 12,0.1)";
    document.getElementById("b3").style.color = "black";
    document.getElementById("address").innerHTML="Takeaway";
    mode="takeaway";
}

function dinein()
{
    document.getElementById("b3").style.backgroundColor = "rgb(21, 12, 12,0.9)";
    document.getElementById("b3").style.color = "white";
    document.getElementById("b1").style.backgroundColor = "rgb(21, 12, 12,0.1)";
    document.getElementById("b1").style.color = "black";
    document.getElementById("b2").style.backgroundColor = "rgb(21, 12, 12,0.1)";
    document.getElementById("b2").style.color = "black";
    document.getElementById("address").innerHTML="Dine-In";
    mode="dinein";
}

function resetBorders() {
    document.getElementById("allsel").style.borderBottom = "2px solid rgb(196, 196, 196)";
    document.getElementById("veg").style.borderBottom = "2px solid rgb(196, 196, 196)";
    document.getElementById("nonveg").style.borderBottom = "2px solid rgb(196, 196, 196)";
    document.getElementById("chicken").style.borderBottom = "2px solid rgb(196, 196, 196)";
    document.getElementById("garlic").style.borderBottom = "2px solid rgb(196, 196, 196)";
    document.getElementById("allsel").style.borderBottom = "3px solid blue";
    document.getElementById("nonvegpizza").style.display="block";
    document.getElementById("chickenbucket").style.display="block";
    document.getElementById("vegpizza").style.display="block";
    document.getElementById("garlicbread").style.display="block";
}

function allsel() {
    resetBorders();
}

function veg() {
    resetBorders();
    document.getElementById("veg").style.borderBottom = "3px solid green";
    document.getElementById("nonvegpizza").style.display="none";
    document.getElementById("chickenbucket").style.display="none";
}

function garlic() {
    resetBorders();
    document.getElementById("garlic").style.borderBottom = "3px solid green";
    document.getElementById("vegpizza").style.display = "none";
    document.getElementById("nonvegpizza").style.display="none";
    document.getElementById("chickenbucket").style.display="none";
}

function nonveg() {
    resetBorders();
    document.getElementById("nonveg").style.borderBottom = "3px solid orange";
    document.getElementById("vegpizza").style.display="none";
    document.getElementById("garlicbread").style.display="none";
}

function chicken() {
    resetBorders();
    document.getElementById("chicken").style.borderBottom = "3px solid orange";
    document.getElementById("vegpizza").style.display = "none";
    document.getElementById("nonvegpizza").style.display="none";
    document.getElementById("garlicbread").style.display="none";
}


// function order(n)
// {
//     switch(n)
//     {
//         case 1:
//             var name="Cheese Volcano peppy panner";
//             var price = 699;
//             break;    
//     }
// }













