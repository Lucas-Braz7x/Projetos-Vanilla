document.querySelector('.banner button').addEventListener('click', () =>{
	document.querySelector('.banner').style.display= 'none';
  document.querySelector('.slideshow-wrapper').style.cssText= 'opacity:1; visibility: visible';
  document.querySelector('.slideshow').style.animation= "slideshowAnim 24s infinite";
});
