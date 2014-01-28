#pragma strict
var enemyOne : Transform;
var enemyTwo : Transform;
var enemyThree : Transform;
var enemyFour : Transform;
var enemyFive : Transform;
var enemyBoss : Transform;
var enemyBossTiles : Transform;

var enemyCount : int = 0;
var enemyOneCount : int = 0;
var enemyTwoCount : int = 0;
var enemyThreeCount : int = 0;
var enemyFourCount : int = 0;
var enemyFiveCount : int = 0;
var enemyBossTilesCount : int = 0;
var enemyBossCount : int = 0;

var PointKeeper : BeholderScript;

function Start () {
	//Link to Beholder
	PointKeeper = GameObject.FindGameObjectWithTag("Watcher").gameObject.GetComponent(BeholderScript);
	//Spawn Enemy One at start
	Instantiate (enemyOne, Vector3(4, 11.5, 10), Quaternion.identity);	//15
	Instantiate (enemyOne, Vector3(-4, 11.5, 10), Quaternion.identity);	//1
	Instantiate (enemyOne, Vector3(6, 10.64, 10), Quaternion.identity);	//14
	Instantiate (enemyOne, Vector3(-6, 10.64, 10), Quaternion.identity);//2
	Instantiate (enemyOne, Vector3(8, 9.78, 10), Quaternion.identity);	//13
	Instantiate (enemyOne, Vector3(-8, 9.78, 10), Quaternion.identity);	//3
	Instantiate (enemyOne, Vector3(8, 8.06, 10), Quaternion.identity);	//12
	Instantiate (enemyOne, Vector3(-8, 8.06, 10), Quaternion.identity);	//4
	Instantiate (enemyOne, Vector3(6, 7.2, 10), Quaternion.identity);	//11
	Instantiate (enemyOne, Vector3(-6, 7.2, 10), Quaternion.identity);	//5
	Instantiate (enemyOne, Vector3(4, 6.34, 10), Quaternion.identity);	//10
	Instantiate (enemyOne, Vector3(-4, 6.34, 10), Quaternion.identity);	//6
	Instantiate (enemyOne, Vector3(2, 5.48, 10), Quaternion.identity);	//9
	Instantiate (enemyOne, Vector3(-2, 5.48, 10), Quaternion.identity);	//7
	Instantiate (enemyOne, Vector3(0, 5.48, 10), Quaternion.identity);	//8
	Instantiate (enemyOne, Vector3(0, 7.2, 10), Quaternion.identity);	//16
	
	//Set counter for Enemy One and Enemy General
	enemyCount += 16;
	enemyOneCount += 16;
	
	
	
	
	
/*	
//Nope.
	for (var y = 11.5; y >= 6.5; y -= .86) {
	for (var x = 0; x < 5; x += 1.5) {
		var pos = Vector3(x, y, 10 / spacing) * spacing;
		Instantiate (enemyOne, pos, Quaternion.identity);
		}
		}
//Nope.   
   for (var y = 0; y < gridY; y++) {
     for (var x=0;x<gridX;x++) {
            var pos = Vector3 (x, 0, y) * spacing;
            Instantiate(prefab, pos, Quaternion.identity);
        }
    }
	
	}
//Nope, nope, nope.
	for (var y = 11.5; y >= 5.5; y -= 0.86 && var x = -8; x <= 8; x += 2){
	for (var x = -8; x <= 8; x += 2){
		var i = Vector3(x, y, 10);
		Debug.Log(i);
		var pos = Vector3(x, y, 10);
		Instantiate (enemyOne, pos, Quaternion.identity);
	
	}
	}	
//Nooooooooope.	
	for (var x = 4; x <= 8; x += 2) { 
	for (var y = 11.5; y >= 9.78; y -= .86) {
		var slope = .43;
		var pos = Vector3(Line(x), Line(y), 10);
		Instantiate (enemyOne, pos, Quaternion.identity); 
	}
	}   
//Nope.	
	 for (var i = 0; i < numberOfEnemyOne; i++) {
        var angle = i * Mathf.PI * 2 / numberOfEnemyOne;
        var pos = Vector3 (Mathf.Cos(angle), Mathf.Sin(angle), 2) * radius;
        Instantiate(enemyOne, pos, Quaternion.identity);
    }
*/

}

function Update () {
	//If all Enemy One die, run Spawn Enemy Two and set the counters. Subtract 1 from Enemy One Count so it never runs again. 
	//make a Counter reset for when the game is cleared
	if (enemyCount == 0 && enemyOneCount == 0) {
	 SpawnEnemyTwo();
	 enemyCount += 16;
	 enemyOneCount --;
	 enemyTwoCount += 16;
	}
	
	//Same as above, but for the next wave.
	if (enemyCount == 0 && enemyTwoCount == 0) {
	 SpawnEnemyThree();
	 enemyCount += 8;
	 enemyTwoCount --;
	 enemyThreeCount += 8;
	}
	
	//yada yada
	if (enemyCount == 0 && enemyThreeCount == 0) {
	 SpawnEnemyFour();
	 enemyCount += 8;
	 enemyThreeCount --;
	 enemyFourCount += 8;
	}
	
	if (enemyCount == 0 && enemyFourCount == 0) {
	 SpawnEnemyFive();
	 enemyCount += 118;
	 enemyFourCount --;
	 enemyFiveCount += 9;
	 enemyBossTilesCount += 108;
	 enemyBossCount += 1;
	}
	
	if (enemyBossCount < 0) {
	//reset all numbers except score
	KillScreen();
	}
	
}

