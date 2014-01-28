#pragma strict
var titleStyle : GUIStyle;

function Start () {

}

function Update () {

}

function OnGUI () {
	// Title Box
	GUI.Box (Rect ((Screen.width / 2) - 100, Screen.height / 2.5, 0, 0), "PHOENIX?", titleStyle);
	// background box
	GUI.Box (Rect ((Screen.width / 2) - 250, Screen.height / 1.5, 500, 150), "Menu");

	// Game Get Desu
	if (GUI.Button (Rect ((Screen.width / 2) - 230, (Screen.height / 1.5) +30, 460, 45), "PLAY")) {
		Application.LoadLevel (1);
		}
	
	// See Scores (Disabled for now)
	if (GUI.Button (Rect ((Screen.width / 2) - 230, (Screen.height / 1.5) +90, 460, 45), "SCORES")) {
		Application.LoadLevel (2);
		}
		
}