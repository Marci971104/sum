const num1 = document.querySelector("num1") as HTMLInputElement;
const num2 = document.querySelector("num2") as HTMLInputElement;
const result = document.querySelector("result") as HTMLInputElement;

const SumBtn = document.querySelector("SumBtn") as HTMLInputElement;

function add(szam1 : number,szam2: number ):number{
    return szam1 + szam2;
}
console.log(add(30,35));