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

var progress = document.querySelectorAll('.skills-progress > div');
var skillContainer = document.getElementById('skills');
window.addEventListener('scroll',checkScroll);
var animation = false;

function initialiseBars() {
        for(let bar of progress){
            bar.style.width = 0 + "%";
        }
    }

initialiseBars();

function fillBars(bar){
        for(let bar of progress){
            let targetWidth = bar.getAttribute('data-value');
            let currentWidth = 0;
            let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + "%";
        },10);
        }
    }

function checkScroll(){
   
   let coordinates = skillContainer.getBoundingClientRect();
   if(!animation && coordinates.top < window.innerHeight){
       animation = true;
       console.log('visible')
       fillBars();
   }
   else if(coordinates.top > window.innerHeight){
       animation = false;
       initialiseBars();
   }
}
