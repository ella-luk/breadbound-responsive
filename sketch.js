let cardRevealed = false;
let cardClosed = false;
let showMakeNewDessertBtn = false;
let cardClicked = false;

let welcomeStarted = false;
let nextStarted = false;
let scene3Started = false;
let scene4Started = false;
let scene5Started = false;
let scene6Started = false; 

let sprinklesY = -0;        
let sprinklesTargetY = 300;    
let sprinklesFalling = false;  
let sprinklesVelocity = 10;     

let strawbY = -0;
let strawbTargetY = 300; 
let strawbFalling = false; 
let strawbVelocity = 10; 

let whippedY = -0; 
let whippedTargetY = 300; 
let whippedFalling = false; 
let whippedVelocity = 10; 

let lidY = 0;
let lidLifting = false;
let lidLifted = false;
let lidLiftTarget = -610; 

let dessertX = -500;  
let targetX = 0;      
let dessertSlideIn = false;

let catSpeechPhrases = [
  "yum! good choice!",
  "that's my \n favorite :)",
  "let's go to \n the next station!",
  "ready?",
];
let catSpeechIndex = 0;
let showCatSpeech = false;
let catSpeechComplete = false;

let catFlavorPhrases = [
  "delicious!",
  "you've got \ngood taste",
  "time for toppings!",
]
let catFlavorIndex = 0;
let showCatFlavor = false; 
let catFlavorComplete = false; 

let catToppingIndex = 0; 
let showCatTopping = false; 
let catToppingComplete = false; 

let catToppingPhrases = [
  "awesome!",
  "that looks \nfabulous!",
  "time for the \nfinal reveal..."
]

let scene2Phrases = [
  "welcome inside \n the bakery!",
  "to make \n your dessert...",
  "you'll visit \n three stations",
  "ready? let's go!",
];
let scene2Index = 0;
let scene2Text = scene2Phrases[0];
let speechText = "hello! welcome to \nbread bound!";
let phrases = [
  "we are happy \nthat you are here!",
  "ready to make \na dessert?",
  "and get a great book \nrecommendation?",
  "great! come on in!"
];
let phraseIndex = 0;
let particles = [];
let sound, bg, img, speech, font;
let textColor = '#000000';
let scene = "welcome"; 

const DESIGN_WIDTH = 910;
const DESIGN_HEIGHT = 650;

let btnX = 720;
let btnY = 580;
let btnW = 150;
let btnH = 40;

let hoverArea = {
  x: 50, 
  y: 320, 
  width: 240,
  height: 90,
}

let hoverArea2 = {
  x: 250,
  y: 430,
  width: 350,
  height: 150,
}

let hoverArea3 = {
  x: 500,
  y: 300,
  width: 160,
  height: 90,
}

let hoverArea4 = { 
  x: 680,
  y: 160, 
  width: 180,
  height: 400,
}

let hoverArea5 = {
  x: 110,
  y: 200,
  width: 190,
  height: 300,
}

let hoverArea6 = {
  x:350,
  y:140,
  width:190,
  height: 300,
}

let hoverArea7 = {
  x: 650,
  y: 200,
  width: 190,
  height: 300,
}

let hoverArea8 = {
  x: 350,
  y: 200,
  width: 190, 
  height: 300,
}

let hoverArea9 = {
  x: 520, 
  y: 400, 
  width: 160, 
  height: 140,
}

let selectedDessert = null;
let selectedFlavor = null;
let selectedTopping = null; 

