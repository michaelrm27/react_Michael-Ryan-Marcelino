# React Fundamentals

Ini adalah rangkuman singkat tentang beberapa konsep dasar dalam pengembangan aplikasi web dengan React. Silakan gunakan ini sebagai panduan awal kita dalam memahami dasar-dasar React.

### JSX (JavaScript XML)

JSX adalah ekstensi dari JavaScript yang digunakan dalam React untuk mendefinisikan tampilan antarmuka pengguna (UI) secara deklaratif. Ini memungkinkan kita untuk menggabungkan elemen-elemen HTML dengan kode JavaScript kita dalam satu file. Contoh:

```jsx
const element = <h1>Hello, React!</h1>;
```

### React Component

Komponen adalah blok dasar dalam pembangunan aplikasi React. Mereka adalah bagian dari UI yang dapat digunakan kembali dan dapat berisi logika dan tampilan mereka sendiri. Komponen dibagi menjadi dua jenis: komponen berbasis kelas (Class Components) dan komponen berbasis fungsi (Functional Components).

### Component Composition

React memungkinkan kita untuk menggabungkan komponen ke dalam komponen lain, yang disebut komposisi komponen. Ini adalah cara yang kuat untuk mengorganisir dan merancang aplikasi kita secara modular.

### React Lifecycle

Siklus hidup komponen adalah serangkaian metode yang dipanggil saat komponen dipasang, diperbarui, atau dihapus. Kita dapat menggunakan metode ini untuk mengelola logika tambahan, seperti memuat data saat komponen dipasang atau membersihkan sumber daya saat komponen dihapus.

### Condition and List Rendering

Dalam React, kita dapat menggunakan ekspresi kondisional untuk mengubah tampilan berdasarkan kondisi tertentu. Kita juga dapat melakukan pemetaan (mapping) melalui daftar data untuk membuat elemen-elemen React secara dinamis.

### Directory Structure

Struktur direktori dalam proyek React mungkin terlihat berbeda-beda tergantung pada preferensi kita atau struktur proyek yang kita gunakan. Namun, struktur umum mungkin mencakup direktori untuk komponen, file konfigurasi, sumber daya statis, dan file sumber.

### Styling Inline

Kita dapat menggabungkan gaya langsung ke dalam komponen React dengan menggunakan prop `style`. Ini memungkinkan kita untuk mengontrol gaya komponen secara dinamis sesuai dengan data atau kondisi.

Rangkuman ini dapat digunakan sebagai panduan awal kita untuk memahami konsep dasar dalam pengembangan dengan React. Untuk informasi lebih lanjut, kita dapat merujuk ke dokumentasi resmi React di [React Documentation](https://reactjs.org/).