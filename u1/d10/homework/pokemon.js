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
	//picks random enemy from pokemon array. populates initial page with their data.
	}
	var enemy = chooseEnemy();


	var doHeal = function(){
	//heals your character with a random ammount from 25-50
	}

	var enemyAttack = function(){
	//10% chance to miss.
	//90% chance to do between 5-30 damage.
	//after completed, if you aren't dead... buttons reappear.
	//check if your health <= 0.
	}

	var youAttack = function(){
	//10% chance to miss.
	//90% chance to do between 5-30 damage.
	//after completed, says 'enemy will attack in 3 seconds' (buttons hidden during this time)
	//check if enemy health is <= 0.
	}

	var addEventListeners = function(){
	//add the click events on the attak and heal buttons.
	}

	$(document).ready(function(){
		addEventListeners();
	})

})();
