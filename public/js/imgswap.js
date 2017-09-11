var list = document.querySelectorAll('img.src-swap');
console.log(list);
for(var i; i < list.length; i++) {
  console.log(list[i].nodeName);
  list[i].addEventListener('mousedown', function addNew() {
    var src_name = this.src.slice(0,this.src.indexOf("."));
    console.log(src_name);
    this.src = src_name + "-guides.svg";
  })
}
document.querySelector(".src-swap").addEventListener("mouseup", function addOld() {
  var src_name = this.src.slice(0,this.src.indexOf("-"));
  console.log(src_name);
  this.src = src_name + ".svg";
});
