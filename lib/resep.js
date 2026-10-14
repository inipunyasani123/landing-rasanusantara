/* ==========================================================================
   Rasa Nusantara — kartu resep terstandar untuk dapur restoran.
   Harga bahan adalah contoh (perkiraan pasar kota besar, 2026) untuk purwarupa
   desain; HPP dan harga jual saran dihitung dari daftar bahan di bawah.
   ========================================================================== */

export const SITE = 'https://landing-rasanusantara.pintuweb.id';

// [bahan, jumlah, satuan, biaya (Rp) untuk jumlah itu]
export const RESEP = [
  {
    slug: 'rendang-daging',
    nama: 'Rendang Daging',
    asal: 'Sumatera Barat',
    porsi: 10,
    ukuranPorsi: '100 g daging matang + 2 sdm bumbu',
    persiapan: 30,
    masak: 240,
    pedas: 2,
    targetFoodCost: 35,
    ringkas: 'Dimasak sampai kering, bukan kalio. Paling tahan simpan, paling sering berbeda antar-shift.',
    bahan: [
      ['Daging sapi paha belakang', 1500, 'g', 210000],
      ['Kelapa parut (santan kental & encer)', 4, 'butir', 48000],
      ['Cabai merah keriting', 250, 'g', 15000],
      ['Bawang merah', 150, 'g', 6750],
      ['Bawang putih', 75, 'g', 3000],
      ['Jahe, lengkuas, kunyit', 110, 'g', 3000],
      ['Serai, daun kunyit, daun jeruk, asam kandis', 1, 'ikat', 4000],
      ['Garam dan gula', 30, 'g', 1500],
    ],
    langkah: [
      'Haluskan cabai, bawang merah, bawang putih, jahe, lengkuas, dan kunyit. Timbang: sekitar 585 g bumbu halus.',
      'Didihkan santan bersama bumbu halus, serai, daun kunyit, daun jeruk, dan asam kandis sambil terus diaduk supaya santan tidak pecah.',
      'Masukkan daging yang sudah dipotong 50 g per potong setelah santan mendidih.',
      'Masak dengan api sedang sambil diaduk sampai santan menyusut dan berminyak (kalio), sekitar 2 jam.',
      'Kecilkan api. Aduk setiap 5 menit sampai bumbu kering dan berwarna cokelat tua, sekitar 2 jam lagi.',
      'Dinginkan di loyang terbuka sebelum disimpan. Porsikan 100 g daging per sajian.',
    ],
    kritis: ['Menit ke-120: tanda kalio — minyak mulai naik di tepi wajan', 'Setelah kalio, api kecil saja; bumbu gosong tidak bisa diperbaiki'],
    konsisten: ['Potong daging 50 g per potong supaya matang merata', 'Catat jam mulai di papan dapur; jangan menebak dari warna saja', 'Timbang porsi matang, bukan menghitung potongan'],
    simpan: 'Kulkas 5 hari dalam wadah tertutup; beku 3 bulan.',
  },
  {
    slug: 'soto-banjar',
    nama: 'Soto Banjar',
    asal: 'Kalimantan Selatan',
    porsi: 10,
    ukuranPorsi: '350 ml kuah + 60 g ayam suwir + pelengkap',
    persiapan: 45,
    masak: 90,
    pedas: 0,
    targetFoodCost: 40,
    ringkas: 'Kuah bening beraroma rempah manis — kayu manis, cengkih, pala — yang mudah terlalu tajam bila ditakar kira-kira.',
    bahan: [
      ['Ayam kampung utuh', 1200, 'g', 102000],
      ['Bawang merah', 100, 'g', 4500],
      ['Bawang putih', 50, 'g', 2000],
      ['Kayu manis, cengkih, kapulaga, pala, bunga lawang', 1, 'set', 5000],
      ['Ketupat', 10, 'buah', 20000],
      ['Telur ayam (direbus)', 10, 'butir', 22000],
      ['Kentang untuk perkedel', 500, 'g', 9000],
      ['Bihun', 200, 'g', 6000],
      ['Bawang goreng, seledri, jeruk nipis', 1, 'set', 6000],
      ['Garam dan merica', 25, 'g', 1500],
    ],
    langkah: [
      'Rebus ayam dalam 3.000 ml air dengan api kecil 45 menit. Angkat ayam, saring kaldu, timbang: sekitar 2.600 ml.',
      'Tumis bawang merah dan bawang putih halus sampai harum, masukkan ke kaldu.',
      'Masukkan rempah utuh yang sudah diikat dalam kain; rebus 30 menit lalu angkat ikatannya.',
      'Suwir ayam, pisahkan 60 g per porsi. Goreng ayam sebentar bila ingin permukaan kering.',
      'Buat perkedel dari kentang kukus dan telur, 10 buah @ 50 g.',
      'Sajikan: ketupat, bihun, ayam, telur, perkedel, siram 350 ml kuah panas, taburi bawang goreng dan seledri.',
    ],
    kritis: ['Rempah diikat dalam kain dan diangkat setelah 30 menit — lebih lama membuat kuah pahit', 'Kuah jangan sampai mendidih keras supaya tetap bening'],
    konsisten: ['Satu ikatan rempah per 2.600 ml kaldu, disiapkan di awal shift', 'Takar kuah dengan gayung 350 ml, bukan mangkuk', 'Perkedel ditimbang 50 g sebelum digoreng'],
    simpan: 'Kuah 3 hari di kulkas; ayam suwir 2 hari; perkedel dibuat harian.',
  },
  {
    slug: 'ayam-betutu',
    nama: 'Ayam Betutu',
    asal: 'Bali',
    porsi: 8,
    ukuranPorsi: '¼ ekor ayam + 2 sdm bumbu + sayur isian',
    persiapan: 60,
    masak: 150,
    pedas: 3,
    targetFoodCost: 35,
    ringkas: 'Base genep yang meresap semalam, lalu dikukus dan dipanggang dalam bungkus daun pisang.',
    bahan: [
      ['Ayam kampung utuh (2 ekor)', 2400, 'g', 204000],
      ['Bawang merah', 150, 'g', 6750],
      ['Bawang putih', 80, 'g', 3200],
      ['Cabai rawit', 60, 'g', 4800],
      ['Cabai merah', 100, 'g', 6000],
      ['Kencur, jahe, lengkuas, kunyit', 180, 'g', 4000],
      ['Terasi dan kemiri', 55, 'g', 3900],
      ['Ketumbar, merica, pala', 20, 'g', 2000],
      ['Serai, daun salam, daun jeruk', 1, 'ikat', 2000],
      ['Daun singkong untuk isian', 200, 'g', 4000],
      ['Daun pisang dan minyak', 1, 'set', 5000],
    ],
    langkah: [
      'Haluskan semua bumbu menjadi base genep; tumis 5 menit dengan minyak sampai harum. Timbang: sekitar 650 g.',
      'Lumuri ayam luar-dalam dengan 400 g base genep. Campur sisa bumbu dengan daun singkong rebus sebagai isian rongga.',
      'Bungkus tiap ayam dengan tiga lapis daun pisang, lalu satu lapis aluminium foil.',
      'Diamkan di kulkas semalam (minimal 8 jam).',
      'Kukus 60 menit, lalu panggang dalam oven 160 °C selama 90 menit.',
      'Buka bungkus, potong masing-masing ayam menjadi empat, sajikan dengan bumbu dan isian.',
    ],
    kritis: ['Perendaman semalam tidak boleh dilewati — tanpa itu bumbu hanya menempel di kulit', 'Suhu oven 160 °C; lebih panas membuat daun pisang gosong sebelum ayam matang'],
    konsisten: ['Base genep dibuat per 650 g dan dibekukan dalam kantong berlabel tanggal', 'Tiap ayam ditimbang sebelum dibumbui; gunakan ayam 1,1–1,3 kg', 'Pakai pengukur suhu: bagian paha 75 °C'],
    simpan: 'Base genep beku 2 bulan; ayam matang 3 hari di kulkas.',
  },
  {
    slug: 'coto-makassar',
    nama: 'Coto Makassar',
    asal: 'Sulawesi Selatan',
    porsi: 10,
    ukuranPorsi: '300 ml kuah + 80 g daging & jeroan',
    persiapan: 40,
    masak: 150,
    pedas: 1,
    targetFoodCost: 35,
    ringkas: 'Kuah keruh dari air cucian beras dan kacang tanah sangrai — kekentalannya yang paling sering berubah.',
    bahan: [
      ['Daging sapi dan jeroan campur', 1200, 'g', 144000],
      ['Kacang tanah sangrai, dihaluskan', 150, 'g', 5250],
      ['Bawang merah dan bawang putih', 140, 'g', 6000],
      ['Ketumbar, jintan, merica, lengkuas, serai, salam', 1, 'set', 4000],
      ['Sambal tauco pendamping', 100, 'g', 4000],
      ['Ketupat', 10, 'buah', 20000],
      ['Daun bawang, bawang goreng, jeruk nipis', 1, 'set', 5000],
      ['Garam dan gula merah', 40, 'g', 1500],
    ],
    langkah: [
      'Rebus daging dan jeroan yang sudah dibersihkan dalam 3.000 ml air cucian beras kedua dengan api kecil 90 menit.',
      'Angkat daging dan jeroan, potong dadu 2 cm. Timbang 80 g per porsi.',
      'Tumis bumbu halus dan kacang tanah sampai berminyak, masukkan ke kuah bersama serai, lengkuas, dan salam.',
      'Masak kuah 45 menit dengan api kecil; koreksi garam dan gula merah di menit terakhir.',
      'Sajikan daging dan jeroan di mangkuk, siram 300 ml kuah, taburi daun bawang dan bawang goreng; ketupat dan sambal tauco di piring terpisah.',
    ],
    kritis: ['Air cucian beras kedua, bukan pertama — yang pertama membuat kuah berpasir', 'Kacang tanah ditumis bersama bumbu, bukan dimasukkan mentah'],
    konsisten: ['Takar air cucian beras dengan wadah bertanda 3 liter', 'Kacang sangrai dihaluskan per 150 g dan disimpan kedap udara', 'Kekentalan dicek dengan sendok: kuah melapisi punggung sendok tipis'],
    simpan: 'Kuah 3 hari di kulkas; daging dan jeroan disimpan terpisah dari kuah.',
  },
];

