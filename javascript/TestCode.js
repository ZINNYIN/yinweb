// 瀏覽器的控制台，列印語法
/*雙引號(") 和單引號(')為字串 */

    // TestCode();
    // TimeYear();  CopyRightContent () 內呼叫

    function TimeYear(){
        // 日期函數 date  產生新的 date
    var year = new Date().getFullYear();
    /* var now = newdate();
    var year = now.detfullyear();*/

    // 年份變數
    // var year = "2022";
    // 由 html 顯示資料
    document.getElementById('year').textContent = year;
    }

    
    // 設計 方法 function name(參數或空白){程式}
     function TestCode () {

    // 變數 命名:英文開頭。英文與數字，底線，javascript的關鍵字不能設定，英文可設定大小寫混用
    // es5版本 var  es6版本 let(變數)  cont(常數)
    // 宣告變數  全域變數
        var one;
        var ONE;
        

        // 賦予  值
        one = 1;
        ONE = "01";

        console.log(one);
        console.log(ONE);
        console.log("02");


        // 條件判斷 if....else 單一條件
        var NumBer = 12;
        // 顯示條件成立 ，執行的資料
        if (NumBer < 5){
            console.log("數字小於5");
        }
        if (NumBer > 10) console.log("數字大於10");
        if(NumBer > 10) 
        console.log("數字為:"+ NumBer);

        // 顯示條件成立，執行的資料，或是不成立時，執行的資料
        var Num = 8;
        if (NumBer < Num)
        console.log("NumBer < Num");
        else
        console.log("NumBer < Num不成立");

        // 多條件判斷式 if (條件){程式} else if (條件二) (程式)else{程式}
        let Num_One = 2;
        let Num_Two = 1;
        // ==等於 (比較)
        if (Num_One==Num_Two) { 
            console.log("兩個變數相等")
        } else if (Num_One > Num_Two) {
            console.log(Num_Two + "大於" + Num_One)
        } else {
            console.log("不成立")
        };
    }

    // 全域變數
    var a = 1;
    let b = 2;

    // var 與let 的差別
    function Var_LetCode(){
        // 區域變數
        var a = 3;
        let b = 4;

        console.log(a + b);
    }

    // Var_LetCode();
    function Var_LetCode(){
        // var 與 let 的差別:暗藍色表示找不到變數， var的作用域會在 function 內才會區分「全域或區域」的差別; let的作用域包含了全部，例: function ,  {...} , if(){...}   等等
    // 全域變數
    var A = 4, C = 1;
    let X = 5, Y = 6;
    {
        var d = A + C
        let z = X + Y
    }
    console.log(d);
    // 呼叫不到 z
    console.log(z);

    function  Numcall() {
        var d = A + C
        let z = X + Y
    }
    }

    // 迴圈 for(宣告變數起始值; 條件 ; 執行後增加或減少的次數){程式}
    let i;
    for(i = 0; i <= 10; i = i+1){
        console.log(i);
    }
    
    // login();

    function login() {
        // 變數: 承接使用者輸入的資料
        // 帳號
        let user;
        // 密碼
        let number;

        // 可輸入訊息的對話視窗
        user = window.prompt('請輸入帳號');

        // 假設，網站有連結資料庫，帳號與密碼都由資料庫帶出
        let username = 'abc';
        let usernum = '12345';

        if(user == username ) {
            number = window.prompt('請輸入密碼');

            if (number == usernum ) {
                console.log("歡迎登入!");
            } else {
                console.log("帳號與密碼有誤!");
            }
        } else {
            console.log("帳號與密碼有誤!");
        }
    }
    
    // 迴圈 while(條件) {程式} 與 for 差別，在於無法指定執行圈數
    whilecode();
    function whilecode() {
        // 總數
        let number = 200;

        // 亂數(系統產生介於 0 ~ 1 之間)，將小數變為變數(數值要介於 0 ~ 含30，需乘以 31 )，設定為無條件捨去法
        let attack;
        let count = 1;
        
        while (number > 0) {
            console.log("第" + count + "次");
            count = count + 1;

            
            attack = Math.floor(Math.random() * 31);
            console.log("亂數為:" + attack);

            // 將計算過後的值，再指定給number
            number = number - attack;
            
            console.log("計算結果:" + number);
            
    }
        }
        arraycode();
    //陣列 array 基本會配合 迴圈for 處理
    function arraycode() {
        // 宣告陣列變數 給予值
        let Items = [101,'01','項目'];
        // 輸出資料 迴圈讀取 陣列 的索引碼，起始索引碼為0
        for(let i =0 ; i <=2 ; i++) {
            console.log(Items[i]);
        }
    }
          // 新增 html 的標籤與內容

          CopyRightContent ();
    function CopyRightContent () {
        // 宣告變數 在 html 內新增 div 標籤
        let div = document.createElement('div') ;

        // 宣告變數 在哪個 html 標籤之內新增 div
        let footer = document.getElementById('footer');

        // 在footer 內 ，新增div 子元素
        footer.appendChild(div);

        // 純文字
        // div.textContent = "六月初一有限公司版權宣告&copy; 2021"

        // html 語法
        div.innerHTML = '六月初一有限公司版權宣告&copy; 2021-<span id="year"></span>'
        TimeYear();


        // 調整  框架 位置
        // 1. 再被選取的元素開頭插入內容 prepend() 置入被選取元素之中
        // 呼叫要選取的標籤
        let address = document.getElementById('address') ;
        // address.prepend(div);

        // 2.再被選取的元素結尾插入內容 append() 置入被選取元素之中
        address.append(div);

        // 3.再被選取的元素之前插入內容 before() 置入被選取元素標籤之前
        // address.before(div);

        // 4.再被選取的元素之後插入內容 after() 置入被選取元素標籤之後
        // address.after(div);
    }
       /*========================================*/ 

    // 新增標籤section
    let sec = document.createElement('section');

    // 在grecon內新增section
    let se = document.getElementById('grecon');

    // 建立 section 框架
    se.appendChild(sec);

    // 給予class 和 id 名稱
    // sec.setAttribute("id","commodity");
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
    lnamebox.appendChild(li).innerText = "我的最愛";

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
   