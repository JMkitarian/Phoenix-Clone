#pragma strict
var fireRate : float = 2.0;
var nextShot : float = 0.0;
var cheep : Transform;
var health : int = 1;
var speed : int = 3;

var startPosition : float;
var currentPosition : float;
var initialPosition : Vector3;
var direction : int;

var BroodScript : BroodMother;
var PointKeeper : BeholderScript;

function Start () {
	//establishing link to Brood Mother.
	BroodScript = GameObject.FindGameObjectWithTag("Spawner").gameObject.GetComponent(BroodMother);
	//establishing link to Beholder.
	PointKeeper = GameObject.FindGameObjectWithTag("Watcher").gameObject.GetComponent(BeholderScript);
	//snapshot starting position
	startPosition = transform.position.x;
	//snapshot initial position
	initialPosition	= transform.position;
	//set starting direction
	direction = 1;
	//Set Beholder as parent object for player respawn/position reset purposes.
	transform.parent = GameObject.FindGameObjectWithTag("Watcher").transform;
	
}

function Update () {
	//constantly grab the current position
	currentPosition = transform.position.x;
	//linear movement with variable x direction
	transform.Translate (Vector3 (direction, 0, 0) * Time.deltaTime * speed); 
	
	//when it reaches a certain point, reverse the direction of x movement
	if (startPosition - currentPosition < -13.0) {
		direction = -1;
		//Debug.Log ("Direction = " + direction);
		Debug.Log (Time.fixedTime);
	}
	
	//when it reaches a certain point, reverse the direction of x movement
	if (startPosition - currentPosition > 13.0) {
		direction = 1;
		//Debug.Log ("Direction = " + direction);
		Debug.Log (Time.fixedTime);
	}
	
//Delay attacks. Needs to be reworked once I put in a movement function.
//First enemy doesn't need to shoot.
//	if (Time.time>nextShot) {
//		FIRE();
//		nextShot = Time.time + fireRate;
//	}

	//destroys enemy when health reaches 0, then sends message to lower enemy count to the Brood Mother.
	if (health == 0) {
		Destroy(gameObject);
		BroodScript.SendMessage("EnemyOneDeath", 1.0);
		PointKeeper.SendMessage("PointGet", 1.0);
	}

}


function OnTriggerEnter (other : Collider) {
	//Take damage when hit by the player's attack.
	if (other.tag == "PlayerAttack") {
	 health --;
	}
}



function FIRE () {
	//attack function
	Instantiate(cheep, transform.position, Quaternion.identity);
}

function ResetPosition () {
	//resets position
	transform.position = initialPosition;
}

function DIE () {
	Destroy(gameObject);
	BroodScript.SendMessage("EnemyOneDeath", 1.0);
}