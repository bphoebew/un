var goalDes = $('.goalDes');
var goal = $('.goal');
var goalOne = $('.goalOne');
var goalDesOne = $('.goalDesOne');
var goalTwo = $('.goalTwo');
var goalDesTwo = $('.goalDesTwo');
var goalThr = $('.goalThr');
var goalDesThr = $('.goalDesThr');
var goalFr = $('.goalFr');
var goalDesFr = $('.goalDesFr');
var goalFv = $('.goalFv');
var goalDesFv = $('.goalDesFv');
var goalSx = $('.goalSx');
var goalDesSx = $('.goalDesSx');
var goalSv = $('.goalSv');
var goalDesSv = $('.goalDesSv');
var goalEg = $('.goalEg');
var goalDesEg = $('.goalDesEg');
var goalNn = $('.goalNn');
var goalDesNn = $('.goalDesNn');
var goalTen = $('.goalTen');
var goalDesTen = $('.goalDesTen');
var goalEv = $('.goalEv');
var goalDesEv = $('.goalDesEv');
var goalTw = $('.goalTw');
var goalDesTw = $('.goalDesTw');
var goalTr = $('.goalTr');
var goalDesTr = $('.goalDesTr');
var goalFrt = $('.goalFrt');
var goalDesFrt = $('.goalDesFrt');
var goalFvn = $('.goalFvn');
var goalDesFvn = $('.goalDesFvn');
var goalSxn = $('.goalSxn');
var goalDesSxn = $('.goalDesSxn');
var partner = $('.partner');
var poverty = $('.poverty');
var hunger = $('.hunger');
var health = $('.health');
var healthPic = $('.healthPic');
var education = $('.education');
var equality = $('.equality');
var clean = $('.clean');
var energy = $('.energy');
var econ = $('.econ');
var structure = $('.structure');
var inequality = $('.inequality');
var sustain = $('.sustain');
var product = $('.product');
var productPic = $('.productPic');
var climate = $('.climate');
var lifeW = $('.lifeW');
var lifeL = $('.lifeL');
var peace = $('.peace');

partner.on("mouseover", showPartner);
partner.on("mouseout", hidePartner);
poverty.on("mouseover", showPoverty);
poverty.on("mouseout", hidePoverty);
hunger.on("mouseover", showHunger);
hunger.on("mouseout", hideHunger);
health.on("mouseover", showHealth);
health.on("mouseout", hideHealth);
healthPic.on("mouseover", showHealth);
healthPic.on("mouseout", hideHealth);
education.on("mouseover", showEducation);
education.on("mouseout", hideEducation);
equality.on("mouseover", showEquality);
equality.on("mouseout", hideEquality);
clean.on("mouseover", showClean);
clean.on("mouseout", hideClean);
energy.on("mouseover", showEnergy);
energy.on("mouseout", hideEnergy);
econ.on("mouseover", showEcon);
econ.on("mouseout", hideEcon);
structure.on("mouseover", showStructure);
structure.on("mouseout", hideStructure);
inequality.on("mouseover", showInequality);
inequality.on("mouseout", hideInequality);
sustain.on("mouseover", showSustain);
sustain.on("mouseout", hideSustain);
product.on("mouseover", showProduct);
productPic.on("mouseover", showProduct);
product.on("mouseout", hideProduct);
productPic.on("mouseout", hideProduct);
climate.on("mouseover", showClimate);
climate.on("mouseout", hideClimate);
lifeW.on("mouseover", showlifeW);
lifeW.on("mouseout", hidelifeW);
lifeL.on("mouseover", showlifeL);
lifeL.on("mouseout", hidelifeL);
peace.on("mouseover", showPeace);
peace.on("mouseout", hidePeace);

function showPartner(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
}
function hidePartner(){
  goalDes.css('visibility', 'hidden');
  goal.css('visibility', 'hidden');
}

