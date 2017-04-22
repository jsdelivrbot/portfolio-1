var ascene = document.querySelector('a-scene');
var assets = document.querySelector('a-assets');
ascene.classList.add("jam-load");
assets.addEventListener('loaded', unJam);

function unJam() {
  console.log('No more jam!');
  ascene.classList.remove("jam-load");
};
