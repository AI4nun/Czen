/* ============================================
   CZEN SHOP — database.js
   "Database" seed untuk aplikasi statis.
   Karena website ini murni HTML+JS (tanpa server),
   data di-persist ke localStorage browser dan di-seed
   dari file ini pada saat pertama kali dijalankan.
   ============================================ */

window.CZEN_DB = {
  // ── Produk awal (di-seed jika localStorage kosong) ──
  products: [
    {id:1,name:"Keramik Foto Mickey",img:"1",price:10000,desc:{detail:"Desain Mickey Mouse klasik yang timeless.",weight:"400g",dimension:"10cm x 5cm",color:"Hitam & Putih",appearance:"Glossy finish",material:"Keramik porselen grade A"}},
    {id:2,name:"Keramik Foto Baju",img:"2",price:10000,desc:{detail:"Desain kaos stylish untuk pecinta fashion.",weight:"380g",dimension:"10cm x 5cm",color:"Multi-warna",appearance:"Glossy premium",material:"Keramik stoneware"}},
    {id:3,name:"Keramik Foto Buah",img:"3",price:10000,desc:{detail:"Desain buah segar penuh warna.",weight:"390g",dimension:"10cm x 5cm",color:"Merah & Hijau",appearance:"Vibrant glossy",material:"Keramik porselen"}},
    {id:4,name:"Mickey Pantai",img:"4",price:10000,desc:{detail:"Mickey edisi liburan pantai tropis.",weight:"400g",dimension:"10cm x 5cm",color:"Kuning & Biru",appearance:"Tahan air & UV",material:"Keramik dolomit"}},
    {id:5,name:"Keramik Doll",img:"5",price:10000,desc:{detail:"Desain teddy bear menggemaskan.",weight:"370g",dimension:"10cm x 5cm",color:"Coklat Lembut",appearance:"Tekstur lembut",material:"Keramik stoneware"}},
    {id:6,name:"Keramik Foto Happy Time",img:"6",price:10000,desc:{detail:"Desain perayaan ceria dengan pita.",weight:"385g",dimension:"10cm x 5cm",color:"Pink & Gold",appearance:"Glossy premium",material:"Keramik porselen"}},
    {id:7,name:"Keramik Foto Sweet Bee",img:"7",price:10000,desc:{detail:"Desain lebah lucu pastel.",weight:"375g",dimension:"10cm x 5cm",color:"Kuning Pastel",appearance:"Matte soft",material:"Keramik dolomit"}},
    {id:8,name:"Keramik Foto Koala",img:"8",price:10000,desc:{detail:"Desain koala Australia menggemaskan.",weight:"395g",dimension:"10cm x 5cm",color:"Abu-abu",appearance:"Efek bulu halus",material:"Keramik porselen"}},
    {id:9,name:"Keramik Foto Bunga",img:"9",price:10000,desc:{detail:"Rangkaian bunga garden elegan.",weight:"390g",dimension:"10cm x 5cm",color:"Multi-warna floral",appearance:"Glossy vibrant",material:"Keramik porselen"}},
    {id:10,name:"Keramik Foto Sunset",img:"10",price:10000,desc:{detail:"Pemandangan senja dramatis.",weight:"400g",dimension:"10cm x 5cm",color:"Orange & Ungu",appearance:"Gradasi halus",material:"Keramik stoneware"}},
    {id:11,name:"Keramik Foto Anjing",img:"11",price:10000,desc:{detail:"Desain anjing lucu.",weight:"385g",dimension:"10cm x 5cm",color:"Coklat & Krem",appearance:"Matte natural",material:"Keramik dolomit"}},
    {id:12,name:"Keramik Foto Kelinci",img:"12",price:10000,desc:{detail:"Desain kelinci imut.",weight:"375g",dimension:"10cm x 5cm",color:"Putih & Pink",appearance:"Glossy soft",material:"Keramik porselen"}},
    {id:13,name:"Keramik Foto Burung",img:"13",price:10000,desc:{detail:"Desain burung cantik.",weight:"380g",dimension:"10cm x 5cm",color:"Biru & Kuning",appearance:"Detail tajam",material:"Keramik stoneware"}},
    {id:14,name:"Keramik Foto Bintang",img:"14",price:10000,desc:{detail:"Desain bintang malam magis.",weight:"390g",dimension:"10cm x 5cm",color:"Gold & Navy",appearance:"Efek shimmer",material:"Keramik porselen"}},
    {id:15,name:"Keramik Foto Hati",img:"15",price:10000,desc:{detail:"Desain hati romantis.",weight:"370g",dimension:"10cm x 5cm",color:"Merah & Pink",appearance:"Glossy premium",material:"Keramik dolomit"}},
    {id:16,name:"Keramik Foto Bulan",img:"16",price:10000,desc:{detail:"Desain bulan purnama dramatis.",weight:"395g",dimension:"10cm x 5cm",color:"Silver & Blue",appearance:"Efek moonlight",material:"Keramik stoneware"}},
    {id:17,name:"Keramik Foto Matahari",img:"17",price:10000,desc:{detail:"Desain matahari ceria.",weight:"385g",dimension:"10cm x 5cm",color:"Kuning & Orange",appearance:"Tahan pudar",material:"Keramik porselen"}},
    {id:18,name:"Keramik Foto Awan",img:"18",price:10000,desc:{detail:"Desain awan fluffy.",weight:"375g",dimension:"10cm x 5cm",color:"Putih & Biru",appearance:"Soft matte",material:"Keramik dolomit"}},
    {id:19,name:"Keramik Foto Pohon",img:"19",price:10000,desc:{detail:"Desain pohon menyegarkan.",weight:"390g",dimension:"10cm x 5cm",color:"Hijau Natural",appearance:"Earthy tone",material:"Keramik stoneware"}},
    {id:20,name:"Keramik Foto Ikan",img:"20",price:10000,desc:{detail:"Desain ikan koi elegan.",weight:"400g",dimension:"10cm x 5cm",color:"Orange & Putih",appearance:"Efek sisik metalik",material:"Keramik porselen"}},
    {id:21,name:"Keramik Foto Gajah",img:"21",price:10000,desc:{detail:"Desain gajah etnik bijaksana.",weight:"410g",dimension:"10cm x 5cm",color:"Abu-abu Etnik",appearance:"Tekstur alami",material:"Keramik stoneware"}},
    {id:22,name:"Keramik Foto Penguin",img:"22",price:10000,desc:{detail:"Desain penguin kutub lucu.",weight:"380g",dimension:"10cm x 5cm",color:"Hitam & Putih",appearance:"Detail tajam",material:"Keramik dolomit"}},
    {id:23,name:"Keramik Foto Lumba",img:"23",price:10000,desc:{detail:"Desain lumba-lumba ceria.",weight:"395g",dimension:"10cm x 5cm",color:"Biru Laut",appearance:"Efek ombak",material:"Keramik porselen"}}
  ],

  // ── Admin e-wallet dummy ──
  ewallet: { balance: 0, transactions: [] },

  // ── Admin credentials ──
  admin: { email: 'admin@czenshop.com', password: 'admin123' }
};

/* ── Seed helper: dipanggil app.js saat localStorage kosong ── */
window.CZEN_DB.seed = function(){
  if (!localStorage.getItem('czen_products')) {
    localStorage.setItem('czen_products', JSON.stringify(window.CZEN_DB.products));
  }
  if (!localStorage.getItem('czen_ewallet')) {
    localStorage.setItem('czen_ewallet', JSON.stringify(window.CZEN_DB.ewallet));
  }
  if (!localStorage.getItem('czen_wishlist')) {
    localStorage.setItem('czen_wishlist', '{}');
  }
  if (!localStorage.getItem('czen_reviews')) {
    localStorage.setItem('czen_reviews', '[]');
  }
  if (!localStorage.getItem('czen_bookings')) {
    localStorage.setItem('czen_bookings', '[]');
  }
};
