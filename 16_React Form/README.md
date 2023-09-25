# Form
Merupakan salah satu hal krusial dalam pengembangan aplikasi webstie. Form dapat digunakan untuk menghandle inputan dari user. Form banyak kita jumpai saat login, mendaftar, memberi feedback, dan mengisi data.

terdapat banyak elemen yang tersusun dalam form seperti contohnya input, radio, textarea, file, dan lain lain

# Controlled Component
Merupakan sebuah elemen yang nilainya di kontrol oleh react dengan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada react.

# Uncontrolled Component
merupakan alternatif lain dari controlled component dimana data form akan ditangani oleh DOM-nya. Untuk membuat uncontrolled component kita bisa menggunakan ref untuk mendapatkan nilai dari DOM

**Form controlled dan uncontrolled memiliki kelebihannya masing=maing. kita perlu mengevaluasi situasi kita dalam memilih untuk menggunakan form controlled component atau uncontrolled component**

Jika formulir sederhana kita bisa menggunakan uncontrolled component

# Form Validation
kita perlu untuk memvalidasi sebuah form yang kita buat agar bisa mengetahui input data yang benar dan sesuai format, serta untuk melindungi yang mengisi form, dan melindungi sistem kita

Terdapat 2 contoh validation
- Client Side Validation
dimana validasi ini dilakukan di sisi Client agar data sesuai dengan kebutuhan form. Kelebihan validasi dengan Client Side Validation adalah user-friendly. Karena jika hasil validasi tidak sesuai, user dapat langsung mengetahui kesalahannya
- Server Sida Validation
merupakan validasi yang dilakukan di sisi server. Server bertugas untuk memvalidasi data kembali sebelum disimpan ke dalam database, jika ditemukan kesalahan maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna.
Kekurangan dari server side valdation adalah tidak user friendly karena user harus menunggu hasil dari server sebelum mengetahui kesalahan. 