function preload() {
  bg = loadImage('assets2/baker.png');
  img = loadImage('assets2/cat.png');
  speech = loadImage('assets2/speech.png');
  font = loadFont('assets2/font.ttf');
  sound = loadSound('assets2/music.mp3');
  bg2 = loadImage('assets2/bakeryinside.png');
  station1 = loadImage('assets2/station1.png');
  station1pudding = loadImage('assets2/stations1pudding.png');
  pie1 = loadImage('assets2/station1pie.png');
  cupcake1 = loadImage('assets2/station1cupcake.png');
  icecream1 = loadImage('assets2/station1icecream.png');
  choosepie = loadImage('assets2/choosepie.png');
  choosecupcake = loadImage('assets2/choosecupcake.png');
  choosepudding = loadImage('assets2/choosepudding.png');
  chooseicecream = loadImage('assets2/chooseicecream.png');
  chooseflavor = loadImage('assets2/chooseflavor.png');
  hovermatcha = loadImage('assets2/hovermatcha.png');
  hoverchoc = loadImage('assets2/hoverchoc.png');
  hovervanilla = loadImage('assets2/hovervanilla.png');
  choosematcha = loadImage('assets2/choosematcha.png');
  choosechoc = loadImage('assets2/choosechoc.png');
  choosevanilla = loadImage('assets2/choosevanilla.png');
  plop = loadSound('assets2/plop.mp3')
  pudding = loadImage('assets2/pudding.png');
  pie = loadImage('assets2/pie.png');
  cupcake = loadImage('assets2/cupcake.png');
  icecream = loadImage('assets2/icecream.png');
  choosetopping = loadImage('assets/choosetopping.png');
  matchapudding = loadImage('assets/matchapudding.png');
  chocpudding = loadImage('assets/chocpudding.png');
  vanillapudding = loadImage('assets/vanillapudding.png');
  matchapie = loadImage('assets/matchapie.png');
  chocpie = loadImage('assets/chocpie.png');
  vanillapie = loadImage('assets/vanillapie.png');
  matchacupcake = loadImage('assets/matchacupcake.png');
  choccupcake = loadImage('assets/choccupcake.png');
  vanillacupcake = loadImage('assets/vanillacupcake.png');
  matchaicecream = loadImage('assets/matchaicecream.png');
  chocicecream = loadImage('assets/chocicecream.png');
  vanillaicecream = loadImage('assets/vanillaicecream.png');
  sprinkles = loadImage('assets/sprinkles.png');
  strawb = loadImage('assets/strawb.png');
  whippedcream = loadImage('assets/whippedcream.png');
  hoversprinkles = loadImage('assets/hoversprinkles.png');
  choosesprinkles = loadImage('assets/choosesprinkles.png');
  hoverstrawb = loadImage('assets/hoverstrawb.png');
  choosestrawb = loadImage('assets/choosestrawb.png');
  hoverwhipped = loadImage('assets/hoverwhipped.png');
  choosewhipped = loadImage('assets/choosewhipped.png');
  mps = loadImage('assets/matchapuddingsprinkles.png');
  vps = loadImage('assets/vps.png');
  cps = loadImage('assets/cps.png');
  mcs = loadImage('assets/mcs.png');
  vcs = loadImage('assets/vcs.png');
  ccs = loadImage('assets/ccs.png');
  mpies = loadImage('assets/mpies.png');
  vpies = loadImage('assets/vpies.png');
  cpies = loadImage('assets/cpies.png');
  mis = loadImage('assets/mis.png');
  vis = loadImage('assets/vis.png');
  cis = loadImage('assets/cis.png');
  mpst = loadImage('assets/mpst.png');
  vpst = loadImage('assets/vpst.png');
  cpst = loadImage('assets/cpst.png');
  mcst = loadImage('assets/mcst.png');
  vcst = loadImage('assets/vcst.png');
  ccst = loadImage('assets/ccst.png');
  mpiest = loadImage('assets/mpiest.png');
  vpiest = loadImage('assets/vpiest.png');
  cpiest = loadImage('assets/cpiest.png');
  mist = loadImage('assets/mist.png');
  vist = loadImage('assets/vist.png');
  cist = loadImage('assets/cist.png');
  mpw = loadImage('assets/mpw.png');
  vpw = loadImage('assets/vpw.png');
  cpw = loadImage('assets/cpw.png');
  mcw = loadImage('assets/mcw.png');
  vcw = loadImage('assets/vcw.png');
  ccw = loadImage('assets/ccw.png');
  mpiew = loadImage('assets/mpiew.png');
  vpiew = loadImage('assets/vpiew.png');
  cpiew = loadImage('assets/cpiew.png');
  miw = loadImage('assets/miw.png');
  viw = loadImage('assets/viw.png');
  ciw = loadImage('assets/ciw.png');
  table = loadImage('assets/table.png');
  platter = loadImage('assets/platter.png');
  lid = loadImage('assets/lid.png');
  fmps = loadImage('assets/fmps.png');
  fvps = loadImage('assets/fvps.png');
  fcps = loadImage('assets/fcps.png');
  fmcs = loadImage('assets/fmcs.png');
  fvcs = loadImage('assets/fvcs.png');
  fccs = loadImage('assets/fccs.png');
  fmpies = loadImage('assets/fmpies.png');
  fvpies = loadImage('assets/fvpies.png');
  fcpies = loadImage('assets/fcpies.png');
  fmis = loadImage('assets/fmis.png');
  fvis = loadImage('assets/fvis.png');
  fcis = loadImage('assets/fcis.png');
  fmpst = loadImage('assets/fmpst.png');
  fvpst = loadImage('assets/fvpst.png');
  fcpst = loadImage('assets/fcpst.png');
  fmcst = loadImage('assets/fmcst.png');
  fvcst = loadImage('assets/fvcst.png');
  fccst = loadImage('assets/fccst.png');
  fmpiest = loadImage('assets/fmpiest.png');
  fvpiest = loadImage('assets/fvpiest.png');
  fcpiest = loadImage('assets/fcpiest.png');
  fmist = loadImage('assets/fmist.png');
  fvist = loadImage('assets/fvist.png');
  fcist = loadImage('assets/fcist.png');
  fmpw = loadImage('assets/fmpw.png');
  fvpw = loadImage('assets/fvpw.png');
  fcpw = loadImage('assets/fcpw.png');
  fmcw = loadImage('assets/fmcw.png');
  fvcw = loadImage('assets/fvcw.png');
  fccw = loadImage('assets/fccw.png');
  fmpiew = loadImage('assets/fmpiew.png');
  fvpiew = loadImage('assets/fvpiew.png');
  fcpiew = loadImage('assets/fcpiew.png');
  fmiw = loadImage('assets/fmiw.png');
  fviw = loadImage('assets/fviw.png');
  fciw = loadImage('assets/fciw.png');
  card = loadImage('assets/card.png');
  hovercard = loadImage('assets/hovercard.png');
  cardopen = loadImage('assets/cardopen.png');

}

function setup() {
  createCanvas(windowWidth - 510, windowHeight -150).parent('sketch');

  let btn = document.getElementById('toggle-sound');
  if (btn) {
    btn.addEventListener('click', toggleMusic);
  }

  for (let i = 0; i < 100; i++) {
    particles.push(new Sparkle());
  }

  let volumeSlider = document.getElementById('vol');
  if (volumeSlider) {
    volumeSlider.addEventListener('input', () => {
      let vol = parseFloat(volumeSlider.value);
      sound.setVolume(vol);
      document.getElementById('volVal').textContent = vol.toFixed(2);
    });
  }

  let restartBtn = document.getElementById('restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', restartSketch);
  }

  let newDessertBtn = document.getElementById('new-dessert');
  if (newDessertBtn) {
    newDessertBtn.addEventListener('click', createNewDessert);
  }

  const textColorPicker = document.getElementById('text-color');
  textColorPicker.addEventListener('input', () => {
    textColor = textColorPicker.value;
  });

  const helpBtn = document.getElementById('help-btn');
const helpBanner = document.getElementById('help-banner');


helpBtn.addEventListener('click', (e) => {
  e.stopPropagation(); 
  helpBanner.style.display = helpBanner.style.display === 'block' ? 'none' : 'block';
});


document.body.addEventListener('click', () => {
  helpBanner.style.display = 'none';
});


helpBanner.addEventListener('click', (e) => {
  e.stopPropagation();
});
}

class Sparkle {
  constructor() {
    this.x = random(DESIGN_WIDTH);
    this.y = random(DESIGN_HEIGHT);
    this.alpha = 0;
    this.fadeSpeed = random(2, 5);
    this.fadingIn = true;
    this.size = random(5, 15);
  }