//Functions that subtract 1 from the general enemy count and specific enemy count when an enemy dies. 
//Death message sent from specific enemy instances.
function EnemyOneDeath (deadEnemy : int) {
	if (deadEnemy == 1) {
		enemyCount --;
		enemyOneCount --;
		Debug.Log("Enemy One Count is " + enemyOneCount);
	}
}

function EnemyTwoDeath (deadEnemy : int) {
	if (deadEnemy == 1) {
		enemyCount --;
		enemyTwoCount --;
		Debug.Log("Enemy Two Count is " + enemyTwoCount);
	}
}

function EnemyThreeDeath (deadEnemy : int) {
	if (deadEnemy == 1) {
		enemyCount --;
		enemyThreeCount --;
		Debug.Log("Enemy Three Count is " + enemyThreeCount);
	}
}

function EnemyFourDeath (deadEnemy : int) {
	if (deadEnemy == 1) {
		enemyCount --;
		enemyFourCount --;
		Debug.Log("Enemy Four Count is " + enemyFourCount);
	}
}

function EnemyFiveDeath (deadEnemy : int) {
	if (deadEnemy == 1) {
		enemyCount --;
		enemyFiveCount --;
		Debug.Log("Enemy Five Count is " + enemyFiveCount);
	}
}

function EnemyBossTileDeath (deadEnemy : int) {
	if (deadEnemy == 1) {
		enemyCount --;
		enemyBossTilesCount --;
		Debug.Log("Boss Tiles is " + enemyBossTilesCount);
	}
}

function EnemyBossDeath (deadBoss : int) {
	if (deadBoss == 1) {
		enemyCount --;
		enemyBossCount -=2;
		Debug.Log("Congratulations!");
	}
}

//Functions that spawn specific enemies in their locations when called.
//Called in function Update () when enemies of previous wave are dead.
function SpawnEnemyTwo () {
	yield WaitForSeconds (1.0);
	//delay spawn
	Instantiate (enemyTwo, Vector3(-2, 11.5, 10), Quaternion.identity);	//1
	Instantiate (enemyTwo, Vector3(0, 10.64, 10), Quaternion.identity);	//2
	Instantiate (enemyTwo, Vector3(2, 11.5, 10), Quaternion.identity);	//3
	Instantiate (enemyTwo, Vector3(0, 8.92, 10), Quaternion.identity);	//4
	Instantiate (enemyTwo, Vector3(0, 7.2, 10), Quaternion.identity);	//5
	Instantiate (enemyTwo, Vector3(0, 5.48, 10), Quaternion.identity); 	//6
	Instantiate (enemyTwo, Vector3(-2, 8.06, 10), Quaternion.identity);	//7
	Instantiate (enemyTwo, Vector3(-4, 8.92, 10), Quaternion.identity);	//8
	Instantiate (enemyTwo, Vector3(-6, 9.78, 10), Quaternion.identity);	//9
	Instantiate (enemyTwo, Vector3(-8, 8.92, 10), Quaternion.identity);	//10
	Instantiate (enemyTwo, Vector3(-10, 8.06, 10), Quaternion.identity);//11
	Instantiate (enemyTwo, Vector3(2, 8.06, 10), Quaternion.identity);	//12
	Instantiate (enemyTwo, Vector3(4, 8.92, 10), Quaternion.identity);	//13
	Instantiate (enemyTwo, Vector3(6, 9.78, 10), Quaternion.identity);	//14
	Instantiate (enemyTwo, Vector3(8, 8.92, 10), Quaternion.identity);	//15
	Instantiate (enemyTwo, Vector3(10, 8.06, 10), Quaternion.identity);	//16
}

function SpawnEnemyThree () {
	yield WaitForSeconds (1.0);
	//delay spawn
	Instantiate (enemyThree, Vector3(8, 5.48, 10), Quaternion.identity);	//1
	Instantiate (enemyThree, Vector3(6, 6.34, 10), Quaternion.identity);	//2
	Instantiate (enemyThree, Vector3(4, 7.2, 10), Quaternion.identity);		//3
	Instantiate (enemyThree, Vector3(2, 8.06, 10), Quaternion.identity);	//4
	Instantiate (enemyThree, Vector3(-2, 8.92, 10), Quaternion.identity);	//5
	Instantiate (enemyThree, Vector3(-4, 9.78, 10), Quaternion.identity); 	//6
	Instantiate (enemyThree, Vector3(-6, 10.64, 10), Quaternion.identity);	//7
	Instantiate (enemyThree, Vector3(-8, 11.5, 10), Quaternion.identity);	//8	
}

