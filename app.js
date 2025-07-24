const container = document.querySelector("#container");

for (let i = 0; i < 100; i++) {
  const btn = document.createElement("button");
  btn.innerText = "Hey, click me!" + (i + 1);
  container.appendChild(btn);
}
