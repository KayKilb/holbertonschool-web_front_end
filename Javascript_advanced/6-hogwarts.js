let studentHogwarts = funtion() {
    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += points;
    }

return {
    setName: function(newName) {
        name = newName;
        },
    rewardStudent: function() {
        changeScoreBy(1);
        },
    penalizeStudent: function() {
        changeScoreBy(-1);
        },
    getScore: function() {
        return name + ' ' + privateScore;
        }
    };
};

let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Logs Harry: 4

let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Logs Draco: -2

// To test
console.log(harry.getScore()); // Logs Harry: 4
console.log(draco.getScore()); // Logs Draco: -2