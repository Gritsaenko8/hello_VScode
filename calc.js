let a = ''; //first number
let b = ''; //second number
let sign = ''; //знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// экран 
const out = document.querySelector('.calc-screen p');

function clearALL () {
    a = ''; // first number and result
    b = ''; // second number
    sign =''; // знак
    finish = false;
    out.textContent = 0;
}

document.querySelector('.AC').onclick = clearALL;

document.querySelector('.buttons').onclick = (event) => {
  // нажата не кнопка
     if(!event.target.classList.contains('btn')) return;
     // нажата кнопка clearALL AC
     if(event.target.classList.contains('AC')) return;

     out.textContent = '';
     // получаю нажатую кнопку
     const key = event.target.textContent;

     // если нажата кнопка 0-9
     if (digit.includes(key)){
       if (b ==='' && sing === '') {
       a += key
       
       out.textContent = a;
     }
      else if (a!=='' && b!=='' && finish) {
           b = key;
           finish = false;
           out.textContent = b;
      }
      else {
          b += key;
          out.textContent = b;
      }
      console.table(a, b, sing);
      return;
    }

     //если нажата клавиша + - / * 
     if (action.includes(key)) {
       sing = key;
       out.textContent = sing;
       console.table(a, b, sign);
       return;
     }

     //нажата =
     if (key ==='=') {
       if (b === '') b = a;
         switch (sign) {
           case "+":
              a = (+a) + (+b);
              break;
            case "-":
              a = a - b;
              break;
            case "X":
                a = a * b;
              break;
            case "/":
              if (b === '0') {
                out.textContent = 'Ошибка';
                a = '';
                b = '';
                sing = '';
                return;
              }
              a = a / b;
              break;
         }
         finish = true;
         out.textContent = a;
         console.table(a, b, sign);
     }
}