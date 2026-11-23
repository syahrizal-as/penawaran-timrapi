# Penawaran TimRapi untuk Ekauto Group

Halaman penawaran implementasi HRIS, presensi, dan payroll berdasarkan dokumen tanggal 21 November 2026.

## Menjalankan

Buka `index.html` langsung di browser. Tidak memerlukan instalasi atau build. Font Google dimuat saat internet tersedia; font sistem digunakan sebagai cadangan.

Alternatif pratinjau melalui server lokal:

```sh
python3 -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Fitur halaman

- Tampilan responsif untuk desktop dan ponsel.
- Rincian 12 kelompok fitur dalam panel yang dapat dibuka.
- Dua pilihan: langganan Rp10.000 per pengguna aktif per bulan atau jual lepas Rp25–30 juta sekali bayar.
- Simulasi biaya untuk skema langganan bulanan.
- Harga final dan cakupan layanan jual lepas mengikuti ruang lingkup yang disepakati.
- Navigasi bagian dan indikator progres membaca.
- Tombol cetak / simpan PDF; rincian otomatis dibuka saat mencetak.
- Tanpa blok isian tanda tangan kedua pihak.

## Berkas

| Berkas | Kegunaan |
| --- | --- |
| `index.html` | Isi dan struktur penawaran |
| `style.css` | Desain, tata letak responsif, dan gaya cetak |
| `tailwind.css` | Tailwind CSS yang telah dikompilasi |
| `app.js` | Kalkulator biaya, panel fitur, navigasi, dan cetak |
| `styles/tailwind.input.css` | Sumber untuk membangun ulang Tailwind |

Ubah teks penawaran melalui `index.html` dan desain melalui `style.css`.

## Membangun ulang Tailwind (opsional)

Halaman siap digunakan dengan CSS yang sudah disertakan. Jika menambahkan kelas Tailwind:

```sh
npm install
npm run build:css
```

## Lingkup

Repositori ini berisi halaman penawaran. Implementasi sistem HRIS, payroll, dan akses mobile produk TimRapi berada di luar repositori ini.
