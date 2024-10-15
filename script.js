document.addEventListener("DOMContentLoaded", function() {
    // .background-section に対して右クリックを無効にする
    document.querySelector('.background-section').addEventListener('contextmenu', function(e) {
        e.preventDefault();  // 右クリックメニューを無効化
    }, false);
});
