// fortune.js - Fortunate Cow
import * as cowsay from "cowsay";

const moods = [
  { name: "happy", eyes: "^^", tongue: "  "},
  { name: "exhausted", eyes: "--", tongue: "  "},
  { name: "stressed", eyes: "OO", tongue: "U "},
  { name: "goofy", eyes: "xx", tongue: "P "},
  { name: "locked in", eyes: "00", tongue: "  "},
]
// YOUR FORTUNES: Replace these with your own!
// Pick a theme that interests you: motivational quotes, coding tips,
// I chose funny fortunes along the theme of 'Senior in her last semester of college'.
const weekdayFortunes = [
  "If you survived group projects, you can survive anything.",
  "The degree is 87% done, it's almost done loading.",
  "Last semester of midnight coffees.",
  "Your Wi-Fi has nothing on your knowledge.",
];

const weekendFortunes = [
  "Time to recharge—maybe with Netflix and snacks.",
  "Weekends are for sleeping in and ignoring emails.",
  "Celebrate surviving the week with pizza!",
  "Relax, you've earned it after all that coding.",
];

// Check if today is weekend (Saturday=6, Sunday=0) or weekday
const today = new Date().getDay(); // Gets day number: 0=Sunday, 6=Saturday
let selectedFortunes;
if (today === 0 || today === 6) {
  selectedFortunes = weekendFortunes;
} else {
  selectedFortunes = weekdayFortunes;
}

// Pick a random fortune from the selected array
const randomIndex = Math.floor(Math.random() * selectedFortunes.length);
const todaysFortune = selectedFortunes[randomIndex];

// Pick a random mood
const randomMoodIndex = Math.floor(Math.random() * moods.length );
const moodToday = moods[randomMoodIndex];

// Display the cow (or change the creature — it's your project!)
console.log(`Mood: ${moodToday.name}`);

console.log(cowsay.say({ 
text: todaysFortune, 
e: moodToday.eyes, 
T: moodToday.tongue}));
