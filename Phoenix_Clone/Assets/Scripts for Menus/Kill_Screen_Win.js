#pragma strict
var killStyle : GUIStyle;

function Start () {

}

function Update () {

}

function OnGUI () {
	// Title Box
	GUI.Box (Rect ((Screen.width / 2) - 250, Screen.height / 2.5, 0, 0), "YOU KILLED EVERYTHING!", killStyle);
	
	
	// background box
	GUI.Box (Rect ((Screen.width / 2) - 250, Screen.height / 1.5, 500, 210), "Kill Screen Win");

	// Game Get Desu
	if (GUI.Button (Rect ((Screen.width / 2) - 230, (Screen.height / 1.5) +30, 460, 45), "PLAY AGAIN?")) {
		Application.LoadLevel (1);
		}
	// See Scores (Disabled for now)
	if (GUI.Button (Rect ((Screen.width / 2) - 230, (Screen.height / 1.5) +90, 460, 45), "SEE SCORE")) {
		Application.LoadLevel (2);
		}
	// Back to main menu	
	if (GUI.Button (Rect ((Screen.width / 2) -230, (Screen.height / 1.5) +150, 460, 45), "MAIN MENU")) {
		Application.LoadLevel (0);
		}
		
}