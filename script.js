var cart = [];

if (cart.length == 0) {
  bigDiv.style.display = "block";
  bigDiv.innerHTML = `
                <p class="alert alert-danger text-center p-2">No items added yet</p>
            `;
}

function submitItem() {
  if (items.value.trim() === "") {
    errorMsg.style.display = "block";
  } else {
    bigDiv.style.display = "none";
    errorMsg.style.display = "none";
    bigShow.style.display = "block";
    cart.push(items.value);
    console.log(cart);
    document.getElementById("items").value = "";
    displayItem();
  }
}

function delLast() {
var confirmation = confirm('Are you sure?')
    if(confirmation){
        cart.pop();
        console.log(cart);
        displayItem();
    }
}

function delAll() {
  var confirmation = confirm(
    "Are you sure you want to delete? This action is irreversible!"
  );
  if (confirmation === true) {
    cart.splice(0, cart.length);
    displayItem();
  }
}

function delAny() {
  var start = Number(prompt("Which number are you deleting?"));
  cart.splice(start - 1, 1);
  displayItem();
}

function delFirst() {
  var confirmation = confirm("Are you sure?");
  if(confirm){
    cart.shift();
    displayItem();
  }
}

function addFirst() {
  var firstItem = document.getElementById("firstitem").value.trim();
  var errorFirst = document.getElementById("errorFirst");

  if (firstItem === "") {
    errorFirst.style.display = "block";
  } else {
    errorFirst.style.display = "none";
    cart.unshift(firstItem);
    console.log(cart);
    displayItem();
  }
}

function edit() {
  if (newIndex.value.trim() === "" || editedValue.value.trim() === "") {
    alert("fill in something jor");
  } else {
    if (Number(newIndex.value) > cart.length) {
      alert("Haba, fear God now");
    } else {
      var indexNew = Number(document.getElementById("newIndex").value);
      var replacement = document.getElementById("editedValue").value;
      console.log(indexNew, replacement);
      cart.splice(indexNew - 1, 1, replacement);
      displayItem();
    }
  }
}

function displayItem() {
  show.innerHTML = "";
  cart.map((goods, i) => {
    show.innerHTML += `
            <small>${i + 1}</small>
            <p>${goods}</p>
        `;
  });
}

