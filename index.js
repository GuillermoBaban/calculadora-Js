const bod = document.querySelector("#bod");
const resultado = document.querySelector("#resultado");

let opA = "";
let opB = "";
let ope = "";

const cal = new Object();
cal.uno = document.querySelector("#uno").addEventListener("click", (e) => {
  resultado.innerHTML = resultado.innerHTML + "1";
});
cal.dos = document.querySelector("#dos").addEventListener("click", (e) => {
  resultado.innerHTML = resultado.innerHTML + "2";
});
cal.tres = document.querySelector("#tres").addEventListener("click", (e) => {
  resultado.innerHTML = resultado.innerHTML + "3";
});
cal.cua = document.querySelector("#cuatro").addEventListener("click", (e) => {
  resultado.innerHTML = resultado.innerHTML + "4";
});

cal.cinco = document.querySelector("#cinco").addEventListener("click", (e) => {
  resultado.innerHTML = resultado.innerHTML + "5";
});
cal.seis = document.querySelector("#seis").addEventListener("click", (e) => {
  resultado.innerHTML = resultado.innerHTML + "6";
});
cal.siete = document.querySelector("#siete").addEventListener("click", (e) => {
  resultado.innerHTML = resultado.innerHTML + "7";
});
cal.ocho = document.querySelector("#ocho").addEventListener("click", (e) => {
  resultado.innerHTML = resultado.innerHTML + "8";
});
cal.nueve = document.querySelector("#nueve").addEventListener("click", (e) => {
  resultado.innerHTML = resultado.innerHTML + "9";
});
cal.cero = document.querySelector("#cero").addEventListener("click", (e) => {
  resultado.innerHTML = resultado.innerHTML + "0";
});
cal.divi = document.querySelector("#divi").addEventListener("click", (e) => {
  opA = resultado.innerHTML;
  ope = "/";
  clear();
});
cal.multi = document.querySelector("#mult").addEventListener("click", (e) => {
  opA = resultado.innerHTML;
  ope = "-";
  clear();
});
cal.menos = document.querySelector("#menos").addEventListener("click", (e) => {
  opA = resultado.innerHTML;
  ope = "-";
  clear();
});
cal.mas = document.querySelector("#mas").addEventListener("click", (e) => {
  opA = resultado.innerHTML;
  ope = "+";
  clear();
});
cal.reset = document.querySelector("#reset").addEventListener("click", (e) => {
  resetear();
});
cal.coma = document.querySelector("#coma");
cal.igual = document.querySelector("#igual").addEventListener("click", (e) => {
  opB = resultado.innerHTML;
  resolver();
});

function clear() {
  resultado.innerHTML = "";
}

function resetear() {
  resultado.innerHTML = "";
  opA = 0;
  opB = 0;
  ope = "";
}

function resolver() {
  let res = 0;
  switch (ope) {
    case "+":
      res = parseFloat(opA) + parseFloat(opB);
      break;
    case "-":
      res = parseFloat(opA) - parseFloat(opB);
      break;
    case "*":
      res = parseFloat(opA) * parseFloat(opB);
      break;
    case "/":
      res = parseFloat(opA) / parseFloat(opB);
      break;
  }
  resetear();
  resultado.innerHTML = res;
}
