function TimeYear(){
    var year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
    }; 
   
//    利用 javascript  渲染框架及內容
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