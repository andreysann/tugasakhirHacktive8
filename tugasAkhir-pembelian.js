var nomor = 6;

function tambah(){
  var form = document.getElementById('form');
  var newrow = form.insertRow(nomor);

  var kol1 = newrow.insertCell(0);
  var kol2 = newrow.insertCell(1);
  var kol3 = newrow.insertCell(2);
  var kol4 = newrow.insertCell(3);
  var kol5 = newrow.insertCell(4);

  kol1.innerHTML= nomor;
  kol2.innerHTML= '<input class="jenisBarang" type="text">';
  kol3.innerHTML= '<center>Rp.<input class="harga" type="text" size=7></center>';
  kol4.innerHTML= '<center><input class="qty" type="text" size=5 onchange="hitung()"></center>';
  kol5.innerHTML= '<center>Rp.<input class="jumlah" type="text" size=10 readonly></center>';

  nomor = nomor + 1;
}

function hitung(){
  var txtHarga = document.getElementsByClassName("harga");
  var txtQty = document.getElementsByClassName("qty");
  var txtJumlah = document.getElementsByClassName("jumlah");

  var grandTotal = document.getElementById('total');
  var txtDiskon = document. getElementById('diskon');
  var totalBayar = document.getElementById('bayar');

  var total = 0;

    for(i=0; i<txtHarga.length; i++){

      if (txtHarga[i].value !="" && txtQty[i].value !=""){
        txtJumlah[i].value = parseInt (txtHarga[i].value)*parseInt(txtQty[i].value);

      total += parseInt(txtJumlah[i].value);
    }
  }
  grandTotal.value = total;
}
