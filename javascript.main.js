let isScrolling = false;
 
    window.addEventListener("scroll", controlScroll, false);
 
    function controlScroll() {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling();
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    var firstPhoto = document.querySelector("#firstPhoto");
    var secondPhoto = document.querySelector("#secondPhoto");
 
    
    function scrolling() {
      if (isPartiallyVisible(firstPhoto)) {
        firstPhoto.classList.add("active");
      } else {
        firstPhoto.classList.remove("active");
      }

 
      if (isFullyVisible(secondPhoto)) {
        secondPhoto.classList.add("active");
      } else {
        secondPhoto.classList.remove("active");
      }
    }
 
    function isPartiallyVisible(elementPartial) {
      let elementBoundary = elementPartial.getBoundingClientRect();
 
      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;
      let height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(elementFull) {
      let elementBoundary = elementFull.getBoundingClientRect();
 
      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }