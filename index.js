<script>
function updatePST() {
    const now = new Date();

    const options = {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    document.getElementById("pst-clock").textContent =
        now.toLocaleTimeString("en-PH", options);
}

setInterval(updatePST, 1000);
updatePST();
</script>