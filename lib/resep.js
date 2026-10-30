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
    slug: 'rawon',
    nama: 'Rawon',
    asal: 'Jawa Timur',
    porsi: 10,
    ukuranPorsi: '300 ml kuah hitam + 80 g daging + nasi',
    persiapan: 45,
    masak: 150,
    pedas: 1,
    targetFoodCost: 38,
    ringkas: 'Kuah hitam dari kluwak yang mudah pahit atau pucat bila ditakar kira-kira; kunci rasanya ada di bumbu yang ditumis matang.',
    bahan: [
      ['Daging sapi sandung lamur', 1200, 'g', 168000],
      ['Kluwak (keluak), dikupas dan dihaluskan', 100, 'g', 8000],
      ['Bawang merah', 150, 'g', 6750],
      ['Bawang putih', 60, 'g', 2400],
      ['Kemiri', 50, 'g', 3500],
      ['Kunyit, jahe, lengkuas', 120, 'g', 3000],
      ['Ketumbar dan jintan', 15, 'g', 1500],
      ['Serai, daun jeruk, daun salam', 1, 'ikat', 3000],
      ['Tauge pendek', 300, 'g', 6000],
      ['Beras untuk nasi', 1000, 'g', 12000],
      ['Telur asin', 10, 'butir', 30000],
      ['Kerupuk udang dan sambal terasi', 1, 'set', 13000],
      ['Garam dan gula', 30, 'g', 1000],
    ],
    langkah: [
      'Rebus daging dalam 3.000 ml air dengan api kecil 90 menit sampai empuk. Angkat, potong dadu 3 cm, dan timbang 80 g per porsi.',
      'Saring kaldu rebusan. Timbang: sekitar 2.600 ml.',
      'Haluskan bawang merah, bawang putih, kemiri, kunyit, jahe, lengkuas, ketumbar, jintan, dan kluwak. Timbang: sekitar 500 g bumbu halus.',
      'Tumis bumbu halus bersama serai, daun jeruk, dan daun salam sampai berminyak dan harum, sekitar 15 menit.',
      'Masukkan tumisan ke kaldu, masak 30 menit dengan api kecil, lalu masukkan daging. Koreksi garam dan gula di menit terakhir.',
      'Sajikan di mangkuk: nasi, 80 g daging, 300 ml kuah, tauge, telur asin, kerupuk udang, dan sambal terasi di sisi.',
    ],
    kritis: ['Kluwak harus dikupas dan dicicipi dulu; kluwak yang tidak matang membuat kuah pahit', 'Bumbu ditumis sampai berminyak sebelum masuk kaldu, jangan langsung dituang mentah'],
    konsisten: ['Timbang kluwak 100 g per 2.600 ml kaldu', 'Takar kuah dengan gayung 300 ml', 'Tauge disiram air panas sebentar di awal shift supaya tetap renyah'],
    simpan: 'Kuah 3 hari di kulkas; daging dan kuah disimpan terpisah dari tauge.',
  },
  {
    slug: 'sate-lilit',
    nama: 'Sate Lilit',
    asal: 'Bali',
    porsi: 8,
    ukuranPorsi: '5 tusuk (@ 40 g adonan) + nasi + sambal matah',
    persiapan: 60,
    masak: 40,
    pedas: 2,
    targetFoodCost: 35,
    ringkas: 'Adonan ikan berbumbu base genep yang dililit di batang serai; kandungan kelapa dan air menentukan apakah adonan menempel atau jatuh di bara.',
    bahan: [
      ['Daging ikan tenggiri giling', 1000, 'g', 90000],
      ['Kelapa parut kasar, disangrai', 200, 'g', 5000],
      ['Bawang merah', 100, 'g', 4500],
      ['Bawang putih', 50, 'g', 2000],
      ['Cabai merah', 80, 'g', 4800],
      ['Kemiri', 40, 'g', 2800],
      ['Jahe, lengkuas, kunyit, kencur', 100, 'g', 2500],
      ['Ketumbar dan merica', 15, 'g', 1500],
      ['Daun jeruk iris halus dan gula merah', 1, 'set', 3000],
      ['Batang serai untuk tusuk', 40, 'batang', 8000],
      ['Beras untuk nasi', 800, 'g', 9600],
      ['Sambal matah', 200, 'g', 9000],
    ],
    langkah: [
      'Haluskan bawang merah, bawang putih, cabai, kemiri, jahe, lengkuas, kunyit, kencur, ketumbar, dan merica. Tumis sebentar sampai harum, lalu dinginkan. Timbang: sekitar 400 g bumbu.',
      'Campur ikan giling dengan bumbu, kelapa sangrai, daun jeruk, dan gula merah. Uleni sampai adonan lengket dan kenyal.',
      'Timbang adonan 40 g per tusuk, lalu lilitkan pada batang serai yang sudah dibelah ujungnya.',
      'Dinginkan tusuk di kulkas 30 menit supaya adonan lebih padat.',
      'Panggang di atas bara sedang 8–10 menit, balik tiap 2 menit, olesi sedikit minyak kelapa.',
      'Sajikan 5 tusuk per porsi dengan nasi dan sambal matah di piring terpisah.',
    ],
    kritis: ['Adonan harus dingin saat dililit; adonan hangat meluncur dari serai', 'Bara sedang saja; api besar membuat luar gosong dan dalam masih mentah'],
    konsisten: ['Timbang 40 g adonan per tusuk', 'Kelapa disangrai per 200 g dan disimpan kedap udara', 'Bumbu dibuat per 400 g dan dibekukan dalam kantong berlabel tanggal'],
    simpan: 'Adonan mentah di kulkas 1 hari; tusuk matang 2 hari; sambal matah dibuat harian.',
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
  { nama: 'Kartu satuan', harga: 'Rp 350.000', satuan: 'per resep', cocok: 'Untuk mencoba dulu dengan satu menu andalan.', isi: ['Satu resep ditulis ulang dan diuji dua kali', 'Gramasi, urutan, dan titik kritis', 'HPP dari harga bahan di kota Anda'] },
  { nama: 'Paket menu daerah', harga: 'Rp 3.000.000', satuan: 'per 10 resep', cocok: 'Untuk restoran yang menunya berasal dari satu daerah.', isi: ['Sepuluh resep dari satu daerah', 'Kartu cetak berlaminasi untuk dapur', 'Pembaruan HPP gratis selama 6 bulan'] },
  { nama: 'Uji masak di dapur Anda', harga: 'Rp 4.500.000', satuan: 'per 2 hari', cocok: 'Untuk dapur yang resepnya sudah ada, tetapi belum pernah ditulis.', isi: ['Kami memasak bersama tim dapur Anda', 'Resep lama Anda distandarkan, bukan diganti', 'Pelatihan membaca kartu resep'] },
];

export const FAQ = [
  { t: 'Apakah resep keluarga kami akan diganti?', j: 'Tidak. Kami menulis ulang resep yang sudah ada menjadi takaran dan urutan yang bisa diulang. Rasanya tetap milik Anda.' },
  { t: 'Dari mana harga bahan untuk HPP?', j: 'Dari nota belanja dapur Anda sendiri bila tersedia; bila belum, dari harga pasar di kota Anda pada bulan yang sama. Harga di situs ini hanya contoh.' },
  { t: 'Apakah kartu resep gratisnya benar-benar lengkap?', j: 'Ya — tiga kartu lengkap dengan gramasi, urutan, titik kritis, dan HPP contoh. Anda boleh memakainya di dapur tanpa membeli apa pun.' },
  { t: 'Bagaimana dengan kerahasiaan resep?', j: 'Resep yang Anda serahkan tidak pernah kami terbitkan atau jual ke dapur lain. Perjanjian kerahasiaan ditandatangani sebelum uji masak.' },
];
