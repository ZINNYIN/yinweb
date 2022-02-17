   
    // 行動裝置 選單
    // menunav();
    function menunav() {
        let  menunav = document.getElementById('menunav');
        // 隱藏 手機版選單
        menunav.style.display = "none";
    }

    pageload();
    function pageload() {
        $('header').load("web/header.html");
        $('footer').load("web/footer.html");
    }