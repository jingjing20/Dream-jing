function Player(name, teamColor) {      //类
    this.enemies = [];  //敌人
    this.partners = []; //友军
    this.name = name;
    this.teamColor = teamColor;
    this.state = 'live';
}

Player.prototype.win = function() {  
    //kill all
    console.log(`${this.name}win`);
}

Player.prototype.lose = function() {   
    console.log(`${this.name}lose`);
}

Player.prototype.die = function() {
    console.log(`${this.name}die`);
    this.state = 'die';
    let all_dead = true;        //假设都死了
    for(var i = 0, partner; partner = this.partners[i++];) {
        if (partner.state === 'live') {
            all_dead = false;
            break;
        }
    }
    if (all_dead) {
        this.lose()
        for (var i = 0,partner; partner = this.partners[i++];) {
            partner.lose();
        }
        for (var i = 0,enemy; enemy = this.enemies[i++];) {
            enemy.win();
        }
    }
}

//组队  生成玩家  工厂类来负责
var players = [];
var PlayerFactory = function(name,teamColor) {
    var newPlayer = new Player(name,teamColor);
    for(var i = 0, player; player = players[i++];) {
        if (player.teamColor === newPlayer.teamColor) {
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        }else{
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}

var player1 = PlayerFactory('皮蛋','red');
var player2 = PlayerFactory('豹女','red');
var player3 = PlayerFactory('浩浩','red');
var player4 = PlayerFactory('婧婧','red');
//队友是谁？ 敌人是谁？ 交给工厂去做
var player5 = PlayerFactory('凯基','block');
var player6 = PlayerFactory('股股','block');
var player7 = PlayerFactory('坚果','block');
var player8 = PlayerFactory('日记','block');

// console.log(player1.partners);

player1.die();
player2.die();
player3.die();
player4.die();