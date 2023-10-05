# Kita Memerlukan Build
Secara default react mengandung banyak pesan peringatan. Pesan peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan peringatan ini membuat react menjadi lebih besar dan lambat. Oleh karna itu kita harus menggunakan versi produksi ketika mendeploy aplikasi.

Tujuan melakukan build agar aplikasi kita menjadi versi production sehingga performanya lebih ringan dan cepat

# Build React App
Karena proyek kita dibangun menggunakan react atau vite kita bisa menggunakan

 `npm run bild`

ini akan membuat versi produksi untuk aplikasi kita di dalam folder build/. Ini hanya diperlukan sebelum mendeploy ke produksi. Unutk pengembangan normal kita menggunakan `npm start` atau `npm run dev`

# Run Optimized App
Untuk menjalankan aplikasi yang optimal di lokal komputer kita, kita bisa menggunakan serve

Install serve
`npm install -g serve`

Jalankan serve di lokal
`serve -s build`

# Deploy Dengan Vercell
Vercell merupakan platform end-to-end untuk developers, di vercell kita bisa membuat dan mendeploy aplikasi kita sehingga dapat diakses banyak orang.

Untuk melakukan deploy di vercel kita perlu:
- Login dengan GitHub
- Pilih Repository dari GitHub kita
- Deploy dengan Vercell
- Website kita bisa diakses

# Link Deployment
**https://react-kelasc-michaelryan.vercel.app/**