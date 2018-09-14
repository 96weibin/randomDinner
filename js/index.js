
let arr = ['牛一家','淮南牛肉汤','山老顺','酸辣粉','烤串'];
let randomArr = [];
localStorage.arr = arr;

for(var i = 0; i < 20; i++) {
    for(var j = 0; j < arr.length; j++)
        if(Math.random() > 0.5) {
            randomArr.push(arr[j]);
        } else {
            randomArr.unshift(arr[j]);
        }
}
for(var k = 0; k < randomArr.length; k++) {
    $('.swiper-wrapper').append(`<div class="swiper-slide">${randomArr[k]}</div>`)
}
var newSwiper = new Swiper('.swiper-container',{
    autoplay : 500,
    direction : 'vertical',
    loop:true,
    freeMode:true,
    slidesPerView: 'auto',
})

$('.add').click(function(){
    if($(this).siblings().val() == '') {
        alert('请输入要添加的')
    } else {
        $('.swiper-wrapper').html('');
        newSwiper = null
        arr.push($(this).siblings().val())
        localStorage.arr = arr;
        for(var i = 0; i < 20; i++) {
            for(var j = 0; j < arr.length; j++)
                if(Math.random() > 0.5) {
                    randomArr.push(arr[j]);
                } else {
                    randomArr.unshift(arr[j]);
                }
        }
        for(var k = 0; k < randomArr.length; k++) {
            $('.swiper-wrapper').append(`<div class="swiper-slide">${randomArr[k]}</div>`)
        }
        var newSwiper = new Swiper('.swiper-container',{
            autoplay : 500,
            direction : 'vertical',
            loop:true,
            freeMode:true,
            slidesPerView: 'auto',
        })
    }
})

