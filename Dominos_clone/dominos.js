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

const pizza = [{name: "Cheese Volcano peppy panner",price:699},{name:"Cheese Volcano Farmhouse",price:499},{ name:"Cheese Volcano tikka panner",price:899 },{ name:"Cheese Volcano cheese mushroom",price:599 },
                { name:"Cheese Volcano margherita",price:249 }, { name:"Cheese Volcano tangy tomato",price:399 }, { name:"Cheese Volcano bell pepper",price:499 }, { name:"Cheese Volcano fruit funda",price:699 },
                //veg
                { name:"Cheese Volcano crispy chicken",price:799 }, { name:"Cheese Volcano chicken tikka",price:999 }, { name:"Cheese Volcano chicken sausage",price: 899}, { name:"Cheese Volcano chicken grill",price:1099 },
                //nonveg
                { name:"Garlic panner stuff",price:299 }, { name:"Garlic bread plain cheese",price:199 }, { name:"Garlic bread mushroom stuff",price:249 }, { name:"Garlic bread cheese chicken",price:399 },
                //garlic bread
                { name:"Crispy chicken",price:399 }, { name:"Grilled chicken",price: 599}, { name:"Chicken chops",price:449 } ];
                //chicken bucket

let orders=[];
let temporders=[];

function order(n) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(pizza[n]);
    localStorage.setItem('orders', JSON.stringify(orders));
    alert("✅ Added to cart!");
  }


//display in DOM
function displaycart() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
  
    const container = document.querySelector('.order_number'); // Make sure this exists in HTML
    if (!container) return; // Exit if not on order page
  
    orders.forEach(item => {
      const cartorder = document.createElement('div');
      cartorder.className = 'cartorder';
  
      const cont2 = document.createElement('div');
      cont2.className = 'cont2';
  
      const name = document.createElement('span');
      name.className = 'nameofpizza';
      name.textContent = item.name;
  
      const tag = document.createElement('span');
      tag.className = 'tagofpizza';
      tag.textContent = 'Regular';
  
      cont2.appendChild(name);
      cont2.appendChild(document.createElement('br'));
      cont2.appendChild(tag);
  
      const cont3 = document.createElement('div');
      cont3.className = 'cont3';
  
      const amount = document.createElement('span');
      amount.className = 'amount';
      amount.textContent = `₹${item.price}`;
  
      const mult = document.createElement('span');
      mult.className = 'multiplyorder';
      mult.innerHTML = `
        <button>-</button>
        <button>1</button>
        <button>+</button>
      `;
  
      cont3.appendChild(amount);
      cont3.appendChild(mult);
  
      cartorder.appendChild(cont2);
      cartorder.appendChild(cont3);
  
      container.appendChild(cartorder);
    });
  }
  
  





















