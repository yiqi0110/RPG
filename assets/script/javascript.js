//creatation of the four characters objects
// Attack power for lichking
var lichAttk = 50;

// Attack power for stormrage
var stormAttk = 75;

// Attack power for windrunner
var windAttk = 25;

// Attack power for thrall
var thrallAttk = 20;

var lichking = {
    name: "Arthus, The Lich King",
    hp: 200,
    attk: lichAttk,
    counterAttk: lichAttk * 1.5,
};

var stormrage = {
    name: "Illidan, Stormrage",
    hp: 150,
    attk: stormAttk,
    counterAttk: stormAttk * 1.25,
};

var windrunner = {
    name: "Sylvanas, Windrunner",
    hp: 120,
    attk: windAttk,
    counterAttk: windAttk * 2,
}

var thrall = {
    name: "Thrall, Warchief of the Horde",
    hp: 150,
    attk: thrallAttk,
    counterAttk: thrallAttk * 1.75,
}
console.log(lichking, stormrage, windrunner, thrall);


//start the game using the startup()
function startup() {
    // click a character to start the theme song, will also hiding the #warning
    $(document).ready(function(){
        
        $('#lichhp').append(lichking.hp + " " + lichking.name);
        $('#stormhp').append(stormrage.hp + " " +stormrage.name);
        $('#windhp').append(windrunner.hp + " " + windrunner.name);
        $('#thrallhp').append(thrall.hp + " " + thrall.name);
        $(document).click(function(event){
            $('._disappearOnceGameStart').hide();
            if (event.target.id !== 'lichimg') {
                $('#lichdiv').appendTo('#_enemies');
            } else {
                $('#lichdiv').appendTo('#_player');
            };
            if (event.target !== '#stormdiv') {
                $('#stormdiv').appendTo('#_enemies');
            } else {
                $('#stormdiv').appendTo('#_player');
            };
            if (event.target !== '#winddiv') {
                $('#winddiv').appendTo('#_enemies');
            } else {
                $('#winddiv').appendTo('#_player');
            };
            if (event.target !== '#thralldiv') {
                $('#thralldiv').appendTo('#_enemies');
            } else {
                $('#thralldiv').appendTo('#_player');
            };
            console.log(event.target)
            // if (event.target !== '#lichdiv') {
            //     $('#lichdiv').appendTo('#_player');
            //     $('#stormdiv').appendTo('#_enemies');
            //     $('#winddiv').appendTo('#_enemies');
            //     $('#thralldiv').appendTo('#_enemies');
            // };
            // if (event.target !== '#stormdiv') {
            //     $('#stormdiv').appendTo('#_player');
            //     $('#lichdiv').appendTo('#_enemies');
            //     $('#winddiv').appendTo('#_enemies');
            //     $('#thralldiv').appendTo('#_enemies');
            // };
            // if (event.target !== '#winddiv') {
            //     $('#winddiv').appendTo('#_player');
            //     $('#stormdiv').appendTo('#_enemies');
            //     $('#lichdiv').appendTo('#_enemies');
            //     $('#thralldiv').appendTo('#_enemies');
            // };
            // if (event.target !== '#thralldiv') {
            //     $('#thralldiv').appendTo('#_player');
            //     $('#stormdiv').appendTo('#_enemies');
            //     $('#winddiv').appendTo('#_enemies');
            //     $('#lichdiv').appendTo('#_enemies');
            // };
        });
    });

    // clicking on the character will move the character into your player div and the remaining characters into the possible combatants div

};