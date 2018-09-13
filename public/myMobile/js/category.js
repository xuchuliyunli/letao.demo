/**
 * Created by ��� on 2018/9/13.
 */

$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
    });

    //��ȡ��������ĵ��ú���
    function getSecondCategory(id){
        $.ajax({
            url: "/category/querySecondCategory",
            type: "get",
            data: {
                "id": id
            },
            success: function(response){
                console.log(response);
                var html =template("category-second",{result:response.rows});
                $('.brand-list').html(html);
            }
        })
    }

    //��ȡһ����������
    $.ajax({
        type:"GET",
        url: "/category/queryTopCategory",
        success: function(response){
            console.log(response);
            var html = template("category-first",{result:response.rows});
            $("#links").html(html);

            //���һ�������������з���Ļ�
            if(response.rows.length){

                $("#links").find('a').eq(0).addClass('active');
                //��ȡ��һ��һ�������id
                var id = response.rows[0].id
                getSecondCategory(id);
            }
        }
    });

    //���һ�������ȡ�������������
        //1.һ��������ӵ���¼�
        //2.���¼��������л�ȡ��һ������id
        //3.���ö�������Ľӿڻ�ȡ��Ӧ������
        //4.������չʾ����Ӧ��λ����
        //5.����ӿ���û������ Ҫ��ҳ������ʾ��ʱ������

    $("#links").on('click', 'a', function(){
        //��ȡ��ǰ�����һ�������id
        var id = $(this).attr("data-id");
        $(this).addClass("active").siblings().removeClass("active");
        getSecondCategory(id);
    });

});
