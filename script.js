// Todo: Make M+ M- and MC functional
let string = "";

let buttons = document.querySelectorAll('.button');
console.log(buttons);

Array.from(buttons).forEach( function dog(button){
    button.addEventListener('click', function run(e){
      if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'C'){
        string = "";
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == "&lt;-"){
        string = string.toString();
        let len = string.length;
        string = string.slice(0, len-1);
        console.log(string);
        document.querySelector('input').value = string;
      }
      else{ 
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
        }
    })
  });