function showPoverty(){
  goalDesOne.css('visibility', 'visible');
  goalOne.css('visibility', 'visible');
}
function hidePoverty(){
  goalDesOne.css('visibility', 'hidden');
  goalOne.css('visibility', 'hidden');
}

function showHunger(){
  goalDesTwo.css('visibility', 'visible');
  goalTwo.css('visibility', 'visible');
}
function hideHunger(){
  goalDesTwo.css('visibility', 'hidden');
  goalTwo.css('visibility', 'hidden');
}

function showHealth(){
  goalDesThr.css('visibility', 'visible');
  goalThr.css('visibility', 'visible');
}
function hideHealth(){
  goalDesThr.css('visibility', 'hidden');
  goalThr.css('visibility', 'hidden');
}

function showEducation(){
  goalDesFr.css('visibility', 'visible');
  goalFr.css('visibility', 'visible');
}

function hideEducation(){
  goalDesFr.css('visibility', 'hidden');
  goalFr.css('visibility', 'hidden');
}

function showEquality(){
  goalDesFv.css('visibility', 'visible');
  goalFv.css('visibility', 'visible');
}

function hideEquality(){
  goalDesFv.css('visibility', 'hidden');
  goalFv.css('visibility', 'hidden');
}

function showClean(){
  goalDesSx.css('visibility', 'visible');
  goalSx.css('visibility', 'visible');
}

function hideClean(){
  goalDesSx.css('visibility', 'hidden');
  goalSx.css('visibility', 'hidden');
}

function showEnergy(){
  goalDesSv.css('visibility', 'visible');
  goalSv.css('visibility', 'visible');
}
function hideEnergy(){
  goalDesSv.css('visibility', 'hidden');
  goalSv.css('visibility', 'hidden');
}

function showEcon(){
  goalDesEg.css('visibility', 'visible');
  goalEg.css('visibility', 'visible');
}
function hideEcon(){
  goalDesEg.css('visibility', 'hidden');
  goalEg.css('visibility', 'hidden');
}

function showStructure(){
  goalDesNn.css('visibility', 'visible');
  goalNn.css('visibility', 'visible');
}
function hideStructure(){
  goalDesNn.css('visibility', 'hidden');
  goalNn.css('visibility', 'hidden');
}

function showInequality(){
  goalDesTen.css('visibility', 'visible');
  goalTen.css('visibility', 'visible');
}
function hideInequality(){
  goalDesTen.css('visibility', 'hidden');
  goalTen.css('visibility', 'hidden');
}

function showSustain(){
  goalDesEv.css('visibility', 'visible');
  goalEv.css('visibility', 'visible');
}
function hideSustain(){
  goalDesEv.css('visibility', 'hidden');
  goalEv.css('visibility', 'hidden');
}
function showProduct(){
  goalDesTw.css('visibility', 'visible');
  goalTw.css('visibility', 'visible');
}
function hideProduct(){
  goalDesTw.css('visibility', 'hidden');
  goalTw.css('visibility', 'hidden');
}
function showClimate(){
  goalDesTr.css('visibility', 'visible');
  goalTr.css('visibility', 'visible');
}
function hideClimate(){
  goalDesTr.css('visibility', 'hidden');
  goalTr.css('visibility', 'hidden');
}
function showlifeW(){
  goalDesFrt.css('visibility', 'visible');
  goalFrt.css('visibility', 'visible');
}
function hidelifeW(){
  goalDesFrt.css('visibility', 'hidden');
  goalFrt.css('visibility', 'hidden');
}

function showlifeL(){
  goalDesFvn.css('visibility', 'visible');
  goalFvn.css('visibility', 'visible');
}
function hidelifeL(){
  goalDesFvn.css('visibility', 'hidden');
  goalFvn.css('visibility', 'hidden');
}

function showPeace(){
  goalDesSxn.css('visibility', 'visible');
  goalSxn.css('visibility', 'visible');
}
function hidePeace(){
  goalDesSxn.css('visibility', 'hidden');
  goalSxn.css('visibility', 'hidden');
}