function SpawnEnemyFour () {
	yield WaitForSeconds (1.0);
	//delay spawn
	Instantiate (enemyFour, Vector3(8, 5.48, 10), Quaternion.identity);		//1
	Instantiate (enemyFour, Vector3(8, 7.2, 10), Quaternion.identity);		//2
	Instantiate (enemyFour, Vector3(8, 8.92, 10), Quaternion.identity);		//3
	Instantiate (enemyFour, Vector3(8, 10.64, 10), Quaternion.identity);	//4
	Instantiate (enemyFour, Vector3(-8, 6.34, 10), Quaternion.identity);	//5
	Instantiate (enemyFour, Vector3(-8, 8.06, 10), Quaternion.identity); 	//6
	Instantiate (enemyFour, Vector3(-8, 9.78, 10), Quaternion.identity);	//7
	Instantiate (enemyFour, Vector3(-8, 11.5, 10), Quaternion.identity);	//8	
}

function SpawnEnemyFive () {
	yield WaitForSeconds (1.0);
	//delay spawn
	Instantiate (enemyBoss, Vector3(0, 6.46, 10), Quaternion.identity);		//Boss
	Instantiate (enemyFive, Vector3(-8, 8.06, 10), Quaternion.identity);	//1
	Instantiate (enemyFive, Vector3(-6, 8.92, 10), Quaternion.identity);	//2
	Instantiate (enemyFive, Vector3(-4, 9.78, 10), Quaternion.identity);	//3
	Instantiate (enemyFive, Vector3(-2, 10.64, 10), Quaternion.identity);	//4
	Instantiate (enemyFive, Vector3(0, 11.5, 10), Quaternion.identity);		//5
	Instantiate (enemyFive, Vector3(2, 10.64, 10), Quaternion.identity);	//6
	Instantiate (enemyFive, Vector3(4, 9.78, 10), Quaternion.identity);		//7
	Instantiate (enemyFive, Vector3(6, 8.92, 10), Quaternion.identity);		//8
	Instantiate (enemyFive, Vector3(8, 8.06, 10), Quaternion.identity);		//9
	
	//could I turn this all into a single function?
	for (var a = 5.37; a > 0.95; a -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(.75, a, 10), Quaternion.identity);		//Tile column 1 right
	}
	
	for (var b = 5.37; b > 1.35; b -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(2.25, b, 10), Quaternion.identity);	//Tile column 2 right
	}
	
	for (var c = 5.37; c > 1.75; c -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(3.75, c, 10), Quaternion.identity);	//Tile column 3 right
	} 
	
	for (var d = 5.37; d > 2.55; d -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(5.25, d, 10), Quaternion.identity);	//Tile column 4 right
	}
	
	for (var e = 5.37; e > 3.35; e -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(6.75, e, 10), Quaternion.identity);	//Tile column 5 right
	}
	
	for (var f = 5.37; f > 4.15; f -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(8.25, f, 10), Quaternion.identity);	//Tile column 6 right
	}
	
	for (var g = 5.37; g > 4.95; g -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(9.75, g, 10), Quaternion.identity);	//Tile column 7 right
	}
	
	for (var h = 5.37; h > 5.35; h -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(11.25, h, 10), Quaternion.identity);	//Tile column 8 right
	}
	
	for (var i = 5.37; i > 0.95; i -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(-.75, i, 10), Quaternion.identity);	//Tile column 1 left
	}
	
	for (var j = 5.37; j > 1.35; j -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(-2.25, j, 10), Quaternion.identity);	//Tile column 2 left
	}
	
	for (var k = 5.37; k > 1.75; k -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(-3.75, k, 10), Quaternion.identity);	//Tile column 3 left
	} 
	
	for (var l = 5.37; l > 2.55; l -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(-5.25, l, 10), Quaternion.identity);	//Tile column 4 left
	}
	
	for (var m = 5.37; m > 3.35; m -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(-6.75, m, 10), Quaternion.identity);	//Tile column 5 left
	}
	
	for (var n = 5.37; n > 4.15; n -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(-8.25, n, 10), Quaternion.identity);	//Tile column 6 left
	}
	
	for (var o = 5.37; o > 4.95; o -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(-9.75, o, 10), Quaternion.identity);	//Tile column 7 left
	}
	
	for (var p = 5.37; p > 5.35; p -= 0.40) {
		Instantiate (enemyBossTiles, Vector3(-11.25, p, 10), Quaternion.identity);	//Tile column 8 left
	}
	
	
}
	
function KillScreen () {
	yield WaitForSeconds (1.0);
	PointKeeper.SendMessage("Send");
	Application.LoadLevel (4);
}