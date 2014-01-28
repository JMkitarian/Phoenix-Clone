#pragma strict

var health : int = 18;

var BroodScript : BroodMother;
var PointKeeper : BeholderScript;

function Start () {
	//establishing link to Brood Mother.
	BroodScript = GameObject.FindGameObjectWithTag("Spawner").gameObject.GetComponent(BroodMother);
	//establishing link to Beholder.
	PointKeeper = GameObject.FindGameObjectWithTag("Watcher").gameObject.GetComponent(BeholderScript);
	//Set Beholder as parent object for player respawn/position reset purposes.
	transform.parent = GameObject.FindGameObjectWithTag("Watcher").transform;
}

function Update () {
	
	if (health == 0) {
		Destroy(gameObject);
		BroodScript.SendMessage("EnemyBossDeath", 1.0);
		PointKeeper.SendMessage("PointGet", 20.0);
	}

}

function OnTriggerEnter (other : Collider) {
	if (other.tag == "PlayerAttack") {
	 health --;
	}
}

function DIE () {
	Destroy(gameObject);
	BroodScript.SendMessage("EnemyBossDeath", 1.0);
}