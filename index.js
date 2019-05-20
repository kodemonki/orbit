let root = document,
  radius = 200,
  angle = 45,
  centerX = document.body.offsetWidth / 2,
  centerY = document.body.offsetHeight / 2;

draggables = root.querySelectorAll(".draggable");

draggables.forEach(initItems);

function initItems(item) {
  item.img = item.firstElementChild;
  item.radius = 20 + Math.random() * (centerX * 0.7);
  item.angle = Math.random() * 360;
  item.speed = item.radius / 3000 / 4;
  item.opacity = item.radius / 400;
  item.style.opacity = item.opacity;
  item.scale = item.radius / 400;

  requestAnimationFrame(updateOrbits);
}

function updateOrbits() {
  draggables.forEach(updateOrbit);
  requestAnimationFrame(updateOrbits);
}

function updateOrbit(item) {
  let hyp = item.radius,
    opp = Math.sin((item.angle * Math.PI) / 180) * hyp,
    adj = Math.cos((item.angle * Math.PI) / 180) * hyp;

  item.style.left = centerX + opp + "px";
  item.style.top = centerY - adj + "px";

  item.img.style.transform =
    "scale(" + item.scale + ") rotate(" + item.angle + "deg)";

  item.angle += item.speed;

  if (item.angle >= 360) {
    item.angle - 360;
  }
}
