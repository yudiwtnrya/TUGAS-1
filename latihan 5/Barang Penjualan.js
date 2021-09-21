function Hasil(){
    var Harga =parseInt(document.getElementById("Harga_Barang").value);
    var Jumlah =parseInt(document.getElementById ("Jumlah_Barang").value);
    var Total=Harga*Jumlah;
    document.getElementById("Total").innerHTML=Total;
    var Diskon=0.10;
    var Bayar;
    if(Total>=100000){
        Bayar=Total-(Total*Diskon);
        document.getElementById("Bayar").innerHTML=Bayar;
        document.getElementById("Diskon").innerHTML="10%";

    }else{
        document.getElementById("Bayar").innerHTML=Total;
        document.getElementById("Diskon").innerHTML="0%";
    }


}