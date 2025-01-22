// 1. Login Forum Organisasi
document.getElementById("login-forum-form")?.addEventListener("submit", function (e) {
    e.preventDefault(); // Cegah form submit default

    const password = document.getElementById("forum-password").value;
    const validPassword = "1234567890"; // Password yang valid untuk Forum Organisasi

    // Cek password yang dimasukkan
    if (password === validPassword) {
        // Simpan akses user di localStorage
        localStorage.setItem("userType", "organisasi");
        alert("Login berhasil! Mengarahkan ke Forum Organisasi...");
        window.location.href = "Organisasi.html"; // Redirect ke halaman forum organisasi
    } else {
        alert("Password salah! Silakan coba lagi.");
    }
});

// 2. Login Library
document.getElementById("login-library-form")?.addEventListener("submit", function (e) {
    e.preventDefault(); // Cegah form submit default

    const password = document.getElementById("library-password").value;
    const validPassword = "1234567890"; // Password yang valid untuk Library

    // Cek password yang dimasukkan
    if (password === validPassword) {
        // Simpan akses user di localStorage
        localStorage.setItem("userType", "library"); // Set userType untuk akses Library
        alert("Login berhasil! Mengarahkan ke Perpustakaan...");
        window.location.href = "library.html"; // Redirect ke halaman perpustakaan
    } else {
        alert("Password salah! Silakan coba lagi.");
    }
});

// 3. Validasi Akses di Organisasi
if (window.location.pathname.includes("Organisasi.html")) {
    const userType = localStorage.getItem("userType");
    console.log("Di halaman Organisasi: userType =", userType);

    if (userType !== "organisasi") {
        alert("Anda tidak memiliki akses ke halaman ini!");
        window.location.href = "login_organisasi.html"; // Redirect ke login Organisasi
    }
}

// 4. Validasi Akses di Library
if (window.location.pathname.includes("library.html")) {
    const userType = localStorage.getItem("userType");
    console.log("Di halaman Library: userType =", userType);

    if (userType !== "library") {
        alert("Anda tidak memiliki akses ke halaman ini!");
        window.location.href = "login_library.html"; // Redirect ke login Library
    }
}

const notificationBell = document.getElementById("notification-bell");
const notificationList = document.getElementById("notification-list");

// Tampilkan atau sembunyikan notifikasi saat lonceng diklik
notificationBell.addEventListener("click", () => {
    notificationList.style.display = 
        notificationList.style.display === "block" ? "none" : "block";
});

// Data notifikasi (contoh)
const notifications = [
    "Pengumuman: Rapat OSIS besok pukul 10.00",
    "Informasi: Ujian akhir dimulai minggu depan",
    "Update: Sistem akan diperbarui malam ini"
];

// Tampilkan notifikasi
function loadNotifications() {
    notificationList.innerHTML = ""; // Bersihkan daftar notifikasi
    if (notifications.length > 0) {
        notifications.forEach((notif) => {
            const notifItem = document.createElement("p");
            notifItem.textContent = notif;
            notificationList.appendChild(notifItem);
        });
    } else {
        notificationList.innerHTML = "<p>Tidak ada notifikasi baru</p>";
    }
}

// Panggil fungsi saat halaman dimuat
window.addEventListener("load", loadNotifications);
