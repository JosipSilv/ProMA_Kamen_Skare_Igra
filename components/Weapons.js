const weapons = {
    "hand-rock-o": {
        wins: 'hand-scissors-o'
    },
    "hand-paper-o": {
        wins: 'hand-rock-o'
    },
    "hand-scissors-o": {
        wins: 'hand-paper-o'
    }
},

    weaponKeys = Object.keys(weapons)

export { weapons, weaponKeys };