# Medpoint System CMS

Aplikasi Web CMS yang memiliki fitur utama:
1. Auth dan User, Admin dapat login dan dapat mengelola profile pengguna
2. Reservations, Menampilkan list reservasi dan dapat dikelola oleh Super Admin seperti Booking, Reschedule dan Cancel Reservation
3. Data Doctor, Menampilkan list data Dokter yang dapat dikelola oleh super admin
4. Master Data, Menampilkan dan mengelola CRUD Data Master Faskes, Master data poli, master data layanan, dan data Address
5. Payment, Menampilkan Billing dan validasi pembayaran
6. Notifications, Allow to recieves and read notifications

Teknologi yang digunakan:
* Language: Typescript
* Framework: React JS
* Tool: Vite

Struktur Folder Project:
```
├── public                  # To save public file
├── src
    ├── assets              # Used to save asset like font, image, etc
    ├── components          # Used to store small components and their use is global.
    ├── pages               # Used to combine several components in the parts folder and perform some global logic which will later be used in the setup in navigation.
    ├── utils               # Used to store utilities that can be useful, such as date time format, custom hooks, ErrorUtils for error handling, etc.
    ├── App.tsx
    ├── index.css
    └── main.tsx
└── package.json
```

### How to Run
1. Make sure nodejs is installed in your machine
2. Run `npm install`
3. Run `npm run dev`
4. open web app on http://localhost:5173/

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

[v] Karena sudah inisialisasi project di task kemarin dan sudah cek konfigurasi dan integrasi supabase client sudah berhasil maka lanjut step berikutnya
[v] Instal package sweetaler2 untuk membuat alert dialog yang menarik
[v] Membuat reusable component input di folder src/components/Input

- Membuat file types.d.ts untuk definisi interface InputProps, data yang dibutuhkan :
    - containerClassName?: string
    - className?: string
    - label: string
    - placeholder?: string
    - id: string
    - type?: HTMLInputTypeAttribute
    - icon?: string;
    - onChange?: ChangeEventHandler<HTMLInputElement>;
- Membuat file index.tsx untuk menyimpan code react component input
    - Buat state untuk menyimpan type input password
    - Buat fungsi showHidePwd() untuk mengubah visibility password
    - buat componen dan implementasikan props type yang sudah dibuat

[v] Membuat reusable component button di folder src/components/Button

- Membuat file types.d.ts untuk definisi interface ButtonProps, data yang dibutuhkan :
    - type?: 'link' -> type button link akan menggunakan component Link dari react-router
    - isLoading?: boolean -> untuk menentukan loading state button jika true akan merender spinner dan tidak click able
    - children?: string -> string text yang dinamis
    - className?: string -> custom className yang nanti bisa dipakai saat component digunakan
    - isPrimary?: boolean -> variant button
    - isSecondary?: boolean -> variant button
    - isDanger?: boolean -> variant button
    - href?: string -> jika berbentuk link maka ini digunakan untuk redirect
    - onClick?: MouseEventHandler<HTMLButtonElement> -> function yang akan dijalankan ketika button diclick
    - isBlock?: boolean; -> jika true button akan memenuhi container
    - rightIcon?: string; -> icon sebelah kanan akan dirender jika dikirimkan nama icon nya
- Membuat file index.tsx untuk menyimpan code react component button
    - Buat variabel array classNames dan masukkan prop className ke array
    - Variant primary masukkan class classNames.push('bg-button-primary');
    - Variant secondary masukkan class classNames.push('bg-violet-700');
    - Variant danger masukkan class classNames.push('bg-red-600');
    - Button block masukkan classNames.push('block w-full py-2 px-4');
    - jika isLoading true kembalikan span dengan merender spinner dan text "Loading..." di dalamnya
    - jika type === 'link' kembalikan componen Link dari react-router
    - kembalikan tag button
    - masukkan classNames.join('') ke tag yang di kembalikan

[v] Membuat halaman Login di folder src/pages/Login.tsx

- Gunakan component input dan button yang sudah dibuat sebelumnya
- Buat state loginForm untuk menyimpan input email dan password dari user
- Buat function onChangeEmail() untuk melakukan perubahan state `loginForm.email` sesuai inputan user
- Buat function onChangePassword() untuk melakukan perubahan state `loginForm.password` sesuai inputan user
- Buat function submitLogin() untuk menghandle login dan melakukan request login menggunakan supabaseClient
- Buat pengecekan jika user sudah login maka langsung redirect ke halaman home (cek localStorage dengan key: access_token)

[v] Membuat halaman Home dashboard di folder src/pages/Dashboard.tsx

- Gunakan component button yang sudah dibuat sebelumnya
- Buat function handleLogout untuk melakukan request logout
- hapus localStorage dengan key access_token

[v] Konfigurasi PrivateRoute dengan membuat file di src/route/PrivateRoute.tsx

 - Ambil token dengan localStorage.getItem('access_token') jika tidak ada token langsung lempar ke halaman login
 - Masukkan Private route di konfigurasi routing di src/App.tsx
 - <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
    />
- jalankan aplikasi dengan command `npm run dev`
- cek apakah aplikasi berjalan dengan baik di http://localhost:5173/

[v] Evidence

- Berupa link github


