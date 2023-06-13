function createDeleteButton() {
  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function() {
    deleteItem(deleteBtn.parentNode);
  });
  return deleteBtn;
}

// Move focus to quantity input on "Enter" key press on item input
document.getElementById("item").addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    event.preventDefault();
    document.getElementById("quantity").focus();
  }
});

// Add item on "Enter" key press on quantity input
document.getElementById("quantity").addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    event.preventDefault();
    addItem();
  }
});

// Add item on "Add" button click
document.getElementById("add-btn").addEventListener("click", function() {
  addItem();
});

// Delete item on "Delete" button click
document.getElementById("delete-btn").addEventListener("click", function() {
  var items = document.getElementById("items").getElementsByTagName("li");
  if (items.length > 0) {
    deleteItem(items[items.length - 1]);
  }
});
