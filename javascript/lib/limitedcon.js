
 // 主頁商品 共用變數區
// 設定div class 名稱陣列
    let dclass = ['images','lnamebox','brief'];

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
