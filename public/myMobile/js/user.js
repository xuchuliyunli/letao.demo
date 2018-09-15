/**
 * Created by 徐楚 on 2018/9/15.
 */

/**
 * 获取用户信息 并且要处理用户未登录问题
 */

//保存用户信息
var userInfo = null;

$.ajax({
    url: "/user/queryUserMessage",
    type: "get",
    //将异步请求改为同步
    async:false,
    success: function(res){
        console.log(res);

        //用户未登录
        if(res.error && res.error==400){
            location.href = "login.html";
        }
        userInfo = res;
    }
});


$(function(){

    /**
     * 退出登录
     * 1.获取到退出登录按钮并添加点击事件
     * 2.调用退出登录接口实现 退出登录
     * 3.如果退出成功 跳转到首页
     */
    $("#logout").on("tap",function(){
        $.ajax({
            url: "/user/logout",
            type: "get",
            success: function(res){
                if(res.success){
                    mui.toast('退出登陆成功');
                    setTimeout(function(){
                        location.href = "index.html";
                    },2000)
                }
            }
        });
    });

    var html =  template("userTpl",userInfo);
    console.log(html);
    $("#userInfoBox").html(html);
});