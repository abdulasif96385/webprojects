var requestAnimFrame = window.requestAnimationFrame || 
                       window.mozRequestAnimationFrame || 
                       window.webkitRequestAnimationFrame || 
                       window.msRequestAnimationFrame;

var keys = [];

var keyD = 68,
	keyA = 65,
	keyW = 87,
	keyS = 83,
	keyE = 69;

window.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;
}, false);
window.addEventListener("keyup", function(e){
	delete keys[e.keyCode];
}, false);

function gamePlay(x,y,width,height,speed){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.speed=speed;
};

function gameTile(x,y,width,height,color){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.color=color;
};

function bounds(player, wid, heig){
	if(player.x <= wid - wid) player.x= wid - wid;
	if(player.y <= heig - heig) player.y= heig - heig;
	if(player.x >= wid - player.width) player.x = wid - player.width;
	if(player.y >= heig - player.height) player.y = heig - player.height;
}

function moveBirdsEye(playerr, key1, key2, key3, key4){
	if(keys[key1]){
		playerr.y = playerr.y - playerr.speed;
	}
	if(keys[key2]){
		playerr.y = playerr.y + playerr.speed;
	}
	if(keys[key3]){
		playerr.x = playerr.x - playerr.speed;
	}
	if(keys[key4]){
		playerr.x = playerr.x + playerr.speed;
	}
}

function drawTile(mArray, ctx, pX, pY, tile1, tile2){
	for(i = 0; i < mArray.length; i++){
		for(j = 0; j < mArray[i].length; j++){
			if(mArray[i][j] == 1){
				ctx.fillStyle = tile1.color;
				ctx.fillRect(pX,pY,tile1.width,tile1.height);
			}
			if(mArray[i][j] == 2){
				ctx.fillStyle = tile2.color;
				ctx.fillRect(pX,pY,tile2.width,tile2.height);
			}
			pX += tile1.width;
		}
		pX = 0;
		pY += tile1.height;
	}
}

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

function error(errors){
	console.log(errors);
	alert(errors);
}

function animate(boo) {
    if (boo) {
		render();
		update();
    }
    requestAnimFrame(animate);
}