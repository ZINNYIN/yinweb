   
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


for(let i=0;i<8; i++){
   
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

        // 給予class 和 id 名稱
        sec.setAttribute("id","commodity");
        sec.setAttribute("class","commodity");
    
        /* ==============================================*/
        // 新增標籤ul
        let ul = document.createElement('ul');


        // 在commodity內新增ul
        let co = document.getElementById('commodity');


        // 建立ul框架
        co.appendChild(ul);

        // 給予id名稱
        ul.setAttribute("id","titlebox");

        // 設計迴圈
        // li在titlebox 框架內產生，宣告 titlebox 的變數
        let tb = document.getElementById('titlebox');

        // 宣告 li 的class 名稱 array (陣列)
        let liclass = ['title','number','text'];

        // 宣告 li 內容
        let licon =['熱銷商品','庫存','數量有限，售完為止'];

        forli(liclass, tb, licon);

         // for 迴圈
        /* for(let i =0;i<liclass.length;i++){
            // 建立li
             let li = document.createElement('li');
        
            在 titlebox(宣告在 130行)
            tb.appendChild(li);

            // 新增class屬性
             li.setAttribute("class",liclass[i]);

            // 置入內容
            li.innerText = licon[i];
         }*/


       


        // 建立 class 的變數
        // let number = tb.getElementsByClassName('number')[0];
        // queryselector() 在文件匹配指定css選擇器
        let number = tb.querySelector('.number');
        
        // 建立 span 標籤
        let sp = document.createElement('span');

        // 在 number 建立 span
        number.appendChild(sp);

        sp.innerText ='1';
        /* ==============================================*/

        // 新增div class 名稱陣列
        let dclass = ['images','inamebox','brief'];

        for(let i =0;i<dclass.length; i++){
        // 新增div 的框架，宣告變數
        let div = document.createElement('div');

        // 在 commodity(宣告在 120行)
        co.appendChild(div);

        // 新增屬性
        div.setAttribute("class",dclass[i]);
        }

        // images 內新增資料
        let a = document.createElement('a');
        // 新增連結屬性
        a.setAttribute("href","javascript:;");
        // 宣告 指定 class 的變數
        let images = co.querySelector('.images');
        // 在images 內新增
        images.appendChild(a);

        // images > a內新增資料
        let img = document.createElement('img');
        // 屬性
        img.setAttribute("src","image/merchandise/001.jpg");
        // 在 a 內新增
        a.appendChild(img);

        // 在 lnamebox 新增資料 h3 li
        let h3 = document.createElement('h3');
        let li = document.createElement('li');
        // 屬性
        li.setAttribute("class","love");
        // 在 lnamebox 新增 ; co在commodity(宣告在120行)
        let lnamebox = co.querySelector('.lnamebox');
        lnamebox.appendChild(h3).innerText = "商品名稱";
        lnamebox.appendChild(li).innertext = "我的最愛";

        // 在 brief 內新增 html 資料 ; co在commodity(宣告在120行)
        let brief = co.querySelector('.brief');
        brief.innerHTML = "商品簡介，文字內容超過26個字數 (<mark>英文與阿拉伯數字為26個字數，中文為13個字數</mark>) ，會利用......設計";
         /* ==============================================*/
        // 價格
        // 新增標籤
        ul = document.createElement('ul');

        // 在commodity 內新增ul
        co = document.document.getElementById('commodity');
        ul.setAttribute("id", "pricebox");
        // 建立ul
        co.appendChild(ul);
        
        let pricebox = document.getElementById('pricebox');
        // 陣列 class
        let pbli = ['originalprice', 'bargainlprice', 'car'];
        // 內容
        let pblicon = ['原價<span><s>1000</s></span>元','特價<span>800</span>元','購物車'];

        forli(pbli, pricebox, pblicon);
        /* ==============================================*/
         // 建立 for (新增li)方法
        function forli(liclass, tb, licon) {
            // for 迴圈
            for(let i =0;i < liclass.length;i++) {
            // 建立li
            let li = document.createElement('li');
        
            // 在 框架 新增標籤li
            tb.appendChild(li);

            // 新增class屬性
            li.setAttribute("class", liclass[i]);

            // 置入內容
            li.innerHTML = licon[i];
            }


            // 終止方式 (函式) 執行
            return;
        }
    }