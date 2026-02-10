const phrases = [
  "Потому что вместе смеяться приятнее",
  "Потому что рядом с тобой тепло",
  "Потому что ты делаешь дни ярче",
  "Потому что ты умеешь поддерживать",
  "Потому что с тобой спокойно",
  "Потому что ты особенная",
  "Потому что ты даришь улыбки",
  "Потому что рядом с тобой хорошо",
  "Потому что ты заслуживаешь заботы",
  "Потому что ты вдохновляешь",
  "Потому что ты делаешь мир лучше",
  "Потому что ты умеешь радовать",
  "Потому что с тобой не скучно",
  "Потому что ты искренняя",
  "Потому что ты умеешь слушать",
  "Потому что ты очень милая",
  "Потому что ты светлая",
  "Потому что ты классная",
  "Потому что ты добрая",
  "Потому что ты настоящая",
  "Потому что ты умеешь удивлять",
  "Потому что ты смешная",
  "Потому что ты внимательная",
  "Потому что ты заботливая",
  "Потому что ты честная",
  "Потому что ты тёплая душой",
  "Потому что ты вдохновляешь быть лучше",
  "Потому что ты приносишь радость",
  "Потому что ты умеешь быть рядом",
  "Потому что ты ценная",
  "Потому что ты делаешь моменты важными",
  "Потому что ты даришь уют",
  "Потому что ты наполняешь",
  "Потому что ты очень приятная",
  "Потому что ты делаешь сердце спокойнее",
  "Потому что ты особенный человек",
  "Потому что ты умеешь поддержать словом",
  "Потому что ты искренняя в мелочах",
  "Потому что ты умеешь радоваться",
  "Потому что ты светишься",
  "Потому что ты мягкая",
  "Потому что ты внимательна к чувствам",
  "Потому что ты вызываешь улыбку",
  "Потому что ты даришь тепло",
  "Потому что ты создаёшь уют",
  "Потому что ты хорошая",
  "Потому что ты важна",
  "Потому что ты нужна",
  "Потому что ты просто ты"
];

let i = 0;
let yesScale = 1;
let noScale = 1;

const textEl = document.getElementById("text");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const buttons = document.querySelector(".buttons");

noBtn.onclick = () => {
  if (i < phrases.length) {
    textEl.style.opacity = 0;
    setTimeout(() => {
      textEl.textContent = phrases[i];
      textEl.style.opacity = 1;
      i++;
    }, 200);
  }

  yesScale += 0.15;
  noScale -= 0.1;
  yesBtn.style.transform = scale(${yesScale});
  noBtn.style.transform = scale(${noScale});

  if (noScale <= 0.3) {
    noBtn.style.opacity = 0;
    setTimeout(() => noBtn.style.display = "none", 300);
  }
};

yesBtn.onclick = () => {
  buttons.style.display = "none";
  textEl.textContent = "УРААА ❤️";
  textEl.style.transform = "scale(1.4)";

  for (let j = 0; j < 35; j++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
};
