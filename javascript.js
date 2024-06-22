
// Array to hold the shopping list items
let shoppingList = [];

function addToList(itemName, itemPrice) {

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = `${itemName} - ${itemPrice} USD`;


    document.getElementById('shopping-list').appendChild(listItem);


    shoppingList.push({ name: itemName, price: itemPrice });
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPrice = shoppingList.reduce((sum, item) => sum + item.price, 0);

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Function to clear the last added item
function clearLastItem() {
    // Remove the last item from the shopping list array
    if (shoppingList.length > 0) {
        shoppingList.pop();
    }

    // Remove the last list item element from the HTML
    const shoppingListElement = document.getElementById('shopping-list');
    if (shoppingListElement.lastChild) {
        shoppingListElement.removeChild(shoppingListElement.lastChild);
    }
    updateTotalPrice();
}


document.getElementById('clear-cart').addEventListener('click', clearLastItem);
document.getElementById('sumit').addEventListener('click', resetCounter);


 // Function to show the modal
 function showModal(id) {
    document.getElementById(id).style.display = 'flex';
}

// Function to hide the modal
function hideModal(id) {
    document.getElementById(id).style.display = 'none';
}