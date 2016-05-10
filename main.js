var kingdomName = " ";
var grainPerClick = 1;
var grain = 0;
var grainYieldLevel = 1;
var upgradeGrainYieldPrice = 15;
var upgrade1 = true;
var grainSellPrice = 0.5;
var money = 0;
var upgradeGrainPricePrice = 20;
var grainPriceLevel = 1;
var upgrade2 = true;
var upgrade3 = true;
var randomEvent = 0;
var randomEventNum = 0;
var science = 0;
var scienceModifier = 1;
var ore = 0;
var oreModifier = 0.5;

function getMoney(){
  money += 10000;
  document.getElementById("money").innerHTML = money;
}

function startGame() {
  var gameStartPrompt = prompt("Welcome! Please Choose a Name For Your Kingdom to Begin!");
  kingdomName = gameStartPrompt;
  document.getElementById("kingdomName").innerHTML = kingdomName;
  document.getElementById("startButton").className += "hidden";
  document.getElementById("background").className = "gameBackground";
  document.getElementById("grainStore").className = " ";
  document.getElementById("grainButton").className = " ";
  document.getElementById("grainSellPrice").className = " ";
  document.getElementById("grainSellButton").className = " ";
  document.getElementById("money").className = " ";
  document.getElementById("moneyBox").className = " ";
}
function getGrain() {
  grain += grainYieldLevel;
  document.getElementById("grainNumber").innerHTML = grain;
  if(upgrade1 === true){
    if(money >= 10){
      upgrade1 = false;
      alert("Your modest town begins attracting wanderers who offer you advice and farming tools for a price.  This could increase our wheat production!");
      document.getElementById("grainYieldUpgrade").className = " ";
      document.getElementById("yieldLevel").className = " ";
    }
  }
  }

function sellGrain() {
  money += grain * grainSellPrice;
  grain = 0;
  document.getElementById("money").innerHTML = money;
  document.getElementById("grainNumber").innerHTML = grain;
  if(upgrade2 === true){
    if(money >= 100){
      upgrade2 = false;
      alert("The local merchants and farmers like the look of your grain! You can increase the price of your grain!");
      document.getElementById("grainPriceUpgrade").className = " ";
    }
  }
}

function upgradeGrainYield() {
  if(money >= upgradeGrainYieldPrice) {
    money -= upgradeGrainYieldPrice;
    upgradeGrainYieldPrice = Math.floor(upgradeGrainYieldPrice * 1.5);
    grainYieldLevel += 1;
    document.getElementById("upgradeGrainYieldPrice").innerHTML = upgradeGrainYieldPrice;
    document.getElementById("money").innerHTML = money;
    document.getElementById("grainYieldLevel").innerHTML = grainYieldLevel;
  }
}
function upgradeGrainPrice() {
  if(upgrade3 === true) {
    if(money >= 300){
      upgrade3 = false;
      alert("Your Town is growing rapidly! your numbers are increasing and it is time that some policies were enacted!");
      document.getElementById("researchButton").className = " ";
    }
  }
  if(money >= upgradeGrainPricePrice) {
    money -= upgradeGrainPricePrice;
    upgradeGrainPricePrice = Math.floor(upgradeGrainPricePrice * 1.5);
    grainPriceLevel = (grainPriceLevel += 1);
    grainSellPrice = (grainPriceLevel * 0.5);
    document.getElementById("money").innerHTML = money;
    document.getElementById("grainSellPrice").innerHTML = grainSellPrice;
    document.getElementById("upgradeGrainPricePrice").innerHTML = upgradeGrainPricePrice;
  }
}
function goToResearch() {
  document.getElementById("background").className = "researchBlueBackground";
  document.getElementById("techScreen").className = " ";
  document.getElementById("kingdomScreen").className = "hidden";
  document.getElementById("science").className = " ";
  document.getElementById("scienceButton").className = " ";
  document.getElementById("techMoney").innerHTML = money;
}
function goToMain() {
 document.getElementById("background").className = "mainBackground";
 document.getElementById("techScreen").className = "hidden";
 document.getElementById("kingdomScreen").className = " ";
}

function researchScience() {
  if(money >= 0) {
    document.getElementById("oreResearch").className = " ";
    document.getElementById("scienceResearch").className = "hidden";
  }
}
function researchOre() {
  if(science >= 5) {
    science -= 5;
    document.getElementById("scienceNumber").innerHTML = science;
    document.getElementById("oreResearch").className = "hidden";
    document.getElementById("grainResearch").className = " ";
    document.getElementById("oreMine").className = " ";
    document.getElementById("ore").className = " ";
  }
}

function randomEvent(){
  randomEventNum = Math.rand * 100;
  if(randomEventNum < 10){
    
  }
  if(randomEventNum > 10 && randomEventNum < 20){
    
  }
  if(randomEventNum > 20 && randomEventNum < 30){
    
  }
  if(randomEventNum > 30 && randomEventNum < 40){
    
  }
  if(randomEventNum > 40 && randomEventNum < 50){
    
  }
  if(randomEventNum > 50 && randomEventNum < 60){
    
  }
  if(randomEventNum > 60 && randomEventNum < 70){
    
  }
  if(randomEventNum > 70 && randomEventNum < 80){
    
  }
  if(randomEventNum > 80 && randomEventNum < 90){
    
  }
  if(randomEventNum > 90 && randomEventNum < 100){
    
  }
}

function getScience() {
  if(money >= 100){
    money -= 100;
    science += scienceModifier;
    document.getElementById("techMoney").innerHTML = money;
    document.getElementById("scienceNumber").innerHTML = science;
  }
}

// 1 Second Loop
window.setInterval(function(){
  // Put code to be run every second in here.
  randomEvent += 1;
  if(randomEvent > 300){
    randomEvent = 0;
    randomEvent();
  }
}, 1000);

function mineOre() {
  ore += oreModifier * 1;
  document.getElementById("ore") = ore;
}
