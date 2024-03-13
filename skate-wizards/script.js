const one = [
  "steady",
  "floating",
  "rotated",
  "inverted",
  "greasy",
  "upside",
  "greyside",
  "purring",
  "barky",
  "soggy",
  "reversed",
  "fuzzy",
  "hanging",
  "salty",
  "thirsty",
  "curvy",
  "parallax",
  "highlow",
  "side",
  "crunchy",
  "flaky",
  "gassy",
  "sassy",
  "iffy",
  "rotted",
  "brutal",
  "wiggy",
  "fierce",
  "flustered",
  "savage",
  "numpty",
  "baggy",
  "slippery",
  "squishy",
  "froggy",
  "slick",
  "droopy",
  "scabby",
  "skunky",
  "gooey",
]

const two = [
  "roll",
  "puff",
  "skizzle",
  "nutsome",
  "chafer",
  "yanker",
  "burner",
  "monger",
  "dilly",
  "jortle",
  "crunchy",
  "thwappy",
  "snappy",
  "clapper",
  "stoney",
  "punted",
  "wiggle",
  "shooketh",
  "pendulous",
  "doppler",
  "noodle",
  "baller",
  "bucket",
  "donker",
  "flossy",
  "dinger",
  "plopper",
  "shimmy",
  "finger",
  "blunt",
  "roach",
  "butter",
  "zoink",
  "rip",
  "toast",
  "sacky",
  "tangy",
  "grifo",
  "rolly",
  "bamba",
]
const three = [
  "frazz",
  "burner",
  "dump",
  "chunt",
  "breff",
  "plop",
  "nay",
  "whizz",
  "knob",
  "goat",
  "bruh",
  "flex",
  "cap",
  "tope",
  "smash",
  "plug",
  "mofo",
  "seam",
  "blaze",
  "streak",
  "gibbet",
  "swell",
  "jib",
  "bomber",
  "lizard",
  "cig",
  "drongo",
  "pluck",
  "smelt",
  "snag",
  "toker",
  "deuce",
  "beaut",
  "cuff",
  "gaff",
  "kip",
  "gob",
  "tube",
  "owl",
  "loco",
]
const four = [
  "grumble",
  "stunted",
  "lazy",
  "glitchy",
  "wrinkle",
  "rising",
  "saucy",
  "flabby",
  "wumpus",
  "fuddy",
  "lickety",
  "muffin",
  "whirly",
  "squeegee",
  "wishy",
  "diddle",
  "fripper",
  "wishy",
  "saluting",
  "blubber",
  "fuddled",
  "loquacious",
  "jive-ass",
  "foxy",
  "mondo",
  "frothy",
  "lumpy",
  "legless",
  "hairy",
  "royal",
  "holy",
  "manky",
  "foul",
  "withered",
  "scaley",
  "fatty",
  "dank",
  "icky",
  "mota",
  "lugubrious",
]
const five = [
  "twist",
  "pop",
  "mast",
  "drip",
  "hole",
  "melter",
  "smack",
  "schmooze",
  "dollop",
  "boo",
  "daddle",
  "pronk",
  "hog",
  "wink",
  "spleen",
  "fop",
  "roll",
  "bend",
  "choke",
  "dingle",
  "fuffle",
  "bludger",
  "ripper",
  "toss",
  "floozie",
  "gander",
  "stroke",
  "minimus",
  "tater",
  "hooter",
  "torch",
  "brick",
  "clam",
  "elbow",
  "gorge",
  "churro",
  "hallux",
  "meatus",
  "galoot",
  "wenis",
]

function roll() {
  return Math.floor(Math.random() * 40)
}

const getTrick = () => {
  const mainTrick = `${one[roll()]} ${two[roll()]} ${three[roll()]}`
  const extra =
    Math.random() < 0.5 ? `  (with a ${four[roll()]} ${five[roll()]})` : ""
  return mainTrick + extra
}

const trickClasses = {
  jump: "jump",
  flip: "flip",
  fuckPhysics: "fuck-physics",
}

const getQueryTrick = () => {
  const params = new URLSearchParams(window.location.search)
  return trickClasses[params.get("trick")]
}

const getTrickClass = () => {
  const queryTrip = getQueryTrick()
  if (queryTrip) return queryTrip

  const rand = Math.random()
  if (rand < 0.2) return trickClasses.fuckPhysics
  if (rand < 0.3) return trickClasses.flip
  return trickClasses.jump
}

const removeClasses = (wizardEl) =>
  Object.values(trickClasses).forEach((c) => wizardEl.classList.remove(c))

const manifestTrick = () => {
  document.getElementById("result").innerHTML = getTrick()
  const wizard = document.getElementById("wizard")
  removeClasses(wizard)
  void wizard.offsetWidth
  wizard.classList.add(getTrickClass())
}

document.getElementById("wizard").addEventListener("click", manifestTrick)
manifestTrick()
