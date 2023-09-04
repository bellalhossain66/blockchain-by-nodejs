const crypto = require('crypto')
const SHA256 = message => crypto.createHash('sha256').update(message).digest('hex')

class Block {
    constructor(timestamp='', data=[]){
        this.timestamp = timestamp
        this.data = data
        this.hash = this.getHash()
        this.preBlockHash = ''
        this.nonce = 0
        this.difficulty = 1
    }
    getHash = () => {
        return SHA256(this.preBlockHash + this.timestamp + JSON.stringify(this.data) + this.nonce)
    }

    mine = (difficulty) => {
        while(!this.hash.startsWith(Array(difficulty+1).join('0'))){
            this.nonce++
            this.hash = this.getHash()
        }
    }
}

module.exports = Block;