/*********************************
	ハンバーガーメニューの設定
*********************************/

/*------ アイコンとメニューの設定 -------*/
$(".js-hamburger").click(function () {
  //アイコンがクリックされたら
  $(this).toggleClass("is-show-done"); //アイコン自身にis-show-doneクラスを付与し
  $(".js-gnav-sp").toggleClass("is-show-done"); //ナビゲーションにis-show-doneクラスを付与
});

/*------ 画面外をクリックしたときの処理 -------*/
jQuery(document).ready(function ($) {
  var nav = $(".js-gnav-sp");
  $(".l-main").click(function () {
    //画面外がクリックされたら
    if (nav.hasClass("is-show-done")) {
      //メニューにis-show-doneがあるか判別し
      $(".js-gnav-sp").removeClass("is-show-done"); //メニューのis-show-doneを削除
      $(".js-hamburger").removeClass("is-show-done"); //アイコンのis-show-doneを削除
    }
  });
});

/*------ リサイズしたときの処理 -------*/
$(window).on("resize", function () {
  if (window.matchMedia("(min-width:801px)").matches) {
    $(".js-gnav-list").hide(); //表示されているトグルメニューを非表示
  } else {
    $(".js-gnav-list").show(); //再度、sp幅にリサイズされたらトグルメニューを表示
  }
});
