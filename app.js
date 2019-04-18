

document.getElementById('o1').style.visibility="hidden";

document.querySelector('#target').textContent=35;
var current_score_0=0;
var current_score_1=0;
var overall_score_p0=0;
var overall_score_p1=0;
alternate=0;
var counter=0;
// Rolling the Dice 
var dice=Math.floor(Math.random() * 6) + 1;

// New Game Click 
document.querySelector('#main_button').addEventListener('click',function(){
	 
	alternate=0;
	document.querySelector('#current_score0').textContent='';
	document.querySelector('#current_score1').textContent='';
	document.querySelector('#overallscore0').textContent='';
	document.querySelector('#overallscore1').textContent='';
	document.querySelector('#hold_btn').style.visibility="visible";
		document.querySelector('#btn').style.visibility="visible";
		document.querySelector('#p1').textContent='Player 1';
		document.querySelector('#p2').textContent='Player 2';
		document.querySelector("#p2").style.top="244px";
		document.querySelector("#p1").style.top="244px";
		document.getElementById('o0').style.visibility="visible";
		document.getElementById('o1').style.visibility="hidden";
		
		current_score_0=0;
     current_score_1=0;
     overall_score_p0=0;
     overall_score_p1=0;

})

// OnClick Roll
document.querySelector('#btn').addEventListener('click', function() {
	
	if(alternate==0){
		
		dice=Math.floor(Math.random() * 6) + 1;
		if (dice==1){
			current_score_0=0;
			overall_score_p0=0;
			document.getElementById('dice-1').src = 'img/img_' + dice + '.png';
			document.querySelector('#current_score'+alternate).textContent=current_score_0;
			document.querySelector('#overallscore'+alternate).textContent=overall_score_p0;
			document.getElementById('o1').style.visibility="visible";
			document.getElementById('o0').style.visibility="hidden";
			alternate=1;


		} else{
	document.getElementById('dice-1').src = 'img/img_' + dice + '.png';
	current_score_0=current_score_0+dice;
	document.querySelector('#current_score'+alternate).textContent=current_score_0;
	if ((current_score_0+overall_score_p0)>34){
		document.querySelector('#o0').style.visibility="hidden";
		document.querySelector('#p1').innerHTML= "<h3>Winner!</h3>";
		document.querySelector("#p1").style.top="224px";
		document.querySelector('#hold_btn').style.visibility="hidden";
		document.querySelector('#btn').style.visibility="hidden";

	}
	//document.querySelector('#current_score0').textContent=current_score;
	}

	}else if(alternate==1) {
		
		dice=Math.floor(Math.random() * 6) + 1;
		if (dice==1)
		{
			current_score_1=0;
			overall_score_p1=0;
			document.getElementById('dice-1').src = 'img/img_' + dice + '.png';
			document.querySelector('#current_score'+alternate).textContent=current_score_1;
			document.querySelector('#overallscore'+alternate).textContent=overall_score_p1;
			document.getElementById('o0').style.visibility="visible";
			document.getElementById('o1').style.visibility="hidden";
			alternate=0;

		} else {

		
		dice=Math.floor(Math.random() * 6) + 1;
	document.getElementById('dice-1').src = 'img/img_' + dice + '.png';
	current_score_1=current_score_1+dice;
	document.querySelector('#current_score'+alternate).textContent=current_score_1;
	if ((current_score_1+overall_score_p1)>34){
		document.querySelector('#o1').style.visibility="hidden";
		document.querySelector('#p2').innerHTML ="<h3>Winner!</h3>";
	
		document.querySelector("#p2").style.top="227px";
		document.querySelector('#hold_btn').style.visibility="hidden";
		document.querySelector('#btn').style.visibility="hidden";

	}
	}
}
	
})



// // Sending it to current Score  to over all score 
document.querySelector('#hold_btn').addEventListener('click', function() {

	if(alternate==0){
		document.getElementById('o1').style.visibility="visible";
		document.getElementById('o0').style.visibility="hidden";
		overall_score_p0=current_score_0+overall_score_p0;
document.querySelector('#overallscore'+alternate).textContent=overall_score_p0;
current_score_0=0;

document.querySelector('#current_score'+alternate).textContent=0;
	} else {
		document.getElementById('o0').style.visibility="visible";
		document.getElementById('o1').style.visibility="hidden";
		overall_score_p1=current_score_1+overall_score_p1;
document.querySelector('#overallscore'+alternate).textContent=overall_score_p1;
current_score_1=0;

document.querySelector('#current_score'+alternate).textContent=0;

	}

if(alternate==0){
	alternate =1;
}else{
	alternate=0
}
})











