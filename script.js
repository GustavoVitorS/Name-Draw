/*Change or add more names to make the project the way you want*/

let names = [
  "Maria Silva",
  "José Felipe",
  "Antônio Abate",
  "Soifa So",
  "João Reichman",
  "Stefan Souza",
  "Francisco Duarte",
  "Ana Clara",
  "Elouise Vis",
  "Kay Melchior",
  "Paulo Poste",
  "Carlos Eduardo",
  "Manoel Fernando",
  "Fernando Mael",
  "Pedro Policastro",
  "Caio Fossco",
  "Sebastião Gagliano",
  "Levi Ackerman",
  "Mary Krishnan",
  "Brenda Bosque",
  "Marcelo Parso",
  "Jorge Hamrick",
  "Fabio Roberto",
  "Edson Gauns",
  "Diana Zambrozuski",
  "André Silva",
  "Sérgio Caules",
  "Dorla Pinga",
  "Josefa Souzza",
  "Patrícia Vitória",
  "Daniel Buzz",
  "Marissa Luz",
  "Rodrigo Joaquim",
  "Vera Vi",
  "Adriana Sati",
  "Patrice Woll",
  "Ricardo Eduardo",
  "Jackqueline Jaquez",
  "Claude Raia",
  "Luiciana Montano",
  "Bruna Ozuna",
  "Victor Plantez",
  "Yuki Cakimono",
  "Kassandra Ferraz",
  "Rosario Felipe",
  "Derek Persa",
  "Luana Silva",
  "Almeda Rosa",
  "Toby Benedito",
  "Mário Armario"
  ];
    
  count = names.length;
  
  function start(){
    selected = names[Math.random() * count | 0].toUpperCase();
    covered = selected.replace(/[^\s]/g, '_');
    document.body.innerHTML = covered;
    timer = setInterval(decode, 50);
  }
  
  function decode(){
    newtext = covered.split('').map(changeLetter()).join('');
    document.body.innerHTML = newtext;
    if(selected == covered){
      clearTimeout(timer);
      winnerRevealed();
      return false;
    }
    covered = newtext;
  }
  
  function changeLetter(){
    replacements = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz%!@&*#_ ';
    replacementsLen = replacements.length;
    return function(letter, index, err){
      return selected[index] == letter 
         ? letter 
         : replacements[Math.random() * replacementsLen | 0];
    }
  }
  
  function winnerRevealed(){
    alert('winner found');
  }