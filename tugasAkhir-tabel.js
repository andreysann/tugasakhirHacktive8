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
  kol4.innerHTML= '<center><input class="qty" type="text" size=5></center>';
  kol5.innerHTML= '<center>Rp.<input class="jumlah" type="text" size=10 readonly></center>';

  nomor = nomor + 1;
}



function hitung(){
var txtHarga1 = document.getElementById('harga1');
var txtQty1 = document.getElementById('qty1');
var txtJumlah1 = document.getElementById('jumlah1');

if (txtHarga1.value !="" && txtQty1.value != ""){
      txtJumlah1.value = parseInt(txtHarga1.value) * parseInt(txtQty1.value);
    }


var txtHarga2 = document.getElementById('harga2');
var txtQty2 = document.getElementById('qty2');
var txtJumlah2 = document.getElementById('jumlah2');


  if (txtHarga2.value !="" && txtQty2.value != ""){
        txtJumlah2.value = parseInt(txtHarga2.value) * parseInt(txtQty2.value);
      }

var txtHarga3 = document.getElementById('harga3');
var txtQty3 = document.getElementById('qty3');
var txtJumlah3 = document.getElementById('jumlah3');

if (txtHarga3.value !="" && txtQty3.value != ""){
      txtJumlah3.value = parseInt(txtHarga3.value) * parseInt(txtQty3.value);
    }

var txtHarga4 = document.getElementById('harga4');
var txtQty4 = document.getElementById('qty4');
var txtJumlah4 = document.getElementById('jumlah4');

if (txtHarga4.value !="" && txtQty4.value != ""){
      txtJumlah4.value = parseInt(txtHarga4.value) * parseInt(txtQty4.value);
    }


var txtHarga5 = document.getElementById('harga5');
var txtQty5 = document.getElementById('qty5');
var txtJumlah5 = document.getElementById('jumlah5');

if (txtHarga5.value !="" && txtQty5.value != ""){
      txtJumlah5.value = parseInt(txtHarga5.value) * parseInt(txtQty5.value);
    }


var grandTotal = document.getElementById('total');
var txtDiskon = document.getElementById('diskon');
var txtBayar = document.getElementById('bayar');

var jml1 = 0;
  if (txtJumlah1.value != ""){
    jml1 = parseInt(txtJumlah1.value);
  }
var jml2 = 0;
  if (txtJumlah2.value != ""){
    jml2 = parseInt(txtJumlah2.value);
  }
var jml3 = 0;
  if (txtJumlah3.value != ""){
    jml3 = parseInt(txtJumlah3.value);
  }
var jml4 = 0;
  if (txtJumlah4.value != ""){
    jml4 = parseInt(txtJumlah4.value);
  }
var jml5 = 0;
  if (txtJumlah5.value != ""){
    jml5 = parseInt(txtJumlah5.value);
  }
grandTotal.value = jml1 + jml2 + jml3 + jml4 + jml5;

 if (grandTotal.value >= 50000){
   txtDiskon.value = 0.1 * grandTotal.value;
   txtBayar.value = grandTotal.value - txtDiskon.value;
 }else{
   grandTotal.value = grandTotal.value;
   txtDiskon.value = "0";
   txtBayar.value = grandTotal.value;
 }
}
