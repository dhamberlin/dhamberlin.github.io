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
  manual: "manual",
  noseManual: "nose-manual"
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
  if (rand < 0.4) return trickClasses.flip
  if (rand < .5) return trickClasses.manual
  if (rand < .6) return trickClasses.noseManual
  return trickClasses.jump
}

const removeClasses = (wizardEl) =>
  Object.values(trickClasses).forEach((c) => wizardEl.classList.remove(c))

const wizardContainer = document.getElementById("wizard-container")

const manifestTrick = () => {
  document.getElementById("result").innerHTML = getTrick()
  wizardContainer.style.zIndex = "420"
  removeClasses(wizardContainer)
  void wizardContainer.offsetWidth
  wizardContainer.classList.add(getTrickClass())
}

const forward = () => (wizardContainer.style.zIndex = "420")
const backward = () => (wizardContainer.style.zIndex = "")
wizardContainer.addEventListener("click", manifestTrick)
wizardContainer.addEventListener("animationstart", forward)
wizardContainer.addEventListener("animationend", backward)
manifestTrick()

const tunes = document.createElement("audio")
tunes.src = "synth-wizards.m4a"
tunes.loop = true
tunes.volume = 0.5
const boomboxContainer = document.querySelector(".boombox-container")

boomboxContainer.addEventListener("click", () => {
  if (tunes.paused) {
    tunes.play()
    boomboxContainer.classList.add("on")
    return
  }
  tunes.pause()
  boomboxContainer.classList.remove("on")
})

const sauceContainer = document.getElementById("sauce-container")

const hideDialog = () => {
  document.body.classList.remove("sauced")
}

document.getElementById("close-dialog").addEventListener("click", hideDialog)

document.getElementById("backdrop").addEventListener("click", (e) => {
  if (e.target.id === "backdrop") {
    hideDialog()
  }
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideDialog()
  }
})


sauceContainer.addEventListener("click", () => {
  console.log('sup')
  if (document.body.classList.contains("sauced")) {
    console.log('dog')
    return hideDialog()
  }
  console.log('bub')
  document.body.classList.add("sauced")
})
