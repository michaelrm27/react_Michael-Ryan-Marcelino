# React Redux
React Redux adalah libary untuk mengelola state aplikasi dalam aplikasi web React. Ini adalah implementasi Redux, yang merupakan manajemen state yang populer dalam aplikasi JavaScript. React redux dapat digunakan untuk menaruh data yang bersifat dinamis hal ini digunakan untutk mencegah terjadinya melempar props berulang pada setiap komponen atau yang disebut props drilling

# Kapan waktu yang tepat untuk menggunakan react redux?
- Ketika banyak state yang perlu diubah di banyak input atau banyak komponen
- State yang digunakan sering berubah atau bersifat dinamis
- Ukuran code yang besar dan dikerjakan banyak orang
- perlu unutk mengetahui bagaimana state diubah seiring waktu

# Bagimana menginstall react redux
Dengan menggunakan NPM
`npm install react redux`
Dengan menggunakan Yarn
`yarn add react-redux`

# Redux libary and Tools
dalam menggunakan redux terdapat beberapa optional yang dapat digunakan untuk membantu mendevelop code yang dibuat seperti
- React Redux
- Redux Toolkit
- Redux DevTools Extension

# Komponen utama Redux
- **Action**
Digunakan untuk memberikan informasi dari aplikasi ke store
- **Reducer**
Berisi javascript function yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state tersebut ke aplikasi kita
- **Store**
Wadah yang menampung state pada aplikasi kita

# Redux Thunk
Merupakan middleware untuk redux yang memungkinkan untuk membuat **Action Creator** yang mengembalikan **Function** bukan **Action**

Redux Thunk diperlukan untuk: 
- Menghandle side Effect
- Async login
