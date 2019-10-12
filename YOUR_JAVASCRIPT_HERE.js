// Write your JS here

//Defining hero object
var hero = {
    name: "Hero",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "gun",
        damage: 2
    }
}
var newWeapon = {type:"dagger",damage:2}



//Defining rest
function rest(person){
    
    if (person.health === 10){
        
        alert("Person already has health value 10");
    }else {
        person.health = 10;
    }
    return person;
}

//Defining pickUpItem
function pickUpItem(person,weaponObj){

    if(weaponObj !== {} || weaponObj !== null){
        console.log(person.inventory);
        console.log(weaponObj);
        person.inventory.push(weaponObj);
        console.log(person.inventory);
    }
    return person;
}

//Defining equipWeapon
function equipWeapon(person){
    
    if (person.inventory.length > 0) {
        person.weapon = person.inventory[0];
        displayStats(person);
    } 
   
}

//Display Stats
function displayStats(person){
    let ddTags = document.getElementsByTagName('dd');
    ddTags[0].innerHTML = person.name;
    ddTags[1].innerHTML = person.health;
    ddTags[2].innerHTML = person.weapon.type;
    ddTags[3].innerHTML = person.weapon.damage;
    
}

//Get User Input
function getInput(person){
    const newName = window.prompt("Enter Player Name: ");
    //Update User Name in hero object
    person.name = newName;
    displayStats(person)
}

//Play the game
function shoot(person){
    //Get the arrow
    var ref = document.getElementById('player')
    var parent = document.getElementById('parent')
    var imgShoot = document.createElement('img')
    imgShoot.src = "https://image.shutterstock.com/image-photo/green-dart-isolated-on-white-260nw-79546594.jpg"
    imgShoot.id = "shootImg";
    ref.parentNode.insertBefore(imgShoot,ref.nextSibling);
    console.log(parent);

    //Get the enemy
    var refnew = document.getElementById('player')
    var parentnew = document.getElementById('parent')
    var enemy = document.createElement('img')
    enemy.src = "https://image.flaticon.com/icons/svg/1477/1477230.svg"
    enemy.id = "enemy-1";
    enemy.classList.add('enemy')
    parentnew.append(enemy);
    //refnew.parentNode.insertBefore(enemy,refnew.nextSibling);
    console.log(parentnew);
  
    //Move the arrow
    var elem = document.getElementById("shootImg");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 300) {
        clearInterval(id);
      } else {
        pos = pos+0.5;
        elem.style.top = 5 + 'px';
        elem.style.left = pos + 'px';
        if (elem.style.left === (145 + 'px')){
          //Call delete enemy
          deleteEnemy()
          //Call remove arrow
           deleteArrow(elem)
          //Stop shooting
          clearInterval(id);
  
        }
      }
    }
  }//shoot
  
  // Delete enemy
  function deleteEnemy(){
    var enemy = document.getElementById("enemy-1");
     enemy.remove();
  }

  // Delete arrow
  function deleteArrow(elem){
    elem.remove();
  }
  
  

displayStats(hero)


//********** End-Of-Pgm*************



