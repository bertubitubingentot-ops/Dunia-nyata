class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    setScore(score) {
        this.score = score;
    }

    getScore() {
        return this.score;
    }

    getName() {
        return this.name;
    }
}

export default Player;