let num1 :number=2580;
let arrNum:number[]=[];

let str:string="";

function convertToArray(num:number){



    while(num>0){

        let i=num%10;

        num=Math.floor(num/10);

        str+=i;

    }

   

    for(let j:number=str.length-1;j>-1;j--)

    {

        arrNum.push(parseInt(str[j]));

    }

}

convertToArray(num1);

console.log(arrNum);