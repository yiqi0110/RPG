//creatation of the four characters objects
// Attack power for lichking
var lichAttk = 40;

// Attack power for stormrage
var stormAttk = 95;

// Attack power for windrunner
var windAttk = 20;

// Attack power for thrall
var thrallAttk = 35;

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
};

var thrall = {
    name: "Thrall, Warchief of the Horde",
    hp: 150,
    attk: thrallAttk,
    counterAttk: thrallAttk * 1.75,
};
// console.log(lichking, stormrage, windrunner, thrall);

var attack = function (x, y) {
    y.hp = y.hp - x.attk;
    x.attk = x.attk + x.attk;
    if (y.hp >= 0) {
        x.hp = x.hp - y.attk;
    };
    console.log("My attack function " + x,y);
};



// reset button functionality
// $('#_reset').click();


//start the game using the startup()
function startup() {
    // click a character to start the theme song, will also hiding the #warning
    $(document).ready(function PvP() {
        $('#_combatantSelect').hide();
        $('#_playerDamage').hide();
        $('#_combatantDamage').hide();
        $('#_attack').hide();
        $('#_win').hide();
        $('#_lose').hide();
        $('#_reset').hide();
        
        
        // Creates a variable for the #_player and #_opponent
        var playerCharacter;
        var opponentCharacter;
        var defeatedCharacters = [];
        
        // Defining the variables for the attack function below
        var y;
        var x;
        
        // Sets all the names and values to each character
        $('#lichhp').append(lichking.hp + " " + lichking.name);
        $('#stormhp').append(stormrage.hp + " " + stormrage.name);
        $('#windhp').append(windrunner.hp + " " + windrunner.name);
        $('#thrallhp').append(thrall.hp + " " + thrall.name);
        
        // Runs through to allow the player to select their character and moves the others to the potential combatants div
        $('#_playerSelect').click(function (event) {
            $('._disappearOnceGameStart').hide();
            if (event.target.id !== 'lichimg') {
                $('#lichdiv').appendTo('#_enemies');
            } else {
                $('#lichdiv').appendTo('#_player');
                $('#lichimg').attr('style', 'border: 5px solid green');
            };
            if (event.target.id !== 'stormimg') {
                $('#stormdiv').appendTo('#_enemies');
            } else {
                $('#stormdiv').appendTo('#_player');
                $('#stormimg').attr('style', 'border: 5px solid green');
            };
            if (event.target.id !== 'windimg') {
                $('#winddiv').appendTo('#_enemies');
            } else {
                $('#winddiv').appendTo('#_player');
                $('#windimg').attr('style', 'border: 5px solid green');
            };
            if (event.target.id !== 'thrallimg') {
                $('#thralldiv').appendTo('#_enemies');
            } else {
                $('#thralldiv').appendTo('#_player');
                $('#thrallimg').attr('style', 'border: 5px solid green');
            };
            if ($('#_player').find('div#lichdiv').length !== 0) {
                playerCharacter = lichking;
                x = playerCharacter;
                // console.log(x);
            };
            if ($('#_player').find('div#stormdiv').length !== 0) {
                playerCharacter = stormrage;
                x = playerCharacter;
                // console.log(playerCharacter)
                 
            };
            if ($('#_player').find('div#winddiv').length !== 0) {
                playerCharacter = windrunner;
                x = playerCharacter;
                // console.log(playerCharacter);
                 
            };
            if ($('#_player').find('div#thralldiv').length !== 0) {
                playerCharacter = thrall;
                x = playerCharacter;
                // console.log(playerCharacter);
                 
            };

            // opponent select
            $('#_enemies').click(function (event) {
                if (event.target.id !== 'lichimg') {} else {
                    $(this).hide();
                    $('#lichdiv').appendTo('#_battleground').wrap("<div id='_opponent'></div>");
                    $('#lichimg').attr('style', 'border: 5px solid red');
                    $('#_player').prependTo('#_battleground');
                };
                if (event.target.id !== 'stormimg') {} else {
                    $(this).hide();
                    $('#stormdiv').appendTo('#_battleground').wrap("<div id='_opponent'></div>");
                    $('#stormimg').attr('style', 'border: 5px solid red');
                    $('#_player').prependTo('#_battleground');
                };
                if (event.target.id !== 'windimg') {} else {
                    $(this).hide();
                    $('#winddiv').appendTo('#_battleground').wrap("<div id='_opponent'></div>");
                    $('#windimg').attr('style', 'border: 5px solid red');
                    $('#_player').prependTo('#_battleground');
                };
                if (event.target.id !== 'thrallimg') {} else {
                    $(this).hide();
                    $('#thralldiv').appendTo('#_battleground').wrap("<div id='_opponent'></div>");
                    $('#thrallimg').attr('style', 'border: 5px solid red');
                    $('#_player').prependTo('#_battleground');
                    
                };
                // opponent storage
                if ($('#_opponent').find('div#lichdiv').length !== 0) {
                    opponentCharacter = lichking;
                    y = opponentCharacter;
                };
                if ($('#_opponent').find('div#stormdiv').length !== 0) {
                    opponentCharacter = stormrage;
                    y = opponentCharacter;
                    // console.log(opponentCharacter);
                     
                };
                if ($('#_opponent').find('div#winddiv').length !== 0) {
                    opponentCharacter = windrunner;
                    y = opponentCharacter;
                    // console.log(opponentCharacter);
                     
                };
                if ($('#_opponent').find('div#thralldiv').length !== 0) {
                    opponentCharacter = thrall;
                    y = opponentCharacter;
                    // console.log(opponentCharacter);
                     
                };
                
                $('#_gameTime').attr('style', 'color: red; font-size: 100px');
                console.log("This is the selection " +x,y);
                $('#_attack').show();
                var wins = 0;
                $('#_attack').click(function () {
                    console.log("somthithiasdfafdsbdfs");
                    attack(x,y);
                    if (y.hp < 0) {
            
                        console.log("you killed " + y.name + "!");

                        
                        if ($('#_battleground').find('div#lichdiv').length !== 0) {
                            $('#_opponent').hide().appendTo('#_defeated');
                            wins++;
                            $('#_enemies').show();
                            $('#_player').appendTo('#_playerHolder');
                            $('#_gameTime').attr('style', 'font-size: 1px');
                        }
                        if ($('#_battleground').find('div#stormdiv').length !== 0) {
                            $('#_opponent').hide().appendTo('#_defeated');
                            wins++;
                            $('#_enemies').show();
                            $('#_player').appendTo('#_playerHolder');
                            $('#_gameTime').attr('style', 'font-size: 1px');
                        }
                        if ($('#_battleground').find('div#winddiv').length !== 0) {
                            $('#_opponent').hide().appendTo('#_defeated');
                            wins++;
                            $('#_enemies').show();
                            $('#_player').appendTo('#_playerHolder');
                            $('#_gameTime').attr('style', 'font-size: 1px');
                        }
                        if ($('#_battleground').find('div#thralldiv').length !== 0) {
                            $('#_opponent').hide().appendTo('#_defeated');
                            wins++;
                            $('#_enemies').show();
                            $('#_player').appendTo('#_playerHolder');
                            $('#_gameTime').attr('style', 'font-size: 1px');
                        }
                        y = ''
                        console.log("this is the y after death" + y);
                        console.log(wins);
                        // if all opponents defeated then victory
                        if (wins === 3) {
                            console.log('fdf');
                        }
                    }
                });

            });
        });
        // Allows you to select your combatant then moves players character and combatant to PVP
        // As well as gives the player and 
        
        // function to attack
        

        // if ($('#_battleground:contains(x&&y)')) {
        // attack();
        // };
        // Now to comence the battle
        // $('#_attack').click(attack(x,y));
        
        
    });
}