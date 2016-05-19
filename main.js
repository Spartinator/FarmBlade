var kingdomName = " ";
var grain = 0; var grainPerClick = 1; var grainYieldLevel = 1; var upgradeGrainYieldPrice = 15; var grainSellPrice = 0.5;
var upgrade1 = true; var upgrade2 = true; var upgrade3 = true;
var money = 0;
var upgradeGrainValueCost = 20;
var grainPriceLevel = 1;
var randomEvent = 0;
var randomEventNum = 0;
var science = 0;
var scienceModifier = 0.1;
var ore = 0;
var oreModifier = 0.5;
var farmer = 0;
var farmerGain = 10;
var farmerCost = 250;
var prestigeClaimed = 0;
var prestigeValue = 0;
var prestigeReq = 1000;
var scienceUnlock = false;
var occurenceLevel = 1;
var metal = 0;
var oreMetalModifier = 0.25;

function refreshStats(){
  document.getElementById("grainNumber").innerHTML = grain;
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
  if(money >= upgradeGrainValueCost) {
    money -= upgradeGrainValueCost;
    upgradeGrainValueCost = Math.floor(upgradeGrainValueCost * 1.5);
    grainPriceLevel = (grainPriceLevel += 1);
    grainSellPrice = (grainPriceLevel * 0.5);
    document.getElementById("money").innerHTML = money;
    document.getElementById("grainSellPrice").innerHTML = grainSellPrice;
    document.getElementById("upgradeGrainValueCost").innerHTML = upgradeGrainValueCost;
  }
}
function goToResearch() {
  document.getElementById("background").className = "researchBlueBackground";
  document.getElementById("techScreen").className = " ";
  document.getElementById("kingdomScreen").className = "hidden";
  document.getElementById("science").className = " ";
  document.getElementById("techMoney").innerHTML = money;
}
function goToMain() {
 document.getElementById("background").className = "mainBackground";
 document.getElementById("techScreen").className = "hidden";
 document.getElementById("kingdomScreen").className = " ";
 document.getElementById("money").innerHTML = money;
}

function researchScience() {
    document.getElementById("oreResearch").className = " ";
    document.getElementById("scienceResearch").className = "hidden";
    scienceUnlock = true;
}
function researchOre() {
  if(science >= 5) {
    science -= 5;
    document.getElementById("scienceNumber").innerHTML = science;
    document.getElementById("oreResearch").className = "hidden";
    document.getElementById("grainResearch").className = " ";
    document.getElementById("oreMine").className = " ";
    document.getElementById("ore").className = " ";
    alert("Hitting rocks just got more fun!");
  }
}
function mineOre() {
  ore += 0.5;
  document.getElementById("oreNumber").innerHTML = ore;
}
function researchGrain() {
  if(science >= 12) {
    science -= 12;
    document.getElementById("scienceNumber").innerHTML = science;
    document.getElementById("farmers").className = " ";
    document.getElementById("farmerNumber").className = " ";
    document.getElementById("hireFarmer").className = " ";
    var slaves = "slaves";
    alert("Harvesting Grain yourself is pretty lame! Get with the program and hire some slaves!");
    document.getElementById("smeltingResearch").className = " ";
    document.getElementById("grainResearch").className = "hidden";
    document.getElementById("prestigeResearch").className = " ";
  }
}
function researchPrestige() {
  if(science >= 25) {
    science -= 25;
    document.getElementById("scienceNumber").innerHTML = science;
    document.getElementById("prestigeResearch").className = "hidden";
    document.getElementById("prestigeButton").className = " ";
    document.getElementById("prestigeClaimed").className = "disabled";
  }
}
function researchSmelting() {
  if(science >= 30) {
    science -= 30;
    document.getElementById("smeltingResearch").className = "hidden";
    document.getElementById("smeltButton").className = " ";
    document.getElementById("scienceNumber").innerHTML = science;
  }
}
function smelt() {
  metal += ore * oreMetalModifier;
  ore = 0;
  document.getElementById("metal").innerHTML = metal;
  document.getElementById("ore").innerHTML = ore;
}

