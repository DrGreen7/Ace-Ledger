// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

//sticky menu background
window.addEventListener('scroll', function(){
  if(this.window.scrollY>150){
    this.document.querySelector('#navbar').style.opacity=0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity=1;
  }
});



//smooth scrolling
$('#navbar a, .btn').on('click', function(event){
  if (this.hash !=='') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -100
      },
      800
    );
  }
});
