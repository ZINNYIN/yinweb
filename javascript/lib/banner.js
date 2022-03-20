// 指定圖片路徑 陣列
let image = ['image/banner/banner01.jpeg', 'image/banner/banner02.jpg', 'image/banner/banner03.jpg', 'image/banner/banner04.jpg', 'image/banner/banner06.jpg'];

// 變數 紀錄目前正在顯示第幾張圖片 ， 儲存著圖片對應的索引編號
let current = 0;

// 方法 宣告變數，將執行方法直接寫入變數中
let changeimage = function(num) {
    // 判斷式 條件  --   索引編號 + 自訂參數值  >=0  和 索引編號 + 自訂參數值 < 圖片陣列的長度，同時成立時
    if( current + num >= 0 && current + num < image.length ) {
        // 索引變數 = 索引變數 + 自訂參數值 current = current + num;
        current =+ num;
        // 更改 圖片的連結檔案
        document.getElementById('bannerimg').src = image[current];
    } else {
        current = -1;
    }
}

// 按鈕執行  方法
document.getElementById('prev').onclick = function() {
    changeimage(-1);
}

document.getElementById('next').onclick = function() {
    changeimage(1);
}

// 自訂輪播

