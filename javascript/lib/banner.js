// 指定圖片路徑 陣列
let image = ['image/banner/001.jpeg', 'image/banner/002.jpg', 'image/banner/003.jpg', 'image/banner/004.jpg', 'image/banner/005.jpg'];

// 變數 紀錄目前正在顯示第幾張圖片 ， 儲存著圖片對應的索引編號
let current = 0;

// 方法 宣告變數，將執行方法直接寫入變數中
let changeimage = function(num) {
    // 判斷式 條件  --   索引編號 + 自訂參數值  >=0  和 索引編號 + 自訂參數值 < 圖片陣列的長度，同時成立時

    current = ( current + num + image.length ) % image.length;
    document.getElementById('bannerimg').src = image[current];
   
    console.log(current);
}

// 按鈕執行  方法
document.getElementById('prev').onclick = function() {
    changeimage(-1);
}

document.getElementById('next').onclick = function() {
    changeimage(1);
}

// 自訂輪播
// let timer = setInterval(() => {
//     if( current < image.length ) {
//         changeimage(1);
//         console.log(current);
//     }
// }, 3000);
    

