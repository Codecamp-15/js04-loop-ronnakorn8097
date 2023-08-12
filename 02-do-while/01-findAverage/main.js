// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

// ```js
// /*
// GET : Input
// CHECK : number
// IF number
//     ADD number to sum
//     ADD 1 to count
//     BACK TO LINE 7 
// ELSE 
//     PRINT sum
//     PRINT average
// */ 


let sum = 0;
let count = 1;

do {
    number = +prompt("Enter Only Number");
    if(number < 0 || number == "" || number == null )
    {
        break;
    }
    sum += number;
    count = sum/count;
    console.log(`summary ${sum}`);
    console.log(`Avg ${count}`);
 
 
    // if(number == 0 || number < 0 || number == "" ) {
    //     break;
    // }

}while(true)

