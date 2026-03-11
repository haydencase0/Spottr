const selectElement = document.getElementById('exercise-select');
const displayArea = document.getElementById('video-display');

 
const videoMap = {
    pushups: "https://www.youtube.com/embed/",
    squats: "https://www.youtube.com/embed/",
    pullups: "https://www.youtube.com/embed/",
    plank: "https://www.youtube.com/embed/"
    };


    selectElement.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        
        if (selectedValue && videoMap[selectedValue]) {
            // Replace the text with an actual video iframe
            displayArea.innerHTML = `
                <iframe width="100%" height="100%" 
                    src="${videoMap[selectedValue]}" 
                    frameborder="0" allowfullscreen>
                </iframe>`;
        } else {
            displayArea.innerHTML = "<p>Select an exercise to see the form video!</p>";
    }
});