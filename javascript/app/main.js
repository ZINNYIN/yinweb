// 只要將檔名寫入陣列中(不用給副檔名) ，即可直接讀取檔案內容
let indexcon = ["jquery", "jquery.menunav","copyright", "phonenav", "greatcon", "limitedcon"];

define(indexcon, function($) {
    // 讀取 檔案內的 函式名稱
    $(function() {
        phonemenushow2();
        CopyRightContent ();
        greatcon(8);
        limitedcon(8);
    });
});