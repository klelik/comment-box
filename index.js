var wordCount = document.getElementById("count");
var valid = document.getElementById("valid");
var butt = document.getElementById("sub-btn");

let countLength = 0;

comment.addEventListener("keyup", function () {
  var characters = comment.value.split("");
  let commLength = characters.length;

  globalLength = commLength;

  wordCount.innerText = commLength;

  if (commLength < 139 && commLength > 3) {
    wordCount.classList = "valid";
    valid.classList = "valid";
    valid.innerText = "valid input";
  } else {
    valid.innerText = "Type less than 140 characters please!";
    wordCount.classList = "invalid";
    valid.classList = "invalid";
  }
});

butt.addEventListener("click", function () {
  if (globalLength > 13) {
  } else if (globalLength < 4) {
    alert("Type more than 3 characters please!");
  }
});

function add() {
  var newCom = document.createElement("div");
  var comment = document.getElementById("comment").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var txtnode = document.createTextNode(
    "Author : " + name + " email : " + email + "comment : " + comment
  );

  newCom.appendChild(txtnode);

  document.getElementById("lists").appendChild(newCom);
}
