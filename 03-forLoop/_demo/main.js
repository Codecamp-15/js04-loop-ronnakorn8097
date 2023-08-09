console.log('learn counting loop');

console.log('starting....');

// () = parenthsis = วงเล็บ
// {} = bracket = ปีกกา
// [] = sqare bracket = ก้ามปู

//ex1 : examine syntax ////////////////////////////////////////////////////////////
// for(let i = 0 ;i < 3 ; i++ )
// {
//     console.log(" >> Hello");
// }

// ex2 ////////////////////////////////////////////////////////////
// for(let i =2 ; i<= 20; i=i+2)
// if(i%2 ==0) console.log(i);
// console.log(i);

//ex3 : fizzbuzz ////////////////////////////////////////////////////////////
// for(let i = 1; i<= 20; i = i+1 )
// {
// if(i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz');
// else if(i % 3 == 0) console.log('Fizz');
// else if(i % 5 == 0) console.log("Buzz");
// else console.log(i);
// }

//ex3b ////////////////////////////////////////////////////////////
// for(let i =1; i<=20 ; i++)
// i = 2 log(2) , log(even)
// if(i % 2 == 0) console.log(i);
// else continue; // update ค่า และ เริ่มต้น loop ถัดไป
// conlose.log(even);


// EX 4 : concat string ////////////////////////////////////////////////////////////

// let str = "";
// for(let i = 1; i <=10 ; i++)
// {
//     // guard
//     if(i % 3 == 0) continue;
//     str += i;
//     // " " + 1 => "1"
//     // "1" + 2 => "12"
// }

// Ex 5 remove : vowel (a , e , i ,o ,u)

// let src = "codecamp";
// let res = ""; // cdcmp
// // src.length ==> 8
// // src[0] ==> c
// // src[1] ==> o

// for(let i=0; i< src.length; i++)
// {
// let c = src[i];
// let isVowel = c== 'a'|| c=='e' || c=="i" || c=="o" || c=="u";

// // if( c== 'a'|| c=='e' || c=="i" || c=="o" || c=="u")
// if(isVowel)

// continue; // กลับเข้า condition

// res =res + src[i];
//     // "" + src[0] == '' + 'c' => 'c'
//     // 'c' + src[1] == 'c' + 'o' => 'co'

// }
// console.log(res);

////////////////////////////////////////////////////////////
// Advance : Netsted Loop

// Multiplication Table 
for(let i= 2; i <= 12 ; i++)
{
    //console.log

    console.log(`เริ่มท่องสูตรคูณแม่ ${i}`);
    for(let j =1 ; j <= 12 ; j++)
    {
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log('\n');
}

console.log("End....");