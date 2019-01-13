/*var a = prompt();
var b = prompt();
var x = parseInt(b);
var y = parseInt(a);
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);*/
/*var n = 0;
var q1 = prompt("klora:");
if(q1== "gndak"){
    alert("jisht e");
    n++
}
else
alert("sxal e");
var q2 = prompt("kapuyta:");
if(q2== "erkinq"){
    alert("jisht e");
    n++
}
else
alert("sxal e");

alert("2/" + n);*/

/*var a = prompt("input degree 1-180:")
a = parseInt(a);
if(a >= 40 && a <= 50 || a >= 100 && a <= 120){
    alert("YOU WIN");
}
else{
alert("GAME OVER")
}*/

/*var s = prompt("Input sum:");
s = parseInt(s);
var p = prompt("Input percent:");
p = parseInt(p);
var y = prompt("Input years:");
y = parseInt(y);


for (var i = 1; i <= y ; i++) {
    s = ((s * p)/100) + s;
    alert(i +" year sum = " + s);
}*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCard() {
    var cards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    return cards[getRandomInt(0, cards.length - 1)];
}

function getSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 'A') {
            if (arr[i] == 'J' || arr[i] == 'Q' || arr[i] == 'K') {
                sum += 10;

            }
            else {
                var int = parseInt(arr[i]);
                sum += int;
            }
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'A') {
            if (sum<10) {
                sum += 11;

            }
            else {
                sum += 1;
            }
        }
    }
    return sum;
}

var dealer = [getCard()];
var player = [getCard(), getCard()];

alert('Дилер: ' + dealer.join(' ') + '; Игрок: ' + player.join(' '));
alert('Текущая сумма карт у игрока: ' + getSum(player))
