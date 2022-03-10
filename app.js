const button = document.querySelector("button");

const items = document.querySelectorAll("li");
let cnt = items.length;
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.style.display = "none";
    cnt--;
    if (cnt === 0) {
      let clickToDelete = document.querySelector(".click-to-delete");
      clickToDelete.style.opacity = "0";
    }
  });
});

function getVal() {
  let val = document.querySelector(".form").value;
  console.log(val);
  return val;
}
let ul = document.querySelector(".list");

// button.addEventListener("click", () => {
//   items[cnt].style.display = "block";
//   cnt++;
// });

button.addEventListener("click", () => {
  let val = getVal();
  if (val) {
    ul.innerHTML += `<li class = "list-elem li">${val}</li>`;
    const itemsNew = document.querySelectorAll("li");
    itemsNew.forEach((item) =>
      item.addEventListener("click", (e) => {
        e.target.style.display = "none";
        cnt--;
        if (cnt === 0) {
          clickToDelete.style.opacity = "0";
        }
      })
    );
    cnt++;
    let clickToDelete = document.querySelector(".click-to-delete");
    clickToDelete.style.opacity = "1";
  }
});
