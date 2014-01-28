#pragma strict

var health : int = 1;
var speed : int = 5;
var fireRate : float = 0.3;
var nextShot : float = 0.0;
var laser : Transform;

function Start () {

}

function Update () {
	//move left/right
	if  (Input.GetAxis("Horizontal")) {
		transform.Translate(Vector3(Input.GetAxis("Horizontal") * speed * Time.deltaTime,0,0));
	}
	//shoot and delay how fast you can shoot.
	if (Input.GetButtonDown("Fire1") && Time.time>nextShot) {
		FIRE();
		nextShot = Time.time + fireRate;
	}
	//kill yourself... for testing purposes
	if (Input.GetButtonDown("Fire2")) {
		health --;
		Debug.Log ("health reduced by 1");
	}
	//blow up if health reduced to 0
	//if shields are later implemented, shields will raise health by 1? and the "shielded sprite" will display if health > 1?
	if (health < 1) {
		Destroy (gameObject);
		//Instantiate(playerObject, Vector3(0, -9.6, 10), Quaternion.identity);
	}

}
//how do I shot lazor?
function FIRE () {
	Instantiate(laser, Vector3(transform.position.x, transform.position.y +1.0, 10), Quaternion.identity);
}

function OnTriggerEnter (other : Collider) {
	//Takes damage when player is hit by enemy attack.
	if (other.tag == "EnemyAttack") {
		health --;
	}
}
