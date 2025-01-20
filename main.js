const boxes = document.querySelectorAll(".box");
console.log(boxes);

function random() {
  let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  console.log("refreshed");
  let i = 0;
  do {
    let random = Math.floor(Math.random() * 16);
    if(arr[random]!==0)
    {
        boxes[i].innerHTML = ` <img src="gem${arr[random]}.png" />`;
        i++;
        console.log(random);
        arr[random]=0;
    }
  } while (i < 16);
}