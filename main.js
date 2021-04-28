let nome = prompt("Qual seu nome completo?");
console.log(nome);
let incorreta;
let correta;

let begin = Number(prompt("Deseja iniciar a prova? Coloque a opção desejada abaixo: \n 1.SIM 2.NÃO"));
console.log(begin)
if(begin === 2) {
    document.write("Jogo cancelado!")
} else{

const questao1 = prompt("Qual o hormônio responsável pelo crescimento humano? \n 1.GH   \n 2.FSH   \n 3.LH");
console.log(questao1);
const resultado1 = questao1.value
if(resultado1 === 1){
    document.write("A  alternativa da questão 1 resposta está correta")
    
} else {
    document.write("A resposta da questão 1 está incorreta")
}

const questao2 = prompt("Em qual fase da meiose ocorre a separação dos centrômeros? \n 1.Telófase I     \n 2.Metáfase II    \n 3. Anáfase I");
console.log(questao2);

const resultado2 = questao2.value
if(resultado2===3){
    document.write("A  alternativa da questão 2 resposta está correta");
} else {
    document.write("A resposta da questão 2 está incorreta");
}

const questao3 = prompt("Qual a característica presente nos Chondrichthyes? \n 1.Escamas placóides \n 2.Sete pares de brânquias \n 3.Nadadeiras lobadas");
console.log(questao3)
const resultado3 = questao3.value
if(resultado3===1){
    document.write("A  alternativa da questão 3 resposta está correta")
} else {
    document.write("A resposta da questão 3 está incorreta")
} 
} 






//let questao1 = document.getElement("questao1"); 

//prompt("questionOne")

/*
if(confirm === 1){
    iniciaJogo();

} else {

    document.write("Jogo encerrado!");
}
/* 

//document.write("Respostas corretas" + inserir let)
//document.write("Respostas erradas" + inserir let)



function iniciaJogo() {
    if{}
}















/* let exit = window

    if (window.confirm("Deseja iniciar a prova? Quer iniciar o teste?")) {
    window.open("sair.html", "Obrigado pela visita!");}
    else{
        
    }
*/
  



  