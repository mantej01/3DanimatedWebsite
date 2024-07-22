function files(index) {
  const basePath = "/"; // Adjust this path as needed
  const paddedIndex = String(index + 1).padStart(3, '0'); // Ensures index is three digits long
  return `${basePath}${paddedIndex}.png`;
}

const frameCount = 169;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var width = canvas.width;
  var height = canvas.height;
  var imgWidth = img.width;
  var imgHeight = img.height;

  var scale = Math.min(width / imgWidth, height / imgHeight);
  var x = (width / 2) - (imgWidth / 2) * scale;
  var y = (height / 2) - (imgHeight / 2) * scale;

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
}

ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  }
});

gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  }
});

gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  }
});
