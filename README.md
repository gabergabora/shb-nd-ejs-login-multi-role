# shb-nd-ejs-login-multi-role - Aplikasi Login Multi Role dengan Node.js

## Software Apakah Ini?

shb-nd-ejs-login-multi-role adalah Aplikasi Login Multi Role dengan Node.js...

## Screenshot

![ScreenShot](.readme-assets/shb-nd-ejs-login-multi-role-1.png?raw=true)

## Cara Mencoba Kode Ini

### Cara Mencoba server-mongoose

Untuk mencoba kode server-mongoose, masuk ke dalam folder server-mongoose via command line.

Selanjutnya, buat file .env di dalam foldernya.

Selanjutnya, konfigurasi database setting dan lainnya di file .env sesuai dengan .env-example.

Kode server-mongoose membutuhkan MongoDB, jadi pastikan Anda telah menginstallnya dan membuat databasenya sesuai konfigurasi tadi.

Selanjutnya, jalankan:

```
npm install
```

Selanjutnya, jalankan:

```
npm run dev
```

Terakhir, buka browser Anda ke alamat yang tertera di BASE_URL yang ada di .env.

### Cara Mencoba server-knex

Untuk mencoba kode server-knex, buat file .env di dalam foldernya.

Selanjutnya, isi .env sesuai .env-example. Di sini Anda bisa mengubah port, environment, dan detail database.

Kode server-knex membutuhkan MySQL, jadi pastikan Anda telah menginstallnya dan membuat databasenya sesuai konfigurasi tadi.

Sekarang, pastikan Anda berada dalam folder server-knex.

Selanjutnya, jalankan:

```
npm install
```

Selanjutnya, jalankan:

```
npm run db:refresh
```

Selanjutnya, jalankan:

```
npm run dev
```

Terakhir, buka browser Anda ke alamat yang tertera di BASE_URL yang ada di .env.

## Pendahuluan

Kali ini, saya akan memberi contoh aplikasi login yang mendukung banyak role dengan Node.js.

Aplikasi ini juga memperlihatkan penggunaan middleware sebagai cara untuk memfilter user.

## Cara Kerja

Aplikasi ini menggunakan sistem login pada umumnya.

Pertama-tama user harus register dahulu.

Untuk enkripsi password-nya digunakan bcrypt.

Setelah login, user dapat mengakses member area.

Di member route, dilakukan filtering terhadap user.

Proses filtering dilakukan dengan menggunakan middleware.

Middleware yang saya gunakan dirancang untuk bisa memfilter beberapa role.

## Struktur Project

Untuk melihat struktur project aplikasi ini, silakan buka project ini di text editor.