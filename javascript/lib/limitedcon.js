
// 新增 限量商品 的內容
function limitedcon(number) {
    let dclass = ['images','lnamebox','brief'];
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
        img.setAttribute("src","../../image/merchandise/001.jpg");
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
