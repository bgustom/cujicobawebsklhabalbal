// 1. Login untuk Forum Organisasi
document.getElementById("login-forum-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("forum-password").value;
    const validPassword = "1234567890"; // Password yang valid

    if (password === validPassword) {
        // Set userType ke "organisasi" di localStorage
        localStorage.setItem("userType", "organisasi");
        alert("Login berhasil! Mengarahkan ke Forum Organisasi...");
        window.location.href = "Organisasi.html";
    } else {
        alert("Password salah! Silakan coba lagi.");
    }
});

// 2. Login untuk Library
document.getElementById("login-library-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("library-password").value;
    const validPassword = "1234567890"; // Password yang valid

    if (password === validPassword) {
        // Set userType ke "library" di localStorage
        localStorage.setItem("userType", "library");
        alert("Login berhasil! Mengarahkan ke Perpustakaan...");
        window.location.href = "library.html";
    } else {
        alert("Password salah! Silakan coba lagi.");
    }
});

// 3. Validasi akses di Forum Organisasi
if (window.location.pathname.includes("Organisasi.html")) {
    const userType = localStorage.getItem("userType");
    console.log("Di halaman Organisasi: userType =", userType);

    if (userType !== "organisasi") {
        alert("Anda tidak memiliki akses ke halaman ini!");
        window.location.href = "login_organisasi.html";
    }
}

// 4. Validasi akses di Library
if (window.location.pathname.includes("library.html")) {
    const userType = localStorage.getItem("userType");
    console.log("Di halaman Library: userType =", userType);

    if (userType !== "library") {
        alert("Anda tidak memiliki akses ke halaman ini!");
        window.location.href = "login_library.html";
    }
}

// 5. Notifikasi (Fitur Pengumuman)
const notificationBell = document.getElementById("notification-bell");
const notificationList = document.getElementById("notification-list");

if (notificationBell && notificationList) {
    notificationBell.addEventListener("click", () => {
        notificationList.style.display = 
            notificationList.style.display === "block" ? "none" : "block";
    });

    const notifications = [
        "Pengumuman: Rapat OSIS besok pukul 10.00",
        "Informasi: Ujian akhir dimulai minggu depan",
        "Update: Sistem akan diperbarui malam ini"
    ];

    function loadNotifications() {
        notificationList.innerHTML = ""; // Kosongkan daftar
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

    window.addEventListener("load", loadNotifications);
}

// 6. Debugging: Tampilkan userType saat ini di console
console.log("User type saat ini:", localStorage.getItem("userType"));
