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
description:"Stand with feet shoulder-width apart, barbell across upper back. Brace your core, sit hips back and down until thighs are parallel. Drive through heels to stand."
},

{
id:2,
name:"Goblet Squat",
category:"squat",
equipment:"dumbbell",
difficulty:"beginner",
types:["strength","hypertrophy","functional"],
description:"Hold a dumbbell or kettlebell at chest height. Sit your hips down and back keeping chest tall. Push through your heels to stand."
},

{
id:3,
name:"Leg Press",
category:"squat",
equipment:"machine",
difficulty:"beginner",
types:["hypertrophy","strength"],
description:"Sit in the machine with feet shoulder width apart on the platform. Lower the weight until knees reach about 90 degrees, then press back up."
},

{
id:4,
name:"Bodyweight Squat",
category:"squat",
equipment:"bodyweight",
difficulty:"beginner",
types:["strength","functional"],
description:"Stand with feet shoulder width apart. Sit hips down and back while keeping chest upright. Push through heels to return to standing."
},

/* HINGE */

{
id:5,
name:"Deadlift",
category:"hinge",
equipment:"barbell",
difficulty:"intermediate",
types:["strength","powerlifting"],
description:"Stand with barbell over mid-foot. Bend at hips and knees to grip the bar. Brace core, drive through feet and extend hips until standing tall."
},

{
id:6,
name:"Romanian Deadlift",
category:"hinge",
equipment:"barbell",
difficulty:"intermediate",
types:["strength","hypertrophy"],
description:"Hold barbell at hips. Push hips back while keeping legs mostly straight. Lower bar until hamstrings stretch, then drive hips forward to stand."
},

{
id:7,
name:"Glute Bridge",
category:"hinge",
equipment:"bodyweight",
difficulty:"beginner",
types:["hypertrophy","functional"],
description:"Lie on your back with knees bent and feet flat. Drive through heels and lift hips until body forms a straight line from knees to shoulders."
},

{
id:8,
name:"Kettlebell Swing",
category:"hinge",
equipment:"kettlebell",
difficulty:"intermediate",
types:["functional","cardio"],
description:"Hinge at hips and swing kettlebell between legs. Drive hips forward explosively to swing the kettlebell to chest height."
},

/* PUSH */

{
id:9,
name:"Bench Press",
category:"push",
equipment:"barbell",
difficulty:"intermediate",
types:["strength","powerlifting","hypertrophy"],
description:"Lie on a bench holding barbell above chest. Lower bar to mid chest with control, then press upward until arms are straight."
},

{
id:10,
name:"Pushups",
category:"push",
equipment:"bodyweight",
difficulty:"beginner",
types:["strength","functional"],
description:"Start in plank position. Lower chest toward floor while keeping body straight, then push back up."
},

{
id:11,
name:"Dumbbell Shoulder Press",
category:"push",
equipment:"dumbbell",
difficulty:"beginner",
types:["hypertrophy"],
description:"Hold dumbbells at shoulder height. Press them overhead until arms are fully extended."
},

{
id:12,
name:"Dips",
category:"push",
equipment:"bodyweight",
difficulty:"intermediate",
types:["hypertrophy"],
description:"Lower body by bending elbows while keeping torso upright. Push back up until arms are straight."
},

/* PULL */

{
id:13,
name:"Pullups",
category:"pull",
equipment:"bodyweight",
difficulty:"intermediate",
types:["strength","functional"],
description:"Hang from bar with palms away. Pull your body upward until chin clears the bar."
},

{
id:14,
name:"Lat Pulldown",
category:"pull",
equipment:"machine",
difficulty:"beginner",
types:["hypertrophy","strength"],
description:"Pull the bar down toward your chest while keeping torso upright."
},

{
id:15,
name:"Barbell Row",
category:"pull",
equipment:"barbell",
difficulty:"intermediate",
types:["strength","hypertrophy"],
description:"Hinge forward with barbell. Pull bar toward lower ribs while keeping back flat."
},

