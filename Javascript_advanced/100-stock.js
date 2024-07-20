const stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  const itemKey = itemName.toLowerCase();
  if (stock[itemKey] > 0) {
    stock[itemKey] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
  }
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock.`);
  console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);
  const itemKey = itemName.toLowerCase();

  if (stock[itemKey] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

const userItem = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone)"
);

const itemToPurchase = userItem ? userItem.toLowerCase() : "";

if (itemToPurchase === "macbook" || itemToPurchase === "iphone") {
  processOrder(itemToPurchase, processPayment, processError);
} else {
  console.log("Item not offered");
}
