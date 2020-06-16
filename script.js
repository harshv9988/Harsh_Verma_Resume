var list_of_bars = document.querySelectorAll('.skills-progress > div');
function set_width_to_zero()
{
    for (let bar of list_of_bars) {
        bar.style.width = "0";
    }
}
function in_view(bar)
{
    let element_distance = bar.getBoundingClientRect().top;
    if (element_distance < window.innerHeight) {
        return true;
    }
    return false;
}
function fill_bar(bar, percentage)
{
    let count = 0;
    let id = setInterval(function ()
    {
        bar.style.width = count + "%";
        if (count++ == percentage) {
            clearInterval(id);
        }
    }, 10)
}
function is_filled(bar)
{
    if (parseInt(bar.style.width) != 0) {
        return true;
    }
    return false;
}
function checker_in_view()
{
    for (let bar of list_of_bars) {
        if (in_view(bar) && !is_filled(bar)) {
            fill_bar(bar, bar.getAttribute("data-value"));
        }
    }
}
function again_on_top()
{
    let skills = document.getElementById("skills")
    let skills_distance = skills.getBoundingClientRect().top;
    if (skills_distance > window.innerHeight) {
        set_width_to_zero();
    }
}
function listener()
{
    checker_in_view();
    again_on_top()
}

set_width_to_zero();
window.addEventListener('scroll', listener);


// var navMenu = document.querySelectorAll('.nav a');

// for(var i=0; i<navMenu.length;i++)
// {
//     navMenu[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var sectionID = this.textContent.trim().toLowerCase();
//         console.log(sectionID);
//         var section = document.getElementById(sectionID);
//         console.log(section);
//         var interval = setInterval(function(){
//             var targetCoordinates = section.getBoundingClientRect();
//             if(targetCoordinates.top<=10)
//             {
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,50);
//         },20);
//     });
// }

// var progress = document.querySelectorAll('.skills-progress > div');
// window.addEventListener('scroll',checkScroll);
// var animation = [false,false,false,false,false,false,false];

// function initialiseBars(bar) {
//     "use strict";
//         progress[bar].style.width = 0 + "%";
//     }


// function fillBars(bar){
//     "use strict";
//         let targetWidth = progress[bar].getAttribute('data-value');
//         let currentWidth = 0;
//         let interval = setInterval(function(){
//             if(currentWidth > targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             progress[bar].style.width = currentWidth + "%";
//         },10);
//     }

// function checkScroll(){
//     "use strict";
//    for(let bar in progress){
//         let coordinates = progress[bar].getBoundingClientRect();
//         if(!animation[bar] && coordinates.top < window.innerHeight){
//             animation[bar] = true;
//             console.log('visible')
//             fillBars(bar);
//         }
//         else if(coordinates.top > window.innerHeight){
//             animation[bar] = false;
//             initialiseBars(bar);
//         }
//    }
// }


