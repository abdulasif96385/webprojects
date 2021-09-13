var canvas = document.getElementById("canvasOne");
var ctx = canvas.getContext("2d");

var width = 640,
	height = 480,
	startS = true,
	lvl1Boo = false,
	lvl2Boo = false,
	lvl3Boo = false,
	lvl4Boo = false,
	lvl5Boo = false,
	lvl6Boo = false,
	lvl7Boo = false,
	lvl8Boo = false,
	i = 0,
	j = 0,
	r = 0,
	v = 15,
	deaths = 0,
	deathNum = "DEATH NUM",
	currLvl = "CURRENT LVL";
	lvlNum = 1,
	z = 150,
	START ="START",
	win = false,
	Congr = "CONGRATULATIONS YOU BEAT",
	Congr2 = "THE REALLY HARD GAME WITH",
	Congr3 = "ONLY",
	deathz = "DEATHS",
	gameDeath = new Audio('gameDeath.wav');

var player1 = new gamePlay(0,0,15,15, 3);
var goal = new gameObj(width - 40,0,40,480);
var safeZone = new gameObj(0,0,40,480);
var enemy = new gamePlay(100,0,15,15,5);
var enemy2 = new gamePlay(100,height - 15,15,15,5);
var enemy3 = new gamePlay(100,0,15,15,5);
var enemy4 = new gamePlay(width - 150,0,15,15,5);
var STARTSS = new gameObj(width/2 - 110,height/2,15,15,5);

function enemyMove(){
	enemy.y += enemy.speed;
	if(enemy.y >= height - v){
		enemy.speed = enemy.speed * -1;
	}
	if(enemy.y <= r){
		enemy.speed = enemy.speed * -1;
	}
}

function enemyMove2(){
	enemy2.y -= enemy2.speed;
	if(enemy2.y >= height - v){
		enemy2.speed = enemy2.speed * -1;
	}
	if(enemy2.y <= r){
		enemy2.speed = enemy2.speed * -1;
	}
}

function enemyMove3(){
	enemy3.x += enemy3.speed;
	if(enemy3.x >= width - z){
		enemy3.speed = enemy3.speed * -1;
	}
	if(enemy3.x <= 100){
		enemy3.speed = enemy3.speed * -1;
	}
}

function enemyMove4(){
	enemy4.x -= enemy4.speed;
	if(enemy4.x >= width - z){
		enemy4.speed = enemy4.speed * -1;
	}
	if(enemy4.x <= 100){
		enemy4.speed = enemy4.speed * -1;
	}
}

function lvls(){
	if(collision(player1, goal) && lvl1Boo){
		lvl1Boo = false;
		lvl2Boo = true;
		player1.x = 0;
		player1.y = height - 15;
		lvlNum++;
	}
	if(collision(player1, goal) && lvl2Boo){
		lvl2Boo = false;
		lvl3Boo = true;
		if(lvl3Boo)enemy.y = 200;
		player1.x = 0;
		player1.y = height - 15;
		lvlNum++;
	}
	if(collision(player1, goal) && lvl3Boo){
		lvl3Boo = false;
		lvl4Boo = true;
		if(lvl4Boo)enemy.y = 30;
		if(lvl4Boo)enemy2.y = 200;
		player1.x = 0;
		player1.y = height - 15;
		lvlNum++;
	}
	if(collision(player1, goal) && lvl4Boo){
		lvl4Boo = false;
		lvl5Boo = true;
		if(lvl5Boo)enemy.y = 50;
		if(lvl5Boo)enemy2.y = 100;
		player1.x = 0;
		player1.y = height - 15;
		lvlNum++;
	}
	if(collision(player1, goal) && lvl5Boo){
		lvl5Boo = false;
		lvl6Boo = true;
		if(lvl6Boo)enemy.y = 10;
		player1.x = 0;
		player1.y = height - 15;
		lvlNum++;
	}
	if(collision(player1, goal) && lvl6Boo){
		lvl6Boo = false;
		lvl7Boo = true;
		if(lvl7Boo)enemy.y = 10;
		player1.x = 0;
		player1.y = height - 15;
		lvlNum++;
	}
	if(collision(player1, goal) && lvl7Boo){
		lvl7Boo = false;
		lvl8Boo = true;
		if(lvl8Boo)enemy.y = 10;
		if(lvl8Boo)enemy2.y = 100;
		player1.x = 0;
		player1.y = height - 15;
		lvlNum++;
	}
	if(collision(player1, goal) && lvl8Boo){
		lvl8Boo = false;
		win = true;
	}
}

