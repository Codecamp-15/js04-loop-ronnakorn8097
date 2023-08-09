console.log('learn while loop');

console.log("start....")

let i = 1;

while(i <= 20)
{
    // loop block
    // if( i % 3 == 0)
    // {
    //     console.log(i);
    // }
    // else if(i % 5 == 0)
    // {
    //     console.log(`${i} : High Five`);
    // }
///////////////////////////////////////////////////////////////////////
    // if( i % 5 == 0)
    // {
    //     console.log(`${i} : High Five`);
    // }
    // else if(i % 3 == 0)
    // {
    //     console.log(i);
    // }

///////////////////////////////////////////////////////////////////////
    // if(i % 3 != 0)
    // {
    //     console.log(i);
    // }
 
if(i % 3 == 0 && i % 5 == 0)
{
    console.log('FizzBuzz');
}

else if(i % 3 == 0)
{
    console.log('Fizz');
}
else if(i % 5 == 0)
{
    console.log("Buzz");
}
else 
{
    console.log(i);
}


    i++;

    // ++i;
    // i = i+ 1;
}

// FizzBuzz
// range : 1-20;
// divided by 3 : print Fizz
// divided by 5 : print buzz
// divided by 3 and 5 : print fizzbuzz

console.log("end....");


