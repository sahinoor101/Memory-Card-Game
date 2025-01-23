const boxes = document.querySelectorAll(".box");
const score=document.querySelector(".score");
console.log(boxes);

function random() {
  let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  removeAll();
  let i = 0;
  do {
    let random = Math.floor(Math.random() * 16);
    if (arr[random] !== 0) {
      boxes[i].innerHTML = ` <img src="gem${arr[random]}.png"/>`;
      boxes[i].classList.add(`gem${arr[random]}`);
      i++;
      arr[random] = 0;
    }
  } while (i < 16);
}
let point=0;
function removeAll() {
  let arr = document.querySelectorAll(".box");
  console.log(arr);
  let gem;
  for (let i = 0; i < 16; i++) {
    if (arr[i].classList.contains("show")) {
      gem = arr[i].classList[1];
      console.log(gem);
      for (let j = i + 1; j < 16; j++) {
        if (arr[j].classList.contains("show") ) {
          console.log("1");
          if (arr[j].classList[1] == gem) {
            arr[j].classList.remove(gem);
            arr[i].classList.remove(gem);
            arr[j].classList.remove("show");
            arr[i].classList.remove("show");
            arr[i].classList.add("fixed");
            arr[j].classList.add("fixed");
            console.log(gem);
            console.log(arr);
            score.textContent = ++point;
            return;
          }
        }
      }
   }   
  }
  for (let i = 0; i < 16; i++) {
    if (!arr[i].classList.contains("fixed")) {
      arr[i].classList.remove("show");
    }
  }
}

function checkTurn() {
  let count = 0;
  let arrBox = document.querySelectorAll(".box");
  for (let i = 0; i < 16; i++) {
    console.log(count);
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

let c = 0;

function display(box) {
  box.classList.add("show");
  c++;
  if (c % 2 == 0) {
    console.log(c);
    setTimeout(() => {
      removeAll();
    }, 1000);
  }
}
