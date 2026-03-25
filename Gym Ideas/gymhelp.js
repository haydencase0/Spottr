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

let generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', buildWorkout);

function buildWorkout(){
    const type=document.getElementById("type").value;
    const level=document.getElementById("level").value;
    const time=document.getElementById("time").value;
    const equipment=document.getElementById("equipment").value;

    const data=generateWorkout(type,level,time,equipment);

    let html="<h2>Warmup</h2><ul>";
    data.warmup.forEach(w=>html+=`<li>${w}</li>`);
    html+="</ul>";

    html+="<h2>Workout</h2><ul>";
    data.workout.forEach(e=>{
        if(e.duration){
            html+=`<li><b>${e.name}</b> — ${e.duration}<br>${e.description}</li>`;
        }else{
            html+=`<li><b>${e.name}</b> — ${e.sets} sets x ${e.reps}<br>${e.description}</li>`;
        }

    });
    html+="</ul>";

    html+="<h2>Cooldown</h2><ul>";
    data.cooldown.forEach(c=>html+=`<li>${c}</li>`);
    html+="</ul>";

    html+=`<h3>Rest: ${data.rest}</h3>`;

    document.getElementById("results").innerHTML=html;
}