/* ==========================
   HAMBURGER MENU TOGGLE
========================== */

// Ambil elemen hamburger
const hamburger = document.getElementById("hamburger");

// Ambil menu navigasi
const navMenu = document.getElementById("navMenu");

// Toggle menu saat hamburger diklik
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

/* ==========================
   TUTUP MENU SAAT KLIK LINK
========================== */

// Ambil semua link di menu
const navLinks = navMenu.querySelectorAll("a");

// Tutup menu setelah klik salah satu link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

/* ==========================
   TUTUP MENU SAAT KLIK AREA LUAR
========================== */

document.addEventListener("click", function (e) {
  // Jika klik BUKAN di hamburger & BUKAN di menu
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// =========================
// VALIDASI & KIRIM KE WHATSAPP
// =========================
function sendToWhatsApp(event) {
  event.preventDefault(); // mencegah reload halaman

  // Ambil nilai input
  const nama = document.getElementById("nama").value.trim();
  let wa = document.getElementById("wa").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  // =========================
  // VALIDASI INPUT KOSONG
  // =========================
  if (!nama || !wa || !pesan) {
    alert("Semua field wajib diisi.");
    return;
  }

  // =========================
  // BERSIHKAN NOMOR WA
  // =========================
  wa = wa.replace(/\D/g, ""); // hapus selain angka

  // =========================
  // KONVERSI FORMAT NOMOR
  // =========================
  if (wa.startsWith("08")) {
    wa = "62" + wa.substring(1); // 08xxx → 62xxx
  }

  // =========================
  // VALIDASI PANJANG NOMOR
  // =========================
  if (!wa.startsWith("62") || wa.length < 10 || wa.length > 15) {
    alert(
      "Nomor WhatsApp tidak valid.\nGunakan format 08xxxxxxxx atau 62xxxxxxxx.",
    );
    return;
  }

  // =========================
  // NOMOR ADMIN (GANTI)
  // =========================
  const adminNumber = "6281296410332"; // TANPA +

  // =========================
  // FORMAT PESAN
  // =========================
  const text =
    `Assalamu'alaikum Admin,%0A%0A` +
    `Nama: ${nama}%0A` +
    `No WA: ${wa}%0A` +
    `Pesan:%0A${pesan}`;

  // =========================
  // BUKA WHATSAPP
  // =========================
  window.open(`https://wa.me/${adminNumber}?text=${text}`, "_blank");
}

// =========================
// YEAR OTOMATIS DI FOOTER
// =========================
document.getElementById("year").textContent = new Date().getFullYear();
