
   CopyRightContent ();
   TimeYear();
   
    function TimeYear(){
    var year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
    };

    // 新增 html 的標籤與內容


    
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
    }