const bulat = (n, ke = 500) => Math.round(n / ke) * ke;

export const hitung = (r) => {
  const total = r.bahan.reduce((s, b) => s + b[3], 0);
  const hpp = total / r.porsi;
  const jual = bulat(hpp / (r.targetFoodCost / 100), 1000);
  return { total, hpp: bulat(hpp, 50), jual };
};

export const rupiah = (n) => `Rp ${Math.round(n).toLocaleString('id-ID')}`;
export const menit = (m) => (m >= 60 ? `${Math.floor(m / 60)} jam${m % 60 ? ` ${m % 60} menit` : ''}` : `${m} menit`);
export const resepBySlug = (s) => RESEP.find((r) => r.slug === s);

export const MASALAH = [
  ['Rendang yang berbeda tiap shift', 'Koki pagi dan koki malam memakai takaran "secukupnya" yang berbeda.'],
  ['Harga jual yang ditebak', 'Harga cabai naik, harga menu tidak berubah, dan margin hilang diam-diam.'],
  ['Resep yang pergi bersama kokinya', 'Satu orang hafal takarannya. Saat ia keluar, rasanya ikut keluar.'],
];

export const LAYANAN = [
  { nama: 'Kartu satuan', harga: 'Rp 350.000', satuan: '/ resep', isi: ['Satu resep ditulis ulang dan diuji dua kali', 'Gramasi, urutan, dan titik kritis', 'HPP dari harga bahan di kota Anda'] },
  { nama: 'Paket menu daerah', harga: 'Rp 3.000.000', satuan: '/ 10 resep', unggulan: true, isi: ['Sepuluh resep dari satu daerah', 'Kartu cetak berlaminasi untuk dapur', 'Pembaruan HPP gratis selama 6 bulan'] },
  { nama: 'Uji masak di dapur Anda', harga: 'Rp 4.500.000', satuan: '/ 2 hari', isi: ['Kami memasak bersama tim dapur Anda', 'Resep lama Anda distandarkan, bukan diganti', 'Pelatihan membaca kartu resep'] },
];

export const FAQ = [
  { t: 'Apakah resep keluarga kami akan diganti?', j: 'Tidak. Kami menulis ulang resep yang sudah ada menjadi takaran dan urutan yang bisa diulang. Rasanya tetap milik Anda.' },
  { t: 'Dari mana harga bahan untuk HPP?', j: 'Dari nota belanja dapur Anda sendiri bila tersedia; bila belum, dari harga pasar di kota Anda pada bulan yang sama. Harga di situs ini hanya contoh.' },
  { t: 'Apakah kartu resep gratisnya benar-benar lengkap?', j: 'Ya — tiga kartu lengkap dengan gramasi, urutan, titik kritis, dan HPP contoh. Anda boleh memakainya di dapur tanpa membeli apa pun.' },
  { t: 'Bagaimana dengan kerahasiaan resep?', j: 'Resep yang Anda serahkan tidak pernah kami terbitkan atau jual ke dapur lain. Perjanjian kerahasiaan ditandatangani sebelum uji masak.' },
];
