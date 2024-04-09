document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio');
    const fireworks = document.getElementById('fireworks');
    


    
    // Play the audio when reaching the end of the content
    window.addEventListener("scroll", function() {
        // Check if the user has scrolled to the bottom
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            audio.play().catch(function(error) {
                console.error("Failed to play audio:", error);
            });
        }
    });
});

setTimeout(function() {
    fireworks.style.display = "block"; // Show the fireworks container
}, 5000); // 5 seconds