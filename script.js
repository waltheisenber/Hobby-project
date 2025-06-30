const subtitle = document.getElementById("subtitle");

const confessionLines = [
  "Rochelle...",
  "I just wanted to say what's been on my chest for a while now.",
  "You’ve been on my mind — more than I expected.",
  "I can’t focus lately, kasi ikaw lang iniisip ko.",
  "So... pwede ba kitang ligawan?",
  "I don’t expect anything. I just wanted to be honest. 💗"
];

function moveNo() {
  const btn = document.getElementById("noBtn");
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 60);
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
}

function startConfession() {
  const inputValue = document.getElementById("userInput").value.trim().toLowerCase();
  subtitle.innerHTML = "";

  if (inputValue === "no" || inputValue === "ayoko") {
    typeText("Please say yes 😢 I promise this is from the heart.", 0, () => {
      setTimeout(() => showLine(0), 1200); // still shows message after pause
    });
  } else {
    showLine(0);
  }
}

function showLine(i) {
  if (i >= confessionLines.length) return;
  typeText(confessionLines[i], 0, () => {
    setTimeout(() => showLine(i + 1), 1000);
  });
}

function typeText(text, idx, done) {
  if (idx < text.length) {
    subtitle.innerHTML += text.charAt(idx);
    setTimeout(() => typeText(text, idx + 1, done), 40);
  } else {
    subtitle.innerHTML += "<br><br>";
    if (done) done();
  }
}
