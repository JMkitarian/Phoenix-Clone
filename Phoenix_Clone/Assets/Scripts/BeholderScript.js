#pragma strict
var player : GameObject;
var playerShip : Transform;
var playerLives : int;
var enemyOne : Transform;
var radius = 2;
var score : int;

var ScoreScript : Score_Keeper;

function Start () {
	//Instantiates the player at runtime.
	Instantiate (playerShip, Vector3(0, -9.6, 10), Quaternion.identity);
	player = GameObject.FindGameObjectWithTag("Player");
	//set score and lives
	score = 0;
	playerLives = 3;
	
	//Create link with ScoreKeeper
	ScoreScript = GameObject.FindGameObjectWithTag("Keeper").gameObject.GetComponent(Score_Keeper);
}

function Update () {
	//Respawns the player when dead. Runs Respawn () to pause game and reset enemy positions 
	if (player == null) {
		Respawn ();
		Instantiate(playerShip, Vector3(0, -9.6, 10), Quaternion.identity);
		player = GameObject.FindGameObjectWithTag("Player");
		//subtract a life after respawn
		playerLives --;
	}
	
	if (Input.GetKeyDown("k")) {
		WaveClear ();
	}
	
	if (playerLives < 0) {
		KillScreen ();
	}
}

function PointGet (point : int) {
	//add points to score
	score += point;
}

//initiate GUI for score and lives
function OnGUI () { 
	GUI.Label (Rect (25, 25, 100, 30), "Score:" + score.ToString()); 
	GUI.Label (Rect (25, 37, 100, 30), "Lives:" + playerLives.ToString()); 
}

function Respawn () {
//Sends message to children
BroadcastMessage("ResetPosition", SendMessageOptions.DontRequireReceiver);
//slow time to an impercievable rate, wait for the equivalent of 2 seconds, resume normal time rate
Time.timeScale = .001;
yield WaitForSeconds (0.002);
Time.timeScale = 1;

}

function WaveClear () {
	BroadcastMessage("DIE", SendMessageOptions.DontRequireReceiver);
}

function KillScreen () {
	yield WaitForSeconds (1.0);
	Send ();
	Application.LoadLevel (3);
}

function Send () {
	ScoreScript.SendMessage ("ScoreGet", score);
}