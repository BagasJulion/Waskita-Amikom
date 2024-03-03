window.setTimeout("waktu()", 1000);
 
function waktu() {
    var tanggallengkap = new String(),
    waktu          	   = new Date();
    
    var namahari       = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu"),
    namahari           = namahari.split(" "),
    namabulan          = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember"),
    namabulan          = namabulan.split(" ");
    
    var hari           = waktu.getDay();
    var tanggal        = waktu.getDate();
    var bulan          = waktu.getMonth();
    var tahun          = waktu.getFullYear();

    tanggallengkap     = namahari[hari] + ", " + (tanggal < 10 ? "0" +tanggal : tanggal) + " " + namabulan[bulan] + " " + tahun;

    setTimeout("waktu()", 1000);

    var sekarang = "<strong>" + tanggallengkap + "</strong> ,  " + (waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours()) + ":" + (waktu.getMinutes() < 10 ? "0"+waktu.getMinutes() : waktu.getMinutes()) + ":" + (waktu.getSeconds() < 10 ? "0"+waktu.getSeconds() : waktu.getSeconds());

    document.querySelector(".main-footer > .datetime > span").innerHTML = sekarang;
} 
