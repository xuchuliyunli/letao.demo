/**
 * Created by 徐楚 on 2018/9/20.
 */
$(function(){
    /**
     *修改密码
     * 1.获取修改密码按钮 并添加点击事件
     * 2.获取用户输入的信息
     * 3.对用户输入的信息就行校验
     * 4.调用修改密码接口 实现修改密码功能
     * 5.跳转到登录页面 重新登录
     */
   $('#modify-btn').on('tap',function(){
       var originPass = $("[name='originPass']").val().trim();
       var newPass = $("[name='newPass']").val().trim();
       var confirmNewPass = $("[name='confirmNewPass']").val().trim();
       var vCode = $("[name='vCode']").val().trim();

       if(!originPass){
           mui.toast('原密码不能为空');
           return;
       }
       if(!newPass){
           mui.toast('新密码不能为空');
           return;
       }
       if(newPass!=confirmNewPass){
           mui.toast('密码不一致');
           return;
       }
       if(!vCode || vCode.length != 6){
           mui.toast('认证码不符');
           return;
       }

       //发送修改密码的请求
       $.ajax({
           url: '/user/updatePassword',
           type: 'post',
           data: {
               oldPassword: originPass,
               newPassword: newPass,
               vCode: vCode
           },
           beforeSend: function(){
               $("#modify-btn").html("正在修改密码...");
           },
           success: function(res){
               if(res.success){
                   mui.toast('修改成功');
                   setTimeout(function(){
                       location.href = "login.html";
                   },2000)
               }
           }
       })
   });
    //获取认证码
    $('.getCode').on('tap',function(){
        $.ajax({
            url: '/user/vCodeForUpdatePassword',
            type: 'get',
            success:function(res){
                console.log(res.vCode);
            }
        })
    });
});