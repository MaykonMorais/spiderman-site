document.addEventListener('DOMContentLoaded', () => {
  let timeLine = new TimelineMax();

  timeLine.fromTo('.bg-loader', 1, 
    {
      width: '100%',
    },
    {
      width: '0%',
      ease: Expo.easeInOut,
      delay: 5
    }
   )

   .fromTo('.bg-video', 2, 
    {
      width: '0%',
      opacity: 0
    },
    {
      width: '100%',
      ease: Expo.easeInOut,
      opacity: 1,
    },
    '-=1'
   )

   .fromTo('.logo', 0.7, 
    {
      y: -50,
      opacity: 0
    },
    {
      y: 0,
      ease: Expo.easeInOut,
      opacity: 1,
    },
    '-=0.5'
   )

   .fromTo('.nav-list', 0.7, 
    {
      y: -50,
      opacity: 0
    },
    {
      y: 0,
      ease: Expo.easeInOut,
      opacity: 1,
    },
    '-=0.5'
   )

   .fromTo('.nav-social', 0.7, 
    {
      y: -50,
      opacity: 0
    },
    {
      y: 0,
      ease: Expo.easeInOut,
      opacity: 1,
    },
    '-=0.5'
   )

   timeLine.fromTo('.item-1', 0.7, 
    {
      y: -50,
      opacity: 0
    },
    {
      y: 0,
      ease: Expo.easeInOut,
      opacity: 1,
    },
    '-=0.5'
   )

   timeLine.fromTo('.item-2', 0.7, 
    {
      y: -50,
      opacity: 0
    },
    {
      y: 0,
      ease: Expo.easeInOut,
      opacity: 1,
    },
    '-=0.5'
   )

   timeLine.fromTo('.item-3', 0.7, 
    {
      y: -50,
      opacity: 0
    },
    {
      y: 0,
      ease: Expo.easeInOut,
      opacity: 1,
    },
    '-=0.5'
   )


   timeLine.fromTo('.item-4', 0.7, 
    {
      y: -50,
      opacity: 0
    },
    {
      y: 0,
      ease: Expo.easeInOut,
      opacity: 1,
    },
    '-=0.5'
   )


   timeLine.fromTo('.item-5', 0.7, 
    {
      y: -50,
      opacity: 0
    },
    {
      y: 0,
      ease: Expo.easeInOut,
      opacity: 1,
    },
    '-=0.5'
   )
})

$(document).ready(function() {
  $('#bx').click(function() {
    $(this).toggleClass('active')
    $('.nav-content').toggleClass('active')
  })
});