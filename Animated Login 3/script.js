// SnowFall Effect JS

const spanElements = document.querySelectorAll("span");

const width = window.innerWidth;

spanElements.forEach((span) => {
  let number = Math.random() * width;

  const dimension = Math.random() * (15 - 10 + 1) + 10;

  let alpha = Math.random() * (0.4 - 0.2 + 0.1) + 0.3;

  span.style.height = dimension + "px";
  span.style.width = dimension + "px";
  span.style.background = `rgba(255,255,255,${alpha})`;
  span.style.borderRadius = "50%";
  span.style.position = "absolute";
  span.style.top = "-20px";
  span.style.left = number + "px";
  span.style.zIndex = "999";
  span.style.animation = "snowfall 16s linear infinite";
  span.style.animationDelay = `${Math.random() * (9 - 4 + 1) + 4}s`;
});
