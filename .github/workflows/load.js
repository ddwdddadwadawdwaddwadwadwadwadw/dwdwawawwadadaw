window.onload = () => {
    setTimeout(() => {
        document.getElementById("loading-message").textContent = "Project Loaded";
        document.getElementById("loading-submessage").textContent = "Program Loaded. Please click continue to proceed.";

        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
        }, 2000);
    }, 3000);

    document.getElementById("continue-btn").addEventListener("click", function () {
        window.location.href = "index.html";
    });
};
