/**
 * Created by 徐楚 on 2018/9/13.
 */
//轮播图实现自动轮播
$(function(){
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval:1500//自动轮播周期，若为0则不自动播放，默认为0；
    });
});