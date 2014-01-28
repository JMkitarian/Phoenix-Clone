#pragma strict
var speed : int = 8;

function Start () {
//enemy attack
}

function Update () {
	transform.Translate(Vector3(0,-speed * Time.deltaTime,0));
	//deletes the "cheep" if it goes past a certain point below the screen (memory management)
	if (transform.position.y <= -12) {
		Destroy(gameObject);
	}

}

function OnTriggerEnter (other : Collider) {
	//destroys the "cheep" if it touches the player.
	if (other.tag == "Player") {
		Destroy(gameObject);
	}
}