function randomOccurence(){
  randomEvent += 1;
  if(occurenceLevel = 1){
    if(randomEvent > 300){
    randomEvent = 0;
  }
  randomEventNum = Math.rand * 100;
  if(randomEventNum < 10){
    alert("1");
  }
  if(randomEventNum > 10 && randomEventNum < 20){
    alert("2");
  }
  if(randomEventNum > 20 && randomEventNum < 30){
    alert("3");
  }
  if(randomEventNum > 30 && randomEventNum < 40){
    alert("4");
  }
  if(randomEventNum > 40 && randomEventNum < 50){
    alert("5");
  }
  if(randomEventNum > 50 && randomEventNum < 60){
    alert("6");
  }
  if(randomEventNum > 60 && randomEventNum < 70){
    alert("7");
  }
  if(randomEventNum > 70 && randomEventNum < 80){
    alert("8");
  }
  if(randomEventNum > 80 && randomEventNum < 90){
    alert("9");
  }
  if(randomEventNum > 90 && randomEventNum < 100){
    alert("10");
  }
  }
  if(occurenceLevel = 2){
    if(randomEvent > 300){
    randomEvent = 0;
  }
  randomEventNum = Math.rand * 100;
  if(randomEventNum < 10){
    alert("11");
  }
  if(randomEventNum > 10 && randomEventNum < 20){
    alert("12");
  }
  if(randomEventNum > 20 && randomEventNum < 30){
    alert("13");
  }
  if(randomEventNum > 30 && randomEventNum < 40){
    alert("14");
  }
  if(randomEventNum > 40 && randomEventNum < 50){
    alert("15");
  }
  if(randomEventNum > 50 && randomEventNum < 60){
    alert("16");
  }
  if(randomEventNum > 60 && randomEventNum < 70){
    alert("17");
  }
  if(randomEventNum > 70 && randomEventNum < 80){
    alert("18");
  }
  if(randomEventNum > 80 && randomEventNum < 90){
    alert("19");
  }
  if(randomEventNum > 90 && randomEventNum < 100){
    alert("20");
  }
  }
}

function getScience() {
  if(scienceUnlock === true){
    science = Math.floor((science + scienceModifier) * 100) / 100;
    document.getElementById("techMoney").innerHTML = money;
    document.getElementById("scienceNumber").innerHTML = science;
  }
}

function hireGrainFarmer() {
  if(money >= farmerCost){
    money -= farmerCost;
    farmer += 1;
    farmerCost += 400;
    document.getElementById("farmerNumber").innerHTML = farmer;
    document.getElementById("farmerCost").innerHTML = farmerCost;
    document.getElementById("money").innerHTML = money;
  }
}

function autoGrain(){
  grain += farmer * farmerGain;
  document.getElementById("grainNumber").innerHTML = grain;
}

function prestige(){
  if(occurenceLevel = 1){
    if(prestigeClaimed >= 100){
      occurenceLevel += 1;
    }
  }
  money = 0;
  prestigeClaimed += prestigeValue;
  prestigeValue = 0;
  document.getElementById("prestigeValue").innerHTML = prestigeValue;
  document.getElementById("prestigeClaimedNum").innerHTML = prestigeClaimed;
  document.getElementById("money").innerHTML = money;
}

function valuePrestige(){
  //updates every second how many prestige you can claim
  //run once for every prestige check
  if(money >= Math.floor(10000 * Math.pow(1.2,prestigeValue + prestigeClaimed))){
    prestigeValue += 1;
    valuePrestige();
  }
  document.getElementById("prestigeValue").innerHTML = prestigeValue;
}

// 1 Second Loop
window.setInterval(function(){
  // Put code to be run every second in here.
  randomOccurence();
  valuePrestige();
  autoGrain();
  getScience();
}, 1000);


