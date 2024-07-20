function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const body = document.getElementsByTagName("body")[0];
  const paragraph = document.createElement("p");
  paragraph.textContent = "Welcome Holberton!";
  body.appendChild(paragraph);
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let spookyButton = document.createElement("button");
  spookyButton.innerText = "Spooky";
  spookyButton.onclick = spooky;

  let darkModeButton = document.createElement("button");
  darkModeButton.innerText = "Dark mode";
  darkModeButton.onclick = darkMode;

  let screamModeButton = document.createElement("button");
  screamModeButton.innerText = "Scream mode";
  screamModeButton.onclick = screamMode;

  document.body.appendChild(spookyButton);
  document.body.appendChild(darkModeButton);
  document.body.appendChild(screamModeButton);
}

window.onload = main;
