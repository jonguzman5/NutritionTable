 "use strict";

 (function(){

  var pokemon = [
    ['Voltorb','images/voltorb.png',100],
    ['Charizard','images/charizard.png',200],
    ['Gyarados','images/gyarados.png',125],
    ['Mew','images/mew.png',75],
    ['Geodude','images/geodude.png',90],
    ['Snorlax','images/snorlax.png',110],
    ['Kabutops','images/kabutops.png',95],
    ['Eevee','images/eevee.png',60],
    ['Beedrill','images/beedrill.png',70],
    ['Magikarp','images/magikarp.gif',40],
    ['Gastly','images/gastly.png',50]
  ];

  var chooseEnemy = function(){
        var  random = Math.floor(Math.random() * (pokemon.length - 1) + 1);
        return pokemon[random];
    }

       var $enemy = chooseEnemy();
       var $enemyImg = $('#enemy_img')
       $enemyImg.attr('src', $enemy[1])
       var $enemyName = $('#enemy .name')
       $enemyName.html($enemy[0]);
       var $enemyHealth = $('#enemy .health')
       $enemyHealth.html("Health: " + $enemy[2]);
       var $status = $('#status_text');
       var $pikachu = ['pikachu', 100]

      var doHeal = function(){
        var $heal = Math.floor(Math.random() * (30 - 5 ) + 5);
        $pikachu[1] += $heal
        var $pikachuhealth = $('#pikachu .health');
        $pikachuhealth.html("Health: " + $pikachu[1]);
        $status.html("Pikachu gained " + $heal + " Health");
      }

       var checkHealth = function(health) {
         return health <= 0;
       }

  var enemyAttack = function(){
           var $chance  = Math.floor(Math.random() * (10 - 1)  + 1);
           if ($chance > 1) {
           var $damage = Math.floor(Math.random() * (30 - 5 ) + 5);
           $pikachu[1] -= $damage;
           var $pikachuhealth = $('#pikachu .health').first();
           $pikachuhealth.html("Health: " + $pikachu[1]);
           $status.html("Pikachu lost " + $damage + " health")
           if (checkHealth($pikachu[1])){
            $status.html("Pikachu fainted");
            //$('#attack_btn, #heal_btn').css('display', 'none')
            location.reload();
           }else {
            $status.html(enemyName + "missed");
           }
         }
       }

 var youAttack = function(){
           var $chance  = Math.random()
          if ($chance > .10) {
           var $damage = Math.floor(Math.random() * 25+ 5);
           $enemy[2] -= $damage;
           $enemyHealth.html("Health: " + $enemy[2]);
           $status.html($enemy[0] + " lost " + $damage + " health");
           setTimeout(function() {
            $status.html("Enemy will attack in 3 seconds")
           }, 1000);
           if (checkHealth($enemy[2])) {
            $status.html("Enemy" + enemyName + "fainted");
            //$('#attack_btn, #heal_btn').css('display', 'block')
            location.reload();
        }else {
          $status.html("Pikachu used Tackle");
        }
      }
    }
          var $attackbtn = $('#attack_btn');
          $attackbtn.click(function() {
          $(this).click(youAttack())
          setTimeout(enemyAttack, 3000);
          });
          var $healbtn = $('#heal_btn');
          $healbtn.click(doHeal)
 })();
