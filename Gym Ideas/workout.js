/* ===================================
WORKOUT GENERATOR DATABASE
=================================== */

const exercises = [

/* SQUAT */

{
id:1,
name:"Barbell Back Squat",
category:"squat",
equipment:"barbell",
difficulty:"intermediate",
types:["strength","powerlifting","hypertrophy"],
description:"Stand with barbell across upper back. Sit hips down and back until thighs are parallel, then drive through heels to stand."
},

{
id:2,
name:"Front Squat",
category:"squat",
equipment:"barbell",
difficulty:"advanced",
types:["strength","powerlifting"],
description:"Hold barbell on front shoulders with elbows high. Lower hips until thighs are parallel and drive upward."
},

{
id:3,
name:"Goblet Squat",
category:"squat",
equipment:"dumbbell",
difficulty:"beginner",
types:["strength","hypertrophy","functional"],
description:"Hold a dumbbell at chest level. Sit hips down keeping chest upright and push through heels to stand."
},

{
id:4,
name:"Leg Press",
category:"squat",
equipment:"machine",
difficulty:"beginner",
types:["hypertrophy","strength"],
description:"Push the platform away using your legs while keeping your back flat against the seat."
},

{
id:5,
name:"Hack Squat",
category:"squat",
equipment:"machine",
difficulty:"intermediate",
types:["hypertrophy"],
description:"Lower the sled until knees bend to about 90 degrees, then push back up through the heels."
},

{
id:6,
name:"Wall Sit",
category:"squat",
equipment:"bodyweight",
difficulty:"beginner",
types:["functional","mobility"],
description:"Lean against a wall and lower into a seated position with knees at 90 degrees, holding the position."
},

{
id:7,
name:"Standing Calf Raise",
category:"squat",
equipment:"bodyweight",
difficulty:"beginner",
types:["strength","hypertrophy"],
description:"Raise your heels off the floor by pushing through the balls of your feet."
},

{
id:8,
name:"Deadlift",
category:"hinge",
equipment:"barbell",
difficulty:"intermediate",
types:["strength","powerlifting"],
description:"Lift barbell from floor by extending hips and knees while keeping back flat."
},

{
id:9,
name:"Romanian Deadlift",
category:"hinge",
equipment:"barbell",
difficulty:"intermediate",
types:["strength","hypertrophy"],
description:"Push hips back with slight knee bend while lowering bar along thighs."
},

{
id:10,
name:"Trap Bar Deadlift",
category:"hinge",
equipment:"barbell",
difficulty:"beginner",
types:["strength","functional"],
description:"Stand inside trap bar and lift by driving feet into floor and extending hips."
},

{
id:11,
name:"Good Morning",
category:"hinge",
equipment:"barbell",
difficulty:"advanced",
types:["strength"],
description:"Hinge forward at hips with bar on upper back while maintaining a neutral spine."
},

{
id:12,
name:"Kettlebell Swing",
category:"hinge",
equipment:"kettlebell",
difficulty:"intermediate",
types:["functional","cardio"],
description:"Explosively drive hips forward to swing kettlebell to chest height."
},

{
id:13,
name:"Back Extension",
category:"hinge",
equipment:"bodyweight",
difficulty:"beginner",
types:["strength","hypertrophy"],
description:"Extend torso upward while supported on a back extension bench."
},

{
id:14,
name:"Glute Bridge",
category:"hinge",
equipment:"bodyweight",
difficulty:"beginner",
types:["hypertrophy","functional"],
description:"Lift hips upward while squeezing glutes with feet planted on floor."
},

{
id:15,
name:"Hip Thrust",
category:"hinge",
equipment:"barbell",
difficulty:"intermediate",
types:["hypertrophy","strength"],
description:"Rest shoulders on bench and drive hips upward with barbell across hips."
},

{
id:16,
name:"Bench Press",
category:"push",
equipment:"barbell",
difficulty:"intermediate",
types:["strength","powerlifting","hypertrophy"],
description:"Lower bar to chest then press upward until arms are extended."
},

{
id:17,
name:"Incline Bench Press",
category:"push",
equipment:"barbell",
difficulty:"intermediate",
types:["strength","hypertrophy"],
description:"Press bar upward from chest while lying on an incline bench."
},

{
id:18,
name:"Dumbbell Bench Press",
category:"push",
equipment:"dumbbell",
difficulty:"beginner",
types:["hypertrophy","strength"],
description:"Press dumbbells upward while lying flat on bench."
},

{
id:19,
name:"Pushups",
category:"push",
equipment:"bodyweight",
difficulty:"beginner",
types:["functional","strength"],
description:"Lower chest toward floor while maintaining straight body then push upward."
},

{
id:20,
name:"Dips",
category:"push",
equipment:"bodyweight",
difficulty:"intermediate",
types:["hypertrophy"],
description:"Lower body by bending elbows and push upward until arms are straight."
},

{
id:21,
name:"Overhead Press",
category:"push",
equipment:"barbell",
difficulty:"intermediate",
types:["strength","powerlifting"],
description:"Press barbell overhead from shoulder height until arms are fully extended."
},

{
id:22,
name:"Dumbbell Shoulder Press",
category:"push",
equipment:"dumbbell",
difficulty:"beginner",
types:["hypertrophy"],
description:"Press dumbbells upward from shoulder level."
},

{
id:23,
name:"Lateral Raises",
category:"push",
equipment:"dumbbell",
difficulty:"beginner",
types:["hypertrophy"],
description:"Lift dumbbells to the sides until arms reach shoulder height."
},

{
id:24,
name:"Cable Chest Fly",
category:"push",
equipment:"cable",
difficulty:"beginner",
types:["hypertrophy"],
description:"Bring cable handles together in front of chest with slight elbow bend."
},

{
id:25,
name:"Pullups",
category:"pull",
equipment:"bodyweight",
difficulty:"intermediate",
types:["strength","functional","powerlifting"],
description:"Pull your body upward until chin clears the bar."
},

{
id:26,
name:"Lat Pulldown",
category:"pull",
equipment:"machine",
difficulty:"beginner",
types:["hypertrophy","strength"],
description:"Pull bar down toward chest while keeping torso upright."
},

{
id:27,
name:"Barbell Row",
category:"pull",
equipment:"barbell",
difficulty:"intermediate",
types:["strength","hypertrophy","powerlifting"],
description:"Pull bar toward lower ribs while maintaining bent-over position."
},

{
id:28,
name:"Seated Cable Row",
category:"pull",
equipment:"machine",
difficulty:"beginner",
types:["hypertrophy"],
description:"Pull cable handle toward torso while squeezing shoulder blades."
},

{
id:29,
name:"Face Pull",
category:"pull",
equipment:"cable",
difficulty:"beginner",
types:["hypertrophy","mobility"],
description:"Pull rope toward face while keeping elbows high."
},

{
id:30,
name:"Single Arm Dumbbell Row",
category:"pull",
equipment:"dumbbell",
difficulty:"beginner",
types:["hypertrophy"],
description:"Pull dumbbell toward hip while bracing body on bench."
},

{
id:31,
name:"Rear Delt Fly",
category:"pull",
equipment:"dumbbell",
difficulty:"beginner",
types:["hypertrophy"],
description:"Raise arms outward while bent forward to target rear shoulders."
},

{
id:32,
name:"Walking Lunges",
category:"lunge",
equipment:"dumbbell",
difficulty:"beginner",
types:["functional","hypertrophy"],
description:"Step forward into lunge lowering rear knee toward floor."
},

{
id:33,
name:"Reverse Lunges",
category:"lunge",
equipment:"dumbbell",
difficulty:"beginner",
types:["functional"],
description:"Step backward into a lunge while keeping torso upright."
},

{
id:34,
name:"Bulgarian Split Squat",
category:"lunge",
equipment:"dumbbell",
difficulty:"intermediate",
types:["hypertrophy","strength"],
description:"Rear foot elevated on bench while lowering hips downward."
},

{
id:35,
name:"Step Ups",
category:"lunge",
equipment:"dumbbell",
difficulty:"beginner",
types:["functional","hypertrophy"],
description:"Step onto a bench or box and drive through front leg."
},

{
id:36,
name:"Farmer Carry",
category:"carry",
equipment:"dumbbell",
difficulty:"beginner",
types:["functional"],
description:"Walk while holding heavy weights at your sides."
},

{
id:37,
name:"Suitcase Carry",
category:"carry",
equipment:"dumbbell",
difficulty:"intermediate",
types:["functional"],
description:"Carry a single dumbbell on one side while walking."
},

{
id:38,
name:"Overhead Carry",
category:"carry",
equipment:"dumbbell",
difficulty:"advanced",
types:["functional"],
description:"Walk while holding weights overhead."
},

{
id:39,
name:"Plank",
category:"core",
equipment:"bodyweight",
difficulty:"beginner",
types:["strength","functional"],
description:"Hold forearm plank with body straight."
},

{
id:40,
name:"Side Plank",
category:"core",
equipment:"bodyweight",
difficulty:"beginner",
types:["functional"],
description:"Support body on one arm while maintaining straight alignment."
},

{
id:41,
name:"Hanging Leg Raise",
category:"core",
equipment:"bodyweight",
difficulty:"intermediate",
types:["strength","powerlifting"],
description:"Raise legs upward while hanging from bar."
},

{
id:42,
name:"Cable Crunch",
category:"core",
equipment:"cable",
difficulty:"beginner",
types:["hypertrophy"],
description:"Crunch downward using cable resistance."
},

{
id:43,
name:"Russian Twist",
category:"core",
equipment:"bodyweight",
difficulty:"beginner",
types:["functional"],
description:"Rotate torso side to side while seated."
},

{
id:44,
name:"Ab Wheel Rollout",
category:"core",
equipment:"bodyweight",
difficulty:"advanced",
types:["strength","powerlifting"],
description:"Roll wheel forward while maintaining tight core."
},

{
id:45,
name:"Dead Bug",
category:"core",
equipment:"bodyweight",
difficulty:"beginner",
types:["functional","mobility"],
description:"Alternate lowering opposite arm and leg while lying on back."
},

{
id:46,
name:"Bird Dog",
category:"core",
equipment:"bodyweight",
difficulty:"beginner",
types:["functional","mobility"],
description:"Extend opposite arm and leg while maintaining neutral spine."
},

{
id:47,
name:"Jump Rope",
category:"conditioning",
equipment:"bodyweight",
difficulty:"beginner",
types:["cardio"],
description:"Jump while rotating rope beneath feet."
},

{
id:48,
name:"Burpees",
category:"conditioning",
equipment:"bodyweight",
difficulty:"intermediate",
types:["cardio","functional"],
description:"Drop to pushup then jump explosively upward."
},

{
id:49,
name:"Mountain Climbers",
category:"conditioning",
equipment:"bodyweight",
difficulty:"beginner",
types:["cardio"],
description:"Alternate driving knees toward chest in plank position."
},

{
id:50,
name:"Battle Ropes",
category:"conditioning",
equipment:"rope",
difficulty:"intermediate",
types:["cardio"],
description:"Rapidly move heavy ropes to create waves."
},

{
id:51,
name:"Rowing Machine",
category:"conditioning",
equipment:"machine",
difficulty:"beginner",
types:["cardio"],
description:"Drive through legs then pull handle to chest."
},

{
id:52,
name:"Air Bike",
category:"conditioning",
equipment:"machine",
difficulty:"intermediate",
types:["cardio"],
description:"Pedal and push handles simultaneously for full body cardio."
},

{
id:53,
name:"Sled Push",
category:"conditioning",
equipment:"machine",
difficulty:"intermediate",
types:["functional"],
description:"Drive sled forward using powerful leg strides."
},

{
id:54,
name:"Deep Squat Hold",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Sit in bottom squat position maintaining upright posture."
},

{
id:55,
name:"Worlds Greatest Stretch",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Lunge forward and rotate torso upward."
},

{
id:56,
name:"Cat Cow Stretch",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Alternate arching and rounding the back."
},

{
id:57,
name:"Thoracic Rotation",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Rotate upper back slowly while hips remain stable."
},

{
id:58,
name:"Couch Stretch",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Stretch hip flexors with rear leg elevated against wall."
},

{
id:59,
name:"90/90 Hip Stretch",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Sit with both knees bent at 90 degrees and rotate hips."
},

{
id:60,
name:"Hip Flexor Stretch",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Drive hips forward in kneeling position."
},

{
id:61,
name:"Shoulder Dislocates",
category:"mobility",
equipment:"band",
difficulty:"beginner",
types:["mobility"],
description:"Move band overhead and behind back while arms stay straight."
},

{
id:62,
name:"Ankle Mobility Rocks",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Shift knee forward over toes while keeping heel down to improve ankle range of motion."
},

{
id:63,
name:"Foam Roller Thoracic Extension",
category:"mobility",
equipment:"foamroller",
difficulty:"beginner",
types:["mobility"],
description:"Extend upper back over foam roller to mobilize thoracic spine."
},

{
id:64,
name:"Shoulder CARs",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Move shoulders slowly through full circular range."
},

{
id:65,
name:"Hip CARs",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Lift knee and rotate hip through controlled range."
},

{
id:66,
name:"Ankle Circles",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Rotate ankle slowly through full circle."
},

{
id:67,
name:"Neck Mobility",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Slowly rotate head through controlled ranges."
},

{
id:68,
name:"Jefferson Curl",
category:"mobility",
equipment:"dumbbell",
difficulty:"advanced",
types:["mobility"],
description:"Slowly roll spine down while holding light weight."
},

{
id:69,
name:"Deep Lunge Stretch",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Lower hips in deep lunge while opening chest upward."
},

{
id:70,
name:"Wall Shoulder Stretch",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Press arm against wall while rotating torso away."
},

{
id:71,
name:"Hip Hinge Drill",
category:"hinge",
equipment:"bodyweight",
difficulty:"beginner",
types:["functional","mobility"],
description:"Practice hinging hips backward while keeping spine neutral."
},

{
id:72,
name:"Inverted Row",
category:"pull",
equipment:"bodyweight",
difficulty:"beginner",
types:["strength","functional"],
description:"Pull chest toward bar while body stays straight underneath."
}

]

