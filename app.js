
class Ship {
    constructor(name, hull, firepower, accuracy){
        this.name=name;
        this.hull=hull || Math.floor(Math.random() * 4) + 3;
        this.firepower=firepower || Math.floor(Math.random() * 3) + 2;
        this.accuracy=accuracy || (Math.floor(Math.random() * 3) + 6) / 10;
    }
    attack(opponent){ // add that if a random number is < this.accuracy then deduct points; 
        if(Math.random() <=this.accuracy){
        opponent.hull -= this.firepower
        alert(opponent.name +" got hit")} //only this line under attack(opponent) works
        else{
            alert(this.name+ " missed. It's " + opponent.name + "'s turn to attack!")
        }
    } 
}

// the ships: 
var USS = new Ship("USS",20,5,0.7)
var aliens = [] //array of aliens
for (var i=0; i<6; i++){ //6 aliens in total 
        var alien = new Ship("Alien ship") // the 6 aliens linked to the class Aliens
        aliens.push(alien) // the 6 aliens get pushed into the array instances
    }
// console.log(instances)


function whenAttacked (){
    while(aliens.length !== 0){
        if(USS.hull > 0){
            // I start attack
            USS.attack(aliens[0])
            if(aliens[0].hull > 0){
                aliens[0].attack(USS)
            } else {
                aliens.shift()
                alert("Alien is dead.. until there's none left!")}
        } else {
            alert("I lost :(")
            break;
        }
        }
    }

whenAttacked()