#pragma strict
var speed : int = 20;


function Start () {

}

function Update () {
	transform.Translate(Vector3(0,speed * Time.deltaTime,0));
	//destroys lazer if it goes past a certain point above the screen (memory management)
	if (transform.position.y >= 12) {
		Destroy(gameObject);
	}
}

function OnTriggerEnter (other : Collider) {
	//destroys lazer if it comes into contact with an object labeled as an enemy.
	if (other.tag == "Enemy") {
		Destroy(gameObject);
	}
}