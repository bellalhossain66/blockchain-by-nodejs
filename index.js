const Blockchain = require('./blockchain')
const Block = require('./block')

const bellal_chain = new Blockchain()
bellal_chain.addBlock(new Block(Date.now().toString(),{name: 'Bellal', prof: 'programmer'}))

console.log(bellal_chain.chain)