let sum = 0;
let even_number = 0;
let even_2 =0;
let sumThirdsq = 0;

for(let i =1 ; i <=100 ; i++)
{
    sum = sum + i;
    if( i % 2 === 0)
    {       
        even_number += i;
        even_2 += i**2;
    
    }
    if(i % 3 === 0)
    {
        sumThirdsq += i**2;
    }
}
console.log('\n');
console.log(sum);
console.log(even_number);
console.log(sum - even_number);
console.log(even_2);
console.log(even_2 - sumThirdsq);