/* ===================================
WARMUPS
=================================== */

const warmups=[
"Jump rope 1 minute",
"Arm circles 20 reps",
"Bodyweight squats 15 reps",
"Light jogging 1 minute",
"Dynamic lunges 10 reps"
]

/* ===================================
COOLDOWNS
=================================== */

const cooldowns={
strength:["Hamstring stretch","Quad stretch","Chest stretch"],
hypertrophy:["Lat stretch","Chest opener","Seated hamstring stretch"],
powerlifting:["Hip flexor stretch","Glute stretch","Thoracic extension stretch"],
functional:["Pigeon stretch","Deep squat hold","Worlds greatest stretch"],
cardio:["Slow walking 2 minutes","Calf stretch","Quad stretch"],
mobility:["Childs pose","Spinal twist","Deep breathing squat hold"]
}

/* ===================================
TIME MAP
=================================== */

const timeMap={15:3,30:5,45:6,60:8}

/* ===================================
SETS / REPS
=================================== */

function getSetsReps(type){

switch(type){

case "powerlifting":
return {sets:5,reps:"3-5"}

case "strength":
return {sets:4,reps:"5-8"}

case "hypertrophy":
return {sets:4,reps:"8-12"}

case "functional":
return {sets:3,reps:"10-15"}

case "cardio":
return {duration:"30-60 seconds"}

case "mobility":
return {duration:"30 second hold"}

default:
return {sets:3,reps:"8-10"}

}

}

