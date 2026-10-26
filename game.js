(function () {

const DATA = {
 "version": 1,
 "rules": {
  "negatives": "Tap one and the round ends",
  "decoys": "Fake-calm sulking: also ends the round",
  "positives": "Find them all to win"
 },
 "chapters": [
  {
   "id": 1,
   "name": "Talking Stage",
   "time": 30
  },
  {
   "id": 2,
   "name": "Honeymoon Phase",
   "time": 25
  },
  {
   "id": 3,
   "name": "Moving In",
   "time": 22
  },
  {
   "id": 4,
   "name": "Meeting the Parents",
   "time": 20
  },
  {
   "id": 5,
   "name": "Anniversary",
   "time": 15
  }
 ],
 "levels": [
  {
   "id": 1,
   "chapter": 1,
   "trigger": "He left me on read. For 3 HOURS!",
   "negatives": [
    "He's writing a breakup essay",
    "Aliens abducted him",
    "He's 1-starring me",
    "My text was cursed",
    "He blocked the whole world",
    "He's dating an AI now",
    "No signal on Mars",
    "I've been benched"
   ],
   "decoys": [],
   "positives": [
    "He's probably in a meeting!"
   ],
   "reveal": "He was in a meeting and got picked to present. First thing after: a 59-second voice note for you."
  },
  {
   "id": 2,
   "chapter": 1,
   "trigger": "She posted a story but won't text me back??",
   "negatives": [
    "I'm invisible to her",
    "She's running a fish farm",
    "She posted it to spite me",
    "Did she unfollow me?",
    "She wants me to cave first",
    "She's testing my patience",
    "Her thumbs only do likes",
    "I've lost my crown"
   ],
   "decoys": [],
   "positives": [
    "My text probably got buried"
   ],
   "reveal": "Your chat got buried under 99 group chats. When she found it, she sent three “sorryyy”s in a row."
  },
  {
   "id": 3,
   "chapter": 1,
   "trigger": "He replied: “k.”",
   "negatives": [
    "k = not interested",
    "k = leave me alone",
    "k = we're done",
    "Does he pay per letter?",
    "Silent treatment!",
    "One letter?? ONE?",
    "He texts novels to others",
    "I'm customer support now"
   ],
   "decoys": [],
   "positives": [
    "He's probably driving!"
   ],
   "reveal": "He was driving. Voice-to-text turned “okay babe, almost home!” into “k.”"
  },
  {
   "id": 4,
   "chapter": 1,
   "trigger": "Date night. She's 20 minutes late!",
   "negatives": [
    "She's on her second date",
    "A hot stranger stole her",
    "She saw me and ran",
    "Am I even worth it?",
    "I've been stood up",
    "Is my hair that bad?",
    "She's hiding behind a car",
    "She went to the wrong planet"
   ],
   "decoys": [],
   "positives": [
    "Traffic is probably awful"
   ],
   "reveal": "The subway broke down, so she sprinted the whole way. Your bubble tea is half gone: “The other half… spilled.”"
  },
  {
   "id": 5,
   "chapter": 1,
   "trigger": "His Instagram is set to private??",
   "negatives": [
    "He has 100 exes",
    "He's in a secret society",
    "He has a secret identity",
    "He's secretly famous",
    "His feed is all HER",
    "Classic red flag",
    "He's blocking my FBI work",
    "He's juggling ten girls"
   ],
   "decoys": [],
   "positives": [
    "Maybe he's just private"
   ],
   "reveal": "It's been private since college. Even his mom can't see it. She still thinks he has no friends."
  },
  {
   "id": 6,
   "chapter": 1,
   "trigger": "She said: “You're really nice.”",
   "negatives": [
    "Nice-guy card received",
    "Next word: “but”",
    "Friend zone, here I come",
    "She's practicing rejection",
    "She'll set me up w/ a friend",
    "Time to exit gracefully",
    "I lost to a cat",
    "Participation trophy"
   ],
   "decoys": [],
   "positives": [
    "Maybe she means it!"
   ],
   "reveal": "Her next line: “So… wanna go to that exhibit on Saturday?” You almost threw your phone."
  },
  {
   "id": 7,
   "chapter": 2,
   "trigger": "He didn't say goodnight.",
   "negatives": [
    "He says it to someone else",
    "He ran out of goodnights",
    "Honeymoon phase expired",
    "His pillow took him hostage",
    "He's gaming in secret",
    "I'm too clingy",
    "We're DONE!!",
    "He outsourced goodnights",
    "He's pondering existence",
    "He sent it to the wrong girl"
   ],
   "decoys": [
    "Fine. I won't say it either."
   ],
   "positives": [
    "He probably passed out"
   ],
   "reveal": "He worked till 2 a.m. and fell asleep with his phone on his face, screen imprint and all. Morning: ten goodnights in a row."
  },
  {
   "id": 8,
   "chapter": 2,
   "trigger": "She flipped her phone face down!",
   "negatives": [
    "She has a HUGE secret",
    "She's texting someone",
    "Face down = guilty",
    "Someone lives in her phone",
    "She's roasting my haircut",
    "She renamed my contact",
    "She has a secret account",
    "She googled “how to dump”",
    "She doesn't trust me",
    "She's about to confess"
   ],
   "decoys": [
    "Then mine goes face down!"
   ],
   "positives": [
    "She wants to focus on me"
   ],
   "reveal": "“I don't want my boss finding me while I'm eating with you.” Then she flipped your phone over too."
  },
  {
   "id": 9,
   "chapter": 2,
   "trigger": "He liked another girl's post!!",
   "negatives": [
    "They have history",
    "She's 100x prettier",
    "Accident? Don't buy it",
    "He liked it SO fast",
    "He never likes MY posts",
    "He's flirting in public",
    "Secret relationship!",
    "Time to stalk her profile",
    "He's casting a wide net",
    "His thumb betrayed me"
   ],
   "decoys": [
    "I'll like some guy's post!"
   ],
   "positives": [
    "She might be family"
   ],
   "reveal": "That's his cousin, posting her newborn. He asked you: “Doesn't he look like a potato?”"
  },
  {
   "id": 10,
   "chapter": 2,
   "trigger": "She said: “Whatever.”",
   "negatives": [
    "Whatever = nothing works",
    "The trap question is live",
    "I WILL choose wrong",
    "It's a reading test",
    "She wants an apology",
    "Whatever = figure it out",
    "A fight is coming",
    "I need a user manual",
    "She's charging her ultimate",
    "Wrong pick = breakup"
   ],
   "decoys": [
    "Fine. Instant noodles it is!"
   ],
   "positives": [
    "Maybe she's truly fine"
   ],
   "reveal": "She really was fine with anything. You got hotpot, and she ordered your favorite."
  },
  {
   "id": 11,
   "chapter": 2,
   "trigger": "He went out with the boys and didn't invite me!",
   "negatives": [
    "He thinks I'm annoying",
    "He's at a nightclub",
    "The boys want us over",
    "They're roasting me",
    "He's joining a monastery",
    "He misses being single",
    "He'll be MIA all night",
    "He's on a secret date",
    "Am I embarrassing?",
    "It's a trial against me"
   ],
   "decoys": [
    "Whatever, I don't need him"
   ],
   "positives": [
    "Probably just playing ball"
   ],
   "reveal": "They played basketball all night. Every halftime, he sent you a sweaty, terrible selfie."
  },
  {
   "id": 12,
   "chapter": 2,
   "trigger": "She suddenly said: “We need to talk.”",
   "negatives": [
    "Breakup trailer incoming",
    "I'm going on trial",
    "She's settling old scores",
    "I'm doomed I'm doomed",
    "She's moving to Mars",
    "Prepare the defense!",
    "What did I DO??",
    "She loves someone else",
    "Disappointment bar full",
    "She's announcing her exit"
   ],
   "decoys": [
    "Stay calm. Run."
   ],
   "positives": [
    "Could be good news!"
   ],
   "reveal": "She wanted to plan next month's trip. Your 3,000-word defense was for nothing."
  },
  {
   "id": 13,
   "chapter": 3,
   "trigger": "He came home silent and went straight to his office.",
   "negatives": [
    "He's plotting in there",
    "He's writing a goodbye note",
    "There's someone else",
    "Cold war has begun!!",
    "He regrets moving in",
    "What did I do this time",
    "He's packing a bag",
    "He can't stand me",
    "The office possessed him",
    "We've run out of words"
   ],
   "decoys": [
    "Then I'm going silent too",
    "Used to it. Not asking."
   ],
   "positives": [
    "Bad day at work, maybe",
    "He needs a minute"
   ],
   "reveal": "His proposal got rejected. He stared at the wall for twenty minutes, then came out and hugged you: “Glad I've got you.”"
  },
  {
   "id": 14,
   "chapter": 3,
   "trigger": "She shoved all my stuff into the closet!",
   "negatives": [
    "She's erasing my existence",
    "She's shipping me back",
    "I'm next in the closet",
    "She's bringing someone home",
    "Breakup warning!!",
    "She thinks I'm messy",
    "I have no rights here",
    "She's Marie Kondo-ing me",
    "She wants a new roommate",
    "I've been quarantined"
   ],
   "decoys": [
    "Fine, it's just stuff",
    "I'll pack HER things then"
   ],
   "positives": [
    "She's probably deep cleaning",
    "She's making room for me"
   ],
   "reveal": "She bought a display case for your figures and sorted them by release date."
  },
  {
   "id": 15,
   "chapter": 3,
   "trigger": "He's been in the bathroom for 40 minutes!!",
   "negatives": [
    "He's holding a meeting",
    "He's deleting chats",
    "He's on a dating app",
    "He prefers the toilet to me",
    "Is he crying in there?",
    "Did he fall in?!",
    "He's on a secret call",
    "He's avoiding me",
    "He's meditating to ascend",
    "He moved in there"
   ],
   "decoys": [
    "Whatever, I'm going to bed",
    "Out of sight, out of mind"
   ],
   "positives": [
    "Tummy trouble, probably",
    "He's probably gaming"
   ],
   "reveal": "He lost five games in a row on the toilet and now both his legs are asleep."
  },
  {
   "id": 16,
   "chapter": 3,
   "trigger": "Three days of takeout. No more cooking.",
   "negatives": [
    "She's done caring for me",
    "She's saving to run away",
    "She's tired of us",
    "She's mad at me",
    "She hates my cooking",
    "She loves the delivery guy",
    "We're just meal buddies",
    "The kitchen is on strike",
    "Her heart left the house",
    "She's testing my cooking"
   ],
   "decoys": [
    "Then I'll order just for me!",
    "Whatever, I won't starve"
   ],
   "positives": [
    "She's probably exhausted",
    "She needs a break"
   ],
   "reveal": "She's been crunching year-end reports and forgot to even drink water. Tonight, you're cooking. Good luck."
  },
  {
   "id": 17,
   "chapter": 3,
   "trigger": "He changed the WiFi password!!",
   "negatives": [
    "He's hiding something",
    "He's cutting off my internet",
    "He's drawing a line",
    "He wants me gone",
    "Shady business",
    "He's controlling me",
    "New life, new password",
    "Did he get hacked?",
    "It's a breakup signal",
    "I'm being punished"
   ],
   "decoys": [
    "I'll use my data. Bye.",
    "Whatever, not asking"
   ],
   "positives": [
    "Someone stole the WiFi",
    "He's fixing the router"
   ],
   "reveal": "The neighbor kept stealing the WiFi. The new password is your birthday, on a sticky note on the fridge."
  },
  {
   "id": 18,
   "chapter": 3,
   "trigger": "She closed the door to call her best friend!",
   "negatives": [
    "They're roasting me",
    "Her bestie wants us over",
    "It's a roast session",
    "I'm the cautionary tale",
    "They're rating me",
    "She's hiding something",
    "They're planning her escape",
    "Her bestie hates me",
    "She regrets picking me",
    "They're trash-talking me"
   ],
   "decoys": [
    "I'll go vent to the boys",
    "Let them talk, whatever"
   ],
   "positives": [
    "She didn't want to bother me",
    "Her friend might be sad"
   ],
   "reveal": "Her friend just got dumped. Two hours of crying later, she hung up and said: “I'm so glad I got you.”"
  },
  {
   "id": 19,
   "chapter": 4,
   "trigger": "Her mom gave me the smallest slice of pie…",
   "negatives": [
    "Her mom hates me",
    "First impression: dead",
    "They think I'm broke",
    "I eat like a raccoon",
    "It's a test",
    "I said something wrong",
    "I dressed like a salesman",
    "She liked the ex better",
    "The wedding is off",
    "They want us split up",
    "I don't deserve pie",
    "It's a hint to leave"
   ],
   "decoys": [
    "I'll just visit less",
    "I don't need her family"
   ],
   "positives": [
    "Her mom might be shy",
    "She wants me to grab more"
   ],
   "reveal": "Later her mom whispered: “Nice kid, just too polite. Make sure he takes seconds next time!”"
  },
  {
   "id": 20,
   "chapter": 4,
   "trigger": "His dad didn't say a single word to me!",
   "negatives": [
    "He thinks I'm not enough",
    "They don't approve",
    "He's studying me",
    "I brought the wrong gift",
    "He's charging a speech",
    "I'm getting vetoed",
    "Am I too loud?",
    "He's deducting points",
    "He'll get scolded later",
    "He'll listen to his dad",
    "We have no future",
    "Retreat now!"
   ],
   "decoys": [
    "Fine, silence it is",
    "I'm done trying"
   ],
   "positives": [
    "His dad might be quiet",
    "He might be nervous too"
   ],
   "reveal": "Meeting his son's partner for the first time, his dad was so nervous he poured tea all over his own pants."
  },
  {
   "id": 21,
   "chapter": 4,
   "trigger": "Her family switched to a language I don't speak!",
   "negatives": [
    "They're discussing me",
    "They want me left out",
    "Her mom's suggesting a guy",
    "They're grading me",
    "I'm definitely failing",
    "They mock my accent",
    "I'm an outsider",
    "It's an encrypted call",
    "She's listing my flaws",
    "I've been excluded",
    "Secret family meeting",
    "I need a translator"
   ],
   "decoys": [
    "Can't understand anyway",
    "I'll pretend I didn't hear"
   ],
   "positives": [
    "Probably just small talk",
    "It's just habit for them"
   ],
   "reveal": "They were arguing over cooking you lasagna or tacos. They made both."
  },
  {
   "id": 22,
   "chapter": 4,
   "trigger": "He said: “My mom asked how much you make.”",
   "negatives": [
    "They think I'm broke",
    "Background check time",
    "I'm being eliminated",
    "He's helping her audit me",
    "She's checking my credit",
    "We're from different worlds",
    "She wants my paycheck",
    "He thinks I earn too little",
    "This is the final boss",
    "He's finding an exit",
    "Time for a side hustle",
    "They're so snobby"
   ],
   "decoys": [
    "Whatever happens, happens",
    "Then let's not get married"
   ],
   "positives": [
    "His mom just cares",
    "She thinks I work too hard"
   ],
   "reveal": "His mom heard and said: “That's so much work! Come over for dinner every weekend.”"
  },
  {
   "id": 23,
   "chapter": 4,
   "trigger": "Her aunt asked when we're getting married. She didn't answer!",
   "negatives": [
    "She won't marry me",
    "She's not sure about me",
    "She's waiting for someone",
    "She thinks I'm unreliable",
    "She's stalling",
    "This is just a fling",
    "She has better options",
    "Her family disapproves",
    "She thinks I'm not enough",
    "I'm just a phase",
    "She fears being broke",
    "She's hesitating"
   ],
   "decoys": [
    "Fine, don't marry me",
    "Calm. I'm in no hurry either"
   ],
   "positives": [
    "She's probably shy",
    "She'd rather talk in private"
   ],
   "reveal": "On the way home she whispered: “Why didn't YOU answer? I was waiting for you to say something.”"
  },
  {
   "id": 24,
   "chapter": 4,
   "trigger": "His parents asked me to stay… in the guest room?",
   "negatives": [
    "I'm an outsider to them",
    "They don't approve of us",
    "His mom doesn't trust me",
    "I've been demoted",
    "He didn't defend me",
    "I'm just a guest",
    "They're nudging me out",
    "He won't share a bed",
    "He obeys his mom",
    "They're splitting us up",
    "Leave tonight!",
    "Guest room = exile"
   ],
   "decoys": [
    "I'm leaving at dawn",
    "Whatever, I'm used to it"
   ],
   "positives": [
    "Old-school house rules",
    "They want me comfortable"
   ],
   "reveal": "His mom prepped that room a week ago: new sheets, new slippers, and your favorite yogurt in the fridge."
  },
  {
   "id": 25,
   "chapter": 5,
   "trigger": "Our anniversary. He hasn't mentioned it ALL DAY!!",
   "negatives": [
    "He FORGOT!!!",
    "I'm his roommate now",
    "Our marriage hibernates",
    "I'm not in his heart",
    "Work ate him alive",
    "Only I care about this",
    "We're basically cousins",
    "Is there someone else?",
    "His brain got reset",
    "He's bored of me",
    "He's going through motions",
    "Goldfish memory"
   ],
   "decoys": [
    "Fine, I'll celebrate alone!",
    "Saying nothing. No fight.",
    "It's just a date"
   ],
   "positives": [
    "He's planning a surprise",
    "He's waiting till tonight",
    "He wants to surprise me"
   ],
   "reveal": "Dinner was waiting: food from the place you had your first date. He took half a day off to wait in line."
  },
  {
   "id": 26,
   "chapter": 5,
   "trigger": "Her anniversary gift to me was… socks?",
   "negatives": [
    "I'm worth one pair of socks",
    "My feet stink, apparently",
    "She didn't even try",
    "Gas station gift",
    "Others get better gifts",
    "She stopped caring",
    "I'm a roommate to her",
    "She's saving to run away",
    "Bought last minute",
    "She expects nothing of me",
    "I don't deserve better",
    "Next year: a toothpick"
   ],
   "decoys": [
    "Fine, I'll gift lazy too",
    "I'll take them. Say nothing.",
    "It's just a gift"
   ],
   "positives": [
    "Socks might mean something",
    "There might be more",
    "She remembered something"
   ],
   "reveal": "Twelve pairs, each embroidered with one of your anniversaries. One pair just says “NO STINKY FEET.”"
  },
  {
   "id": 27,
   "chapter": 5,
   "trigger": "A text popped up on his phone: “See you then.”",
   "negatives": [
    "He's meeting someone",
    "He has secrets",
    "It's a girl, isn't it",
    "He's seeing his ex",
    "He's up to something",
    "He has a second family",
    "He's planning an escape",
    "Someone's in his phone",
    "He's on secret dates",
    "He's lying to me",
    "He joined a secret society",
    "Fooled for years"
   ],
   "decoys": [
    "I'll pretend I didn't see",
    "Out of sight, out of mind",
    "I'll make plans too!"
   ],
   "positives": [
    "Maybe a dinner reservation",
    "Maybe a surprise",
    "Could be work"
   ],
   "reveal": "It was the band he hired. On your anniversary they sang your wedding song under the window. Off-key, but with feeling."
  },
  {
   "id": 28,
   "chapter": 5,
   "trigger": "Anniversary day. She says she has to work late.",
   "negatives": [
    "She doesn't want to see me",
    "Work beats me",
    "She married her job",
    "Office romance?",
    "Overtime is an excuse",
    "She's sick of me",
    "Her heart went cold",
    "We have no future",
    "She's celebrating w/o me",
    "I'm on her schedule",
    "We're obligations now",
    "She's avoiding me"
   ],
   "decoys": [
    "Then I'll work late too!",
    "It's meaningless anyway",
    "I'm used to it by now"
   ],
   "positives": [
    "She's probably swamped",
    "She'll rush home",
    "A surprise might be coming"
   ],
   "reveal": "She finished early and showed up at ten with a cake: “My boss asked why I was running.”"
  },
  {
   "id": 29,
   "chapter": 5,
   "trigger": "He said: “Let's skip the anniversary this year.”",
   "negatives": [
    "He thinks it's pointless",
    "He doesn't love me!!",
    "Our marriage is over",
    "It's a waste of money",
    "Cold shoulder time",
    "He's about to confess",
    "There's someone else",
    "We're just roommates now",
    "He's preparing to leave",
    "I'm too much for him",
    "He's given up",
    "He spent it all on games"
   ],
   "decoys": [
    "Fine, let's skip it",
    "Great, less hassle",
    "Whatever he says goes"
   ],
   "positives": [
    "Money might be tight",
    "He wants something new",
    "He has a bigger plan"
   ],
   "reveal": "He saved the anniversary money and booked the trip you've talked about for three years. He even secretly bought the suitcases."
  },
  {
   "id": 30,
   "chapter": 5,
   "trigger": "She's been staring at old photos…",
   "negatives": [
    "She misses the old me",
    "She thinks I got fat",
    "She's comparing",
    "She regrets it",
    "She misses her ex",
    "She's saying goodbye",
    "She's leaving!!",
    "She thinks I've changed",
    "We can't go back",
    "She's packing memories",
    "She's collecting evidence",
    "She wants to return me"
   ],
   "decoys": [
    "I don't want to remember",
    "The past is the past",
    "They're just photos"
   ],
   "positives": [
    "She's making an album",
    "She's thinking of me",
    "Maybe a gift is coming"
   ],
   "reveal": "She's making a scrapbook, one page per year together. The last page says: “Next ten years: let's get chubby together.”"
  }
 ]
};
const C = { ink: '#2b2622', paper: '#f7f3ea', rule: '#d9e3ea', sun: '#f4c542', warn: '#c8452f' };
const FONT = '"Chalkboard SE", "Comic Sans MS", "Marker Felt", "Segoe Print", "Bradley Hand", cursive, sans-serif';
const $ = id => document.getElementById(id);
const cv = $('cv'), ctx = cv.getContext('2d');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
// 手绘线：带随机抖动的椭圆，描两遍，像铅笔速写
function prng(a) { return () => { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function wobble(cx, cy, rx, ry, seed) {
  const r = prng(seed), n = 20, off = r() * 6.28, pts = [];
  for (let i = 0; i <= n + 2; i++) {
    const a = off + i / n * Math.PI * 2, k = 1 + (r() - 0.5) * 0.1;
    pts.push([cx + Math.cos(a) * rx * k + (r() - 0.5) * 2, cy + Math.sin(a) * ry * k + (r() - 0.5) * 2]);
  }
  return pts;
}
function path(p) {
  ctx.beginPath(); ctx.moveTo(p[0][0], p[0][1]);
  for (let i = 1; i < p.length - 1; i++) ctx.quadraticCurveTo(p[i][0], p[i][1], (p[i][0] + p[i + 1][0]) / 2, (p[i][1] + p[i + 1][1]) / 2);
}
function drawShape(s) {
  ctx.fillStyle = s.o.fill; path(s.a); ctx.fill();
  ctx.strokeStyle = s.o.stroke; ctx.lineCap = 'round';
  ctx.lineWidth = s.o.sw; path(s.a); ctx.stroke();
  ctx.lineWidth = s.o.sw * 0.6; path(s.b); ctx.stroke();
}
const ell = (x, y, w, h, seed, o) => ({ a: wobble(x, y, w / 2, h / 2, seed), b: wobble(x, y, w / 2, h / 2, seed + 97), o });

let W = 0, H = 0, dpr = 1, topY = 0;
let state = 'title', li = 0, L, ch, bubbles = [], timeLeft = 0, mistakes = 0;
// 结局台词：点错一个念头就当场结束，{t} 换成你点的那句
const END_TITLE = ['Achievement unlocked: Overthinker Ending', "That's a wrap! Directed by: you", 'Defeated by your own imagination', 'GAME OVER: Overthinking successful', 'Your brain got to the ending first', 'Ding! Drama series complete'];
const END_NEG = [
  'You believed “{t}”. Three minutes later you posted a sad song with the caption “if you know, you know.”',
  'You decided “{t}” and renamed their contact to “Future Ex.”',
  '“{t}”? What a plot! The Academy is giving you Best Original Screenplay.',
  'You believed “{t}” and started packing. Halfway through, you realized the suitcase was their gift.',
  'Thanks to “{t}”, your group chat held a three-hour emergency meeting. With slides.',
  "You tapped “{t}”. The show's over. You were the lead, the writer AND the villain.",
  '“{t}”? With that imagination you should be writing soap operas. Ten episodes a day.',
  "You went with “{t}”. Then they texted: “sorry, was in the shower.” You'd already cried through a box of tissues.",
  'You believed “{t}” and wrote their lines for the next three lifetimes.',
  'Because of “{t}”, you scrolled back three years on their Instagram and accidentally liked a photo.',
];
const END_DECOY = [
  "You said “{t}”, but you've checked their profile 48 times.",
  'You chose “{t}”. Very calm. Calm and wide awake until 4 a.m.',
  '“{t}”? Sulk successful! Your prize: zero sleep and two dark circles.',
  'You coolly went with “{t}”, then checked if they were online 37 times.',
];
const END_TIME_TITLE = ["Time's up! Brain overloaded", 'CPU overheated', 'You overthought so long the show got renewed'];
const END_TIME = [
  "You stared at the screen so long they came back, and you're still writing season two.",
  'Recommended fix: drink water, sleep, stop overthinking.',
  'Your brain switched to low-power mode. Please plug in a charger and try again.',
];
const pick = a => a[Math.random() * a.length | 0];
function makeEnding(b) {
  if (!b) return { title: pick(END_TIME_TITLE), line: pick(END_TIME) };
  return { title: pick(END_TITLE), line: pick(b.kind === 'decoy' ? END_DECOY : END_NEG).replace('{t}', b.text) };
}
// 过关评价：按用掉的时间比例
const rank = f => f < 0.3 ? 'Certified clear-headed' : f < 0.6 ? 'Reasonably normal human' : 'Almost overthought it';
let spawnAcc = 0, negQueue = [], boil = 0, boilAcc = 0, toasts = [], decoyHinted = false, seedN = 1;
let flash = 0, quake = 0, musicAcc = 0, step = 0, mel = 2, beatAcc = 0;

// ---------- 声音：全部用 Web Audio 现场合成，不需要音频文件 ----------
let AC = null, master = null, muted = false;
function audioOn() {
  try {
    if (!AC) { AC = new (window.AudioContext || window.webkitAudioContext)(); master = AC.createGain(); master.gain.value = 0.5; master.connect(AC.destination); }
    if (AC.state === 'suspended') AC.resume();
  } catch (e) { AC = null; }
}
function tone(f, t0, dur, type, vol, slideTo) {
  const o = AC.createOscillator(), g = AC.createGain();
  o.type = type; o.frequency.setValueAtTime(f, t0);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
  g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + dur + 0.05);
}
const SFX = {
  good: t => [784, 988, 1319].forEach((f, i) => tone(f, t + i * 0.07, 0.45, 'triangle', 0.2)),
  bad: t => { tone(150, t, 0.4, 'sawtooth', 0.16, 60); tone(157, t, 0.4, 'square', 0.07, 63); },
  pop: t => tone(rnd(420, 640), t, 0.09, 'sine', 0.05, 180),
  beat: t => { tone(62, t, 0.13, 'sine', 0.4); tone(55, t + 0.17, 0.12, 'sine', 0.28); },
  win: t => [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, t + i * 0.1, 0.6, 'triangle', 0.18)),
  lose: t => [392, 349, 311, 233].forEach((f, i) => tone(f, t + i * 0.18, 0.5, 'sawtooth', 0.08)),
};
function sfx(n) { if (AC && !muted) try { SFX[n](AC.currentTime); } catch (e) {} }
// 背景音乐：八音盒式的随机旋律。越接近超时，调子越不和谐、越快，低音也压上来
const CALM = [523, 587, 659, 784, 880, 1047], TENSE = [523, 554, 622, 698, 740, 831];
function music(dt, p) {
  if (!AC || muted) return;
  musicAcc += dt;
  const gap = 0.42 - 0.18 * p;
  if (musicAcc >= gap) {
    musicAcc = 0; step++;
    mel = Math.max(0, Math.min(5, mel + (Math.random() * 3 | 0) - 1));
    const t = AC.currentTime, scale = p > 0.55 ? TENSE : CALM;
    tone(scale[mel] * (1 + (Math.random() - 0.5) * 0.02 * p), t, 0.5, 'sine', 0.06);
    if (step % 4 === 0) tone(p > 0.55 ? 117 : 131, t, gap * 4, 'triangle', 0.05 + 0.05 * p);
  }
  if (p > 0.6) { beatAcc += dt; if (beatAcc > 1 - 0.55 * (p - 0.6) / 0.4) { beatAcc = 0; sfx('beat'); } }
}

// ---------- 背景场景：每个章节一幅铅笔速写，画在气泡后面 ----------
function wline(x1, y1, x2, y2, seed) {
  const r = prng(seed), j = () => (r() - 0.5) * 3;
  for (let k = 0; k < 2; k++) {
    ctx.beginPath(); ctx.moveTo(x1 + j(), y1 + j());
    ctx.quadraticCurveTo((x1 + x2) / 2 + j() * 2, (y1 + y2) / 2 + j() * 2, x2 + j(), y2 + j()); ctx.stroke();
  }
}
const wrect = (x, y, w, h, s) => { wline(x, y, x + w, y, s); wline(x + w, y, x + w, y + h, s + 1); wline(x + w, y + h, x, y + h, s + 2); wline(x, y + h, x, y, s + 3); };
const wcirc = (x, y, r, s) => { path(wobble(x, y, r, r, s)); ctx.stroke(); };
function drawScene() {
  const b = (boil >> 1) % 3, s = n => n * 13 + b, T = topY, h = H - T, cx = W / 2, floor = H - 36;
  ctx.save(); ctx.globalAlpha = 0.2; ctx.strokeStyle = C.ink; ctx.fillStyle = C.ink; ctx.lineWidth = 2; ctx.lineCap = 'round';
  if (ch.id === 1) { // 聊天界面：已读不回
    const w = Math.min(220, W * 0.55), hh = Math.min(w * 1.9, h - 40), x = cx - w / 2, y = T + (h - hh) / 2;
    wrect(x, y, w, hh, s(1)); wline(x, y + 30, x + w, y + 30, s(2)); wline(x, y + hh - 36, x + w, y + hh - 36, s(3));
    for (let i = 0; i < 5; i++) { const bw = w * 0.45, by = y + 46 + i * (hh - 100) / 5; wrect(i % 2 ? x + w - 12 - bw : x + 12, by, bw, 24, s(4 + i)); }
    ctx.font = `15px ${FONT}`; ctx.textAlign = 'right'; ctx.fillText('Seen', x + w - 14, y + hh - 46);
  } else if (ch.id === 2) { // 深夜窗口和床
    const w = Math.min(240, W * 0.6), x = cx - w / 2, y = T + 24, hh = w * 0.85;
    wrect(x, y, w, hh, s(1)); wline(cx, y, cx, y + hh, s(2)); wline(x, y + hh / 2, x + w, y + hh / 2, s(3));
    wcirc(x + w * 0.74, y + hh * 0.24, 17, s(4));
    wrect(24, floor - 64, W - 48, 54, s(5)); wcirc(76, floor - 78, 22, s(6));
  } else if (ch.id === 3) { // 客厅：沙发、落地灯、书房门
    wline(0, floor, W, floor, s(1));
    const sw = Math.min(270, W * 0.66), sx = cx - sw / 2, sy = floor - 70;
    wrect(sx, sy, sw, 60, s(2)); wrect(sx - 20, sy - 20, 22, 80, s(3)); wrect(sx + sw - 2, sy - 20, 22, 80, s(4)); wrect(sx, sy - 50, sw, 50, s(5));
    wline(W - 38, floor, W - 38, floor - 180, s(6)); wline(W - 62, floor - 180, W - 14, floor - 180, s(7));
    wline(W - 62, floor - 180, W - 48, floor - 214, s(8)); wline(W - 14, floor - 180, W - 28, floor - 214, s(9)); wline(W - 48, floor - 214, W - 28, floor - 214, s(10));
    wrect(22, T + 30, 72, 150, s(11)); wcirc(82, T + 108, 4, s(12));
  } else if (ch.id === 4) { // 饭桌：一桌碗筷
    const ty = T + h * 0.62;
    wline(14, ty, W - 14, ty, s(1)); wline(40, ty, 40, ty + 120, s(2)); wline(W - 40, ty, W - 40, ty + 120, s(3));
    for (let i = 0; i < 4; i++) { const bx = 40 + (W - 80) * (i + 0.5) / 4; wline(bx - 24, ty - 24, bx + 24, ty - 24, s(4 + i)); wline(bx - 24, ty - 24, bx - 11, ty - 2, s(9 + i)); wline(bx + 24, ty - 24, bx + 11, ty - 2, s(14 + i)); wline(bx - 11, ty - 2, bx + 11, ty - 2, s(19 + i)); }
    wline(cx + 36, ty - 62, cx + 92, ty - 32, s(24)); wline(cx + 42, ty - 66, cx + 98, ty - 36, s(25));
    wrect(cx - 60, T + 28, 120, 76, s(26)); wcirc(cx, T + 66, 20, s(27));
  } else { // 纪念日：蛋糕和圈了日期的日历
    const cw = Math.min(200, W * 0.5), x = cx - cw / 2, yb = floor - 10;
    wline(0, floor, W, floor, s(1)); wrect(x, yb - 60, cw, 60, s(2)); wrect(x + cw * 0.15, yb - 108, cw * 0.7, 48, s(3));
    wline(cx, yb - 108, cx, yb - 146, s(4)); path(wobble(cx, yb - 156, 6, 10, s(5))); ctx.stroke();
    const kx = W - 132, ky = T + 28; wrect(kx, ky, 104, 112, s(6)); wline(kx, ky + 24, kx + 104, ky + 24, s(7));
    for (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++) wrect(kx + 8 + j * 23, ky + 34 + i * 25, 15, 15, s(8 + i * 4 + j));
    ctx.globalAlpha = 0.45; ctx.strokeStyle = C.warn; wcirc(kx + 8 + 2 * 23 + 7, ky + 34 + 25 + 7, 13, s(30));
  }
  ctx.restore();
}
// 右下角的“你”：越慌表情越崩，点错的瞬间也会慌一下
function drawFace(p) {
  const x = W - 40, y = H - 46, eye = 2 + p * 1.6;
  ctx.save(); ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.fillStyle = C.paper; ctx.lineCap = 'round';
  path(wobble(x, y, 21, 21, 7 + boil % 4)); ctx.fill(); ctx.stroke();
  ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(x - 7, y - 4, eye, 0, 7); ctx.arc(x + 7, y - 4, eye, 0, 7); ctx.fill();
  ctx.beginPath();
  if (p < 0.35) { ctx.moveTo(x - 7, y + 7); ctx.quadraticCurveTo(x, y + 12, x + 7, y + 7); }
  else if (p < 0.7) { ctx.moveTo(x - 8, y + 9); ctx.lineTo(x - 4, y + 6); ctx.lineTo(x, y + 9); ctx.lineTo(x + 4, y + 6); ctx.lineTo(x + 8, y + 9); }
  else { ctx.ellipse(x, y + 9, 4, 5, 0, 0, 7); }
  ctx.stroke();
  if (p >= 0.7) { ctx.beginPath(); ctx.moveTo(x + 19, y - 18); ctx.quadraticCurveTo(x + 25, y - 7, x + 19, y - 5); ctx.quadraticCurveTo(x + 13, y - 7, x + 19, y - 18); ctx.stroke(); }
  ctx.font = `13px ${FONT}`; ctx.fillStyle = C.ink; ctx.textAlign = 'center'; ctx.fillText('you', x, y + 36);
  ctx.restore();
}

function resize() {
  const r = $('app').getBoundingClientRect();
  dpr = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height;
  cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  topY = $('hud').hidden ? 0 : $('hud').offsetHeight + 6;
}
addEventListener('resize', resize);

function show(id) {
  ['sTitle', 'sIntro', 'sWin', 'sLose'].forEach(s => $(s).hidden = s !== id);
}
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const rnd = (a, b) => a + Math.random() * (b - a);

function makeBubble(text, kind, near) {
  ctx.font = `15px ${FONT}`;
  const w = ctx.measureText(text).width + 30, h = 40;
  const sp = 16 + ch.id * 6, ang = rnd(0, Math.PI * 2);
  let x, y, tries = 0;
  do {
    x = near ? near.x + rnd(-60, 60) : rnd(w / 2 + 6, W - w / 2 - 6);
    y = near ? near.y + rnd(-50, 50) : rnd(topY + h, H - h - 10);
    tries++;
  } while (tries < 25 && bubbles.some(o => o.kind === 'pos' && Math.hypot(o.x - x, o.y - y) < 70));
  return { text, kind, x, y, w, h, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, age: 0,
    scale: 1, found: false, shake: 0, seed: seedN++, key: '', shapes: null };
}

function spawnNeg(near) {
  if (!negQueue.length) negQueue = shuffle(L.negatives);
  bubbles.push(makeBubble(negQueue.pop(), 'neg', near));
}

function startLevel(i) {
  li = i; L = DATA.levels[i]; ch = DATA.chapters.find(c => c.id === L.chapter);
  bubbles = []; toasts = []; mistakes = 0; flash = quake = musicAcc = beatAcc = 0; step = 0; spawnAcc = 0; timeLeft = ch.time; negQueue = shuffle(L.negatives);
  $('hud').hidden = false; $('lvl').textContent = `${ch.name} · Level ${L.id}`;
  $('trigger').textContent = L.trigger; resize();
  $('iLvl').textContent = `${ch.name} · Level ${L.id}`; $('iTrig').textContent = L.trigger;
  $('iTip').textContent = L.id === 1 ? "Find the one sane thought! Tap a wrong one and it's game over. No take-backs!"
    : (L.decoys.length && !decoyHinted && (decoyHinted = true)) ? 'Careful!! Some thoughts look calm but are really just sulking. Those end the game too!'
    : L.positives.length > 1 ? `${L.positives.length} sane thoughts are hiding this time. Find them all!` : '';
  state = 'intro'; show('sIntro'); syncHud();
}

function beginPlay() {
  show(null); state = 'play';
  L.positives.forEach(t => bubbles.push(makeBubble(t, 'pos')));
  for (let k = 0; k < Math.ceil(L.negatives.length / 2); k++) spawnNeg();
  L.decoys.forEach(t => bubbles.push(makeBubble(t, 'decoy')));
  bubbles.sort((a, b) => (a.kind === 'pos' ? -1 : 0) - (b.kind === 'pos' ? -1 : 0));
}

function syncHud() {
  const f = Math.max(0, timeLeft / ch.time);
  $('fill').style.transform = `scaleX(${f})`; $('fill').classList.toggle('low', f < 0.3);
  $('tleft').textContent = `${Math.max(0, timeLeft).toFixed(1)}s`;
}

function update(dt) {
  timeLeft -= dt; syncHud();
  if (timeLeft <= 0) return lose();
  const cap = 12 + ch.id * 2, every = Math.max(0.7, 2.4 - ch.id * 0.3);
  spawnAcc += dt;
  if (spawnAcc > every) { spawnAcc = 0; if (bubbles.filter(b => b.kind !== 'pos').length < cap) { spawnNeg(); sfx('pop'); } }
  const targets = bubbles.filter(b => b.kind === 'pos' && !b.found);
  const vmax = 22 + ch.id * 9;
  for (const b of bubbles) {
    b.shake = Math.max(0, b.shake - dt);
    if (b.found) continue;
    b.age += dt;
    if (b.kind !== 'pos') {
      b.scale = Math.min(1.25, 1 + b.age * 0.02 * ch.id);
      // 坏念头会慢慢往好念头那边围过去
      if (ch.id >= 2 && targets.length) {
        let t = targets[0], d = 1e9;
        for (const p of targets) { const dd = Math.hypot(p.x - b.x, p.y - b.y); if (dd < d) { d = dd; t = p; } }
        if (d > 1) { const k = 4 + ch.id * 3; b.vx += (t.x - b.x) / d * k * dt; b.vy += (t.y - b.y) / d * k * dt; }
      }
    }
    b.vx += rnd(-8, 8) * dt; b.vy += rnd(-8, 8) * dt;
    const v = Math.hypot(b.vx, b.vy); if (v > vmax) { b.vx *= vmax / v; b.vy *= vmax / v; }
    b.x += b.vx * dt; b.y += b.vy * dt;
    const hw = b.w * b.scale / 2, hh = b.h * b.scale / 2;
    if (b.x < hw) { b.x = hw; b.vx = Math.abs(b.vx); } if (b.x > W - hw) { b.x = W - hw; b.vx = -Math.abs(b.vx); }
    if (b.y < topY + hh) { b.y = topY + hh; b.vy = Math.abs(b.vy); } if (b.y > H - hh - 8) { b.y = H - hh - 8; b.vy = -Math.abs(b.vy); }
  }
  toasts = toasts.filter(t => (t.life -= dt) > 0);
}

function shapesFor(b) {
  const s = b.scale, key = `${boil % 4}|${Math.round(s * 20)}|${b.found}|${b.shake > 0}`;
  if (b.key === key) return b.shapes;
  const seed = b.seed * 10 + (boil % 4) + 1;
  const o = { stroke: b.shake > 0 ? C.warn : C.ink,
    sw: b.kind === 'pos' ? 1.6 : 1.4 + (1 - timeLeft / ch.time) * 1.2,
    fill: b.found ? C.sun : C.paper };
  const w = b.w * s, h = b.h * s;
  b.shapes = [
    ell(-w * 0.32, h * 0.62, 9 * s, 9 * s, seed + 1, o),
    ell(-w * 0.42, h * 0.86, 5 * s, 5 * s, seed + 2, o),
    ell(0, 0, w, h, seed, o),
  ];
  b.key = key; return b.shapes;
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = C.paper; ctx.fillRect(0, 0, W, H);
  ctx.save();
  if (quake > 0) ctx.translate(Math.sin(quake * 70) * 8 * quake / 0.35, Math.cos(quake * 55) * 5 * quake / 0.35);
  ctx.strokeStyle = C.rule; ctx.lineWidth = 1;
  for (let y = 30; y < H; y += 30) { ctx.beginPath(); ctx.moveTo(-10, y); ctx.lineTo(W + 10, y); ctx.stroke(); }
  if (!['play', 'done', 'win', 'lose'].includes(state)) return ctx.restore();
  drawScene();
  // 时间越少，纸面四周越暗
  const p = Math.min(1, Math.max(0, 1 - timeLeft / ch.time));
  const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.2, W / 2, H / 2, Math.max(W, H) * 0.75);
  g.addColorStop(0, 'rgba(43,38,34,0)'); g.addColorStop(1, `rgba(43,38,34,${0.45 * p})`);
  ctx.fillStyle = g; ctx.fillRect(-10, -10, W + 20, H + 20);
  drawFace(state === 'win' ? 0 : Math.max(p, flash > 0 ? 0.8 : 0));
  const order = bubbles.filter(b => !b.found).concat(bubbles.filter(b => b.found));
  for (const b of order) {
    const sx = b.shake > 0 ? Math.sin(b.shake * 60) * 5 : 0;
    ctx.save(); ctx.translate(b.x + sx, b.y);
    shapesFor(b).forEach(drawShape);
    ctx.fillStyle = C.ink; ctx.font = `${Math.round(15 * b.scale)}px ${FONT}`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(b.text, 0, 1);
    ctx.restore();
  }
  for (const t of toasts) {
    ctx.globalAlpha = Math.min(1, t.life * 2); ctx.fillStyle = t.color; ctx.font = `20px ${FONT}`;
    ctx.textAlign = 'center'; ctx.fillText(t.text, t.x, t.y - (1.2 - t.life) * 40); ctx.globalAlpha = 1;
  }
  ctx.restore();
  // 点错时整屏闪一下红
  if (flash > 0) { ctx.fillStyle = `rgba(200,69,47,${flash * 0.9})`; ctx.fillRect(0, 0, W, H); }
}

function hit(b, x, y) {
  const dx = (x - b.x) / (b.w * b.scale / 2), dy = (y - b.y) / (b.h * b.scale / 2);
  return dx * dx + dy * dy <= 1;
}

cv.addEventListener('pointerdown', e => {
  if (state !== 'play') return;
  const r = cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
  const order = bubbles.filter(b => !b.found).concat(bubbles.filter(b => b.found));
  for (let i = order.length - 1; i >= 0; i--) {
    const b = order[i];
    if (!hit(b, x, y)) continue;
    if (b.found) return;
    if (b.kind === 'pos') {
      b.found = true; b.scale = 1.1;
      toasts.push({ text: 'Yes! Brain rebooted!', x: b.x, y: b.y - 30, life: 1.2, color: C.ink });
      sfx('good');
      if (bubbles.every(o => o.kind !== 'pos' || o.found)) { state = 'done'; setTimeout(win, 500); }
    } else {
      // 点错直接出局：红闪、震屏、错误音，停顿一下再放结局
      b.shake = 0.7; flash = 0.4; quake = 0.45; state = 'done'; sfx('bad');
      toasts.push({ text: 'Oh no, you bought it!', x: Math.min(W - 90, Math.max(90, b.x)), y: b.y - 30, life: 1.2, color: C.warn });
      const hud = $('hud'); hud.classList.remove('hit'); void hud.offsetWidth; hud.classList.add('hit'); setTimeout(() => hud.classList.remove('hit'), 320);
      try { navigator.vibrate && navigator.vibrate(120); } catch (e) {}
      setTimeout(() => lose(b), 800);
    }
    return;
  }
});

function win() {
  state = 'win'; $('wReveal').textContent = L.reveal;
  const used = ch.time - timeLeft; $('wScore').textContent = `${used.toFixed(1)}s · ${rank(used / ch.time)}`;
  const last = li >= DATA.levels.length - 1;
  $('bNext').textContent = last ? 'All cleared! Home' : 'Next level!';
  show('sWin'); sfx('win');
}
function lose(b) {
  state = 'lose'; syncHud(); sfx('lose');
  const e = makeEnding(b); $('lTitle').textContent = e.title; $('lLine').textContent = e.line;
  show('sLose');
}
function home() { state = 'title'; $('hud').hidden = true; resize(); show('sTitle'); }

$('bStart').onclick = () => { audioOn(); startLevel(0); };
$('sIntro').onclick = () => { audioOn(); beginPlay(); };
$('bMute').onclick = () => { muted = !muted; $('bMute').textContent = muted ? 'Sound off' : 'Sound on'; };
$('bNext').onclick = () => li >= DATA.levels.length - 1 ? home() : startLevel(li + 1);
$('bAgainW').onclick = $('bAgainL').onclick = () => startLevel(li);
$('bHome').onclick = home;
DATA.chapters.forEach(c => {
  const b = document.createElement('button'); b.textContent = c.name;
  b.onclick = () => startLevel(DATA.levels.findIndex(l => l.chapter === c.id)); $('chips').appendChild(b);
});

let last = performance.now();
function loop(now) {
  const dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now;
  if (state === 'play') {
    boilAcc += dt; if (boilAcc > 0.15 && !reduceMotion) { boilAcc = 0; boil++; }
    update(dt);
    music(dt, Math.min(1, Math.max(0, 1 - timeLeft / ch.time)));
  }
  flash = Math.max(0, flash - dt); quake = Math.max(0, quake - dt);
  draw();
  requestAnimationFrame(loop);
}
resize(); requestAnimationFrame(loop);

})();