  update() {
    if (this.fadingIn) {
      this.alpha += this.fadeSpeed;
      if (this.alpha >= 255) {
        this.alpha = 255;
        this.fadingIn = false;
      }
    } else {
      this.alpha -= this.fadeSpeed;
      if (this.alpha <= 0) {
        this.alpha = 5;
        this.fadingIn = true;
        this.x = random(DESIGN_WIDTH);
        this.y = random(DESIGN_HEIGHT);
      }
    }
  }

  show() {
    noStroke();
    fill(255, 237, 180, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}

function draw() {
  background(255);


  const scaleX = width / DESIGN_WIDTH;
  const scaleY = height / DESIGN_HEIGHT;
  const scaleFactor = min(scaleX, scaleY);

  const offsetX = (width - DESIGN_WIDTH * scaleFactor) / 2;
  const offsetY = (height - DESIGN_HEIGHT * scaleFactor) / 2;

  push();
  translate(offsetX, offsetY);
  scale(scaleFactor);

 
  const scaledBtnX = btnX;
  const scaledBtnY = btnY;
  const scaledBtnW = btnW;
  const scaledBtnH = btnH;

  if (scene === "welcome") {
    image(bg, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);

    for (let sparkle of particles) {
      sparkle.update();
      sparkle.show();
    }
    image(speech, 500, 170, 200, 200);
    image(img, 380, 190, 300, 380);

    textSize(14);
    fill(textColor);
    textFont(font);
    textAlign(CENTER, CENTER);
    text(speechText, 600, 266);

    if (showContinueBtn) {
      fill(255);
      stroke(0);
      strokeWeight(3);
      rect(scaledBtnX, scaledBtnY, scaledBtnW, scaledBtnH, 40);

      noStroke();
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(16);
      text("continue", scaledBtnX + scaledBtnW / 2, scaledBtnY + scaledBtnH / 2);
    }
  } else if (scene === "next") {
    image(bg2, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(img, 190, 150, 300, 380);
    image(speech, 320, 130, 200, 200);

    textSize(14);
    fill(textColor);
    textFont(font);
    textAlign(CENTER, CENTER);
    text(scene2Text, 415, 226);

    if (showContinueBtn) {
      fill(255);
      stroke(0);
      strokeWeight(3);
      rect(scaledBtnX, scaledBtnY, scaledBtnW, scaledBtnH, 40);

      noStroke();
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(16);
      text("continue", scaledBtnX + scaledBtnW / 2, scaledBtnY + scaledBtnH / 2);
    }
    const backBtnX = 20;
    const backBtnY = 20;
    const backBtnW = 60;
    const backBtnH = 30;

    fill(255);
    stroke(0);
    strokeWeight(1);
    rect(backBtnX, backBtnY, backBtnW, backBtnH, 20);

    noStroke();
    fill(0);
    textSize(14);
    textAlign(CENTER, CENTER);
    textFont(font);
    text("back", backBtnX + backBtnW / 2, backBtnY + backBtnH / 2); 
  } else if (scene === "scene3") {
    background(255);
    for (let sparkle of particles) {
      sparkle.update();
      sparkle.show();
    }

    image(station1, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);

  
    if (selectedDessert !== null) {
      if (selectedDessert === "pudding") {
        image(choosepudding, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      } else if (selectedDessert === "pie") {
        image(choosepie, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      } else if (selectedDessert === "cupcake") {
        image(choosecupcake, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      } else if (selectedDessert === "icecream") {
        image(chooseicecream, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
      fill(textColor);
      textSize(14);
      textFont(font);
    } else {
      
      const mx = mouseXScaled();
      const my = mouseYScaled();

      if (pointInRect(mx, my, hoverArea)) {
        image(station1pudding, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
      if (pointInRect(mx, my, hoverArea2)) {
        image(pie1, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
      if (pointInRect(mx, my, hoverArea3)) {
        image(cupcake1, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
      if (pointInRect(mx, my, hoverArea4)) {
        image(icecream1, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
    }

    fill(textColor);
    textSize(30);
    textAlign(CENTER, CENTER);
    textFont(font);
    text("station one — choose your dessert base", DESIGN_WIDTH / 2, 60);
    textSize(15);
    text("hover over an option, then press to select!", DESIGN_WIDTH / 2, 100);

    if (showCatSpeech) {
      
      let catX = 0;
      let catY = 380;
      let catW = 250;
      let catH = 320;

      let bubbleX = catX + 90;
      let bubbleY = catY - 50;
      let bubbleW = 200;
      let bubbleH = 200;

      image(img, catX, catY, catW, catH);
      image(speech, bubbleX, bubbleY, bubbleW, bubbleH);

      fill(textColor);
      textSize(14);
      textFont(font);
      textAlign(CENTER, CENTER);
      if (catSpeechIndex < catSpeechPhrases.length) {
        text(catSpeechPhrases[catSpeechIndex], bubbleX + bubbleW / 2, bubbleY + bubbleH / 2 - 5);
      }
    }

    if (showContinueBtn) {
      fill(255);
      stroke(0);
      strokeWeight(3);
      rect(scaledBtnX, scaledBtnY, scaledBtnW, scaledBtnH, 40);

      noStroke();
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(16);
      text("continue", scaledBtnX + scaledBtnW / 2, scaledBtnY + scaledBtnH / 2);
    }

    const backBtnX = 20;
    const backBtnY = 20;
    const backBtnW = 60;
    const backBtnH = 30;

    fill(255);
    stroke(0);
    strokeWeight(1);
    rect(backBtnX, backBtnY, backBtnW, backBtnH, 20);

    noStroke();
    fill(0);
    textSize(14);
    textAlign(CENTER, CENTER);
    textFont(font);
    text("back", backBtnX + backBtnW / 2, backBtnY + backBtnH / 2); 
  } else if (scene === 'scene4') {

    background(255);
    for (let sparkle of particles) {
      sparkle.update();
      sparkle.show();
    }

    image(chooseflavor, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);

    // Show selected dessert image or hover previews
    if (selectedFlavor !== null) {
      if (selectedFlavor === "matcha") {
        image(choosematcha, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      } else if (selectedFlavor === "choc") {
        image(choosechoc, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      } else if (selectedFlavor === "vanilla") {
        image(choosevanilla, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
      fill(textColor);
      textSize(14);
      textFont(font);
    } else {
      // Hover previews for dessert selection
      const mx = mouseXScaled();
      const my = mouseYScaled();

      if (pointInRect(mx, my, hoverArea5)) {
        image(hovermatcha, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
      if (pointInRect(mx, my, hoverArea6)) {
        image(hoverchoc, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
      if (pointInRect(mx, my, hoverArea7)) {
        image(hovervanilla, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
    }

    if (dessertSlideIn && dessertX < targetX) {
  dessertX += 10; // speed of sliding
  if (dessertX >= targetX) {
    dessertX = targetX;
    dessertSlideIn = false;
  }
}

if (selectedDessert === "pudding") {
  image(pudding, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT); 
} else if (selectedDessert === "pie") {
  image(pie, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT); 
} else if (selectedDessert === "cupcake") {
  image(cupcake, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT); 
} else if (selectedDessert === "icecream") {
  image(icecream, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT); 
}

    fill(textColor);
    textSize(30);
    textAlign(CENTER, CENTER);
    textFont(font);
    text("station two — choose your flavor", DESIGN_WIDTH / 2, 60);
    textSize(15);
    text("hover over an option, then press to select!", DESIGN_WIDTH / 2, 100);

  const backBtnX = 20;
    const backBtnY = 20;
    const backBtnW = 60;
    const backBtnH = 30;

    fill(255);
    stroke(0);
    strokeWeight(1);
    rect(backBtnX, backBtnY, backBtnW, backBtnH, 20);

    noStroke();
    fill(0);
    textSize(14);
    textAlign(CENTER, CENTER);
    textFont(font);
    text("back", backBtnX + backBtnW / 2, backBtnY + backBtnH / 2); 

    if (showCatFlavor) {
      
      let catX = 0;
      let catY = 380;
      let catW = 250;
      let catH = 320;

      let bubbleX = catX + 90;
      let bubbleY = catY - 50;
      let bubbleW = 200;
      let bubbleH = 200;

      image(img, catX, catY, catW, catH);
      image(speech, bubbleX, bubbleY, bubbleW, bubbleH);

      fill(textColor);
      textSize(14);
      textFont(font);
      textAlign(CENTER, CENTER);
      if (catFlavorIndex < catFlavorPhrases.length) {
        text(catFlavorPhrases[catFlavorIndex], bubbleX + bubbleW / 2, bubbleY + bubbleH / 2 - 5);
      }
    }
  }

  else if (scene === 'scene5') {
  background(255);
  for (let sparkle of particles) {
    sparkle.update();
    sparkle.show();
  }
  image(choosetopping, 0,0, DESIGN_WIDTH, DESIGN_HEIGHT);

  showCatFlavor = false;
     catFlavorIndex = 0;
     catFlavorComplete = false;

  fill(textColor);
    textSize(30);
    textAlign(CENTER, CENTER);
    textFont(font);
    text("station three — choose your topping", DESIGN_WIDTH / 2, 60);
    textSize(15);
    text("hover over an option, then press to select!", DESIGN_WIDTH / 2, 100);

  if (selectedTopping !== null) {
      if (selectedTopping === "sprinkles") {
        image(choosesprinkles, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      if (sprinklesFalling) {
      image(sprinkles, 340, sprinklesY, 240, 160);
      sprinklesY += sprinklesVelocity;

      
      if (sprinklesY >= sprinklesTargetY) {
      sprinklesY = sprinklesTargetY;
      sprinklesFalling = false;
        }
      }
      } else if (selectedTopping === "strawb") {
        image(choosestrawb, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      if (strawbFalling) {
      image(strawb, 350, strawbY, 210, 150);
      strawbY += strawbVelocity;

      if (strawbY >= strawbTargetY) {
      strawbFalling = false;
        }
      }
      } else if (selectedTopping === "whipped") {
        image(choosewhipped, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      if (whippedFalling) {
      image(whippedcream, 340, whippedY, 240, 160);
      whippedY += whippedVelocity;

      if (whippedY >= whippedTargetY) {
        whippedFalling = false;
        }
      }
      }
      fill(textColor);
      textSize(14);
      textFont(font);
    } 
    else {
      
      const mx = mouseXScaled();
      const my = mouseYScaled();

      if (pointInRect(mx, my, hoverArea5)) {
        image(hoversprinkles, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
      if (pointInRect(mx, my, hoverArea8)) {
        image(hoverstrawb, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
      if (pointInRect(mx, my, hoverArea7)) {
        image(hoverwhipped, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
      }
    }

  if (dessertSlideIn && dessertX < targetX) {
  dessertX += 10; // speed of sliding
  if (dessertX >= targetX) {
    dessertX = targetX;
    dessertSlideIn = false;
      }
    }
  if (selectedDessert === "pudding" && selectedFlavor === "matcha") {
  image(matchapudding, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT); 
  } else if (selectedDessert === "pudding" && selectedFlavor === "choc") {
  image(chocpudding, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedDessert === "pudding" && selectedFlavor === "vanilla") {
  image(vanillapudding, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedDessert === "pie" && selectedFlavor === "matcha") {
  image(matchapie, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedDessert === "pie" && selectedFlavor === "choc") {
  image(chocpie, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedDessert === "pie" && selectedFlavor === "vanilla") {
  image(vanillapie, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedDessert === "cupcake" && selectedFlavor === "matcha") {
  image(matchacupcake, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedDessert === "cupcake" && selectedFlavor === "choc") {
  image(choccupcake, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedDessert === "cupcake" && selectedFlavor === "vanilla") {
  image(vanillacupcake, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedDessert === "icecream" && selectedFlavor === "matcha") {
  image(matchaicecream, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedDessert === "icecream" && selectedFlavor === "choc") {
  image(chocicecream, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedDessert === "icecream" && selectedFlavor === "vanilla") {
  image(vanillaicecream, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } 


  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "pudding" && selectedFlavor === "matcha") {
  image(mps, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "pudding" && selectedFlavor === "vanilla") {
  image(vps, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "pudding" && selectedFlavor === "choc") {
  image(cps, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "cupcake" && selectedFlavor === "matcha") {
  image(mcs, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "cupcake" && selectedFlavor === "vanilla") {
  image(vcs, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "cupcake" && selectedFlavor === "choc") {
  image(ccs, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "pie" && selectedFlavor === "matcha") {
  image(mpies, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "pie" && selectedFlavor === "vanilla") {
  image(vpies, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "pie" && selectedFlavor === "choc") {
  image(cpies, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "icecream" && selectedFlavor === "matcha") {
  image(mis, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "icecream" && selectedFlavor === "vanilla") {
  image(vis, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "sprinkles" && !sprinklesFalling && selectedDessert === "icecream" && selectedFlavor === "choc") {
  image(cis, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "pudding" && selectedFlavor === "matcha") {
  image(mpst, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "pudding" && selectedFlavor === "vanilla") {
  image(vpst, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "pudding" && selectedFlavor === "choc") {
  image(cpst, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "cupcake" && selectedFlavor === "matcha") {
  image(mcst, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }  
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "cupcake" && selectedFlavor === "vanilla") {
  image(vcst, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "cupcake" && selectedFlavor === "choc") {
  image(ccst, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "pie" && selectedFlavor === "matcha") {
  image(mpiest, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "pie" && selectedFlavor === "vanilla") {
  image(vpiest, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }  
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "pie" && selectedFlavor === "choc") {
  image(cpiest, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "icecream" && selectedFlavor === "matcha") {
  image(mist, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "icecream" && selectedFlavor === "vanilla") {
  image(vist, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "strawb" && !strawbFalling && selectedDessert === "icecream" && selectedFlavor === "choc") {
  image(cist, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "pudding" && selectedFlavor === "matcha") {
  image(mpw, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "pudding" && selectedFlavor === "vanilla") {
  image(vpw, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "pudding" && selectedFlavor === "choc") {
  image(cpw, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "cupcake" && selectedFlavor === "matcha") {
  image(mcw, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "cupcake" && selectedFlavor === "vanilla") {
  image(vcw, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "cupcake" && selectedFlavor === "choc") {
  image(ccw, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "pie" && selectedFlavor === "matcha") {
  image(mpiew, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "pie" && selectedFlavor === "vanilla") {
  image(vpiew, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "pie" && selectedFlavor === "choc") {
  image(cpiew, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "icecream" && selectedFlavor === "matcha") {
  image(miw, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
  if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "icecream" && selectedFlavor === "vanilla") {
  image(viw, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }
    if (selectedTopping === "whipped" && !whippedFalling && selectedDessert === "icecream" && selectedFlavor === "choc") {
  image(ciw, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  }

  const backBtnX = 20;
    const backBtnY = 20;
    const backBtnW = 60;
    const backBtnH = 30;

    fill(255);
    stroke(0);
    strokeWeight(1);
    rect(backBtnX, backBtnY, backBtnW, backBtnH, 20);

    noStroke();
    fill(0);
    textSize(14);
    textAlign(CENTER, CENTER);
    textFont(font);
    text("back", backBtnX + backBtnW / 2, backBtnY + backBtnH / 2); 

    if (showCatTopping) {
      let catX = 0;
      let catY = 380;
      let catW = 250;
      let catH = 320;

      let bubbleX = catX + 90;
      let bubbleY = catY - 50;
      let bubbleW = 200;
      let bubbleH = 200;

      image(img, catX, catY, catW, catH);
      image(speech, bubbleX, bubbleY, bubbleW, bubbleH);

      fill(textColor);
      textSize(14);
      textFont(font);
      textAlign(CENTER, CENTER);
      if (catToppingIndex < catToppingPhrases.length) {
        text(catToppingPhrases[catToppingIndex], bubbleX + bubbleW / 2, bubbleY + bubbleH / 2 - 5);
      }
  }
} else if (scene === 'scene6') {
  background(255);
  for (let sparkle of particles) {
    sparkle.update();
    sparkle.show();
  }
  image(table, 0,0, DESIGN_WIDTH, DESIGN_HEIGHT);

  fill(textColor);
    textSize(30);
    textAlign(CENTER, CENTER);
    textFont(font);
    text("dessert reveal", DESIGN_WIDTH / 2, 60);
    textSize(15);
    text("click the platter to reveal your dessert & book recommendation!", DESIGN_WIDTH / 2, 100);

  if (dessertSlideIn && dessertX < targetX) {
  dessertX += 10; // speed of sliding
  if (dessertX >= targetX) {
    dessertX = targetX;
    dessertSlideIn = false;
      }
    }
  if (selectedTopping === "sprinkles" && selectedDessert === "pudding" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(fmps, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
  image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "pudding" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(fvps, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
  image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "pudding" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(fcps, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
 image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "cupcake" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(fmcs, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
  image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "cupcake" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(fvcs, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
  image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "cupcake" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(fccs, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
  image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "pie" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(fmpies, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
  image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "pie" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(fvpies, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
  image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "pie" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(fcpies, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
  image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "icecream" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(fmis, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
  image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "icecream" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fvis, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "icecream" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fcis, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "pudding" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fmpst, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "pudding" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fvpst, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "pudding" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fcpst, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "cupcake" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fmcst, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "cupcake" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fvcst, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "cupcake" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fccst, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "pie" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fmpiest, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "pie" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fvpiest, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "pie" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fcpiest, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "icecream" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fmist, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "icecream" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fvist, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "strawb" && selectedDessert === "icecream" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fcist, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "pudding" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fmpw, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
   image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "pudding" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fvpw, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "pudding" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fcpw, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "cupcake" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fmcw, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "cupcake" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fvcw, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "cupcake" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fccw, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
   image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "pie" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fmpiew, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "pie" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fvpiew, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "pie" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fcpiew, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "icecream" && selectedFlavor === "matcha") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fmiw, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "icecream" && selectedFlavor === "vanilla") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fviw, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
   image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  } else if (selectedTopping === "whipped" && selectedDessert === "icecream" && selectedFlavor === "choc") {
  image(platter, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(fciw, dessertX, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    image(card, dessertX, 0, DESIGN_WIDTH,DESIGN_HEIGHT);
    image(lid, dessertX, lidY, DESIGN_WIDTH, DESIGN_HEIGHT);
  }

  const backBtnX = 20;
    const backBtnY = 20;
    const backBtnW = 60;
    const backBtnH = 30;

    fill(255);
    stroke(0);
    strokeWeight(1);
    rect(backBtnX, backBtnY, backBtnW, backBtnH, 20);

    noStroke();
    fill(0);
    textSize(14);
    textAlign(CENTER, CENTER);
    textFont(font);
    text("back", backBtnX + backBtnW / 2, backBtnY + backBtnH / 2); 
  
  if (lidLifting && !lidLifted) {
  lidY -= 10; // speed of lift
  if (lidY <= lidLiftTarget) {
    lidY = lidLiftTarget;
    lidLifting = false;
    lidLifted = true;
  }
}
}

  if (showContinueBtn) {
      fill(255);
      stroke(0);
      strokeWeight(3);
      rect(scaledBtnX, scaledBtnY, scaledBtnW, scaledBtnH, 40);

      noStroke();
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(16);
      text("continue", scaledBtnX + scaledBtnW / 2, scaledBtnY + scaledBtnH / 2);
    }

  if (scene === 'scene6' && cardClicked) {

  image(cardopen, 0, 0, DESIGN_WIDTH, DESIGN_HEIGHT); // adjust position/size


  fill(50);
  textFont(font);
  textSize(24);
  if (selectedTopping === "sprinkles" && selectedDessert === "pudding" && selectedFlavor === "matcha") {
  text("Your book recommendation:\n\nRed White & Royal Blue \nby Casey McQuiston", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "pudding" && selectedFlavor === "vanilla") {
  text("Your book recommendation:\n\nThe Seven Year Slip \nby Ashley Poston", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "pudding" && selectedFlavor === "choc") {
  text("Your book recommendation:\n\nThe Do-Over \nby Lynn Painter", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "cupcake" && selectedFlavor === "matcha") {
  text("Your book recommendation:\n\nDonuts and Other \nProclamations of Love\nby Jared Reck", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "cupcake" && selectedFlavor === "vanilla") {
  text("Your book recommendation:\n\nDaisy Jones & The Six\nby Taylor Jenkins Reid", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "cupcake" && selectedFlavor === "choc") {
  text("Your book recommendation:\n\nThe Authenticity Project\nby Clare Pooley", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "pie" && selectedFlavor === "matcha") {
  text("Your book recommendation:\n\nSix of Crows\nby Leigh Bardugo", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "pie" && selectedFlavor === "vanilla") {
  text("Your book recommendation:\n\nThe Galaxy and the Ground Within\nby Becky Chambers", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "pie" && selectedFlavor === "choc") {
  text("Your book recommendation:\n\nThe House In The Cerulean Sea\nby T.J Klune", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "icecream" && selectedFlavor === "matcha") {
  text("Your book recommendation:\n\nDial A For Aunties\nby Jesse Q. Sutanto", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "icecream" && selectedFlavor === "vanilla") {
  text("Your book recommendation:\n\nLiar & Spy\n by Rebecca Stead", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "sprinkles" && selectedDessert === "icecream" && selectedFlavor === "choc") {
  text("Your book recommendation:\n\nAnxious People\nby Fredrick Backman", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "pudding" && selectedFlavor === "matcha") {
   text("Your book recommendation:\n\nThe First to Die at the End\nby Adam Silvera", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "pudding" && selectedFlavor === "vanilla") {
  text("Your book recommendation:\n\nAristotle & Dante Discover\nthe Secrets of the Universe\n by Benjamin Alire Sáenz", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "pudding" && selectedFlavor === "choc") {
   text("Your book recommendation:\n\nThe Rosie Project\n by Graeme Simsion", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "cupcake" && selectedFlavor === "matcha") {
  text("Your book recommendation:\n\nTomorrow and Tomorrow\nand Tomorrow\nby Gabrielle Zevin", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "cupcake" && selectedFlavor === "vanilla") {
   text("Your book recommendation:\n\nHalf Blown Rose\nby Leesa Cross-Smith", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "cupcake" && selectedFlavor === "choc") {
   text("Your book recommendation:\n\nYolk\nby Mary H.K. Choi", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "pie" && selectedFlavor === "matcha") {
   text("Your book recommendation:\n\nWhen You Reach Me\nby Rebecca Stead", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "pie" && selectedFlavor === "vanilla") {
 text("Your book recommendation:\n\nStrange the Dreamer\nby Laini Taylor", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "pie" && selectedFlavor === "choc") {
 text("Your book recommendation:\n\nI Who Have Never Known Men\nby Jacqueline Harpman", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "icecream" && selectedFlavor === "matcha") {
   text("Your book recommendation:\n\nDark Matter\nby Blake Crouch", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "icecream" && selectedFlavor === "vanilla") {
  text("Your book recommendation:\n\nIf We Were Villains\nby M. L. Rio", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "strawb" && selectedDessert === "icecream" && selectedFlavor === "choc") {
   text("Your book recommendation:\n\nYellowface\nby R. F. Kuang", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "pudding" && selectedFlavor === "matcha") {
   text("Your book recommendation:\n\nSay You'll Remember Me\nby Abby Jimenez", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "pudding" && selectedFlavor === "vanilla") {
  text("Your book recommendation:\n\nPicture Us in the Light\nby Kelly Loy Gilbert", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "pudding" && selectedFlavor === "choc") {
   text("Your book recommendation:\n\nPack Up the Moon\nby Kristan Higgins", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "cupcake" && selectedFlavor === "matcha") {
   text("Your book recommendation:\n\nWe Could Be Rats\nby Emily Austin", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "cupcake" && selectedFlavor === "vanilla") {
   text("Your book recommendation:\n\nBeartown\nby Fredrick Backman", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "cupcake" && selectedFlavor === "choc") {
  text("Your book recommendation:\n\nMy Friends\nby Fredrick Backman", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "pie" && selectedFlavor === "matcha") {
 text("Your book recommendation:\n\nAs Long as the Lemon \nTrees Grow\nby Zoulfa Katouh", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "pie" && selectedFlavor === "vanilla") {
  text("Your book recommendation:\n\nThe Long Way to a Small \nAngry Planet\nby Becky Chambers", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "pie" && selectedFlavor === "choc") {
 text("Your book recommendation:\n\nWe are the Ants\n by Shaun David Hutchinson", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "icecream" && selectedFlavor === "matcha") {
   text("Your book recommendation:\n\nThe Push\nby Ashley Audrain", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "icecream" && selectedFlavor === "vanilla") {
   text("Your book recommendation:\n\nThe Astonishing Color of After\nby Emily X.R. Pan", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  } else if (selectedTopping === "whipped" && selectedDessert === "icecream" && selectedFlavor === "choc") {
   text("Your book recommendation:\n\nThe Secret History\nby Donna Tartt", DESIGN_WIDTH/2, DESIGN_HEIGHT/2);
  }
} 
  pop();
}

function mousePressed() {
  const scaleX = width / DESIGN_WIDTH;
  const scaleY = height / DESIGN_HEIGHT;
  const scaleFactor = min(scaleX, scaleY);

  const offsetX = (width - DESIGN_WIDTH * scaleFactor) / 2;
  const offsetY = (height - DESIGN_HEIGHT * scaleFactor) / 2;

  // Convert mouse coords to design coords
  const mx = (mouseX - offsetX) / scaleFactor;
  const my = (mouseY - offsetY) / scaleFactor;

  if (plop.isLoaded()) {
    plop.play();
  }

  if (scene === "welcome") {
    if (showContinueBtn && pointInRect(mx, my, {x: btnX, y: btnY, width: btnW, height: btnH})) {
      advanceWelcome();
    }
  } else if (scene === "next") {
    if (showContinueBtn && pointInRect(mx, my, {x: btnX, y: btnY, width: btnW, height: btnH})) {
      advanceScene2();
      nextStarted = true;
    }
  } else if (scene === "scene3") {
  if (!showCatSpeech) {
    
    if (pointInRect(mx, my, hoverArea)) {
      selectedDessert = "pudding";
      showCatSpeech = true;
      catSpeechIndex = 0;
      catSpeechComplete = false;
      showContinueBtn = true;  
      scene3Started = true;
    } else if (pointInRect(mx, my, hoverArea2)) {
      selectedDessert = "pie";
      showCatSpeech = true;
      catSpeechIndex = 0;
      catSpeechComplete = false;
      showContinueBtn = true;
      scene3Started = true;
    } else if (pointInRect(mx, my, hoverArea3)) {
      selectedDessert = "cupcake";
      showCatSpeech = true;
      catSpeechIndex = 0;
      catSpeechComplete = false;
      showContinueBtn = true;
      scene3Started = true;
    } else if (pointInRect(mx, my, hoverArea4)) {
      selectedDessert = "icecream";
      showCatSpeech = true;
      catSpeechIndex = 0;
      catSpeechComplete = false;
      showContinueBtn = true;
      scene3Started = true;
    }
  } else if (showCatSpeech) {
  
  if (showContinueBtn && pointInRect(mx, my, {x: btnX, y: btnY, width: btnW, height: btnH})) {
    if (!catSpeechComplete) {
      catSpeechIndex++;
      if (catSpeechIndex >= catSpeechPhrases.length - 1) {
        catSpeechIndex = catSpeechPhrases.length - 1;
        catSpeechComplete = true;
      }
    } else {
      scene = "scene4";
      showContinueBtn = false;
      dessertX = -500; // reset starting position
      dessertSlideIn = true; // start sliding in
    }
  }
}
}  else if (scene === "scene4") {
  if (!showCatFlavor) {
  
    if (pointInRect(mx, my, hoverArea5)) {
      selectedFlavor = "matcha";
      showCatFlavor = true;
      catFlavorIndex = 0;
      catFlavorComplete = false;
      showContinueBtn = true;
      scene4Started = true;
    } else if (pointInRect(mx, my, hoverArea6)) {
      selectedFlavor = "choc";
      showCatFlavor = true;
      catFlavorIndex = 0;
      catFlavorComplete = false;
      showContinueBtn = true;
      scene4Started = true;
    } else if (pointInRect(mx, my, hoverArea7)) {
      selectedFlavor = "vanilla";
      showCatFlavor = true;
      catFlavorIndex = 0;
      catFlavorComplete = false;
      showContinueBtn = true;
      scene4Started = true;
    }
  } else {
    
    if (showContinueBtn && pointInRect(mx, my, {x: btnX, y: btnY, width: btnW, height: btnH})) {
      if (!catFlavorComplete) {
        catFlavorIndex++;
        if (catFlavorIndex >= catFlavorPhrases.length - 1) {
          catFlavorIndex = catFlavorPhrases.length - 1;
          catFlavorComplete = true;
        }
      } else {
       
        scene = "scene5";
        showContinueBtn = false;

        dessertX = -500;
        dessertSlideIn = true;
      }
    }
  }
} else if (scene === "scene5") {
  if (!showCatTopping) {
  if (selectedTopping === null) {
   if (pointInRect(mx, my, hoverArea5)) {
      selectedTopping = "sprinkles";
      showContinueBtn = true;
      sprinklesY = -200;
      sprinklesFalling = true;
      scene5Started = true;
    } else if (pointInRect(mx, my, hoverArea6)) {
      selectedTopping = "strawb";
      showContinueBtn = true;
      strawbY = -200;
      strawbFalling = true;
      scene5Started = true;
    } else if (pointInRect(mx, my, hoverArea7)) {
      selectedTopping = "whipped";
      showContinueBtn = true;
      whippedY = -200; 
      whippedFalling = true; 
      scene5Started = true;
    }
}  if (!sprinklesFalling && !strawbFalling && !whippedFalling && selectedTopping !== null && !showCatTopping) {
  showCatTopping = true;
  showContinueBtn = true; 
  catToppingIndex = 0;
  catToppingComplete = false;
}
} else {
    
    if (showContinueBtn && pointInRect(mx, my, {x: btnX, y: btnY, width: btnW, height: btnH})) {
      if (!catToppingComplete) {
        catToppingIndex++;
        if (catToppingIndex >= catToppingPhrases.length - 1) {
          catToppingIndex = catToppingPhrases.length - 1;
          catToppingComplete = true;
        }
      } else {
        
        scene = "scene6";
        showContinueBtn = false;

        dessertX = -500;
        dessertSlideIn = true;
      }
    }
  }
} else if (scene === 'scene6' && !lidLifting && !lidLifted) {
  
  let lidHitbox = {
    x: 150,
    y: 150, 
    width: 550, 
    height: 400,
  }

  if (mx >= lidHitbox.x && mx <= lidHitbox.x + lidHitbox.width &&
    my >= lidHitbox.y && my <= lidHitbox.y + lidHitbox.height) {
  lidLifting = true;
  scene6Started = true;
}
}

if (scene === 'scene6' && lidLifted && pointInRect(mx, my, hoverArea9)) {
    cardClicked = true;
  }

const backBtnRect = { x: 20, y: 20, width: 60, height: 30 };
if (pointInRect(mx, my, backBtnRect)) {
  handleBackButton();
  return; // Prevent other actions from firing
}
}

function advanceWelcome() {
  phraseIndex++;
  if (phraseIndex < phrases.length) {
    speechText = phrases[phraseIndex];
  } else {
    scene = "next";
    scene2Text = scene2Phrases[0];
    scene2Index = 0;
    phraseIndex = 0;
    speechText = "";
  }
}


function advanceScene2() {
  scene2Index++;
  if (scene2Index < scene2Phrases.length) {
    scene2Text = scene2Phrases[scene2Index];
  } else {
    scene = "scene3";
    scene2Text = "";
    showContinueBtn = false;
  }
}

function pointInRect(px, py, rect) {
  return px > rect.x && px < rect.x + rect.width && py > rect.y && py < rect.y + rect.height;
}

function mouseXScaled() {
  const scaleX = width / DESIGN_WIDTH;
  const scaleY = height / DESIGN_HEIGHT;
  const scaleFactor = min(scaleX, scaleY);
  const offsetX = (width - DESIGN_WIDTH * scaleFactor) / 2;
  return (mouseX - offsetX) / scaleFactor;
}

function mouseYScaled() {
  const scaleX = width / DESIGN_WIDTH;
  const scaleY = height / DESIGN_HEIGHT;
  const scaleFactor = min(scaleX, scaleY);
  const offsetY = (height - DESIGN_HEIGHT * scaleFactor) / 2;
  return (mouseY - offsetY) / scaleFactor;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleMusic() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}

function restartSketch() {
  phraseIndex = 0;
  speechText = "hello! welcome to \nbread bound!";
  scene = "welcome";
  showContinueBtn = true;
  showCatSpeech = false;
  selectedDessert = null;
  catSpeechIndex = 0;
  catSpeechComplete = false;
  selectedFlavor = null;
  showCatFlavor = false;
  catFlavorIndex = 0;
  catFlavorComplete = false;
  showCatTopping = false;
  catToppingIndex = 0;
  catToppingComplete = false; 
  selectedTopping = null; 
  sprinklesY = -200;
  sprinklesFalling = false;
  strawbY = -200; 
  strawbFalling = false;
  whippedY = -200; 
  whippedFalling = false; 
  lidY = 0;
  lidLifting = false;
  lidLifted = false;
  cardClicked = false;
}


let showContinueBtn = true;

function handleBackButton() {
  if (scene === "scene6") {
    if (scene6Started) {
      lidLifting = false;
      lidLifted = false; 
      lidY = 0;
      showContinueBtn = false;
      scene6Started = false;
      cardClicked = false; 
    } else {
      scene = "scene5";
      scene5Started = false;
      selectedTopping = null;
      sprinklesFalling = strawbFalling = whippedFalling = false;
      sprinklesY = strawbY = whippedY = -200;
      showContinueBtn = false;
      showCatTopping = false; 
    }
  }
  else if (scene === "scene5") {
    if (scene5Started) {
      
      selectedTopping = null;
      sprinklesFalling = strawbFalling = whippedFalling = false;
      sprinklesY = strawbY = whippedY = -200;
      showContinueBtn = false;
      scene5Started = false;
      showCatTopping = false; 
    } else {
      
      scene = "scene4";
      scene5Started = false;
      selectedFlavor = null;
      showCatFlavor = false;
      catFlavorIndex = 0;
      catFlavorComplete = false;
      showContinueBtn = false;
      dessertX = -500;
      dessertSlideIn = true;
    }
  }

  else if (scene === "scene4") {
    if (scene4Started) {
    
      selectedFlavor = null;
      showCatFlavor = false;
      catFlavorIndex = 0;
      catFlavorComplete = false;
      showContinueBtn = false;
      scene4Started = false;
    } else {
      scene = "scene3";
      selectedDessert = null;
      showCatSpeech = false;
      catSpeechIndex = 0;
      catSpeechComplete = false;
      showContinueBtn = false;
      scene4Started = false;
    }
  }

else if (scene === "scene3") {
    if (scene3Started) {
      selectedDessert = null;
      showCatSpeech = false;
      catSpeechIndex = 0;
      catSpeechComplete = false;
      showContinueBtn = false;
      scene3Started = false;
    } else {
      scene = "next";
      scene3Started = false;
      scene2Index = 0;
      scene2Text = scene2Phrases[0];
      showContinueBtn = true;
    }
  }

 else if (scene === "next") {
  if (nextStarted) {
   
    scene2Index = 0;
    scene2Text = scene2Phrases[0];
    nextStarted = false; // Reset for next time
    showContinueBtn = true;
  } else {

    scene = "welcome";
    welcomeStarted = false;
    phraseIndex = 0;
    speechText = "hello! welcome to \nbread bound!";
    showContinueBtn = true;
  }
  }
}

function createNewDessert() {
  scene = "scene3";
  phraseIndex = 0;
  selectedDessert = null;
  showCatSpeech = false;
  catSpeechIndex = 0;
  catSpeechComplete = false;
  selectedFlavor = null;
  showCatFlavor = false;
  catFlavorIndex = 0;
  catFlavorComplete = false;
  showCatTopping = false;
  catToppingIndex = 0;
  catToppingComplete = false; 
  selectedTopping = null; 
  sprinklesY = -200;
  sprinklesFalling = false;
  strawbY = -200; 
  strawbFalling = false;
  whippedY = -200; 
  whippedFalling = false; 
  lidY = 0;
  lidLifting = false;
  lidLifted = false;
  cardClicked = false;
}
