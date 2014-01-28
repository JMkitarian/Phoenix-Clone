#pragma strict
var fireRate : float = 2.0;
var nextShot : float = 0.0;
var cheep : Transform;
var health : int = 1;
var speed : int = 14;

var startPosition : float;
var currentPosition : float;
var initialPosition : Vector3;
var direction : int;

var spawnTime : float;
var enemy4 : GameObject;

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
	if (startPosition >= 1) {
		direction = -1;
	}
	if (startPosition <= 1) {
		direction = 1;
	}
	//snapshot time
	spawnTime = Time.time;
	//Set Beholder as parent object for player respawn/position reset purposes.
	transform.parent = GameObject.FindGameObjectWithTag("Watcher").transform;
}

function Update () {
//Transformation!
	if (Time.time - spawnTime >= 3.5) {
		Hatch ();
	}

	//constantly grab the current position
	currentPosition = transform.position.x;
	//linear movement with variable x direction
	transform.Translate (Vector3 (direction, 0, 0) * Time.deltaTime * speed); 
	
	//when it reaches a certain point, reverse the direction of x movement
	if (currentPosition > 8.0) {
		direction = -1;
		//Debug.Log ("Direction = " + direction);
		//Debug.Log (Time.fixedTime);
	}
	
	//when it reaches a certain point, reverse the direction of x movement
	if (currentPosition < -8.0) {
		direction = 1;
		//Debug.Log ("Direction = " + direction);
		//Debug.Log (Time.fixedTime);
	}
	
//Eggs don't shoot
/*	var shoot = Random.Range (0, 675); //roll a random number
	//later enemies have increasingly higher chances of shooting
	if (shoot == 50) {				  // only run the shoot "if statement" when the random number lands on something specific
		if (Time.time>nextShot) {
			FIRE();
			nextShot = Time.time + fireRate;
		}
	}
*/	
	if (health == 0) {
		Destroy(gameObject);
		BroodScript.SendMessage("EnemyFourDeath", 1.0);
		PointKeeper.SendMessage("PointGet", 8.0);

	}

}


function OnTriggerEnter (other : Collider) {
	if (other.tag == "PlayerAttack") {
	 health --;
	}
}

function Hatch () {
	Instantiate (enemy4, gameObject.transform.position, gameObject.transform.rotation);
 	Destroy(gameObject);
}

function FIRE () {
	Instantiate(cheep, transform.position, Quaternion.identity);
}

function DIE () {
	Destroy(gameObject);
	BroodScript.SendMessage("EnemyFourDeath", 1.0);
}