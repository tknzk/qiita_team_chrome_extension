var now = new Date();
var article_date = Date.parse($(".teamArticle_header_date").html());
var diff = now - article_date;
var diff_day = diff / 86400000;
if (diff_day > 365) {
  var div = $(".teamArticle_header_titleContainer");
  var message = '<div class="box oldest_article">この記事は更新から1年以上経過しています</div>'
  div.after(message)
}
