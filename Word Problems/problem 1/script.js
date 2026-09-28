// Three students scored [80, 92, 75], given as [{name, score}].
// Write a function that returns the name of the highest scorer.

function maxScore(scrores) {
    let maxScore = scrores(0).score;
    let scoreName = scrores(0).name;
    for (let i = 0; i < scrores.length; i++) {
        if (scrores(i).score < scrores(i + 1).score) {
            maxScore = scrores(i + 1).score;
            scoreName = scrores(i + 1).name;
        }
    }
    return scoreName;
}


