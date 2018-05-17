var bot2 =function(world){
	var player = world.player;
	var closestGem = false;
	var random = Math.random();
	//console.log(random);
	if(random>0.2){
		world.collectives.forEach(stone => {
			if (closestGem == false) closestGem = stone;
			else if (
			Math.sqrt(
				Math.pow(player.x - closestGem.x, 2) +
				Math.pow(player.y - closestGem.y, 2)
			) >
			Math.sqrt(
				Math.pow(player.x - stone.x, 2) + Math.pow(player.y - stone.y, 2)
			)
			) {
			closestGem = stone;
			}
		});}
	else
		closestGem = world.collectives[0];
	if (closestGem) {
		if (closestGem.x - player.x > 0) {
			var direction = { left: false, right: true, up: false, down: false };
		} else if (closestGem.x - player.x < 0) {
			var direction = { left: true, right: false, up: false, down: false };
		} else if (closestGem.y - player.y > 0) {
			var direction = { left: false, right: false, up: false, down: true };
		} else if (closestGem.y - player.y < 0) {
			var direction = { left: false, right: false, up: true, down: false };
		} else {
			var direction = { left: false, right: false, up: true, down: false };
		}
		return direction;
	}
}
module.exports = bot2;