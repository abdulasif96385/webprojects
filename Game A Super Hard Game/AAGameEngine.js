//Finds Best Animation Frame For Browser
var requestAnimFrame = window.requestAnimationFrame || 
                       window.mozRequestAnimationFrame || 
                       window.webkitRequestAnimationFrame || 
                       window.msRequestAnimationFrame;
//Arrays
var keys = [],
	 keys2 = [],
	 keys3 = [],
	 keys4 = [],
	jumpTrue = false,
	intJump = 0;

//Variables
var countDown = false,
	running = true;

//Events
//Keys
window.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;
}, false);
window.addEventListener("keyup", function(e){
	delete keys[e.keyCode];
}, false);

window.addEventListener("keydown", function(e){
	keys2[e.keyCode] = true;
}, false);
window.addEventListener("keyup", function(e){
	delete keys2[e.keyCode];
}, false);

window.addEventListener("keydown", function(e){
	keys3[e.keyCode] = true;
}, false);
window.addEventListener("keyup", function(e){
	delete keys3[e.keyCode];
}, false);

window.addEventListener("keydown", function(e){
	keys4[e.keyCode] = true;
}, false);
window.addEventListener("keyup", function(e){
	delete keys4[e.keyCode];
}, false);

//Object Makers
//Game Player
function gamePlay(x,y,width,height,speed){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.speed=speed;
};

function gamePlayPlat(x,y,width,height,speed,jumpH){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.speed=speed;
	this.jumpH=jumpH;
};

//Game Object
function gameObj(x,y,width,height) {
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
};

//Boundaries
function bounds(player, wid, heig){
	if(player.x <= wid - wid) player.x= wid - wid;
	if(player.y <= heig - heig) player.y= heig - heig;
	if(player.x >= wid - player.width) player.x = wid - player.width;
	if(player.y >= heig - player.height) player.y = heig - player.height;
}

//Movement
function move(player,array, key1, key2, key3, key4){
	if(array[key1]){
		player.y = player.y - player.speed;
	}
	if(array[key2]){
		player.y = player.y + player.speed;
	}
	if(array[key3]){
		player.x = player.x - player.speed;
	}
	if(array[key4]){
		player.x = player.x + player.speed;
	}
}

function movePlat(player,keyArray, gravity, acc, key1, key2, key3, key4){
	if(keyArray[key1] || jumpTrue){
		jumpTrue = true;
		player.y = player.y - player.jumpH;
		player.jumpH -= gravity;
		if(player.y >= height - player.height){
			player.jumpH = intJump;
			jumpTrue = false;
		}
	}
	if(keyArray[key2]){
		player.y = player.y + player.speed;
	}
	if(keyArray[key3]){
		player.x = player.x - player.speed;
	}
	if(keyArray[key4]){
		player.x = player.x + player.speed;
	}
}

function drawTile(width,height,tile,map,color0,color1,color2,color3,color4,color5){
	ctx.clearRect(0,0,width,height);
	for(i=0; i<map.length; i++){
		for(j=0; j<map[i].length; j++){
			if(map[i][j]==0){
				ctx.fillStyle=color0;
				ctx.fillRect(tile.x,tile.y,tile.width,tile.height);
			}
			if(map[i][j]==1){
				ctx.fillStyle=color1;
				ctx.fillRect(tile.x,tile.y,tile.width,tile.height);
			}
			if(map[i][j]==2){
				ctx.fillStyle=color2;
				ctx.fillRect(tile.x,tile.y,tile.width,tile.height);
			}
			if(map[i][j]==3){
				ctx.fillStyle=color3;
				ctx.fillRect(tile.x,tile.y,tile.width,tile.height);
			}
			if(map[i][j]==4){
				ctx.fillStyle=color4;
				ctx.fillRect(tile.x,tile.y,tile.width,tile.height);
			}
			if(map[i][j]==5){
				ctx.fillStyle=color5;
				ctx.fillRect(tile.x,tile.y,tile.width,tile.height);
			}
			tile.x+=tile.width;
		}
		tile.x=0;
		tile.y+=tile.height;
	}
}

//Collision Detection
function collision(first, second){
	return !(first.x > second.x + second.width ||
		first.x + first.width < second.x ||
		first.y > second.y + second.height||
		first.y + first.height < second.y||
		second.x > first.x + first.width ||
		second.x + second.width < first.x ||
		second.y > first.y + first.height||
		second.y + second.height < first.y);
}

if(countDown) window.setInterval(timer, 1000);

//timer
function timer(){
	time--;
}

//Error
function error(errors){
	console.log(errors);
	alert(errors);
}