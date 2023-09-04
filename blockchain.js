const Block = require('./block')

class Blockchain {
    constructor(){
        this.chain = [new Block(Date.now().toString())]
        this.difficulty = 1
    }

    getLastBlock = () => {
        return this.chain[this.chain.length - 1]
    }

    addBlock = (block) => {
        block.lastBlock = this.getLastBlock().hash;
        block.hash = block.getHash();
        block.mine(this.difficulty)
        this.chain.push(Object.freeze(block))
    }

    validateBlock = (blockchain = this) => {
        for(let i=1; i<blockchain.chain.length; i++){
            let currentBlock = blockchain.chain[i]
            let preBlock = blockchain.chain[i-1]
            if(currentBlockx.hash != currentBlock.getHash() || preBlock.hash != preBlock.getHash()){
                return false
            }
        }
        return true
    }
}

module.exports = Blockchain;