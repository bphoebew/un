function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("change").style.color = "#10A3C6";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("change").style.color = "black";
}
var span = $('span');
var goalDes = $('.goalDes');
var goal = $('.goal');
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
partner.on("mouseout", hideText);
poverty.on("mouseover", showPoverty);
poverty.on("mouseout", hideText);
hunger.on("mouseover", showHunger);
hunger.on("mouseout", hideText);
health.on("mouseover", showHealth);
health.on("mouseout", hideText);
healthPic.on("mouseover", showHealth);
healthPic.on("mouseout", hideText);
education.on("mouseover", showEducation);
education.on("mouseout", hideText);
equality.on("mouseover", showEquality);
equality.on("mouseout", hideText);
clean.on("mouseover", showClean);
clean.on("mouseout", hideText);
energy.on("mouseover", showEnergy);
energy.on("mouseout", hideText);
econ.on("mouseover", showEcon);
econ.on("mouseout", hideText);
structure.on("mouseover", showStructure);
structure.on("mouseout", hideText);
inequality.on("mouseover", showInequality);
inequality.on("mouseout", hideText);
sustain.on("mouseover", showSustain);
sustain.on("mouseout", hideText);
product.on("mouseover", showProduct);
productPic.on("mouseover", showProduct);
product.on("mouseout", hideText);
productPic.on("mouseout", hideText);
climate.on("mouseover", showClimate);
climate.on("mouseout", hideText);
lifeW.on("mouseover", showlifeW);
lifeW.on("mouseout", hideText);
lifeL.on("mouseover", showlifeL);
lifeL.on("mouseout", hideText);
peace.on("mouseover", showPeace);
peace.on("mouseout", hideText);

function hideText(){
  goalDes.css('visibility', 'hidden');
  goal.css('visibility', 'hidden');
}
function showPartner(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 17:");
  goalDes.text("Partnerships for the Goals");
}

function showPoverty(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 1:");
  goalDes.text("No Poverty");
}

function showHunger(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 2:");
  goalDes.text("Zero Hunger");
}

function showHealth(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 3:");
  goalDes.text("Good Health & Well-Being");
}

function showEducation(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 4:");
  goalDes.text("Quality Education");
}

function showEquality(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 5:");
  goalDes.text("Gender Equality");
}


function showClean(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 6:");
  goalDes.text("Clean Water & Sanitation");
}



function showEnergy(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 7:");
  goalDes.text("Affordable and Clean Energy");
}


function showEcon(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 8:");
  goalDes.text("Decent Work And Economic Growth");
}


function showStructure(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 9:");
  goalDes.text("Industry, Innovation, and Infrastructure");
}


function showInequality(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 10:");
  goalDes.text("Reduced Inequalities");
}


function showSustain(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 11:");
  goalDes.text("Sustainable Cities and Communities");
}

function showProduct(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 12:");
  goalDes.text("Responsible Consumption and Production");
}

function showClimate(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 13:");
  goalDes.text("Climate Action");
}
function showlifeW(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 14:");
  goalDes.text("Life Below Water");
}

function showlifeL(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 15:");
  goalDes.text("Life on Land");
}

function showPeace(){
  goalDes.css('visibility', 'visible');
  goal.css('visibility', 'visible');
  goal.text("Goal 16:");
  goalDes.text("Peace and Justice Strong Institutions");
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
