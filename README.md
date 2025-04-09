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


