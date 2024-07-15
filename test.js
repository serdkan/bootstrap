let kullani = [
    {adi:"ahmet",sifre:"123456"},
    {adi:"mazhar",sifre:"123456"},
    {adi:"burak",sifre:"123456"},
    {adi:"ömer",sifre:"123456"},
    {adi:"efe",sifre:"123456"},
    {adi:"fatih",sifre:"123456"},
]
function dortislem() {
  let index = document.getElementById("islem").value;
  let sayi1 = document.getElementById("birincisayi").value;
  let sayi2 = document.getElementById("ikincisayi").value;
  let sonuc = document.getElementById("sonuc");
  if (index == "1") {
    sonuc.innerText = `toplam = ${parseInt(sayi1) + parseInt(sayi2)}`;
  }
  if (index == "2") {
    sonuc.innerText = `çıkarma = ${sayi1-sayi2}`
  }
  if (index == "3") {
    sonuc.innerText = `bolme= ${sayi1/sayi2}`
    let sonuczx = sayi1/sayi2;
    alert(typeof sonuczx)
  }
  if (index == "4") {
    
    sonuc.innerText = `çarpma = ${sayi1*sayi2}`
  }
}
