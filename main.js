// Navbar

var nav = document.querySelector('nav');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 200) {
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
})

// Toggle

var tog1 = document.getElementById('tog1');
var tog2 = document.getElementById('tog2');
var tog3 = document.getElementById('tog3');
var ov1 = document.getElementById('ov1');
var ov2 = document.getElementById('ov2');
var sidebar = document.getElementById('sidebar');
var dark = document.getElementById('dark');

function openSide() {
    tog1.style.transform = 'translateY(8px) rotate(45deg)';
    tog2.style.transform = 'translateX(30px)';
    tog2.style.opacity = 0;
    tog2.style.pointerEvents = 'none';
    tog3.style.transform = 'translateY(-10px) rotate(-45deg)';
    ov1.style.zIndex = -1;
    ov2.style.zIndex = 1;
    sidebar.style.top = "0px";
    sidebar.style.opacity = "1";
}
function closeSide() {
    tog1.style.transform = 'translateY(0px) rotate(0deg)';
    tog2.style.transform = 'translateX(0px)';
    tog2.style.opacity = 1;
    tog2.style.pointerEvents = 'auto';
    tog3.style.transform = 'translateY(0px) rotate(0deg)';
    ov1.style.zIndex = 1;
    ov2.style.zIndex = -1;
    sidebar.style.top = '-1000px';
    sidebar.style.opacity = "0";
}

// Dropbdown menu
var faq = document.querySelector('.sub-class-mobile-1');

function showBarA() {
    faq.classList.toggle('active');
}




// fixed social icon

var one= document.getElementById('one');
var two= document.getElementById('two');
var trans= document.getElementById('trans');
var trans1= document.getElementById('trans1');
var trans2= document.getElementById('trans2');

function openIcons() {
    trans.style.opacity = '1';
    trans.style.transform= 'translateY(0)';
    trans.style.pointerEvents = 'auto';
    trans1.style.opacity = '1';
    trans1.style.pointerEvents = 'auto';
    trans1.style.transform= 'translateY(0)';
    trans2.style.opacity = '1';
    trans2.style.pointerEvents = 'auto';
    trans2.style.transform= 'translateY(0)';
    one.style.opacity = '0';
    one.style.zIndex = '-1';
    two.style.opacity = '1';
    two.style.zIndex = '1';

}

function closeIcons() {
    trans.style.opacity = '0';
    trans.style.transform= 'translateY(60px)';
    trans.style.pointerEvents = 'none';
    trans1.style.opacity = '0';
    trans1.style.pointerEvents = 'none';
    trans1.style.transform= 'translateY(40px)';
    trans2.style.opacity = '0';
    trans2.style.pointerEvents = 'none';
    trans2.style.transform= 'translateY(20px)';
    one.style.opacity = '1';
    one.style.zIndex = '1';
    two.style.opacity = '1';
    two.style.zIndex = '-1';

}



// Containers on reveal
window.addEventListener('scroll', reveal);
	
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i= 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 180;


        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        
        
        else {
            reveals[i].classList.remove('active');
        }
    }
}
