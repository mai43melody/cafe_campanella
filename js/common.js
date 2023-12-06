// ローディングアニメーション
// サイトのデータが全て読み込まれた時の処理。
// クラスloading_bgがついている要素にクラスactiveを付与。
window.addEventListener('load', function () {
    let loadingBg = document.querySelector('.loading_bg');
    loadingBg.classList.add('active');

    // 5秒後に確認する処理。5秒経っても読み込みが終わっていなかった場合もクラスactiveを付与して画面を表示させる。
    // 低速回線・エラー対策。
    setTimeout(function () {
        if (!loadingBg.classList.contains('active')) {
            loadingBg.classList.add('active');
        }
    }, 5000);
});


// スクロールフェードイン
const Target = document.querySelectorAll('.fadeIn');
function observation() {

    Target.forEach(function (fade) {

        const targetRect = fade.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            fade.classList.add('fadeIn');
        } else {
            fade.classList.remove('fadeIn');
        }
    })
};

window.addEventListener('scroll', observation);