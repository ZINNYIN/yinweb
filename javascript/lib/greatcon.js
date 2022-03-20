 // 新增熱銷商品 的內容

 function greatcon(number){
     for(let i = 0; i < number; i++) {
        let dclass = ['images','lnamebox','brief'];
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