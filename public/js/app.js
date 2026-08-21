/* ============================================
   CZEN SHOP — app.js (v2 — with admin)
   ============================================ */
(function(){
  'use strict';

  // ── Default products ─────────────────────────────────
  function mkd(desc,w,d,c,a,m){return{detail:desc,weight:w,dimension:d,color:c,appearance:a,material:m};}
  var DEFAULT_PRODUCTS = [
    {id:1,name:"Keramik Foto Mickey",img:"1",price:10000,desc:mkd("Desain Mickey Mouse klasik yang timeless, dibuat dengan teknik sablon premium di atas keramik berkualitas. Cocok untuk hadiah atau koleksi pribadi.","400g","10cm x 5cm","Hitam & Putih Klasik","Glossy finish dengan warna tajam dan tahan lama","Keramik porselen grade A")},
    {id:2,name:"Keramik Foto Baju",img:"2",price:10000,desc:mkd("Desain kaos stylish yang cocok untuk pecinta fashion. Dibuat dengan teknik cetak digital resolusi tinggi di atas keramik.","380g","10cm x 5cm","Multi-warna Cerah","Permukaan glossy dengan detail tajam","Keramik stoneware premium")},
    {id:3,name:"Keramik Foto Buah",img:"3",price:10000,desc:mkd("Desain buah segar penuh warna yang mencerahkan ruangan. Dibuat handmade dengan teknik sablon berkualitas.","390g","10cm x 5cm","Merah & Hijau segar","Finishing glossy, warna vibrant tahan pudar","Keramik porselen grade A")},
    {id:4,name:"Mickey Pantai",img:"4",price:10000,desc:mkd("Mickey Mouse edisi liburan pantai dengan nuansa tropis yang ceria. Cocok untuk dekorasi ruang santai atau kamar anak.","400g","10cm x 5cm","Kuning & Biru Tropis","Glossy finish, tahan air dan sinar UV","Keramik dolomit premium")},
    {id:5,name:"Keramik Doll",img:"5",price:10000,desc:mkd("Desain boneka teddy bear yang menggemaskan, dibuat dengan teknik sablon khusus agar detail bulu terlihat hidup.","370g","10cm x 5cm","Coklat Lembut","Tekstur glossy lembut, warna earth-tone hangat","Keramik stoneware premium")},
    {id:6,name:"Keramik Foto Happy Time",img:"6",price:10000,desc:mkd("Desain perayaan penuh keceriaan dengan pita dan confetti. Sempurna untuk hadiah ulang tahun atau momen spesial.","385g","10cm x 5cm","Pink & Gold Ceria","Glossy premium dengan aksen metalik gold","Keramik porselen grade A")},
    {id:7,name:"Keramik Foto Sweet Bee",img:"7",price:10000,desc:mkd("Desain lebah lucu dengan sentuhan warna pastel yang menggemaskan. Cocok untuk dekorasi kamar anak atau nursery.","375g","10cm x 5cm","Kuning Pastel & Hitam","Matte-soft finish, aman untuk anak","Keramik dolomit ringan")},
    {id:8,name:"Keramik Foto Koala",img:"8",price:10000,desc:mkd("Desain koala Australia yang menggemaskan dengan pose santai. Dibuat dengan teknik cetak presisi tinggi di atas keramik.","395g","10cm x 5cm","Abu-abu Natural","Permukaan glossy dengan efek bulu halus","Keramik porselen grade A")},
    {id:9,name:"Keramik Foto Bunga",img:"9",price:10000,desc:mkd("Desain rangkaian bunga garden yang elegan dan timeless. Dibuat dengan teknik sablon premium warna-warni.","390g","10cm x 5cm","Multi-warna Floral","Glossy vibrant, tahan lama tidak pudar","Keramik porselen grade A")},
    {id:10,name:"Keramik Foto Sunset",img:"10",price:10000,desc:mkd("Desain pemandangan matahari terbenam yang dramatis dan hangat. Cocok untuk menciptakan atmosfer cozy di ruangan Anda.","400g","10cm x 5cm","Orange & Ungu Senja","Glossy premium dengan gradasi warna halus","Keramik stoneware premium")},
    {id:11,name:"Keramik Foto Anjing",img:"11",price:10000,desc:mkd("Desain anjing lucu yang menggemaskan untuk pecinta hewan. Dibuat dengan teknik cetak digital berkualitas tinggi.","385g","10cm x 5cm","Coklat & Krem","Matte finish dengan detail bulu natural","Keramik dolomit ringan")},
    {id:12,name:"Keramik Foto Kelinci",img:"12",price:10000,desc:mkd("Desain kelinci imut dengan pose menggemaskan. Sempurna untuk hadiah Paskah atau dekorasi kamar anak.","375g","10cm x 5cm","Putih & Pink Soft","Glossy soft finish, warna pastel menenangkan","Keramik porselen grade A")},
    {id:13,name:"Keramik Foto Burung",img:"13",price:10000,desc:mkd("Desain burung cantik dengan detail bulu yang hidup. Dibuat handmade dengan teknik sablon presisi.","380g","10cm x 5cm","Biru & Kuning Cerah","Glossy finish dengan detail tajam","Keramik stoneware premium")},
    {id:14,name:"Keramik Foto Bintang",img:"14",price:10000,desc:mkd("Desain bintang malam yang magis dengan sentuhan glitter. Sempurna untuk dekorasi kamar tidur dengan tema langit.","390g","10cm x 5cm","Gold & Navy","Glossy dengan efek shimmer bintang","Keramik porselen grade A")},
    {id:15,name:"Keramik Foto Hati",img:"15",price:10000,desc:mkd("Desain hati romantis dengan warna-warna love yang hangat. Cocok untuk hadiah Valentine atau anniversary.","370g","10cm x 5cm","Merah & Pink Romantis","Glossy premium, warna love yang dalam","Keramik dolomit premium")},
    {id:16,name:"Keramik Foto Bulan",img:"16",price:10000,desc:mkd("Desain bulan purnama yang dramatis dengan latar langit malam. Menciptakan suasana tenang dan misterius.","395g","10cm x 5cm","Silver & Dark Blue","Matte-soft dengan efek moonlight","Keramik stoneware premium")},
    {id:17,name:"Keramik Foto Matahari",img:"17",price:10000,desc:mkd("Desain matahari ceria dengan sinar yang hangat. Memberikan energi positif untuk ruangan Anda.","385g","10cm x 5cm","Kuning & Orange Terang","Glossy vibrant, tahan pudar di bawah sinar","Keramik porselen grade A")},
    {id:18,name:"Keramik Foto Awan",img:"18",price:10000,desc:mkd("Desain awan fluffy dengan nuansa langit yang menenangkan. Cocok untuk menciptakan atmosfer dreamy di ruangan.","375g","10cm x 5cm","Putih & Biru Langit","Soft matte finish, warna calming","Keramik dolomit ringan")},
    {id:19,name:"Keramik Foto Pohon",img:"19",price:10000,desc:mkd("Desain pohon dengan dedaunan hijau yang menyegarkan. Membawa nuansa alam ke dalam ruangan Anda.","390g","10cm x 5cm","Hijau Natural","Glossy natural, warna earthy tone","Keramik stoneware premium")},
    {id:20,name:"Keramik Foto Ikan",img:"20",price:10000,desc:mkd("Desain ikan koi yang elegan dengan gerakan air yang mengalir. Simbol keberuntungan dan kemakmuran.","400g","10cm x 5cm","Orange & Putih Koi","Glossy premium dengan efek sisik metalik","Keramik porselen grade A")},
    {id:21,name:"Keramik Foto Gajah",img:"21",price:10000,desc:mkd("Desain gajah yang bijaksana dengan sentuhan etnik. Simbol kekuatan dan kebijaksanaan untuk dekorasi rumah.","410g","10cm x 5cm","Abu-abu Etnik","Matte finish dengan tekstur alami","Keramik stoneware premium")},
    {id:22,name:"Keramik Foto Penguin",img:"22",price:10000,desc:mkd("Desain penguin lucu dari kutub selatan yang menggemaskan. Cocok untuk koleksi hewan atau hadiah unik.","380g","10cm x 5cm","Hitam & Putih Kontras","Glossy finish dengan detail tajam","Keramik dolomit ringan")},
    {id:23,name:"Keramik Foto Lumba",img:"23",price:10000,desc:mkd("Desain lumba-lumba yang ceria melompat di lautan. Simbol kebebasan dan keceriaan untuk ruangan Anda.","395g","10cm x 5cm","Biru Laut & Silver","Glossy premium dengan efek ombak","Keramik porselen grade A")}
  ];

  // ── Products (persisted in localStorage) ─────────────
  var products = (function(){
    try {
      var saved = JSON.parse(localStorage.getItem('czen_products'));
      if (saved && saved.length) return saved;
    } catch(e) {}
    return JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  })();

  function saveProducts(){ localStorage.setItem('czen_products', JSON.stringify(products)); }

  // ── Orders (persisted) ───────────────────────────────
  var orders = (function(){
    try { return JSON.parse(localStorage.getItem('czen_orders') || '[]'); }
    catch(e) { return []; }
  })();

  function saveOrders(){ localStorage.setItem('czen_orders', JSON.stringify(orders)); }

  // ── Users DB (persisted) ─────────────────────────────
  var usersDB = (function(){
    try { return JSON.parse(localStorage.getItem('czen_users') || '[]'); }
    catch(e) { return []; }
  })();

  function saveUsers(){ localStorage.setItem('czen_users', JSON.stringify(usersDB)); }

  // ── Admin credentials ────────────────────────────────
  var ADMIN_EMAIL = 'admin@czenshop.com';
  var ADMIN_PASS  = 'admin123';

  // ── Custom stickers (admin-uploaded images) ─────────
  var customStickers = (function(){
    try { return JSON.parse(localStorage.getItem('czen_stickers') || '[]'); }
    catch(e) { return []; }
  })();
  function saveStickers(){ localStorage.setItem('czen_stickers', JSON.stringify(customStickers)); }

  // ── Custom frames/templates (admin-created) ─────────
  var customFrames = (function(){
    try { return JSON.parse(localStorage.getItem('czen_frames') || '[]'); }
    catch(e) { return []; }
  })();
  function saveFrames(){ localStorage.setItem('czen_frames', JSON.stringify(customFrames)); }

  // ═══════════════════════════════════════════════════════
  //  PUBLIC API
  // ═══════════════════════════════════════════════════════
  window.CZEN = {

    // ── Products ───────────────────────────────────────
    get products(){ return products; },
    set products(v){ products = v; saveProducts(); },
    find: function(id){ return products.find(function(p){return p.id===id;}); },

    // ── Product CRUD (admin) ───────────────────────────
    _products: {
      list: function(){ return products; },
      add: function(p){
        var maxId = products.reduce(function(m,x){return Math.max(m,x.id);},0);
        p.id = maxId + 1;
        products.push(p);
        saveProducts();
        return p;
      },
      update: function(id, data){
        var idx = products.findIndex(function(p){return p.id===id;});
        if(idx===-1) return null;
        Object.keys(data).forEach(function(k){ products[idx][k] = data[k]; });
        saveProducts();
        return products[idx];
      },
      remove: function(id){
        products = products.filter(function(p){return p.id!==id;});
        saveProducts();
      }
    },

    // ── Orders (admin + receipt) ───────────────────────
    _orders: {
      list: function(){ return orders; },
      add: function(o){
        // Preserve existing id; generate only if missing
        if (!o.id) o.id = 'ORD-'+Date.now().toString(36).toUpperCase();
        // Prevent duplicate orders with same id
        var existing = orders.find(function(x){ return x.id === o.id; });
        if (existing) {
          Object.keys(o).forEach(function(k){ existing[k] = o[k]; });
          saveOrders();
          return existing;
        }
        o.createdAt = o.createdAt || new Date().toISOString();
        orders.unshift(o);
        saveOrders();
        return o;
      },
      updateStatus: function(id, status){
        var o = orders.find(function(x){return x.id===id;});
        if(o){ o.status = status; saveOrders(); }
        return o;
      },
      remove: function(id){
        orders = orders.filter(function(x){return x.id!==id;});
        saveOrders();
      }
    },

    // ── Users (admin) ──────────────────────────────────
    _users: {
      list: function(){ return usersDB; },
      remove: function(email){
        usersDB = usersDB.filter(function(u){return u.email!==email;});
        saveUsers();
      },
      toggleBlock: function(email){
        var u = usersDB.find(function(x){return x.email===email;});
        if(u){ u.blocked = !u.blocked; saveUsers(); }
        return u;
      }
    },

    // ── Auth ───────────────────────────────────────────
    auth: {
      _current: (function(){
        try { return JSON.parse(localStorage.getItem('czen_user')||'null'); }
        catch(e){ return null; }
      })(),
      getUser: function(){ return this._current; },
      setUser: function(u){
        this._current = u;
        localStorage.setItem('czen_user', JSON.stringify(u));
      },
      logout: function(){
        this._current = null;
        localStorage.removeItem('czen_user');
      },
      loggedIn: function(){ return !!this._current; },
      isAdmin: function(){ return this._current && this._current.role === 'admin'; },
      name: function(){
        var u = this._current;
        return u ? (u.name || u.email || 'User') : '';
      },
      login: function(email, password){
        // Admin check
        if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
          this.setUser({ email: email, name: 'Admin CZEN', role: 'admin' });
          return { ok: true, admin: true };
        }
        // Registered user check
        var found = usersDB.find(function(u){
          return u.email === email && u.password === password;
        });
        if (found) {
          if (found.blocked) return { ok: false, msg: 'Akun Anda telah diblokir.' };
          this.setUser({ email: found.email, name: found.name, role: 'user' });
          return { ok: true, admin: false };
        }
        // Fallback: accept any email with password >=4 (demo mode)
        if (password && password.length >= 4) {
          this.setUser({ email: email, name: email.split('@')[0] || email, role: 'user' });
          return { ok: true, admin: false };
        }
        return { ok: false, msg: 'Email atau password salah.' };
      },
      register: function(name, email, password){
        var exists = usersDB.find(function(u){return u.email===email;});
        if (exists) return { ok: false, msg: 'Email sudah terdaftar.' };
        var user = { name: name, email: email, password: password, blocked: false, createdAt: new Date().toISOString() };
        usersDB.push(user);
        saveUsers();
        this.setUser({ email: email, name: name, role: 'user' });
        return { ok: true };
      },
      loginWithGoogle: function(name, email, picture){
        // Check if user already registered
        var exists = usersDB.find(function(u){return u.email===email;});
        if (exists) {
          if (exists.blocked) return { ok: false, msg: 'Akun Anda telah diblokir.' };
          this.setUser({ email: email, name: exists.name||name, role: 'user', picture: picture||exists.picture });
          return { ok: true, newUser: false };
        }
        var user = { name: name, email: email, password: null, provider: 'google', picture: picture||null, blocked: false, createdAt: new Date().toISOString() };
        usersDB.push(user);
        saveUsers();
        this.setUser({ email: email, name: name, role: 'user', picture: picture||null });
        return { ok: true, newUser: true };
      }
    },

    // ── Cart ───────────────────────────────────────────
    cart: {
      _load: function(){ try{return JSON.parse(localStorage.getItem('czen_cart')||'[]');}catch(e){return[];} },
      _save: function(items){ localStorage.setItem('czen_cart',JSON.stringify(items)); },
      add: function(id,qty){
        qty=qty||1; var items=this._load();
        var f=items.find(function(it){return it.id===id;});
        if(f)f.qty+=qty; else items.push({id:id,qty:qty});
        this._save(items); this.updateBadge();
      },
      remove: function(id){
        this._save(this._load().filter(function(it){return it.id!==id;}));
        this.updateBadge();
      },
      setQty: function(id,qty){
        if(qty<1){this.remove(id);return;}
        var items=this._load(); var f=items.find(function(it){return it.id===id;});
        if(f)f.qty=qty; else items.push({id:id,qty:qty});
        this._save(items); this.updateBadge();
      },
      items: function(){
        var self=this;
        return this._load().map(function(it){
          var p=window.CZEN.find(it.id);
          return p?{id:p.id,name:p.name,img:p.img,price:p.price,qty:it.qty,sub:p.price*it.qty}:null;
        }).filter(Boolean);
      },
      total: function(){ return this.items().reduce(function(a,i){return a+i.sub;},0); },
      count: function(){ return this._load().reduce(function(a,i){return a+i.qty;},0); },
      clear: function(){ this._save([]); this.updateBadge(); },
      updateBadge: function(){
        var c=this.count();
        document.querySelectorAll('.cart-badge').forEach(function(el){el.textContent=c;});
      }
    },

    // ── Format ─────────────────────────────────────────
    fmt: function(n){ return n.toLocaleString('id-ID'); },

    // ── Helpers ────────────────────────────────────────
    fmtDate: function(iso){
      try { return new Date(iso).toLocaleDateString('id-ID',{year:'numeric',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'}); }
      catch(e) { return iso; }
    },

    // ── Custom Stickers CRUD (admin) ──────────────────
    _stickers: {
      list: function(){ return customStickers; },
      add: function(s){
        s.id = 'stk-'+Date.now().toString(36);
        customStickers.push(s);
        saveStickers();
        return s;
      },
      remove: function(id){
        customStickers = customStickers.filter(function(s){return s.id!==id;});
        saveStickers();
      }
    },

    // ── Custom Frames/Templates CRUD (admin) ──────────
    _frames: {
      list: function(){ return customFrames; },
      add: function(f){
        f.id = 'frm-'+Date.now().toString(36);
        customFrames.push(f);
        saveFrames();
        return f;
      },
      update: function(id, data){
        var idx = customFrames.findIndex(function(f){return f.id===id;});
        if(idx===-1) return null;
        Object.keys(data).forEach(function(k){ customFrames[idx][k] = data[k]; });
        saveFrames();
        return customFrames[idx];
      },
      remove: function(id){
        customFrames = customFrames.filter(function(f){return f.id!==id;});
        saveFrames();
      }
    }
  };

  // ── Init ─────────────────────────────────────────────
  // Seed dari database.js jika localStorage kosong
  try {
    if (window.CZEN_DB && window.CZEN_DB.seed) window.CZEN_DB.seed();
  } catch(e){}

  document.addEventListener('DOMContentLoaded',function(){
    window.CZEN.cart.updateBadge();
  });

})();
