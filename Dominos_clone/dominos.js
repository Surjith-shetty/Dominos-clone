
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

let orders=[];
temporders=[];


function order(n){
  orders.push(pizza[n]);
  alert("✅ Added to cart: ");
  switch(n)
  {
    case 0: document.getElementById('cartorderzero').style.display = "block"; break;
    case 1: document.getElementById('cartorderone').style.display = "block"; break;
    case 2: document.getElementById('cartordertwo').style.display = "block"; break;
    case 3: document.getElementById('cartorderthree').style.display = "block"; break; // ✅ fixed
    case 4: document.getElementById('cartorderfour').style.display = "block"; break;
    case 5: document.getElementById('cartorderfive').style.display = "block"; break;
    case 6: document.getElementById('cartordersix').style.display = "block"; break;
    case 7: document.getElementById('cartorderseven').style.display = "block"; break;
    case 8: document.getElementById('cartordereight').style.display = "block"; break;
    case 9: document.getElementById('cartordernine').style.display = "block"; break;
    case 10: document.getElementById('cartorderten').style.display = "block"; break; // ✅ fixed
    case 11: document.getElementById('cartordereleven').style.display = "block"; break;
    case 12: document.getElementById('cartordertwelve').style.display = "block"; break;
    case 13: document.getElementById('cartorderthirteen').style.display = "block"; break;
    case 14: document.getElementById('cartorderfourteen').style.display = "block"; break;
    case 15: document.getElementById('cartorderfifteen').style.display = "block"; break;
    case 16: document.getElementById('cartordersixteen').style.display = "block"; break; // ✅ fixed
    case 17: document.getElementById('cartorderseventeen').style.display = "block"; break;
    case 18: document.getElementById('cartordereighteen').style.display = "block"; break;
  }
}


document.getElementById('cartorderzero').style.display = "none";
document.getElementById('cartorderone').style.display = "none";
document.getElementById('cartordertwo').style.display = "none";
document.getElementById('cartorderthree').style.display = "none";
document.getElementById('cartorderfour').style.display = "none";
document.getElementById('cartorderfive').style.display = "none";
document.getElementById('cartordersix').style.display = "none";
document.getElementById('cartorderseven').style.display = "none";
document.getElementById('cartordereight').style.display = "none";
document.getElementById('cartordernine').style.display = "none";
document.getElementById('cartorderten').style.display = "none";
document.getElementById('cartordereleven').style.display = "none";
document.getElementById('cartordertwelve').style.display = "none";
document.getElementById('cartorderthirteen').style.display = "none";
document.getElementById('cartorderfourteen').style.display = "none";
document.getElementById('cartorderfifteen').style.display = "none";
document.getElementById('cartordersixteen').style.display = "none";
document.getElementById('cartorderseventeen').style.display = "none";
document.getElementById('cartordereighteen').style.display = "none";








