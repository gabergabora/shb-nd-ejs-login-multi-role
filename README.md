# shb-nd-ejs-login-multi-role - Aplikasi Login Multi Role dengan Node.js

## Link-Link Penting

- TUTORIAL DAN SOFTWARE GRATIS: https://shbfrlnc.github.io/
- BLOG: https://shbfrlnc.github.io/tags/blog/
- PENGUMUMAN: https://shbfrlnc.github.io/tags/pengumuman/
- DUKUNG: https://shbfrlnc.github.io/dukung.html

## Software Apakah Ini?

shb-nd-ejs-login-multi-role adalah Aplikasi Login Multi Role dengan Node.js.

## Screenshot

![ScreenShot](.readme-assets/shb-nd-ejs-login-multi-role-1.png?raw=true)

## Cara Mencoba Kode Ini

Untuk mencoba kode ini, masuk ke dalam folder ini via terminal.

Selanjutnya, jalankan:

```
npm install
```

Selanjutnya, jalankan:

```
npm run dev
```

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