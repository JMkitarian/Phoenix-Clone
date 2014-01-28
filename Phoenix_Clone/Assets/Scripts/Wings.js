#pragma strict

var health : int = 1;
var PointKeeper : BeholderScript;

function Start () {
	//establishing link to Beholder.
	PointKeeper = GameObject.FindGameObjectWithTag("Watcher").gameObject.GetComponent(BeholderScript);
}

function Update () {
	if (health == 0) {
		Destroy(gameObject);
		PointKeeper.SendMessage("PointGet", 8.0);
	}
}

function OnTriggerEnter (other : Collider) {
	if (other.tag == "PlayerAttack") {
	 health --;
	}
}