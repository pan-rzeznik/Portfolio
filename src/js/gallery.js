var iso = new Isotope( '.grid', {
    itemSelector: '.element-item',
});

// window.addEventListener('loaded', (event) => {
//     document.querySelector('.default').click();
// });

  
  // filter functions
  var filterFns = {}; 
  
  // bind filter button click
  var filtersElem = document.querySelector('.filters-button-group');
  filtersElem.addEventListener( 'click', function( event ) {

    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.button-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }
  
  function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !matchesSelector( event.target, 'button' ) ) {
        return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.classList.add('is-checked');
    });
  }



  // Lazy loading gallery
const sectionProjects = document.querySelector('.projects');
const gallerySection = document.querySelector('.gallery');
const sectionsObserve = [sectionProjects, gallerySection];
const allImgs = document.querySelectorAll('img[data-src]')
const gallerySectionObserver = new IntersectionObserver((entries, observer) => {
  if(entries[0].isIntersecting || entries[1].isIntersecting) {
    allImgs.forEach(element => {
     const src = element.getAttribute('data-src');
      element.setAttribute('src', src);
    });
    sectionsObserve.forEach( section => {
      gallerySectionObserver.unobserve(section); 
    })
    setTimeout(() => {
      document.querySelector('button[data-filter=".others"]').click(); 
     
    }, 100);

    setTimeout(() => {
      document.querySelector('button[data-filter=".nobles"]').click();
    }, 400);
  }
})
sectionsObserve.forEach( section => {
  gallerySectionObserver.observe(section); 
})
