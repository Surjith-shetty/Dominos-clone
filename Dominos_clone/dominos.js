
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
    document.getElementById("garlicbread").style.display="none";
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
    document.getElementById("chickenbucket").style.display="none";
}

function chicken() {
    resetBorders();
    document.getElementById("chicken").style.borderBottom = "3px solid orange";
    document.getElementById("vegpizza").style.display = "none";
    document.getElementById("nonvegpizza").style.display="none";
    document.getElementById("garlicbread").style.display="none";
}

function cravingveg()
{
    veg();
}


function orderpage()
{
    document.getElementById("secondpage").style.display="block";
    document.getElementById("firstpage").style.display="none";
}

function menupage()
{
    document.getElementById("firstpage").style.display="block";
    document.getElementById("secondpage").style.display="none";
}


pizza = [{name: "Cheese Volcano peppy panner",price:699},{name:"Cheese Volcano Farmhouse",price:499},{ name:"Cheese Volcano tikka panner",price:899 },{ name:"Cheese Volcano cheese mushroom",price:599 },
                { name:"Cheese Volcano margherita",price:249 }, { name:"Cheese Volcano tangy tomato",price:399 }, { name:"Cheese Volcano bell pepper",price:499 }, { name:"Cheese Volcano fruit funda",price:699 },
                //veg
                { name:"Cheese Volcano crispy chicken",price:799 }, { name:"Cheese Volcano chicken tikka",price:999 }, { name:"Cheese Volcano chicken sausage",price: 899}, { name:"Cheese Volcano chicken grill",price:1099 },
                //nonveg
                { name:"Garlic panner stuff",price:299 }, { name:"Garlic bread plain cheese",price:199 }, { name:"Garlic bread mushroom stuff",price:249 }, { name:"Garlic bread cheese chicken",price:399 },
                //garlic bread
                { name:"Crispy chicken",price:399 }, { name:"Grilled chicken",price: 599}, { name:"Chicken chops",price:449 } ];
                //chicken bucket

orders=[];
temporders=[];


order = function(n) {
    orders.push(pizza[n]);
    alert("✅ Added to cart: ");
  };



  


















