   
    // 行動裝置 選單
    // menunav();
    function menunav() {
        let  menunav = document.getElementById('menunav');
        // 隱藏 手機版選單
        menunav.style.display = "none";
    }

    // 控制按鈕開關
 phonemenushow2();
    function phonemenushow2() {
    // $jQuery 的變數前綴詞
    // 隱藏選單
    $('#menunav').hide();

    // 開啟的選單
    $('#menubtn').click( function() {
        $('#menunav').show();
    });

    // 關閉選單
    $('#close').click( function() {
        $('#menunav').hide();
    });
    
}

CopyRightContent ();

function TimeYear(){
    var year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
    };

function CopyRightContent () {
    // 宣告變數 在 html 內新增 div 標籤
    let div = document.createElement('div') ;

    // 宣告變數 在哪個 html 標籤之內新增 div
    let footer = document.getElementById('footer');

    // 在footer 內 ，新增div 子元素
    footer.appendChild(div);

    div.innerHTML = '六月初一有限公司版權宣告&copy; 2021-<span id="year"></span>'
    TimeYear();

    // 調整  框架 位置
    let address = document.getElementById('address') ;

    // 再被選取的元素之前插入內容 before() 置入被選取元素標籤之前
    address.before(div);
}

    // 新增 phonenav 的內容
 phonenav();
    function phonenav() {
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
}

    // 新增熱銷商品 的內容
    greatcon();
    function greatcon(){

        // 新增標籤section
        let sec = document.createElement('section');

        // 在grecon內新增section
        let se = document.getElementById('grecon');

        // 建立 section 框架
        se.appendChild(sec);

        // 給予class 名稱
        sec.setAttribute("class","lcommodity");
    }