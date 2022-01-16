
    function TimeYear(){
    var year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
    };

    // 新增 html 的標籤與內容

    CopyRightContent ();

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
        let li = document.createElement('li');

        // 在 menunav 內新增，宣告變數
        let SN = document.getElementById('phonenav');

        // 建立ul 框架 ，給予id 名稱
        SN.appendChild(ul);
        // 賦予屬性 id or  class
        ul.setAttribute("id" , "phonenav");
        let Items =['品牌故事','購物說明','客服留言','門市資訊'];
        

    }