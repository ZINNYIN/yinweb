// 瀏覽器的控制台，列印語法
/*雙引號(") 和單引號(')為字串 */

    // TestCode();
    TimeYear();

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
        
        
   