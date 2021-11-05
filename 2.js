// let chess = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
// ];

// function draw() {
//   let out = "";
//   let m = 0;

//   for (let i = 0; i < chess.length; i++) {
//     let arr = chess[i];
//     for (let k = 0; k < arr.length; k++) {
//       if (m % 2 === 0) {
//         out += `<div class="chess-block" data-x="${k}" data-y="${i}"></div>`;
//       } else {
//         out += `<div class="chess-block bg-black"  data-x="${k}" data-y="${i}"></div>`;
//       }
//       m++;
//     }
//     m++;
//   }
//   document.querySelector("#field").innerHTML = out;
//   document.querySelectorAll(".chess-block").forEach(function (element) {
//     element.onclick = horse;
//   });
// }

// draw();

// function horse() {
//   document.querySelectorAll(".chess-block").forEach(function (e) {
//     e.classList.remove("green");
//     e.classList.remove("active");
//   });
//   let x = this.dataset.x;
//   let y = this.dataset.y;
//   this.classList.add("green");
//   if (+x + 2 < 8 && +y + 1 < 8) {
//     document
//       .querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y + 1}"]`)
//       .classList.add("active");
//   }
//   if (+x + 2 < 8 && +y - 1 >= 0) {
//     document
//       .querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y - 1}"]`)
//       .classList.add("active");
//   }
//   if (+x - 2 >= 0 && +y + 1 < 8) {
//     document
//       .querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y + 1}"]`)
//       .classList.add("active");
//   }
//   if (+x - 2 >= 0 && +y - 1 >= 0) {
//     document
//       .querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y - 1}"]`)
//       .classList.add("active");
//   }
//   if (+x + 1 < 8 && +y - 2 >= 0) {
//     document
//       .querySelector(`.chess-block[data-x="${+x + 1}"][data-y="${+y - 2}"]`)
//       .classList.add("active");
//   }
//   if (+x - 2 >= 0 && +y - 2 >= 0) {
//     document
//       .querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y - 2}"]`)
//       .classList.add("active");
//   }
//   if (+x + 1 < 8 && +y + 2 < 8) {
//     document
//       .querySelector(`.chess-block[data-x="${+x + 1}"][data-y="${+y + 2}"]`)
//       .classList.add("active");
//   }
//   if (+x - 2 >= 0 && +y + 2 < 8) {
//     document
//       .querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y + 2}"]`)
//       .classList.add("active");
//   }
// }

function draw() {
  for (let i = 0; i < 8; i++) {
    for (let k = 0; k < 8; k++) {
      let out = '<div class="chess-block';
      if ((i + k) % 2 === 0) {
        out += " bg-black";
      }
      document.querySelector("#field").innerHTML +=
        out + '" data-x="' + k + '" data-y="' + i + '"></div>';
    }
  }
  document.querySelectorAll(".chess-block").forEach(function (element) {
    element.onclick = horse;
  });
}

draw();

function horse() {
  const dx = [2, 1, -1, -2, -2, -1, 1, 2],
    dy = [1, 2, 2, 1, -1, -2, -2, -1];
  document.querySelectorAll(".chess-block").forEach(function (element) {
    element.classList.remove("active");
    element.classList.remove("green");
  });
  let x = +this.dataset.x,
    y = +this.dataset.y;
  this.classList.add("green");
  for (let i = 0; i < 8; i++) {
    let xx = x + dx[i],
      yy = y + dy[i];
    if (xx >= 0 && yy >= 0 && xx < 8 && yy < 8) {
      document
        .querySelector('.chess-block[data-x="' + xx + '"][data-y="' + yy + '"]')
        .classList.add("active");
    }
  }
}
