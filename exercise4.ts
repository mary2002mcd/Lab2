let isDone: boolean = false;
let color: string = "blue";
let y:number = 3;
let list: number[]=[1,2,3];

console.log("Value assigned to isDone is: "+isDone);
console.log("color is: "+color);
console.log("Number is: "+y);
// console.log("The value in the array is: "+list[0]);
// console.log("The value in the array is: "+list[1]);
// console.log("The value in the array is: "+list[2]);

for(let i = 0; i<3;i++)
{
    console.log("The value in the array is: "+list[i]);
}