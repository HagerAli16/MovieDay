
var swiper = new Swiper(".popular-content", {
   slidesPerView:4,
    spaceBetween:20,
     autoplay: {
        delay:5000,
        disableOnInteraction:false,
     },
     navigation:{ 
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
     },
     breakpoints:{
      280 :{
         slidesPerView:1,
          spaceBetween:10,
      },
      320 :{
         slidesPerView:2,
          spaceBetween:10,
      },
      510 :{
         slidesPerView:2,
          spaceBetween:10,
      },
      758 :{
         slidesPerView:3,
          spaceBetween:15,
      },
      900 :{
         slidesPerView:4,
          spaceBetween:20,
      },
      

     },
});


var imageUrls = [
   "image/Tiger 3.jpg",
  
  
   "image/Little Bone Lodge2.jpg",
   "image/Brave Citizen.png",
   
   //Add more image URLs as needed
  ];
  
  var titles = [
   "Tiger 3",
   "Little Bone Lodge",
   "Brave Citizen",
   //Add more titles as needed
  ];
  
  var descriptions = [
   "Tiger and Zoya are back - <br>to save the country and their family. <br>This time it's personal.",
   "Set during a vicious storm<br>two criminal brothers on the run seek refuge in a desolate farmhouse. <br>Taking the resident family captive, <br>they find the house holds dark secrets of its own.",
   "a former female boxing champion that <br>now works as a substitute high school teacher <br>and how after witnessing intolerable violence, <br>she decides to take justice on her own fists.",
   //Add more descriptions as needed
  ];
  
  var buttonTexts = [
   "Watch the movie",
   // "Watch the movie",
   // "Watch the movie",
   //Add more button texts as needed
  ];
  
  var currentIndex = 0;
  
  function changeContent() {
   var imgElement = document.querySelector(".home-img");
   var titleElement = document.querySelector(".home-title");
   var descriptionElement = document.querySelector(".image-description");
   var buttonTextElement = document.querySelector(".watch-btn span");
  
   if(imgElement != null){
      imgElement.src = imageUrls[currentIndex];
      titleElement.innerHTML = titles[currentIndex];
      descriptionElement.innerHTML = descriptions[currentIndex];
      buttonTextElement.textContent = buttonTexts[0];
     
   }
   currentIndex = (currentIndex + 1) % titles.length;
 
  }
  changeContent();
   setInterval(changeContent, 5000);
   
//   function changeImage() {
//    var imgElement = document.querySelector(".home-img");
//    imgElement.src = imageUrls[currentIndex];
//    currentIndex = (currentIndex + 1) % imageUrls.length;
//   }
  
 
 // setInterval(changeImage, 5000);
  

// var homeSwiper = new Swiper(".home-content", {
//    slidesPerView: 1, // Display four slides at once
//    spaceBetween: 20, // Adjust the space between slides as needed
//    autoplay: {
//        delay: 2000, // Adjust autoplay delay as needed
//        disableOnInteraction: false,
//    },
   
// });
//    navigation: {
//        nextEl: ".swiper-button-next",
//        prevEl: ".swiper-button-prev"
//    },
//    breakpoints: {
//        280: {
//            slidesPerView: 1,
//            spaceBetween: 10,
//        },
//        320: {
//            slidesPerView: 2,
//            spaceBetween: 10,
//        },
//        510: {
//            slidesPerView: 2,
//            spaceBetween: 10,
//        },
//        758: {
//            slidesPerView: 3,
//            spaceBetween: 15,
//        },
//        900: {
//            slidesPerView: 4,
//            spaceBetween: 20,
//        },
//    },
// });


// show video

let playButton = document.querySelector(".play-movie")
let video = document.querySelector(".video-container")
let closebtn = document.querySelector(".close-video")
let myvideo = document.querySelector("#myvideo")


playButton.onclick = () => {
   video.classList.add("show-video")  
   // autoplay
   myvideo.play();
};
closebtn.onclick = () => {
   video.classList.remove("show-video")  
   // pause on close 
   myvideo.pause();
};

