export interface Goal {
  id: number;
  text: string;
  category: "travel" | "skills" | "experiences" | "fitness" | "creative" | "personal";
  done: boolean;
}

export const goals: Goal[] = [
  // Travel
  { id: 1, text: "Watch a live Formula 1 race", category: "travel", done: false },
  { id: 2, text: "Visit Japan", category: "travel", done: false },
  { id: 3, text: "Road trip across Rajasthan", category: "travel", done: false },
  { id: 4, text: "See the northern lights", category: "travel", done: false },
  { id: 5, text: "Visit a new country every year until 30", category: "travel", done: false },
  { id: 6, text: "Spend a week in the mountains with no phone", category: "travel", done: false },
  { id: 7, text: "Go backpacking solo for at least 2 weeks", category: "travel", done: false },
  { id: 8, text: "Visit all 7 continents", category: "travel", done: false },
  { id: 9, text: "Stay in a treehouse or overwater bungalow", category: "travel", done: false },
  { id: 10, text: "Watch sunrise at a famous landmark", category: "travel", done: false },

  // Fitness
  { id: 11, text: "Run a half marathon", category: "fitness", done: false },
  { id: 12, text: "Run a full marathon", category: "fitness", done: false },
  { id: 13, text: "Complete 1000km running in a year", category: "fitness", done: false },
  { id: 14, text: "Do 100 push-ups in one go", category: "fitness", done: false },
  { id: 15, text: "Try swimming competitively", category: "fitness", done: false },
  { id: 16, text: "Hike a trail above 4000m altitude", category: "fitness", done: false },
  { id: 17, text: "Cycle 100km in one day", category: "fitness", done: false },
  { id: 18, text: "Complete a triathlon", category: "fitness", done: false },

  // Skills
  { id: 19, text: "Learn to play the guitar", category: "skills", done: false },
  { id: 20, text: "Get conversational in a third language", category: "skills", done: false },
  { id: 21, text: "Learn to cook 20 different cuisines", category: "skills", done: false },
  { id: 22, text: "Build and ship a product used by 1000 people", category: "skills", done: false },
  { id: 23, text: "Learn photography properly — not just phone snaps", category: "skills", done: false },
  { id: 24, text: "Read 100 books total before 30", category: "skills", done: false },
  { id: 25, text: "Write consistently for a year", category: "skills", done: false },
  { id: 26, text: "Learn to drive a manual car", category: "skills", done: false },
  { id: 27, text: "Take a proper course in something completely unrelated to tech", category: "skills", done: false },
  { id: 28, text: "Learn to meditate daily for 30 days straight", category: "skills", done: false },

  // Experiences
  { id: 29, text: "Attend a world-class music festival", category: "experiences", done: false },
  { id: 30, text: "Watch a live cricket match at Lord's", category: "experiences", done: false },
  { id: 31, text: "Go scuba diving", category: "experiences", done: false },
  { id: 32, text: "Try skydiving", category: "experiences", done: false },
  { id: 33, text: "See a live stand-up comedy show (the greats)", category: "experiences", done: false },
  { id: 34, text: "Attend a TED conference", category: "experiences", done: false },
  { id: 35, text: "Go to a silent retreat", category: "experiences", done: false },
  { id: 36, text: "Attend a live championship sports event", category: "experiences", done: false },
  { id: 37, text: "Cook a meal for 20+ people", category: "experiences", done: false },
  { id: 38, text: "Spend a night stargazing in a dark sky reserve", category: "experiences", done: false },
  { id: 39, text: "Go on a safari", category: "experiences", done: false },
  { id: 40, text: "Try bungee jumping", category: "experiences", done: false },
  { id: 41, text: "Take a cold plunge regularly for a month", category: "experiences", done: false },
  { id: 42, text: "Watch a meteor shower", category: "experiences", done: false },
  { id: 43, text: "Take a spontaneous trip with 24hr notice", category: "experiences", done: false },

  // Creative
  { id: 44, text: "Write and publish a short story", category: "creative", done: false },
  { id: 45, text: "Start a podcast (even one episode)", category: "creative", done: false },
  { id: 46, text: "Build something with my hands (woodwork, pottery, etc.)", category: "creative", done: false },
  { id: 47, text: "Create a photo series and exhibit it (even digitally)", category: "creative", done: false },
  { id: 48, text: "Make a short film or documentary", category: "creative", done: false },
  { id: 49, text: "Design and print my own merch", category: "creative", done: false },
  { id: 50, text: "Build a digital garden (this one!)", category: "creative", done: true },

  // Personal
  { id: 51, text: "Live alone for at least 6 months", category: "personal", done: false },
  { id: 52, text: "Donate meaningfully — not just once", category: "personal", done: false },
  { id: 53, text: "Send a handwritten letter to someone I admire", category: "personal", done: false },
  { id: 54, text: "Have a meal with someone who changed my life and tell them", category: "personal", done: false },
  { id: 55, text: "Own a houseplant that I don't kill", category: "personal", done: false },
  { id: 56, text: "Go 30 days with no social media", category: "personal", done: false },
  { id: 57, text: "Write a letter to my future self to open at 35", category: "personal", done: false },
  { id: 58, text: "Wake up before 5am for 30 days straight", category: "personal", done: false },
  { id: 59, text: "Quit a habit that doesn't serve me", category: "personal", done: false },
  { id: 60, text: "Have a savings goal and hit it", category: "personal", done: false },
  { id: 61, text: "Say no to something big that doesn't feel right", category: "personal", done: false },
  { id: 62, text: "Be fully present with family for a week — no work", category: "personal", done: false },
  { id: 63, text: "Learn something new every day for a year", category: "personal", done: false },
  { id: 64, text: "Forgive someone I've been holding a grudge against", category: "personal", done: false },
  { id: 65, text: "Mentor someone younger than me", category: "personal", done: false },
  { id: 66, text: "Build a morning routine that actually sticks", category: "personal", done: false },
  { id: 67, text: "Take a digital detox for 2 weeks", category: "personal", done: false },
  { id: 68, text: "Ask for help when I genuinely need it", category: "personal", done: false },
  { id: 69, text: "Host a dinner party for people I love", category: "personal", done: false },
  { id: 70, text: "Buy something meaningful with money I earned myself", category: "personal", done: false },
  { id: 71, text: "Take care of my mental health proactively", category: "personal", done: false },
  { id: 72, text: "Have a conversation I've been avoiding", category: "personal", done: false },
  { id: 73, text: "Keep a journal for 6 months", category: "personal", done: false },
  { id: 74, text: "Spend a birthday completely alone, just to see what it's like", category: "personal", done: false },
  { id: 75, text: "Be proud of who I am at 29 — not what I have", category: "personal", done: false },
];

export const categoryColors: Record<Goal["category"], string> = {
  travel: "#06b6d4",
  skills: "#a78bfa",
  experiences: "#f59e0b",
  fitness: "#22c55e",
  creative: "#f472b6",
  personal: "#e2e8f8",
};

export const categoryLabels: Record<Goal["category"], string> = {
  travel: "Travel",
  skills: "Skills",
  experiences: "Experiences",
  fitness: "Fitness",
  creative: "Creative",
  personal: "Personal",
};
