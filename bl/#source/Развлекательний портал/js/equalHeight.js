$(document).ready(function() {
 function setEqualHeight(columns)
 {
 var tallestcolumn = 0;
 columns.each(
 function()
 {
 currentHeight = $(this).height();
 if(currentHeight > tallestcolumn)
 {
 tallestcolumn  = currentHeight;
 }
 }
 );
 columns.height(tallestcolumn);
 }
 setEqualHeight($(".we_in_social_set ul, .news_portal ul"));
 setEqualHeight($(".sidebar_224px, .content_768px"));
 setEqualHeight($(".my_announcement_content, .right_block_330px"));
 setEqualHeight($(".sidebar_284px, .content_700px"));
 setEqualHeight($(".questions_from_users ul li p"));
});