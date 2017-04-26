var ascene = document.querySelector('a-scene');
var assets = document.querySelector('a-assets');
ascene.classList.add("jam-load");
assets.addEventListener('loaded', unJam);
var img = document.querySelectorAll('.img');
img.classList.add("jam-load");
img.addEventListener('load', unJam);

function unJam() {
  console.log('No more jam!');
  ascene.classList.remove("jam-load");
};
