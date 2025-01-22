// Ambil tombol toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Cek status dark mode dari localStorage
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

if (isDarkMode) {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "Light Mode";
}

// Event listener untuk toggle dark mode
darkModeToggle.addEventListener("click", () => {
    const darkModeEnabled = document.body.classList.toggle("dark-mode");

    // Simpan preferensi ke localStorage
    localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");

    // Ubah teks tombol
    darkModeToggle.textContent = darkModeEnabled ? "Light Mode" : "Dark Mode";
});
