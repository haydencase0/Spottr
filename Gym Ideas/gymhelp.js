const selectElement = document.getElementById('type');
const displayArea = document.getElementById('video-display');

 
const videoMap = {
    strength: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hypertrophy: "https://www.youtube.com/embed/uegj4NbKD_s",
    powerlifting: "https://www.youtube.com/embed/EhGEgrfrANY",
    functional: "https://www.youtube.com/embed/4luM9Q_Sjhg",
    cardio: "https://www.youtube.com/embed/EhGEgrfrANY",
    mobility: "https://www.youtube.com/embed/4luM9Q_Sjhg"
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