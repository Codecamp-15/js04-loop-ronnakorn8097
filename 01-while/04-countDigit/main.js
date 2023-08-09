console.log('Problem');

let n = +prompt('Enter Number');
// console.log(n);

//Pattern recognition
// 1150/10 => 115 => count 1
// 115/10 => 11.5 => count 2 
// 11.5/10 => 1.15 => count 3
// 1.15/10 => 0.115 => count 4

if(n < 0) n = -n; 
// กรณี ผุ้ช้งานใส่ ค่า ติดลบ

let count = 0;
// while(n >= 1 && n >=0)
// {
//     console.log(n);
//     count ++;
//     n=n/10;
// }


// (1152 - 2) / 10 => 115
// (115 - 5) / 10 => 11
// (11 - 1) / 10 => 1

// ข้อ 5
let sum =0;
while(n)
{
let remainder = n % 10;
n = (n-remainder) / 10;
sum += remainder;
count++;

}

console.log(count,sum);