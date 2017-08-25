var winner=0;
var button=[];
var player=1;
var counter
for(var i=1;i<10;i++)
{
	button[i]=document.getElementById('canvas'+i);
}

var ctx=[];

for(var i=1;i<10;i++)
{
ctx[i]=button[i].getContext('2d');
}

var bdisabled=[];
for(var i=1;i<10;i++)
{
bdisabled[i]=false;
}

var isresult=false;
var content=[];
function loop(x)
{
	if(!bdisabled[x])
	{
		bdisabled[x]=true;
		if(player===1)
		{
		content[x]='x';
		}
		if(player===2)
		{
			content[x]='o';
		}
		draw(player);
		button[x].style.webkitTransform ="rotateY(180deg)";
	}
	


function draw(n)
	{
	if(n===1)
	{

	ctx[x].lineWidth=3;
	ctx[x].beginPath();
	ctx[x].moveTo(10,10);
	ctx[x].lineTo(40,40);
	ctx[x].moveTo(40,10);
	ctx[x].lineTo(10,40);
	ctx[x].stroke();
	player=2;
	}
	else
	{
		ctx[x].beginPath();
		ctx[x].lineWidth=3;
		ctx[x].arc(25,25,17,0,Math.PI*2,false);
		ctx[x].stroke();
		player=1;

	}
}
computeWinner();
}

function computeWinner()
{
if(!isresult)
{
	if(content[1]=='x'&& content[2]=='x' && content[3]=='x')showWinner('Player X won the Game');
	else if(content[4]=='x'&& content[5]=='x' && content[6]=='x')showWinner('Player X won the Game');
	else if(content[7]=='x'&& content[8]=='x' && content[9]=='x')showWinner('Player X won the Game');
	else if(content[1]=='x'&& content[4]=='x' && content[7]=='x')showWinner('Player X won the Game');
	else if(content[2]=='x'&& content[5]=='x' && content[8]=='x')showWinner('Player X won the Game');
	else if(content[3]=='x'&& content[6]=='x' && content[9]=='x')showWinner('Player X won the Game');
	else if(content[1]=='x'&& content[5]=='x' && content[9]=='x')showWinner('Player X won the Game');
	else if(content[3]=='x'&& content[5]=='x' && content[7]=='x')showWinner('Player X won the Game');
	

	else if(content[1]=='o'&& content[2]=='o' && content[3]=='o')showWinner('Player O won the Game');
	else if(content[4]=='o'&& content[5]=='o' && content[6]=='o')showWinner('Player O won the Game');
	else if(content[7]=='o'&& content[8]=='o' && content[9]=='o')showWinner('Player O won the Game');
	else if(content[1]=='o'&& content[4]=='o' && content[7]=='o')showWinner('Player O won the Game');
	else if(content[2]=='o'&& content[5]=='o' && content[8]=='o')showWinner('Player O won the Game');
	else if(content[3]=='o'&& content[6]=='o' && content[9]=='o')showWinner('Player O won the Game');
	else if(content[1]=='o'&& content[5]=='o' && content[9]=='o')showWinner('Player O won the Game');
	else if(content[3]=='o'&& content[5]=='o' && content[7]=='o')showWinner('Player O won the Game');
	
	}
}

function showWinner(message)
{
alert(message);
winner=1;
isresult=true;
counter++;
}

function reset()
{
ctx.clearRect(0,0,canvas1.width,canvas1.height);
}