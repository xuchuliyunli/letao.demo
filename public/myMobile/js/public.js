/**
 * Created by Ğì³ş on 2018/9/15.
 */
$(function(){
   //»Ö¸´aÔªËØµÄÌø×ª
    $("body").on("tap","a",function(){
       mui.openWindow({
           url: $(this).attr("href")
       });
    });
});
