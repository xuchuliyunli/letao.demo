/**
 * Created by ��� on 2018/9/15.
 */
$(function(){

    // �ָ�AԪ�ص���ת
    $('body').on('tap', 'a', function(){

        mui.openWindow({
            url: $(this).attr('href')
        });

    });

});

/**
 * ��ȡ��ַ���еĲ���
 * @param  {string} url ��ַ�ַ���
 * @param  {string} name Ҫ��ȡ�Ĳ�������
 * @return {string}     �������ƶ�Ӧ�Ĳ���ֵ
 */
function getParamsByUrl(url, name) {

    var params = url.substr(url.indexOf('?')+1);

    var param = params.split('&');

    for(var i=0;i<param.length;i++){

        var current = param[i].split('=');

        if(current[0] == name){

            return current[1]

        }

    }

    return null;

}
