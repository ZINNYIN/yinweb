// 新增標籤 ul和 li
let ul = document.createElement('ul');


// 在 menunav 內新增，宣告變數
let pn = document.getElementById('phonenav');

// 建立ul 框架 ，給予id 名稱
pn.appendChild(ul);
// 賦予屬性 id or  class
ul.setAttribute("id" , "phonenav");

let phonenav = document.getElementById('phonenav');

let navclass =['about','verticallline','shop','verticallline','meassage','verticalline','address'];

let navcon = ['品牌故事','|','購物說明','|','客服留言','|','門市資訊'];

// 新增標籤時，程式的運作方式為:先新增標籤，賦予屬性，在指定新增的外框架(此為一個迴圈)
// 回圈內的數字7，是因為陣列而產生，故要隨著陣列值的數量而自動增減

for(let i =0 ; i <navclass.length ; i++) {
    let li = document.createElement('li');
    // 新增屬性
    li.setAttribute("class",navclass[i]);
    // ul內新增 li 清單
    phonenav.appendChild(li);

    // 新增連結a
    let A =document.createElement('a');
    //  新增屬性  假連結 javascript:;
    A.setAttribute("href","javascript:;");
    // li 內新增 a 連結
    li.appendChild(A);
    // 置入 陣列內容
    A.innertext = navcon[i];
}
