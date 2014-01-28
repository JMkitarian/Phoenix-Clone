#pragma strict
var scoresStyle : GUIStyle;
var gotScore : int;
var ScoreScript : Score_Keeper;

function Start () {
	ScoreScript = GameObject.FindGameObjectWithTag("Keeper").gameObject.GetComponent(Score_Keeper);
	gotScore = 0;
	ScoreScript.SendMessage ("Tell");
}

function Update () {

}

function OnGUI () {
	// Scoreboard coming soon
	GUI.Box (Rect ((Screen.width / 2) - 160, Screen.height / 2.5, 0, 0), "Your score is " + gotScore, scoresStyle);
	
	
	// background box
	GUI.Box (Rect ((Screen.width / 2) - 250, Screen.height / 1.5, 500, 150), "High Scores");

	// Game Get Desu
	if (GUI.Button (Rect ((Screen.width / 2) - 230, (Screen.height / 1.5) +30, 460, 45), "PLAY AGAIN?")) {
		Application.LoadLevel (1);
		}
	
	// See Scores (Disabled for now)
	if (GUI.Button (Rect ((Screen.width / 2) - 230, (Screen.height / 1.5) +90, 460, 45), "MAIN MENU")) {
		Application.LoadLevel (0);
		}	
}

function Told (toldScore : int) {
	gotScore = toldScore;
}