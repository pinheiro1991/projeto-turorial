function saudacao(nome) {
  return function(re, res, next){
    console.log(`Seja bem vindo' ${nome}.`)
 next()
    
    
  }
}
module.exports = saudacao