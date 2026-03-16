const selectElement = document.getElementById('exercise-select');
const displayArea = document.getElementById('video-display');

 
const videoMap = {
    pushups: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    squats: "https://www.youtube.com/embed/uegj4NbKD_s",
    pullups: "https://www.youtube.com/embed/EhGEgrfrANY",
    plank: "https://www.youtube.com/embed/4luM9Q_Sjhg"
    };


    selectElement.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        
        if (selectedValue && videoMap[selectedValue]) {
            // Replace the text with an actual video iframe
            displayArea.innerHTML = `
                <iframe width="100%" height="100%" 
                    src="${videoMap[selectedValue]}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameborder="0" allowfullscreen>
                </iframe>`;
        } else {
            displayArea.innerHTML = "<p>Select an exercise to see the form video!</p>";
    }
});