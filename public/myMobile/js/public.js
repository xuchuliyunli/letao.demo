/**
 * Created by ��� on 2018/9/15.
 */
$(function(){
   //�ָ�aԪ�ص���ת
    $("body").on("tap","a",function(){
       mui.openWindow({
           url: $(this).attr("href")
       });
    });
});
