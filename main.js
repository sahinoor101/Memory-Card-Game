const boxes = document.querySelectorAll(".box");
console.log(boxes);

function random() {
  let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  removeAll();
  let i = 0;
  do {
    let random = Math.floor(Math.random() * 16);
    if (arr[random] !== 0) {
      boxes[i].innerHTML = ` <img src="gem${arr[random]}.png" />`;
      i++;
      arr[random] = 0;
    }
  } while (i < 16);
}

function removeAll(){
  let arr = document.querySelectorAll(".box");
  for (let i = 0; i < 16; i++) {
    arr[i].classList.remove("show");
  }
}

function checkTurn() {
  let count = 0;
  let arrBox = document.querySelectorAll(".box");
  for (let i = 0; i < 16; i++) {
    if (arrBox[i].classList.contains("show")) {
      count++;
    }
  }
  if (count >= 2) {
    console.log("false");
    removeAll();
    return false;
  }
  console.log("true");
  return true;
}

function display(box) {
  if (checkTurn() == true) {
    box.classList.add("show");
  }
}