{
id:16,
name:"Face Pull",
category:"pull",
equipment:"cable",
difficulty:"beginner",
types:["hypertrophy","mobility"],
description:"Pull cable toward your face with elbows high, squeezing shoulder blades together."
},

/* LUNGE */

{
id:17,
name:"Walking Lunges",
category:"lunge",
equipment:"dumbbell",
difficulty:"beginner",
types:["functional","hypertrophy"],
description:"Step forward into a lunge lowering back knee toward floor. Push through front heel and step forward with opposite leg."
},

{
id:18,
name:"Bulgarian Split Squat",
category:"lunge",
equipment:"dumbbell",
difficulty:"intermediate",
types:["hypertrophy","strength"],
description:"Rear foot elevated on bench. Lower hips until front thigh is parallel to floor, then drive up."
},

/* CORE */

{
id:19,
name:"Plank",
category:"core",
equipment:"bodyweight",
difficulty:"beginner",
types:["strength","functional"],
description:"Hold a pushup position with elbows under shoulders and body in straight line."
},

{
id:20,
name:"Dead Bug",
category:"core",
equipment:"bodyweight",
difficulty:"beginner",
types:["functional","mobility"],
description:"Lie on back with arms and legs raised. Alternate lowering opposite arm and leg while keeping core engaged."
},

{
id:21,
name:"Hanging Leg Raise",
category:"core",
equipment:"bodyweight",
difficulty:"intermediate",
types:["strength"],
description:"Hang from bar and raise legs until hips flex to about 90 degrees."
},

/* CONDITIONING */

{
id:22,
name:"Jump Rope",
category:"conditioning",
equipment:"bodyweight",
difficulty:"beginner",
types:["cardio"],
description:"Jump lightly while rotating the rope under your feet with wrists."
},

{
id:23,
name:"Burpees",
category:"conditioning",
equipment:"bodyweight",
difficulty:"intermediate",
types:["cardio","functional"],
description:"Drop into pushup, jump feet forward, then explode upward into a jump."
},

{
id:24,
name:"Rowing Machine",
category:"conditioning",
equipment:"machine",
difficulty:"beginner",
types:["cardio"],
description:"Drive through legs, lean back slightly, and pull handle to chest before returning forward."
},

/* MOBILITY */

{
id:25,
name:"World's Greatest Stretch",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Step into deep lunge and rotate torso upward toward front knee to open hips and spine."
},

{
id:26,
name:"Deep Squat Hold",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Sit in the bottom of a squat holding chest upright and pushing knees outward."
},

{
id:27,
name:"Thoracic Rotation",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Rotate upper back slowly while keeping hips stable."
},

{
id:28,
name:"Hip Flexor Stretch",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Kneel with one leg forward and gently push hips forward to stretch the front of the hip."
},

{
id:29,
name:"Ankle Mobility Rocks",
category:"mobility",
equipment:"bodyweight",
difficulty:"beginner",
types:["mobility"],
description:"Shift knee forward over toes while keeping heel down to improve ankle range of motion."
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

const count=timeMap[time]||5

let patterns=["squat","push","pull","hinge","core"]

if(type==="functional"||type==="cardio")
patterns.push("conditioning")

if(type==="mobility")
patterns=["mobility"]

const filtered=exercises.filter(e=>
e.types.includes(type)&&
(level==="expert"||e.difficulty===level||e.difficulty==="beginner")&&
(equipment==="full"||e.equipment===equipment||e.equipment==="bodyweight")
)

const workout=[]

for(let i=0;i<count;i++){

const pattern=patterns[i%patterns.length]

const pool=filtered.filter(e=>e.category===pattern)

if(pool.length){

const exercise=pool[Math.floor(Math.random()*pool.length)]

workout.push({
name:exercise.name,
description:exercise.description,
...getSetsReps(type)
})

}

}

return{
warmup:warmups.sort(()=>0.5-Math.random()).slice(0,3),
workout:workout,
cooldown:cooldowns[type].sort(()=>0.5-Math.random()).slice(0,3),
rest:getRest(type)
}

}