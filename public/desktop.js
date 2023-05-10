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

var productCard = document.querySelectorAll('.product-card')
var serviceCard = document.querySelectorAll('.service-card')
var feedbackList = document.querySelector('.feedback-list')


window.onscroll = function (){
    // tùy tnhf duyệt mà sài body hay element
    console.log( document.documentElement.scrollWidth,);
    if(document.documentElement.scrollTop > 680 && document.documentElement.scrollTop < 1450 ){
        productCard.forEach((item)=>{
            item.classList.remove('transformLR')
        })
        serviceCard.forEach((item)=>{
            item.classList.remove('transformRL')
        })
        feedbackList.classList.remove('transformLRFull')
    }

    if(document.body.scrollTop > 1450 || document.documentElement.scrollTop > 1450 && document.documentElement.scrollTop < 2600){
       
        productCard.forEach((item)=>{
            item.classList.add('transformLR')
        })

    }
    
    if(document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600 && document.documentElement.scrollTop < 3500){
        serviceCard.forEach((item)=>{
            item.classList.add('transformRL')
        })
   
    }

    if(document.body.scrollTop > 2600 || document.documentElement.scrollTop > 3700){
            feedbackList.classList.add('transformLRFull')
    }
}


