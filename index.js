// code your solution here

function superbowlWin(record) {
    const winningGame = record.find((game) => {
        return game.result === "W"
    })
    if (winningGame) {
        return winningGame.year
    }

}