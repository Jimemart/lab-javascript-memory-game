// //******************************************************************
// // Game Logic
// //******************************************************************

//var _ = require ('lodash');

var MemoryGame = function() {
  this.cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};
    MemoryGame.prototype.shuffleCards = function(){
      this.cards =  _.shuffle(this.cards);
    };

    MemoryGame.prototype.selectCard = function(card){

      var lastCardPicked;
      if(this.selectedCards.length >0){
        this.pairsClicked ++;
        lastCardPicked = memoryGame.selectedCards.pop();

        if(lastCardPicked == this.cards[card].name){
          this.correctPairs ++;
          this.selectedCards = [];
          console.log("good job, you guessed  ");
        }
        else{
          console.log("You failed");

        }
      }
      else{
         this.selectedCards.push(this.cards[card].name);
      }

      // return this.selectedCards;
    };
    MemoryGame.prototype.finished = function(){
        console.log("You did good, lets try again");
        this.selectedCards = [];
        this.pairsClicked = 0;
        this.correctPairs = 0;

    };

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;




$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

   html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;


});
