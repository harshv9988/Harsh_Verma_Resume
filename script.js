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