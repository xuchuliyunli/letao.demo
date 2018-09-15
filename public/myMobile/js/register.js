/**
 * Created by 徐楚 on 2018/9/15.
 */

/**
 * 注册
 * 1.给注册按钮添加点击事件
 * 2.获取到用户注册的信息
 *3.对用户输入的信息做验证
 * 4.调用注册接口实现注册功能
 * 5.给出提示 告诉用户是否成功
 * 6.立即跳转到登录页面
 */
$(function(){
    $("#register-btn").on("click",function(){

        var username = $("[name='username']").val().trim();
        var mobile = $("[name='mobile']").val().trim();
        var password = $("[name='password']").val().trim();
        var againPass = $("[name='againPass']").val().trim();
        var vCode = $("[name='vCode']").val().trim();

        if(!username){
            mui.toast("请输入用户名");
            return;
        }

        if(!password){
            mui.toast("请输入密码");
            return;
        }

        if(mobile.length !== 11){
            mui.toast("请输入合法手机号");
            return;
        }

        if(password !== againPass){
            mui.toast("请输入相同的密码");
            return;
        }
        if(!vCode || vCode.length !== 6){
            mui.toast("请输入合法的验证码 ");
            return;
        }
        $.ajax({
            url: "/user/register",
            type: "post",
            data: {
                username: username,
                password: password,
                mobile: mobile,
                vCode: vCode
            },
            success: function(res){
                mui.toast("注册成功");

                setTimeout(function(){
                    location.href = "login.html";
                },2000)
            }
        });

    });

    //获取验证码
    $("#getCode").on("click",function(){

        $.ajax({
            url:"/user/vCode",
            type:"get",
            success:function(res){
                console.log(res.vCode);
            }
        })
    });

});