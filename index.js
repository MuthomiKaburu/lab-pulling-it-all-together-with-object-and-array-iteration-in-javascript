function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
    const game = gameObject();
    let points
    Object.values(game).forEach(team => {
        Object.keys(team.players).forEach(name=>{
            if(name === playerName){
                 points = team.players[name].points

            }
        })
        
    });
    return points;
}

numPointsScored("Alan Anderson");

function shoeSize(playerName){
    const game = gameObject()
    let size;
    Object.values(game).forEach(team=>{
        Object.keys(team.players).forEach(name=>{
            if(name===playerName){
                size = team.players[name].shoe
            }
        })
    })
    return size;
}
shoeSize("Alan Anderson");

function teamColors(teamName){
    const game = gameObject();
    let colors;
     Object.values(game).forEach(team => {
        if (team.teamName === teamName) {
            colors = team.colors;
        }
    });
    return colors;
}

function teamNames() {
    const game = gameObject();
    const names = [];

    Object.keys(game).forEach(key => {
        names.push(game[key].teamName);
    });

    return names;
}

const nameesyy =teamNames()
console.log(nameesyy)
function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];

    Object.values(game).forEach(team => {
        if (team.teamName === teamName) {
            Object.values(team.players).forEach(player => {
                numbers.push(player.number);
            });
        }
    });

    return numbers;
}
function playerStats(playerName){
    const game = gameObject()
    let stats;
    Object.values(game).forEach(team=>{
       Object.keys(team.players).forEach(name=>{
        if(name===playerName){
            stats = team.players[name];


        }
       })
    })
    return stats;
}
playerNumber("Alan Anderson")

function bigShoeRebounds() {
    const game = gameObject();

    let biggestShoe = 0;
    let rebounds = 0;

    Object.values(game).forEach(team => {
        Object.values(team.players).forEach(player => {
            if (player.shoe > biggestShoe) {
                biggestShoe = player.shoe;
                rebounds = player.rebounds;
            }
        });
    });

    return rebounds;
}