/* ===================================
REST
=================================== */

function getRest(type){

switch(type){

case "powerlifting":
return "2-4 minutes"

case "strength":
return "90-120 seconds"

case "hypertrophy":
return "60-90 seconds"

case "functional":
return "30-60 seconds"

case "cardio":
return "minimal"

case "mobility":
return "as needed"

}

}

/* ===================================
WORKOUT GENERATOR
=================================== */

function generateWorkout(type,level,time,equipment="full"){

const count = timeMap[time] || 5

let patterns = ["squat","push","pull","hinge","core"]

if(type==="functional"){
patterns = ["squat","hinge","push","pull","core","conditioning"]
}

if(type==="mobility"){
patterns = ["mobility"]
}

const difficultyRank = {
beginner:1,
intermediate:2,
advanced:3
}

const filtered = exercises.filter(e =>
e.types.includes(type) &&
difficultyRank[e.difficulty] <= difficultyRank[level] &&
(equipment==="full" || e.equipment===equipment || e.equipment==="bodyweight")
)

let workout = []

for(let i=0;i<count;i++){

let pool

/* CARDIO SPECIAL CASE */
if(type==="cardio"){
pool = filtered.filter(e => e.category==="conditioning")
}

/* NORMAL WORKOUTS */
else{
const pattern = patterns[i % patterns.length]
pool = filtered.filter(e => e.category===pattern)

/* FALLBACK: if no match for this pattern slot, use any filtered exercise not already selected */
if(!pool.length){
const used = workout.map(w => w.name)
pool = filtered.filter(e => !used.includes(e.name))
}
}

if(pool.length){

const exercise = pool[Math.floor(Math.random()*pool.length)]

workout.push({
name:exercise.name,
description:exercise.description,
...getSetsReps(type)
})

}

}

return{
warmup: warmups.sort(()=>0.5-Math.random()).slice(0,3),
workout: workout,
cooldown: cooldowns[type].sort(()=>0.5-Math.random()).slice(0,3),
rest: getRest(type)
}

}