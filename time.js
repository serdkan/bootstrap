function ekranayaz() {
  document.getElementById("govde").className = "row";
  document.getElementById("loading").className = "d-node";
}

function ekrangizle() {
  document.getElementById("govde").className = "row d-none";
  document.getElementById("loading").className =
    "spinner-border text-primary text-center";
}

setTimeout(ekranayaz, 4000);
setTimeout(ekrangizle, 10000);

let ogrenci = {
  adi: "serdar",
  soyadi: "kandiran",
};
