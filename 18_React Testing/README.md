# Apa itu testing
testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test Assertion ini adalah ekspresi Boolean yang mengembalikan nilai true kecuali ada bug di kode yang dibuat

# Manfaat testing
- Ketika aplikasi kita mempunyai coverage yang baik, kita akan merasa percaya diri jika harus mengubah suatau bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug

# Kategori Testing
secara umum testing dibagi menjadi 2 yaiut
1. Rendering Component Trees: di dalam enviroment test yang sudah disederhanakan dan ditegaskan pada keluarannya.
2. Menjalankan aplikasi lengkap: Di dalam enviroment peramban (browser) asli. ini dikenal sebagai test end-to-end (e2e)

# Tools yang bisa digunakan untuk testing
1. Jest
Test runner pada JavaScript yang memungkinkan mengakses DOM melalui jsdom. Sementara jsdom hanyalah perkiraan cara kerja browsers. seringkali cukup baik mengetes komponen pada React. Jest memberikan kecepata iterasi yang bagus dikombinasikan dengan fitur yang powerful seperti mocking modules dan timers.
2. React Testing Library
Merupakan perangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya. Pendekata ini membuat refactoring menjadi mudah dan juga mendorong kita untuk menerapkan best practices untuk aksesbilitas. Mungkin tidak memberikan cara untuk me-render secara "dangkal" pada sebuah komponen tanpa anak, test runner seperti jest yang memungkinkan kita melakukan mocking