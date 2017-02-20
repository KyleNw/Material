console.log('\'Allo \'Allo!');

// switching between pages and the light box are here //

  $('document').ready(function(){
      $('.scrollspy').scrollSpy();
       $('.button-collapse').sideNav();



// show and hide pages
       $('#page2').hide();
       $('#page3').hide();
       $('#study').hide();

       $('.home').click(function(){
           
            $('#page2').hide();
            $('#page3').hide();
            $('#page1').fadeIn(2500);
            $('#study').hide()
           
       });

        $('.page2Btn').click(function(){
           
           $('#page2').fadeIn(2500);
            $('#page3').hide();
            $('#page1').hide();
            $('#study').hide()
            
           
       });

        $('.page3Btn').click(function(){
           
            $('#page2').hide();
            $('#page3').fadeIn(2500);
            $('#page1').hide();
            $('#study').hide()
           
       });
       $('#goStudy').click(function(){
            $('#study').fadeIn(2500);
            $('#page2').hide();
            $('#page3').hide();
            $('#page1').hide();
       })

  });

// light box

 var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgBtn = document.getElementById('light1');
var img2Btn = document.getElementById('light2');

var img = document.getElementById('picture1');
var img2 = document.getElementById('picture2');


var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
imgBtn.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

img2Btn.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = img2.src;
    captionText.innerHTML = img2.alt;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = 'none';
}

// d3 famo



  

