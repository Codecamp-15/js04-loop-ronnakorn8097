// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
// prpgram : จำนวนที่กำหนดให้เป็นจำนวนเฉพาะ หรือ เปล่า

// let n =10 ;

// วิธีอาจารย์
for(let n = 2; n<=100; n++){
    let isPrime = true;

// only 1 number
for(let divider =2; divider < n ; divider++)
{
    if(n%divider === 0) 
    {
        isPrime = false;
        // break;    
    }

}
if(isPrime) console.log(n);
}

// else console.log(`number ${n} not prime number`);


//วิธีที่ทำเอง
for(let x=2;x<=100;x++)
{
    if(x%2==0) console.log(`Not Prime ${x}`)
    else console.log(`is Prime ${x}`);
}

