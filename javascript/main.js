   
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

    // 主頁商品 共用變數區
    // 設定div class 名稱陣列
    let dclass = ['images','lnamebox','brief'];


    // 新增熱銷商品 的內容
    greatcon(8);
    function greatcon(number){
        for(let i = 0; i < number; i++) {
            // 新增標籤section
            let sec = document.createElement('section');

            // 在grecon內新增section
            let se = document.getElementById('grecon');

            // 建立 section 框架
            se.appendChild(sec);

            // 給予class 
            sec.setAttribute("class","commodity");

            /*=============第一層 ul id=titlebox ; class=titlebox ==========*/

            // 新增標籤ul
            let ul = document.createElement('ul');

            // 在commodity內新增ul
            let co = document.getElementsByClassName('commodity')[i];
             // 建立ul框架
            co.appendChild(ul);

            // 給予id名稱 ,class名稱
            ul.setAttribute("id","titlebox");
            ul.setAttribute("class","titlebox");

                /*========== titlebox 內資料 ==========*/
                // 設計迴圈
                // li在titlebox 框架內產生，宣告 titlebox 的變數
                let tb = document.getElementsByClassName('titlebox')[i];

                // 宣告 li 的class 名稱 array (陣列)
                let liclass = ['title','number','text'];

                // 宣告 li 內容
                let licon =['熱銷商品','庫存','數量有限，售完為止'];
                 // for 迴圈 增加 liclass 與 licon 的資料
                for(let i =0; i<liclass.length; i++){
                    // 建立li
                    let li = document.createElement('li');
                
                    // 在 titlebox(宣告在 138行)
                    tb.appendChild(li);

                    // 新增class屬性
                    li.setAttribute("class",liclass[i]);

                    // 置入內容
                    li.innerText = licon[i];
                }

                // 建立 class 的變數
                // let number = tb.getElementsByClassName('number')[0];
                // queryselector() 在文件匹配指定css選擇器
                let number = tb.querySelector('.number');
                
                // 建立 span 標籤
                let sp = document.createElement('span');

                // 在 number 建立 span
                number.appendChild(sp);

                sp.innerText ='1';

                /*========== ul id=titlebox 同一層  
                div class=images  div class=lname    div class=brief  建立三層 div框架
                 =============*/
                 

                for(let i =0; i < dclass.length; i++){
                    // 新增div 的框架，宣告變數
                    let div = document.createElement('div');
                
                    // 在 commodity(宣告在 127行)
                    co.appendChild(div);
                
                    // 新增屬性
                    div.setAttribute("class",dclass[i]);
                    }

// ========================================================================
                   
                    // images 內新增資料
                    let a = document.createElement('a');
                    // 新增連結屬性
                    a.setAttribute("href","javascript:;");
                    // 宣告 指定 class 的變數
                    let images = co.querySelector('.images');
                    // let images = co.getElementsByClassName('images')[i];
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
                    // 在 lnamebox 新增 ; co在commodity(宣告在130行)
                    let lnamebox = co.querySelector('.lnamebox');
                    lnamebox.appendChild(h3).innerText = "商品名稱";
                    lnamebox.appendChild(li).innerText = "我的最愛";

                    // 在 brief 內新增 html 資料 ; co在commodity(宣告在130行)
                    let brief = co.querySelector('.brief');
                    brief.innerHTML = "商品簡介，文字內容超過26個字數 (<mark>英文與阿拉伯數字為26個字數，中文為13個字數</mark>) ，會利用......設計";


            /* ==================價格============================*/
                   
            // 新增標籤ul ; co 在 commodity(宣告在130行)
            ul = document.createElement('ul');
            ul.setAttribute("id", "pricebox");
            ul.setAttribute("class", "pricebox");
            // 建立ul
            co.appendChild(ul);
            let pricebox = document.getElementsByClassName('pricebox')[i];
            // 陣列 class
            let pbli = ['originalprice', 'bargainlprice', 'car'];
            // 內容
            let pblicon = ['原價<span><s>1000</s></span>元','特價<span>800</span>元','購物車'];

            forli(pbli, pricebox, pblicon);
        }
        
        // 方法
        function forli(Class, Name, con) {
            for(let i = 0; i<Class.length; i++){
            // 建立li
            let li = document.createElement('li');

            // 在 Name(自訂名稱) 框架之內建立
            Name.appendChild(li);

            // 新增class屬性
            li.setAttribute("class", Class[i]);

            // 置入內容
            li.innerHTML = con[i];
            }
            // 終止方式 (函式) 執行
            return;
        }
    }

    limitedcon(8);
    // 新增 限量商品 的內容
    function limitedcon(number) {
        let i = number;
        let a = i+number;
        // 在同一頁面中，會將相同名稱的 class 累加編號
        for( i; i < a; i++) {
            new_id_tag('limitedcon',  'section', 'class', 'commodity');
            new_class_tag('commodity',  'p', 'class', 'null', i);

            for(let b = 0; b < dclass.length; b++ ){
                new_class_tag('commodity',  'div', 'class', dclass[b], i);
            }

            let co = document.getElementsByClassName('commodity')[i];
            // images 內新增資料
            let a = document.createElement('a');
            // 新增連結屬性
            a.setAttribute("href","javascript:;");
            let images = co.querySelector('.images');
            // 在images 內新增
            images.appendChild(a);

            // images > a內新增資料
            let img = document.createElement('img');
            // 屬性
            img.setAttribute("src","image/merchandise/001.jpg");
            // 在 a 內新增
            a.appendChild(img);


            let h3name = ['商品名稱1', '商品名稱2', '商品名稱3', '商品名稱4', '商品名稱5', 
            '商品名稱6', '商品名稱7', '商品名稱8']

            new_classtagcontent('lnamebox','h3', i, h3name);
            new_class_tagcontent('lnamebox','li','class','love',i,'我的最愛');

            document.getElementsByClassName('brief')[i].innerHTML = "商品簡介，文字內容超過26個字數 (<mark>英文與阿拉伯數字為26個字數，中文為13個字數</mark>) ，會利用......設計";

            
        }
        return;
    }

    // 指渲染框架 
    function new_idtag(idname,newtagname){
        // 指定在框架(自訂) 內新增標籤，宣告變數
        let boxtag = document.getElementById(idname);

        // 新增標籤 宣告變數
        let tagname = document.createElement(newtagname);

       //  在框架內建立標籤
       boxtag.appendChild(tagname);
    }
    
     // 指渲染框架
     function new_classtag(classname,newtagname,i){
        // 指定在框架(自訂) 內新增標籤，宣告變數
        let boxtag = document.getElementsByClassName(classname)[i];

        // 新增標籤 宣告變數
        let tagname = document.createElement(newtagname);

       //  在框架內建立標籤
       boxtag.appendChild(tagname);
    }

    // 渲染框架 給予資料內容
    function new_classtagcontent(classname,newtagname,i,content){
        // 指定在框架(自訂) 內新增標籤，宣告變數
        let boxtag = document.getElementsByClassName(classname)[i];

        // 新增標籤 宣告變數
        let tagname = document.createElement(newtagname);

       //  在框架內建立標籤
        // boxtag.appendChild(tagname).innerHTML = content;

        // i=8,b=0   8-8=0 ; i(8) - 8 =0  ,i(9) - 8 = 1
        boxtag.appendChild(tagname).innerHTML = content[ i - 8 ];
    }

    // 給予 渲染框架 一個 id 屬性
    function new_id_tag(idname, newtagname, idclass, idclassname){
         // 指定在框架(自訂) 內新增標籤，宣告變數
         let boxtag = document.getElementById(idname);

         // 新增標籤 宣告變數
         let tagname = document.createElement(newtagname);

        //  在框架內建立標籤
        boxtag.appendChild(tagname);

        // 給予屬性
        tagname.setAttribute(idclass, idclassname);
    }

     // 給予 渲染框架 一個 class 屬性
     function new_class_tag(classname, newtagname, idclass, idclassname, i){
        // 指定在框架(自訂) 內新增標籤，宣告變數
        let boxtag = document.getElementsByClassName(classname)[i];

        // 新增標籤 宣告變數
        let tagname = document.createElement(newtagname);

       //  在框架內建立標籤
       boxtag.appendChild(tagname);

       // 給予屬性
       tagname.setAttribute(idclass, idclassname);
   }

    // 給予 渲染框架 一個 class 屬性 給予內容
    function new_class_tagcontent(classname, newtagname, idclass, idclassname, i,content){
        // 指定在框架(自訂) 內新增標籤，宣告變數
        let boxtag = document.getElementsByClassName(classname)[i];

        // 新增標籤 宣告變數
        let tagname = document.createElement(newtagname);

       //  在框架內建立標籤
       boxtag.appendChild(tagname).innerHTML = content;

       // 給予屬性
       tagname.setAttribute(idclass, idclassname);
   }    

  
   
   