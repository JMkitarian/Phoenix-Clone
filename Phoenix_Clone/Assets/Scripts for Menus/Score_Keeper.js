#pragma strict
var permScore : int;
var ScoreHigh : High_Scores;

function Awake () {
	DontDestroyOnLoad (transform.gameObject);
}

function Start () {
	permScore = 0;
}

function Update () {

}

function ScoreGet (getScore : int) {
	permScore = getScore;
}

function Tell () {
	ScoreHigh = GameObject.FindGameObjectWithTag("Menu").gameObject.GetComponent(High_Scores);
	ScoreHigh.SendMessage ("Told", permScore);
}

	