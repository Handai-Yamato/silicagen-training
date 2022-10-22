/*--------------------------------
    ボタン表示・非表示
--------------------------------*/
$(function () {
  const pageTop = $(".js-scroll-top");
  pageTop.hide(); // 最初はボタンを非表示にする
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      // 200pxスクロールしたら発火
      pageTop.fadeIn(); // 200px以上スクロールしたらボタンをフェードイン
    } else {
      pageTop.fadeOut(); // 200px以下になったらボタンをフェードアウト
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, // 上から0pxの位置に戻る
      },
      500 // 500ミリ秒かけて戻る
    );
    return false;
  });
});

/*--------------------------------
    footer手前で止める
--------------------------------*/
$(document).ready(function () {
  $(".js-scroll-top").hide();
  $(window).on("scroll", function () {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $(".l-footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $(".js-scroll-top").css({ position: "absolute", bottom: footHeight + 0 }); //フッターの手前何pxで止めるか
    } else {
      $(".js-scroll-top").css({ position: "fixed", bottom: "20px" }); //表示された時の位置
    }
  });
});
