//++++++++++++++++++++++++Tombol++++++++++++++++++++++++++++++++
const mapel = {
  buatTombol: function () {
    let btn = document.createElement(this.jenis);
    let text = document.createTextNode(this.mapelPanjang);
    let box = document.getElementById("box1");
    let atc = document.createAttribute("class");
    atc.value = this.kelas;
    let atid = document.createAttribute("id");
    atid.value = this.mapelPendek;
    let atoc = document.createAttribute("onclick");
    atoc.value = this.aksi;

    btn.setAttributeNode(atc);
    btn.setAttributeNode(atid);
    btn.setAttributeNode(atoc);

    btn.appendChild(text);
    box.appendChild(btn);
    return box;
  },
};

const dmi = {
  mapelPendek: "dmi",
  mapelPanjang: "Desain Media Interaktif",
  aksi: "kirim('dmi')",
  jenis: "button",
  kelas: "btn btn-success btn-lg btn-block mt-2",
};

const pd = {
  mapelPendek: "pd",
  mapelPanjang: "Pemrograman Dasar",
  aksi: "kirim('pd')",
  jenis: "button",
  kelas: "btn btn-success btn-lg btn-block mt-2",
};

const loading = {
  mapelPendek: "ld",
  mapelPanjang: "Loading . . .",
  aksi: "",
  jenis: "h2",
  kelas: "alert alert-success mt-2",
};

const belumWaktu = {
  mapelPendek: "bw",
  mapelPanjang: "Belum masuk waktu pelajaran",
  aksi: "",
  jenis: "h2",
  kelas: "alert alert-success mt-2",
};

const nupdTakValid = {
  mapelPendek: "ntv",
  mapelPanjang: "NUPD tidak terdaftar! Silahkan hubungi wali kelas",
  aksi: "",
  jenis: "h2",
  kelas: "alert alert-danger mt-2",
};

const libur = {
  mapelPendek: "hl",
  mapelPanjang: "Hari Libur",
  aksi: "",
  jenis: "h2",
  kelas: "alert alert-danger mt-2",
};

const kosongPd = {
  mapelPendek: "mkp",
  mapelPanjang: "Mapel Pemrograman Dasar hari ini tidak ada.",
  aksi: "",
  jenis: "h2",
  kelas: "alert alert-danger mt-2",
};

const kosongDmi = {
  mapelPendek: "mkd",
  mapelPanjang: "Mapel Desain Media Interaktif hari ini tidak ada.",
  aksi: "",
  jenis: "h2",
  kelas: "alert alert-danger mt-2",
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function loadJam(x) {
  const jamMenit = new Date();
  if (x === 1) {
    jamMenit.setHours(7);
    jamMenit.setMinutes(15);
  } else if (x === 2) {
    jamMenit.setHours(7);
    jamMenit.setMinutes(45);
  } else if (x === 3) {
    jamMenit.setHours(8);
    jamMenit.setMinutes(15);
  } else if (x === 4) {
    jamMenit.setHours(8);
    jamMenit.setMinutes(45);
  } else if (x === 5) {
    jamMenit.setHours(9);
    jamMenit.setMinutes(30);
  } else if (x === 6) {
    jamMenit.setHours(10);
    jamMenit.setMinutes(00);
  } else if (x === 7) {
    jamMenit.setHours(10);
    jamMenit.setMinutes(30);
  } else if (x === 8) {
    jamMenit.setHours(11);
    jamMenit.setMinutes(00);
  } else if (x === 9) {
    jamMenit.setHours(12);
    jamMenit.setMinutes(30);
  } else if (x === 10) {
    jamMenit.setHours(13);
    jamMenit.setMinutes(00);
  } else if (x === 11) {
    jamMenit.setHours(13);
    jamMenit.setMinutes(30);
  }
  return jamMenit;
}
