// ================================
// CineAI Studio - app.js
// Version 1.0
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const scriptBox =
        document.getElementById("scriptInput") ||
        document.querySelector("textarea");

    const generateBtn =
        document.getElementById("generateBtn") ||
        document.querySelector("button");

    const videoList =
        document.getElementById("videoList") ||
        document.getElementById("myVideos");

    if (!generateBtn) return;

    generateBtn.addEventListener("click", () => {

        const script = scriptBox ? scriptBox.value.trim() : "";

        if (script === "") {
            alert("Please enter your video script.");
            return;
        }

        generateBtn.disabled = true;
        generateBtn.innerHTML = "Generating...";

        setTimeout(() => {

            const video = document.createElement("div");

            video.className = "video-card";

            video.innerHTML = `
                <h3>🎬 Demo Video</h3>
                <p>${script.substring(0,120)}...</p>
                <button onclick="alert('Download feature coming soon!')">
                    Download
                </button>
            `;

            if (videoList) {

                if (
                    videoList.innerHTML.includes("No videos generated yet")
                ) {
                    videoList.innerHTML = "";
                }

                videoList.prepend(video);
            }

            alert("Demo video generated successfully!");

            generateBtn.disabled = false;
            generateBtn.innerHTML = "Generate Video";

            scriptBox.value = "";

        }, 2500);

    });

});