function startgame(){
	startS = false;
	lvl1Boo = true;
}

function render(){
	ctx.clearRect(0,0,width,height);
	if(startS){
		ctx.fillStyle = "black";
		ctx.font="100px impact";
		ctx.fillText(START,STARTSS.x,STARTSS.y);
		ctx.font="50px impact";
		ctx.fillText("CREATOR ABDUL ASIF",width/2 - 180,height/2 + 100);
	}
	if(!startS && !win){
		ctx.fillStyle = "#5CD65C";
		ctx.fillRect(safeZone.x, safeZone.y, safeZone.width, safeZone.height);
		ctx.fillStyle = "blue";
		ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
		ctx.fillStyle = "green";
		ctx.fillStyle = "red";
		if(lvl1Boo){
			for(i=0; i<700; i = i + 50){
				enemy[i] = new gamePlay((enemy.x)+i, enemy.y, enemy.width, enemy.height);
				ctx.fillRect(enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
				if(collision(player1,enemy[i])){
					gameDeath.play();
					player1.x = 0;
					player1.y = height - 15;
					deaths++;
				}
			}
		}
		if(lvl2Boo){
			for(i=0; i<700; i = i + 50){
				enemy[i] = new gamePlay((enemy.x)+i, enemy.y, enemy.width, enemy.height);
				enemy2[i] = new gamePlay((enemy2.x)+i, enemy2.y, enemy2.width, enemy2.height);
				ctx.fillRect(enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
				ctx.fillRect(enemy2[i].x, enemy2[i].y, enemy2[i].width, enemy2[i].height);
				if(collision(player1,enemy[i]) || collision(player1,enemy2[i])){
					gameDeath.play();
					player1.x = 0;
					player1.y = height - 15;
					deaths++;
				}
			}
		}
		if(lvl3Boo){
			v = 110;
			r = 100;
			for(i=0; i<700; i = i + 50){
				enemy[i] = new gamePlay((enemy.x)+i, enemy.y, enemy.width, enemy.height);
				ctx.fillRect(enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
				if(collision(player1,enemy[i])){
					gameDeath.play();
					player1.x = 0;
					player1.y = height - 15;
					deaths++;
				}
			}
			for(j=0; j<700; j = j + 50){
				enemy[j] = new gamePlay((enemy.x)+j, enemy.y + 100, enemy.width, enemy.height);
				ctx.fillRect(enemy[j].x, enemy[j].y, enemy[j].width, enemy[j].height);
				if(collision(player1,enemy[j])){
					gameDeath.play();
					player1.x = 0;
					player1.y = height - 15;
					deaths++;
				}
			}
			for(q=0; q<700; q = q + 50){
				enemy[q] = new gamePlay((enemy.x)+q, enemy.y - 100, enemy.width, enemy.height);
				ctx.fillRect(enemy[q].x, enemy[q].y, enemy[q].width, enemy[q].height);
				if(collision(player1,enemy[q])){
					gameDeath.play();
					player1.x = 0;
					player1.y = height - 15;
					deaths++;
				}
			}
		}
		if(lvl4Boo){
			v = 110;
			r = 0;
			for(i=0; i<700; i = i + 50){
				enemy[i] = new gamePlay((enemy.x)+i, enemy.y, enemy.width, enemy.height);
				ctx.fillRect(enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
				enemy2[i] = new gamePlay((enemy2.x)+i, enemy2.y, enemy2.width, enemy2.height);
				ctx.fillRect(enemy2[i].x, enemy2[i].y, enemy2[i].width, enemy2[i].height);
				if(collision(player1,enemy[i]) || collision(player1,enemy2[i])){
					gameDeath.play();
					player1.x = 0;
					player1.y = height - 15;
					deaths++;
				}
			}
			for(j=0; j<700; j = j + 50){
				enemy[j] = new gamePlay((enemy.x)+j, enemy.y + 100, enemy.width, enemy.height);
				ctx.fillRect(enemy[j].x, enemy[j].y, enemy[j].width, enemy[j].height);
				enemy2[j] = new gamePlay((enemy2.x)+j, enemy2.y + 100, enemy2.width, enemy2.height);
				ctx.fillRect(enemy2[j].x, enemy2[j].y, enemy2[j].width, enemy2[j].height);
				if(collision(player1,enemy[j]) || collision(player1,enemy2[j])){
					gameDeath.play();
					player1.x = 0;
					player1.y = height - 15;
					deaths++;
				}
			}
		}
		if(lvl5Boo){
			v = 15;
			for(i=0; i<700; i = i + 50){
				enemy[i] = new gamePlay((enemy.x)+i, enemy.y, enemy.width, enemy.height);
				enemy2[i] = new gamePlay((enemy2.x)+i, enemy2.y, enemy2.width, enemy2.height);
				enemy3[i] = new gamePlay(enemy3.x, (enemy3.y)+i, enemy3.width, enemy3.height);
				ctx.fillRect(enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
				ctx.fillRect(enemy2[i].x, enemy2[i].y, enemy2[i].width, enemy2[i].height);
				ctx.fillRect(enemy3[i].x, enemy3[i].y, enemy3[i].width, enemy3[i].height);
				if(collision(player1,enemy[i]) || collision(player1,enemy2[i]) || collision(player1,enemy3[i])){
					gameDeath.play();
					player1.x = 0;
					player1.y = height - 15;
					deaths++;
				}
			}
		}
		if(lvl6Boo){
		for(i=0; i<700; i = i + 50){
				enemy[i] = new gamePlay((enemy.x)+i, enemy.y, enemy.width, enemy.height);
				enemy2[i] = new gamePlay((enemy2.x)+i, enemy2.y, enemy2.width, enemy2.height);
				enemy3[i] = new gamePlay(enemy3.x, (enemy3.y)+i, enemy3.width, enemy3.height);
				enemy4[i] = new gamePlay(enemy4.x, (enemy4.y)+i, enemy4.width, enemy4.height);
				ctx.fillRect(enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
				ctx.fillRect(enemy2[i].x, enemy2[i].y, enemy2[i].width, enemy2[i].height);
				ctx.fillRect(enemy3[i].x, enemy3[i].y, enemy3[i].width, enemy3[i].height);
				ctx.fillRect(enemy4[i].x, enemy4[i].y, enemy4[i].width, enemy4[i].height);
				if(collision(player1,enemy[i]) || collision(player1,enemy2[i]) || collision(player1,enemy3[i]) || collision(player1,enemy4[i])){
					gameDeath.play();
					player1.x = 0;
					player1.y = height - 15;
					deaths++;
				}
			}
		}
		if(lvl7Boo){
			v = height - 75;
			for(i=0; i<700; i = i + 100){
				for(j=0; j<height; j = j + 100){
					enemy[i] = new gamePlay((enemy.x)+i, (enemy.y)+j, enemy.width, enemy.height);
					ctx.fillRect(enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
					if(v == 0)v = 400;
					if(collision(player1,enemy[i])){
						gameDeath.play();
						player1.x = 0;
						player1.y = height - 15;
						deaths++;
					}
				}
			}
		}
		if(lvl8Boo){
			v = 110;
			for(i=0; i<700; i = i + 50){
				enemy[i] = new gamePlay((enemy.x)+i, enemy.y, enemy.width, enemy.height);
				ctx.fillRect(enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
				enemy2[i] = new gamePlay((enemy2.x)+i, enemy2.y, enemy2.width, enemy2.height);
				ctx.fillRect(enemy2[i].x, enemy2[i].y, enemy2[i].width, enemy2[i].height);
				enemy3[i] = new gamePlay(enemy3.x, (enemy3.y)+i, enemy3.width, enemy3.height);
				enemy4[i] = new gamePlay(enemy4.x, (enemy4.y)+i, enemy4.width, enemy4.height);
				ctx.fillRect(enemy3[i].x, enemy3[i].y, enemy3[i].width, enemy3[i].height);
				ctx.fillRect(enemy4[i].x, enemy4[i].y, enemy4[i].width, enemy4[i].height);
				if(collision(player1,enemy[i]) || collision(player1,enemy2[i]) || collision(player1, enemy3[i]) || collision(player1,enemy4[i])){
					gameDeath.play();
					player1.x = 0;
					player1.y = height - 15;
					deaths++;
				}
			}
			for(j=0; j<700; j = j + 50){
				enemy[j] = new gamePlay((enemy.x)+j, enemy.y + 100, enemy.width, enemy.height);
				ctx.fillRect(enemy[j].x, enemy[j].y, enemy[j].width, enemy[j].height);
				enemy2[j] = new gamePlay((enemy2.x)+j, enemy2.y + 100, enemy2.width, enemy2.height);
				ctx.fillRect(enemy2[j].x, enemy2[j].y, enemy2[j].width, enemy2[j].height);
				enemy3[j] = new gamePlay(enemy3.x + 100, (enemy3.y)+j, enemy3.width, enemy3.height);
				enemy4[j] = new gamePlay(enemy4.x + 100, (enemy4.y)+j, enemy4.width, enemy4.height);
				ctx.fillRect(enemy3[j].x, enemy3[j].y, enemy3[j].width, enemy3[j].height);
				ctx.fillRect(enemy4[j].x, enemy4[j].y, enemy4[j].width, enemy4[j].height);
				if(collision(player1,enemy[j]) || collision(player1,enemy2[j]) || collision(player1, enemy3[j]) || collision(player1,enemy4[j])){
					gameDeath.play();
					player1.x = 0;
					player1.y = height - 15;
					deaths++;
				}
			}
		}
		ctx.fillStyle = "#5CD65C";
		ctx.fillRect(goal.x, goal.y, goal.width, goal.height);
		ctx.fillStyle = "black";
		ctx.font="20px impact";
		ctx.fillText(deathNum,5,25);
		ctx.fillStyle = "red";
		ctx.fillText(deaths,5,50);
		ctx.fillStyle = "black";
		ctx.fillText(currLvl,width - 110,25);
		ctx.fillText(lvlNum,width - 25,50);
	}
	if(win){
		ctx.font="50px impact";
		ctx.fillStyle = "black";
		ctx.fillText(Congr,35,height/2 - 50);
		ctx.fillText(Congr2,35,height/2);
		ctx.fillText(Congr3,width/2 - 200,height/2 + 50);
		ctx.fillStyle = "red";
		ctx.fillText(deaths,width/2 - 50,height/2 + 50);
		ctx.fillStyle = "black";
		ctx.fillText(deathz,width/2 + 60,height/2 + 50);
		ctx.fillText("CREATOR ABDUL ASIF",width/2 - 200,height/2 + 100);
	}
}

function update(){
	move(player1, keys, 87, 83, 65, 68);
	bounds(player1, width, height);
	lvls();
	if(!startS){
		enemyMove();
		enemyMove2();
		enemyMove3();
		enemyMove4();
	}
}


function game(){
	update();
	render();
}

function animate() {
    if (running) {
		game();
    }
    requestAnimFrame(animate);
}
animate();
