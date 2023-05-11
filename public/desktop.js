
$(document).ready(function(){
    $(".service-menu-list a").click(function(){
      $(this).tab('show');
    });
    $(".product-menu-list a").click(function(){
        $(this).tab('show');
      });
  });

var nav_responsive = document.querySelector('.nav-responsive')
        var content_nav = document.querySelector('.content-nav')
        var menuChildProductBtn = document.querySelector('.menuChildProductBtn')
        var menuChildProduct = document.querySelector('.menuChildProduct')
        var categoryBtn = document.querySelector('.categoryBtn')
        var categoryList = document.querySelector('.categoryList')


        document.querySelector('.headBtnResponsive').onclick = function () {
            nav_responsive.classList.toggle('showNav')
            content_nav.classList.toggle('showNav')
        }


        nav_responsive.onclick = () => {
            nav_responsive.classList.toggle('showNav')
            content_nav.classList.toggle('showNav')
        }

        menuChildProductBtn.onclick = () => {
            menuChildProduct.classList.toggle('showCategory')
        }

        content_nav.onclick = (event) => {
            event.stopPropagation()
        }

        $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });

        categoryBtn.onclick = () => {
            categoryList.classList.toggle('hideCategory')
        }

        document.querySelector('.categoryBtn2').onclick = () => {
            categoryList.classList.toggle('hideCategory')
        }

        if (document.body.offsetWidth < 1260) {
            categoryList.classList.add('hideCategory')
        }
        window.onresize = () => {
            if (document.body.offsetWidth < 1260) {
                categoryList.classList.add('hideCategory')
            }
        }


// animation

// var productCard = document.querySelectorAll('.product-card')
// var serviceCard = document.querySelectorAll('.service-card')
var feedbackList = document.querySelector('.feedback-list')



var circle = document.querySelector('.circle-up');


window.onscroll = function (){
//     // tùy tnhf duyệt mà sài body hay element
//     console.log( document.documentElement.scrollWidth,);

    if(document.body.scrollTop > 621 || document.documentElement.scrollTop > 621){
        circle.style.opacity = "0.3";
        circle.style.display =  "block";
    }else {
        circle.style.opacity = "0";
        circle.style.display =  "none";
    }

    if(document.documentElement.scrollTop > 680 && document.documentElement.scrollTop < 1450 ){
        $('.product-card').removeClass('magictime swap')
        $('.service-card').removeClass('magictime twisterInDown')
       
        feedbackList.classList.remove('transformLRFull')
    }

    if(document.body.scrollTop > 1450 || document.documentElement.scrollTop > 1450 && document.documentElement.scrollTop < 2600){
        $('.product-card').addClass('magictime swap')
    }
    
    if(document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600 && document.documentElement.scrollTop < 3500){
        $('.service-card').addClass('magictime twisterInDown')
    }

//     if(document.body.scrollTop > 2600 || document.documentElement.scrollTop > 3700){
//             feedbackList.classList.add('transformLRFull')
//     }
}

    if(circle){
        circle.onclick= function topFunction () {
            document.body.scrollTop =0;
            document.documentElement.scrollTop =0;
        }
    }


// animate text
var options = {
    duration: 3000,
    iterations: Infinity,
    id: 'myAnimation'
  };

window.animatelo.rubberBand('.rubberBand',options);

// ANIMATE VIP

setInterval(()=>{
    $('.criteria__circle').addClass('vanishIn magictime');
},4000)

setInterval(()=>{
    $('.criteria__circle').removeClass('vanishIn magictime');
},6000)


