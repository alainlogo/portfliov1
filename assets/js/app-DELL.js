jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5
});

// LA NAV
var toggleBtn = document.querySelector('.toggleBtn');
        var menu = document.querySelector('.menu');
        
        var tl = new TimelineMax({paused: true});
        
        tl.to('.menu-icon', 0.5, {
            opacity:0,
            rotation: 180
        })
        tl.to('.close-icon', 0.5, {
            opacity:1,
            rotation: 180
        }, '-=0.5')
        tl.to('.menu', 0.5, {
            scale:1
        }, '-=0.3')
        tl.from('.menu li', 0.3, {
            opacity:0,
            // x:100,
            // stagger: 0.1
            delay: 0.3,
            ease: 'power4.out',
            x: 250,
            skewY: 35,
            stagger:{
                amount: .3
            }
        })



        tl.reverse();
        
        toggleBtn.onclick = function(){
            tl.reversed(!tl.reversed());
        }

// LA SOURIS

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    
     innerCursor.style.left = `${x}px`;
     innerCursor.style.top = `${y}px`;
     outerCursor.style.left = `${x}px`;
     outerCursor.style.top = `${y}px`;
}

// LE ZOOME DU CERCLE
let texts = Array.from(document.querySelectorAll("p, .bloc"));

console.log(texts);

texts.forEach((text) =>{
    text.addEventListener('mouseover', () =>{
        innerCursor.classList.add("grow");
    });
    text.addEventListener('mouseleave', () =>{
        innerCursor.classList.remove("grow");
    });
});

// INCINATION CARD

const content = document.querySelector(".plus");
let currentPos = window.pageYOffset;

const callDistort = function(){
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.15;

    content.style.transform = "skewY(" + speed + "deg)";
    currentPos = newPos;
    requestAnimationFrame(callDistort);
};

callDistort();
