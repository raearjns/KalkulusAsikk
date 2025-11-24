    // --- 1. ICONS & THEME ---
    const icons = {
      sun: `<svg class="icon icon-lg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
      moon: `<svg class="icon icon-lg" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
      bulb: `<svg class="icon" style="margin-right:8px" viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 3.48 1.97 5.32 3 7h8c1.03-1.68 3-3.52 3-7a7 7 0 0 0-7-7z"/></svg>`,
      apple: `<svg class="icon" style="margin-right:8px" viewBox="0 0 24 24"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>`,
      rocket: `<svg class="icon" style="margin-right:8px" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-9.5A2.7 2.7 0 0 1 13.5 1a2.7 2.7 0 0 1 1.5 1.5c1.8 3.75 3.5 7 9.5 2a22 22 0 0 1-9.5 2z"/></svg>`,
      chart: `<svg class="icon" style="margin-right:8px" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>`
    };

    // --- 2. DATA MATERI & CONTOH SOAL (PEMBAHASAN DETIL & KOMPLEKS) ---
    const materiContent = {
      "Pengertian Kalkulus": [
        {
          type: "Konsep Dasar (Laju Perubahan)",
          question: "Jelaskan bagaimana konsep limit membedakan antara laju perubahan rata-rata dan laju perubahan sesaat, menggunakan contoh fungsi posisi s(t).",
          answer: `<span class="step-title">Langkah 1: Definisi Laju Perubahan Rata-rata</span>
                   Laju perubahan rata-rata mengukur perubahan posisi benda dalam selang waktu tertentu [t₁, t₂]. Rumusnya adalah:
                   <span class="math-block">v_rata = (s(t₂) - s(t₁)) / (t₂ - t₁) = Δs / Δt</span>
                   Ini mirip dengan menghitung kecepatan rata-rata perjalanan dari kota A ke kota B tanpa peduli fluktuasi di tengah jalan.
                   <br><br>
                   <span class="step-title">Langkah 2: Masalah pada Laju Sesaat</span>
                   Laju sesaat adalah kecepatan tepat pada satu titik waktu t. Jika kita menggunakan rumus di atas, maka t₂ = t₁, sehingga penyebut (Δt) menjadi 0. Ini menghasilkan bentuk tak tentu 0/0.
                   <br><br>
                   <span class="step-title">Langkah 3: Solusi dengan Limit (Definisi Turunan)</span>
                   Kalkulus menggunakan konsep <strong>Limit</strong> untuk membuat selang waktu Δt mendekati nol (sangat kecil, tapi tidak nol).
                   <span class="math-block">v(t) = lim (Δt → 0) [ (s(t + Δt) - s(t)) / Δt ]</span>
                   Inilah inti kalkulus diferensial: mempelajari perubahan pada skala infinitesimal (sangat kecil) untuk mendapatkan nilai sesaat yang akurat.`
        },
        {
          type: "Aplikasi Optimasi Sederhana",
          question: "Seorang petani memiliki kawat pagar sepanjang 100 meter. Ia ingin memagari kandang berbentuk persegi panjang di tepi sungai yang lurus. Sisi yang berbatasan dengan sungai tidak perlu dipagar. Tentukan dimensi kandang agar luasnya maksimum.",
          answer: `<span class="step-title">Langkah 1: Modelkan Masalah</span>
                   Misalkan sisi tegak lurus sungai adalah x dan sisi sejajar sungai adalah y.
                   <br>Panjang kawat total = x + y + x = 2x + y = 100.
                   <br>Maka, y = 100 - 2x.
                   <br><br>
                   <span class="step-title">Langkah 2: Buat Fungsi Luas</span>
                   Luas (L) = panjang × lebar = y . x
                   <br>Substitusi y: L(x) = (100 - 2x)x = 100x - 2x².
                   <br><br>
                   <span class="step-title">Langkah 3: Gunakan Turunan untuk Mencari Maksimum</span>
                   Cari titik stasioner dengan L'(x) = 0.
                   <br>L'(x) = 100 - 4x
                   <br>0 = 100 - 4x  →  4x = 100  →  <strong>x = 25 meter</strong>.
                   <br><br>
                   <span class="step-title">Langkah 4: Hitung Dimensi Lain & Kesimpulan</span>
                   y = 100 - 2(25) = 50 meter.
                   <br>Jadi, agar luas maksimum (1250 m²), kandang harus berukuran <strong>25m x 50m</strong>.`
        }
      ],
      "Bilangan Real & Fungsi": [
        {
          type: "Pertidaksamaan Nilai Mutlak",
          question: "Tentukan himpunan penyelesaian dari pertidaksamaan nilai mutlak: <span class='math-block'>|3x - 2| ≥ |x + 4|</span>",
          answer: `<span class="step-title">Langkah 1: Kuadratkan Kedua Ruas</span>
                   Karena kedua ruas bernilai positif (sifat nilai mutlak), kita bisa mengkuadratkannya tanpa mengubah tanda pertidaksamaan.
                   <br>(3x - 2)² ≥ (x + 4)²
                   <br><br>
                   <span class="step-title">Langkah 2: Pindahkan dan Faktorkan (Ingat a² - b²)</span>
                   (3x - 2)² - (x + 4)² ≥ 0
                   <br>Gunakan rumus a² - b² = (a - b)(a + b).
                   <br>[(3x - 2) - (x + 4)] . [(3x - 2) + (x + 4)] ≥ 0
                   <br>(2x - 6)(4x + 2) ≥ 0
                   <br><br>
                   <span class="step-title">Langkah 3: Tentukan Pembuat Nol</span>
                   2x - 6 = 0 → x = 3
                   <br>4x + 2 = 0 → x = -1/2
                   <br><br>
                   <span class="step-title">Langkah 4: Uji Garis Bilangan</span>
                   Buat garis bilangan dengan titik -1/2 dan 3. Uji titik (misal x=0 di tengah): (negatif)(positif) = negatif.
                   <br>Pola tanda: (+) --- [-1/2] --- (-) --- [3] --- (+)
                   <br>Karena tanda pertidaksamaan "≥ 0", pilih daerah positif.
                   <br><strong>HP = { x | x ≤ -1/2 atau x ≥ 3 }</strong>`
        },
        {
          type: "Domain & Range Fungsi Akar",
          question: "Tentukan domain dan range dari fungsi: <span class='math-block'>f(x) = √(16 - x²)</span>",
          answer: `<span class="step-title">Langkah 1: Analisis Syarat Domain</span>
                   Akar kuadrat terdefinisi hanya jika bilangan di dalamnya tidak negatif.
                   <br>16 - x² ≥ 0
                   <br>(4 - x)(4 + x) ≥ 0
                   <br><br>
                   <span class="step-title">Langkah 2: Selesaikan Pertidaksamaan Domain</span>
                   Pembuat nol adalah x = 4 dan x = -4.
                   <br>Uji titik x=0: 16 - 0 > 0 (Positif/Memenuhi).
                   <br>Daerah penyelesaian ada di antara -4 dan 4.
                   <br><strong>Domain: [-4, 4]</strong>
                   <br><br>
                   <span class="step-title">Langkah 3: Analisis Range</span>
                   Nilai minimum di dalam akar adalah 0 (saat x=4 atau x=-4), maka √0 = 0.
                   <br>Nilai maksimum di dalam akar adalah 16 (saat x=0), maka √16 = 4.
                   <br>Karena fungsi kontinu, nilai f(x) bergerak dari 0 sampai 4.
                   <br><strong>Range: [0, 4]</strong>`
        }
      ],
      "Grafik Fungsi": [
        {
          type: "Analisis Fungsi Rasional",
          question: "Gambarlah sketsa grafik fungsi rasional berikut dengan menentukan asimtotnya: <span class='math-block'>f(x) = (3x - 6) / (x + 1)</span>",
          answer: `<span class="step-title">Langkah 1: Tentukan Asimtot Tegak</span>
                   Asimtot tegak terjadi saat penyebut nol (fungsi tak terdefinisi).
                   <br>x + 1 = 0 → <strong>x = -1</strong> (Garis vertikal putus-putus).
                   <br><br>
                   <span class="step-title">Langkah 2: Tentukan Asimtot Datar</span>
                   Lihat limit saat x mendekati tak hingga (bandingkan koefisien pangkat tertinggi).
                   <br>y = koefisien x pembilang / koefisien x penyebut
                   <br>y = 3 / 1 → <strong>y = 3</strong> (Garis horizontal putus-putus).
                   <br><br>
                   <span class="step-title">Langkah 3: Titik Potong Sumbu</span>
                   Sumbu X (y=0): 3x - 6 = 0 → 3x = 6 → <strong>(2, 0)</strong>
                   <br>Sumbu Y (x=0): y = (0 - 6)/(0 + 1) → <strong>(0, -6)</strong>
                   <br><br>
                   <span class="step-title">Langkah 4: Sketsa</span>
                   Gambar garis asimtot x=-1 dan y=3. Plot titik (2,0) dan (0,-6). Kurva akan berupa hiperbola yang mendekati kedua asimtot tersebut.`
        },
        {
          type: "Transformasi Grafik",
          question: "Jelaskan transformasi yang terjadi pada grafik y = x² untuk menjadi grafik: <span class='math-block'>y = -2(x - 3)² + 5</span>",
          answer: `<span class="step-title">Langkah 1: Translasi Horizontal</span>
                   Perhatikan (x - 3)². Ini berarti grafik dasar y=x² digeser ke <strong>KANAN sejauh 3 satuan</strong>.
                   <br><br>
                   <span class="step-title">Langkah 2: Dilatasi (Peregangan)</span>
                   Faktor pengali 2 di depan kurung berarti grafik mengalami peregangan vertikal (lebih kurus/curam) sebesar <strong>2 kali lipat</strong>.
                   <br><br>
                   <span class="step-title">Langkah 3: Refleksi</span>
                   Tanda negatif (-) di depan angka 2 berarti grafik <strong>dicerminkan terhadap sumbu X</strong> (terbuka ke bawah).
                   <br><br>
                   <span class="step-title">Langkah 4: Translasi Vertikal</span>
                   Konstanta +5 di akhir berarti grafik digeser ke <strong>ATAS sejauh 5 satuan</strong>.
                   <br>Puncak parabola berpindah dari (0,0) menjadi (3, 5).`
        }
      ],
      "Konsep Limit": [
        {
          type: "Limit Bentuk Tak Tentu (Akar)",
          question: "Hitung nilai limit berikut (kalikan sekawan): <span class='math-block'>lim (x→4) [ (√x - 2) / (x - 4) ]</span>",
          answer: `<span class="step-title">Langkah 1: Cek Substitusi</span>
                   (√4 - 2) / (4 - 4) = 0/0. (Bentuk Tak Tentu). Perlu manipulasi aljabar.
                   <br><br>
                   <span class="step-title">Langkah 2: Kalikan dengan Sekawan</span>
                   Kalikan pembilang dan penyebut dengan sekawan pembilang (√x + 2).
                   <br>Limit = [(√x - 2)(√x + 2)] / [(x - 4)(√x + 2)]
                   <br>= (x - 4) / [(x - 4)(√x + 2)]
                   <br><br>
                   <span class="step-title">Langkah 3: Sederhanakan dan Substitusi</span>
                   Coret faktor (x - 4) yang menyebabkan nol.
                   <br>= lim (x→4) [ 1 / (√x + 2) ]
                   <br>= 1 / (√4 + 2)
                   <br>= 1 / (2 + 2) = <strong>1/4</strong>`
        },
        {
          type: "Limit Tak Hingga (Rasional)",
          question: "Tentukan nilai limit tak hingga berikut: <span class='math-block'>lim (x→∞) [ (2x³ + 3x - 1) / (5 - x³) ]</span>",
          answer: `<span class="step-title">Langkah 1: Identifikasi Pangkat Tertinggi</span>
                   Pangkat tertinggi pada pembilang adalah x³.
                   <br>Pangkat tertinggi pada penyebut adalah x³.
                   <br>Karena pangkatnya sama, kita bisa menggunakan koefisiennya.
                   <br><br>
                   <span class="step-title">Langkah 2: Bagi dengan Pangkat Tertinggi (Metode Formal)</span>
                   Bagi semua suku dengan x³.
                   <br>Pembilang: 2 + 3/x² - 1/x³ → (saat x→∞, suku pecahan jadi 0) → 2
                   <br>Penyebut: 5/x³ - 1 → (saat x→∞, suku pecahan jadi 0) → -1
                   <br><br>
                   <span class="step-title">Langkah 3: Hasil Akhir</span>
                   Limit = 2 / -1 = <strong>-2</strong>`
        }
      ],
      "Kekontinuan Fungsi": [
        {
          type: "Mencari Nilai Konstanta",
          question: "Diketahui fungsi piecewise berikut. Tentukan nilai a dan b agar f(x) kontinu di semua bilangan real. <br> f(x) = { x + 1, jika x < 1 <br> ax + b, jika 1 ≤ x < 2 <br> 3x, jika x ≥ 2 }",
          answer: `<span class="step-title">Langkah 1: Syarat Kontinu di x = 1</span>
                   Limit kiri (x < 1) harus sama dengan Limit kanan (x ≥ 1).
                   <br>1 + 1 = a(1) + b
                   <br>2 = a + b ... (Persamaan 1)
                   <br><br>
                   <span class="step-title">Langkah 2: Syarat Kontinu di x = 2</span>
                   Limit kiri (x < 2) harus sama dengan Limit kanan (x ≥ 2).
                   <br>a(2) + b = 3(2)
                   <br>2a + b = 6 ... (Persamaan 2)
                   <br><br>
                   <span class="step-title">Langkah 3: Eliminasi</span>
                   (2a + b = 6) - (a + b = 2)
                   <br>a = 4
                   <br>Substitusi ke pers 1: 4 + b = 2 → b = -2
                   <br><strong>Nilai a = 4 dan b = -2</strong>`
        },
        {
          type: "Jenis Diskontinuitas",
          question: "Analisis kontinuitas fungsi f(x) = (x² - 9) / (x - 3) di titik x = 3. Jika diskontinu, tentukan jenisnya.",
          answer: `<span class="step-title">Langkah 1: Cek Nilai Fungsi f(3)</span>
                   f(3) = (3² - 9) / (3 - 3) = 0/0.
                   <br>Fungsi <strong>tidak terdefinisi</strong> di x = 3, jadi f(x) diskontinu di sana.
                   <br><br>
                   <span class="step-title">Langkah 2: Cek Nilai Limit</span>
                   lim (x→3) [(x - 3)(x + 3) / (x - 3)]
                   <br>= lim (x→3) (x + 3) = 6.
                   <br>Limitnya <strong>ada</strong>.
                   <br><br>
                   <span class="step-title">Langkah 3: Kesimpulan Jenis</span>
                   Karena limit ada tetapi fungsi tidak terdefinisi (berlubang), ini disebut <strong>Diskontinuitas yang Dapat Dihapus (Removable Discontinuity)</strong>. Kita bisa membuat fungsi ini kontinu dengan mendefinisikan f(3) = 6.`
        }
      ],
      "Konsep Turunan": [
        {
          type: "Aturan Rantai (Chain Rule)",
          question: "Tentukan turunan pertama dari fungsi trigonometri pangkat berikut: <span class='math-block'>y = sin³(2x² - 1)</span>",
          answer: `<span class="step-title">Langkah 1: Identifikasi Lapisan Fungsi</span>
                   Fungsi Luar (Pangkat): u³ → turunannya 3u²
                   <br>Fungsi Tengah (Trigo): sin(v) → turunannya cos(v)
                   <br>Fungsi Dalam (Aljabar): 2x² - 1 → turunannya 4x
                   <br><br>
                   <span class="step-title">Langkah 2: Terapkan Aturan Rantai</span>
                   y' = (Turunan Pangkat) . (Turunan Sinus) . (Turunan Sudut)
                   <br>y' = 3 sin²(2x² - 1) . cos(2x² - 1) . (4x)
                   <br><br>
                   <span class="step-title">Langkah 3: Sederhanakan</span>
                   Kalikan koefisien: 3 . 4x = 12x.
                   <br><strong>y' = 12x sin²(2x² - 1) cos(2x² - 1)</strong>`
        },
        {
          type: "Turunan Implisit",
          question: "Tentukan dy/dx dari persamaan lingkaran: <span class='math-block'>x² + y² = 25</span>",
          answer: `<span class="step-title">Konsep:</span>
                   y bukan fungsi eksplisit x, jadi anggap y sebagai y(x). Saat menurunkan y, kalikan dengan y' (dy/dx).
                   <br><br>
                   <span class="step-title">Langkah 1: Turunkan Kedua Ruas terhadap x</span>
                   d/dx (x²) + d/dx (y²) = d/dx (25)
                   <br>2x + 2y . y' = 0
                   <br><br>
                   <span class="step-title">Langkah 2: Isolasi y'</span>
                   2y . y' = -2x
                   <br>y' = -2x / 2y
                   <br><br>
                   <span class="step-title">Hasil Akhir:</span>
                   <strong>dy/dx = -x / y</strong>`
        }
      ],
      "Integral": [
        {
          type: "Integral Substitusi",
          question: "Selesaikan integral berikut: <span class='math-block'>∫ 6x (x² + 1)⁵ dx</span>",
          answer: `<span class="step-title">Langkah 1: Pilih u untuk Substitusi</span>
                   Pilih fungsi yang jika diturunkan mirip dengan sisa fungsi lain.
                   <br>Misal u = x² + 1.
                   <br>Maka, du/dx = 2x  →  du = 2x dx.
                   <br>Kita punya 6x dx di soal, yang sama dengan 3 . (2x dx) = 3 du.
                   <br><br>
                   <span class="step-title">Langkah 2: Ubah Integral ke Variabel u</span>
                   ∫ (x² + 1)⁵ . (6x dx)
                   <br>= ∫ u⁵ . 3 du
                   <br>= 3 ∫ u⁵ du
                   <br><br>
                   <span class="step-title">Langkah 3: Integralkan dan Kembalikan ke x</span>
                   = 3 [ (1/6) u⁶ ] + C
                   <br>= (1/2) u⁶ + C
                   <br>= <strong>(1/2) (x² + 1)⁶ + C</strong>`
        },
        {
          type: "Integral Tentu (Luas Daerah)",
          question: "Hitung luas daerah yang dibatasi oleh kurva y = x² dan garis y = 4x di kuadran I.",
          answer: `<span class="step-title">Langkah 1: Cari Titik Potong</span>
                   x² = 4x
                   <br>x² - 4x = 0
                   <br>x(x - 4) = 0 → x = 0 dan x = 4.
                   <br>Jadi batas integralnya dari 0 sampai 4.
                   <br><br>
                   <span class="step-title">Langkah 2: Tentukan Fungsi Atas dan Bawah</span>
                   Dalam interval (0, 4), misal x=1:
                   <br>y₁ = 1² = 1 (Parabola)
                   <br>y₂ = 4(1) = 4 (Garis)
                   <br>Garis ada di atas parabola. Rumus Luas = ∫ (Atas - Bawah) dx.
                   <br><br>
                   <span class="step-title">Langkah 3: Hitung Integral</span>
                   L = ∫[0→4] (4x - x²) dx
                   <br>= [ 2x² - (1/3)x³ ] dari 0 sampai 4
                   <br>= (2(16) - 64/3) - (0)
                   <br>= 32 - 21.33
                   <br>= <strong>10.67 satuan luas</strong> (atau 32/3)`
        }
      ]
    };

    // --- 3. BANK SOAL LATIHAN (PILIHAN GANDA) ---
    const questionBank = {
      "Bilangan Real & Fungsi": [
        { q: "Manakah yang bukan bilangan rasional?", options: ["1/2", "0.75", "√2", "5"], ans: 2 },
        { q: "Domain dari f(x) = √x adalah...", options: ["x > 0", "x ≥ 0", "x < 0", "Semua bilangan real"], ans: 1 },
        { q: "Jika f(x) = 2x + 1, maka f(3) adalah...", options: ["6", "7", "5", "8"], ans: 1 },
        { q: "Himpunan penyelesaian x² > 9 adalah...", options: ["x > 3", "x < -3 atau x > 3", "-3 < x < 3", "x > -3"], ans: 1 },
        { q: "Fungsi ganjil memiliki simetri terhadap...", options: ["Sumbu Y", "Sumbu X", "Titik Asal (0,0)", "Garis y=x"], ans: 2 }
      ],
      "Grafik Fungsi": [
        { q: "Grafik y = x² berbentuk...", options: ["Garis lurus", "Lingkaran", "Parabola", "Hiperbola"], ans: 2 },
        { q: "Titik potong sumbu Y untuk y = 2x + 4 adalah...", options: ["(0, 4)", "(4, 0)", "(0, 2)", "(2, 0)"], ans: 0 },
        { q: "Grafik y = (x-2)² adalah geseran y=x² ke...", options: ["Kiri 2 satuan", "Kanan 2 satuan", "Atas 2 satuan", "Bawah 2 satuan"], ans: 1 },
        { q: "Gradien garis y = 3x - 5 adalah...", options: ["-5", "3", "5", "-3"], ans: 1 },
        { q: "Fungsi konstan grafiknya berupa...", options: ["Garis horizontal", "Garis vertikal", "Miring ke kanan", "Miring ke kiri"], ans: 0 }
      ],
      "Konsep Limit": [
        { q: "lim(x→2) dari 3x adalah...", options: ["3", "5", "6", "0"], ans: 2 },
        { q: "Bentuk tak tentu dalam limit adalah...", options: ["0/1", "1/0", "0/0", "∞/1"], ans: 2 },
        { q: "lim(x→∞) 1/x adalah...", options: ["∞", "1", "0", "Tak terdefinisi"], ans: 2 },
        { q: "Limit kiri dan limit kanan harus ... agar limit ada.", options: ["Berbeda", "Sama", "Bernilai 0", "Bernilai positif"], ans: 1 },
        { q: "lim(x→3) (x²-9)/(x-3) adalah...", options: ["0", "3", "6", "9"], ans: 2 }
      ],
      "Kekontinuan Fungsi": [
        { q: "Syarat fungsi kontinu di x=c, KECUALI...", options: ["f(c) ada", "lim x→c ada", "lim x→c = f(c)", "f(c) bernilai 0"], ans: 3 },
        { q: "Fungsi f(x) = 1/x diskontinu di...", options: ["x = 1", "x = 0", "x = -1", "Semua x"], ans: 1 },
        { q: "Jenis diskontinuitas pada grafik 'lompat' disebut...", options: ["Removable", "Jump", "Infinite", "Asymptote"], ans: 1 },
        { q: "Polinomial (suku banyak) selalu kontinu di...", options: ["x > 0", "x < 0", "Semua bilangan real", "Interval tertentu"], ans: 2 },
        { q: "Jika grafik berlubang di satu titik, disebut diskontinuitas...", options: ["Loncat", "Tak Hingga", "Dapat dihapus (Removable)", "Biasa"], ans: 2 }
      ],
      "Konsep Turunan": [
        { q: "Turunan dari f(x) = 5 adalah...", options: ["5", "5x", "0", "1"], ans: 2 },
        { q: "Jika f(x) = x³, maka f'(x) = ...", options: ["3x²", "2x³", "x²", "3x"], ans: 0 },
        { q: "Turunan menyatakan...", options: ["Luas area", "Volume", "Gradien garis singgung", "Panjang kurva"], ans: 2 },
        { q: "Turunan dari sin(x) adalah...", options: ["-sin(x)", "-cos(x)", "cos(x)", "tan(x)"], ans: 2 },
        { q: "Jika y = 2x + 3, maka y' = ...", options: ["2", "3", "2x", "0"], ans: 0 }
      ],
      "Integral": [
        { q: "Integral adalah kebalikan dari...", options: ["Limit", "Turunan", "Fungsi", "Logaritma"], ans: 1 },
        { q: "∫ 2x dx = ...", options: ["x² + C", "2x² + C", "x + C", "2 + C"], ans: 0 },
        { q: "∫ xⁿ dx = ...", options: ["nxⁿ⁻¹", "xⁿ⁺¹/(n+1)", "xⁿ⁺¹", "xⁿ/n"], ans: 1 },
        { q: "Integral tentu digunakan untuk menghitung...", options: ["Gradien", "Kecepatan", "Luas Daerah", "Percepatan"], ans: 2 },
        { q: "∫ 5 dx = ...", options: ["0", "5", "5x + C", "x⁵ + C"], ans: 2 }
      ]
    };

    // --- 4. LOGIKA KUIS (JS) ---
    let currentQuizQ = [];
    let currentQIndex = 0;
    let userAnswers = []; // Menyimpan jawaban user: [indexJawaban, indexJawaban, ...]
    
    // Inisialisasi Menu Latihan
    function initLatihanMenu() {
      const dashboard = document.getElementById('latihan-dashboard');
      const specialCard = dashboard.querySelector('.latihan-special-card');
      dashboard.innerHTML = ''; 
      
      const topicIcons = {
        "Bilangan Real & Fungsi": "ƒ(x)",
        "Grafik Fungsi": icons.chart, 
        "Konsep Limit": "→",
        "Kekontinuan Fungsi": "∞",
        "Konsep Turunan": "dy/dx",
        "Integral": "∫"
      };

      Object.keys(questionBank).forEach(topic => {
        const card = document.createElement('div');
        card.className = 'latihan-topic-card';
        card.onclick = () => startQuiz(topic);
        
        let iconDisplay = topicIcons[topic] || "?";
        let customStyle = "";
        if (topic === "Bilangan Real & Fungsi" || topic === "Konsep Turunan") {
            customStyle = "font-size: 1.2rem;"; 
        }

        card.innerHTML = `
          <div class="latihan-icon-wrap" style="${customStyle}">${iconDisplay}</div>
          <div class="latihan-info">
            <div class="latihan-card-title">${topic}</div>
            <div class="latihan-meta">5 Soal • Tingkat Dasar</div>
          </div>
          <div class="latihan-arrow">➜</div>
        `;
        dashboard.appendChild(card);
      });
      if(specialCard) dashboard.appendChild(specialCard);
    }

    function startQuiz(topic) {
      // 1. Siapkan Soal
      if(topic === 'final') {
        let allQ = [];
        Object.values(questionBank).forEach(arr => allQ.push(...arr));
        allQ.sort(() => Math.random() - 0.5);
        currentQuizQ = allQ.slice(0, 15);
        document.getElementById('quiz-topic-label').textContent = "Latihan Akhir (15 Soal)";
      } else {
        currentQuizQ = [...questionBank[topic]]; 
        document.getElementById('quiz-topic-label').textContent = topic;
      }

      // 2. Reset State
      currentQIndex = 0;
      userAnswers = new Array(currentQuizQ.length).fill(null); // Reset jawaban
      
      // 3. Tampilkan UI Kuis
      document.getElementById('latihan-hero').style.display = 'none';
      document.getElementById('latihan-dashboard').style.display = 'none';
      document.getElementById('quiz-result').style.display = 'none';
      document.getElementById('quiz-interface').style.display = 'block';
      
      showQuestion();
    }

    function showQuestion() {
      const qData = currentQuizQ[currentQIndex];
      document.getElementById('quiz-question').textContent = qData.q;
      
      // Update Progress Bar
      const percent = ((currentQIndex) / currentQuizQ.length) * 100;
      document.getElementById('quiz-progress').style.width = percent + '%';

      const optionsDiv = document.getElementById('quiz-options');
      optionsDiv.innerHTML = '';

      qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        
        // Cek apakah user sudah menjawab soal ini sebelumnya
        if (userAnswers[currentQIndex] === idx) {
            btn.classList.add('selected');
        }

        btn.textContent = opt;
        btn.onclick = () => selectOption(idx);
        optionsDiv.appendChild(btn);
      });

      // Update Navigasi Buttons
      const btnPrev = document.getElementById('btn-prev-q');
      const btnNext = document.getElementById('btn-next-q');

      // Button Sebelumnya
      if (currentQIndex === 0) {
        btnPrev.disabled = true;
      } else {
        btnPrev.disabled = false;
      }

      // Button Selanjutnya / Selesai
      if (currentQIndex === currentQuizQ.length - 1) {
        btnNext.textContent = "Selesai";
        btnNext.classList.add('finish');
        btnNext.onclick = finishQuiz;
      } else {
        btnNext.textContent = "Selanjutnya →";
        btnNext.classList.remove('finish');
        btnNext.onclick = nextQuestion;
      }
    }

    function selectOption(idx) {
        // Simpan jawaban
        userAnswers[currentQIndex] = idx;
        
        // Update tampilan visual langsung
        const options = document.querySelectorAll('.quiz-option-btn');
        options.forEach((btn, i) => {
            if (i === idx) btn.classList.add('selected');
            else btn.classList.remove('selected');
        });
    }

    function prevQuestion() {
        if(currentQIndex > 0) {
            currentQIndex--;
            showQuestion();
        }
    }

    function nextQuestion() {
        if(currentQIndex < currentQuizQ.length - 1) {
            currentQIndex++;
            showQuestion();
        }
    }

    function finishQuiz() {
      // Hitung Skor
      let correctCount = 0;
      currentQuizQ.forEach((q, index) => {
          if (userAnswers[index] === q.ans) {
              correctCount++;
          }
      });

      document.getElementById('quiz-interface').style.display = 'none';
      const resDiv = document.getElementById('quiz-result');
      resDiv.style.display = 'block';
      
      // Hitung nilai (skala 100)
      const finalScore = Math.round((correctCount / currentQuizQ.length) * 100);
      
      document.getElementById('score-value').textContent = finalScore;
      
      let msg = "";
      if(finalScore === 100) msg = "Sempurna! Kamu jenius!";
      else if(finalScore >= 80) msg = "Hebat! Pertahankan!";
      else if(finalScore >= 60) msg = "Bagus, teruslah berlatih!";
      else msg = "Jangan menyerah, coba lagi ya!";
      
      document.getElementById('score-message').textContent = msg;
    }

    function resetQuiz() {
      document.getElementById('quiz-result').style.display = 'none';
      // Tampilkan kembali Hero & Dashboard
      document.getElementById('latihan-hero').style.display = 'block';
      document.getElementById('latihan-dashboard').style.display = 'grid';
    }

    // --- FUNGSI BARU: CUSTOM MODAL LOGIC ---
    function quitQuiz() {
      // Tampilkan modal custom
      document.getElementById('exit-modal').style.display = 'flex';
    }

    function closeExitModal() {
      // Sembunyikan modal custom
      document.getElementById('exit-modal').style.display = 'none';
    }

    function confirmExit() {
      // Aksi keluar yang sebenarnya
      closeExitModal();
      document.getElementById('quiz-interface').style.display = 'none';
      document.getElementById('latihan-hero').style.display = 'block';
      document.getElementById('latihan-dashboard').style.display = 'grid';
    }

    // --- 5. GENERAL APP LOGIC ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    function updateThemeIcon(theme) { if(themeBtn) themeBtn.innerHTML = theme === 'dark' ? icons.sun : icons.moon; }
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    if(themeBtn) {
      themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
      });
    }

    const navLinks = document.getElementById('nav-links');
    function toggleMenu() { if(navLinks) navLinks.classList.toggle('active'); }

    function navigateTo(pageId) {
      if(navLinks) navLinks.classList.remove('active');
      document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
      const target = document.getElementById(pageId);
      if(target) target.classList.add('active');
      
      // Update Menu Active State
      document.querySelectorAll('.nav-links button').forEach(btn => btn.classList.remove('active-link'));
      if(pageId === 'materi-detail') document.getElementById('btn-materi').classList.add('active-link');
      else {
        const btn = document.getElementById('btn-' + pageId);
        if(btn) btn.classList.add('active-link');
      }
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // --- 6. LOGIKA SLIDER (RESTORED & FIXED) ---
    let factIndex = 0;
    let slideInterval;
    const facts = [
      { title: "Asal Simbol", icon: icons.bulb, desc: "Simbol integral (∫) adalah huruf 'S' memanjang dari kata 'Summa' (Penjumlahan)." },
      { title: "Newton & Leibniz", icon: icons.apple, desc: "Mereka menemukan kalkulus secara terpisah di waktu yang sama pada abad ke-17." },
      { title: "Roket & Limit", icon: icons.rocket, desc: "Kalkulus penting untuk menghitung bahan bakar roket yang bobotnya berubah tiap detik." },
      { title: "Ekonomi", icon: icons.chart, desc: "Turunan digunakan dalam ekonomi untuk menghitung keuntungan marjinal suatu bisnis." }
    ];

    function initSlider() {
      const factEl = document.getElementById('fact-content');
      const dotsEl = document.getElementById('slider-dots');
      const sliderArea = document.getElementById('fact-slider-area');

      if (!factEl || !dotsEl) return;
      
      dotsEl.innerHTML = ''; 
      facts.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = i === 0 ? 'dot active' : 'dot';
        dot.onclick = () => { stopSlide(); showSlide(i); };
        dotsEl.appendChild(dot);
      });
      showSlide(0);
      startSlide();
      
      if(sliderArea) {
          sliderArea.addEventListener('mouseenter', stopSlide);
          sliderArea.addEventListener('mouseleave', startSlide);
      }
    }

    function showSlide(idx) {
      const factEl = document.getElementById('fact-content');
      if (!factEl) return;
      
      factEl.style.opacity = '0';
      factEl.style.transform = 'translateX(20px)';
      
      setTimeout(() => {
        factIndex = idx;
        factEl.innerHTML = `
          <h3 style="margin:0 0 8px 0; color:var(--muted); display:flex; align-items:center;">
            ${facts[idx].icon} ${facts[idx].title}
          </h3>
          <p style="margin:0; color:var(--text); line-height:1.5;">${facts[idx].desc}</p>
        `;
        
        document.querySelectorAll('.dot').forEach((d, i) => {
          d.classList.toggle('active', i === idx);
        });
        
        factEl.style.opacity = '1';
        factEl.style.transform = 'translateX(0)';
      }, 300);
    }

    // FUNGSI NAVIGASI SLIDER
    function nextSlide() { stopSlide(); showSlide((factIndex + 1) % facts.length); }
    function prevSlide() { stopSlide(); showSlide((factIndex - 1 + facts.length) % facts.length); }
    
    function startSlide() { 
        clearInterval(slideInterval);
        slideInterval = setInterval(() => showSlide((factIndex + 1) % facts.length), 3000); 
    }
    
    function stopSlide() { clearInterval(slideInterval); }

    // Init
    window.addEventListener('load', () => {
      initLatihanMenu();
      initSlider(); // Pastikan slider diinisialisasi
    });
    
    // --- DETAIL SLIDER LOGIC ---
    let detailCurrentSlide = 0;
    let detailTotalSlides = 0;

    function updateDetailSlider() {
        const wrapper = document.querySelector('.slider-wrapper');
        if(wrapper) {
            wrapper.style.transform = `translateX(-${detailCurrentSlide * 100}%)`;
        }
        // Update dots
        document.querySelectorAll('.detail-dot').forEach((d, i) => {
            d.classList.toggle('active', i === detailCurrentSlide);
        });
    }

    function nextDetailSlide() {
        if (detailTotalSlides > 1) {
            detailCurrentSlide = (detailCurrentSlide + 1) % detailTotalSlides;
            updateDetailSlider();
        }
    }

    function prevDetailSlide() {
        if (detailTotalSlides > 1) {
            detailCurrentSlide = (detailCurrentSlide - 1 + detailTotalSlides) % detailTotalSlides;
            updateDetailSlider();
        }
    }

    // Helper Detail (Updated for Slider)
    function openDetail(btnElement) {
        const title = btnElement.getAttribute('data-title');
        const desc = btnElement.getAttribute('data-desc');
        // Ambil data-image yang berisi string URL (bisa dipisah |)
        const imageSrcRaw = btnElement.getAttribute('data-image'); 

        const titleEl = document.getElementById('detail-title');
        const descEl = document.getElementById('detail-desc');
        const placeholderEl = document.getElementById('detail-placeholder');
        const sliderContainer = document.getElementById('slider-container');
        const soalContainer = document.getElementById('soal-list-container');

        // 1. Isi Header Materi
        if(titleEl) titleEl.textContent = title;
        if(descEl) descEl.textContent = desc;

        // 2. Logic Gambar / Slider
        sliderContainer.innerHTML = ''; // Reset slider
        
        if (imageSrcRaw && imageSrcRaw.trim() !== '') {
            const images = imageSrcRaw.split('|'); // Pisahkan URL berdasarkan |
            detailTotalSlides = images.length;
            detailCurrentSlide = 0;

            placeholderEl.style.display = 'none';
            sliderContainer.style.display = 'block';

            // Buat Wrapper Slider
            let sliderHTML = '<div class="slider-wrapper">';
            images.forEach(url => {
                sliderHTML += `<div class="slider-slide"><img src="${url}" class="detail-img" alt="Slide Materi"></div>`;
            });
            sliderHTML += '</div>';

            // Jika lebih dari 1 gambar, tambahkan navigasi (panah & dot)
            if (detailTotalSlides > 1) {
                sliderHTML += `
                    <button class="detail-slider-btn prev" onclick="prevDetailSlide()">&#10094;</button>
                    <button class="detail-slider-btn next" onclick="nextDetailSlide()">&#10095;</button>
                    <div class="detail-slider-dots">
                        ${images.map((_, i) => `<div class="detail-dot ${i===0?'active':''}" onclick="detailCurrentSlide=${i};updateDetailSlider()"></div>`).join('')}
                    </div>
                `;
            }

            sliderContainer.innerHTML = sliderHTML;

        } else {
            sliderContainer.style.display = 'none';
            placeholderEl.style.display = 'flex';
        }
        
        // Generate contoh soal (pembahasan)
        if(soalContainer) {
          soalContainer.innerHTML = '';
          const soalList = materiContent[title] || [];
          if(soalList.length > 0) {
            soalList.forEach((item, index) => {
               soalContainer.innerHTML += `
                <div class="soal-card">
                  <div class="soal-header"><span class="soal-badge">Soal ${index+1}</span><span class="soal-type">${item.type}</span></div>
                  <div class="soal-body"><span class="soal-label">SOAL:</span><div class="soal-question">${item.question}</div><div class="soal-divider"></div><span class="soal-label" style="color:var(--accent);">PEMBAHASAN:</span><div class="soal-answer">${item.answer}</div></div>
                </div>`;
            });
            document.getElementById('detail-soal-section').style.display = 'block';
          } else {
            document.getElementById('detail-soal-section').style.display = 'none';
          }
        }
        navigateTo('materi-detail');
    }