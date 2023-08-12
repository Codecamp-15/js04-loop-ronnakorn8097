// ให้เขียนโค้ดแสดงสูตรคูณตั้งแต่ แม่ 2 ถึง แม่ 12 โดยแสดงผลออกมาใน console  
// 2 x 1 = 2  
// 2 x 2 = 4  
// ...  
// หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n



for(let i =2 ;i<=12;i++)
{
    for(let j =1 ; j<=12; j++)
    {      
        let mul = i*j;
        console.log(`${i} x ${j} = ${mul}`);     
    }
    
    console.log("\n");
}

// for (let i = 2; i <= 12; i++) 
// {
//     for (let j = 1; j <= 12; j++) {
//         let mul = i * j;
//         console.log(`${i} x ${j} = ${mul}`);
//     }

//     // เพิ่มบรรทัดว่างหลังแม่สูตรคูณแต่ละแม่
//     console.log("\n");
// }
