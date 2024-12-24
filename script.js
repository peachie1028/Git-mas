document.getElementById('loveCard').addEventListener('click', () => {
    document.getElementById('loveCard').style.display = 'none';
    document.getElementById('hiddenContent').style.display = 'block';
});
    // Snowflake generator
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄"; // You can change this to other snowflake symbols
        snowflake.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random fall speed
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Random size
        document.body.appendChild(snowflake);

        // Remove the snowflake after it falls
        setTimeout(() => {
            snowflake.remove();
        }, 5000); // Adjust this based on animation duration
    }

    // Generate snowflakes continuously
    setInterval(createSnowflake, 200);
    