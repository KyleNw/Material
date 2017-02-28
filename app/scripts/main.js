

// switching between pages and the light box are here //

  $('document').ready(function(){
      $('.scrollspy').scrollSpy();
      $('.button-collapse').sideNav();
      


// show and hide pages
       $('#page2').hide();
       $('#page3').hide();
       $('#study').hide();
       $('#skillz').hide();
       $('#workHistory').hide();
       $('#educationPage').hide();
       $('#bioPage').hide();
       

       $('.home').click(function(){
            
            $('#page1').fadeIn(1000);
            $('#page2').hide();
            $('#page3').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#workHistory').hide();
            $('#educationPage').hide();
            $('#bioPage').hide();
       });
       
       $('.goSkillz').click(function(){
            $('#skillz').fadeIn(1000);
            $('#page1').hide();
            $('#page2').hide();
            $('#page3').hide();
            $('#study').hide()
            $('#workHistory').hide();
            $('#educationPage').hide();
            $('#bioPage').hide();
            getGraph();
       });
       
       $('.goHistory').click(function(){
            $('#workHistory').fadeIn(1000);
            $('#page1').hide();
            $('#page2').hide();
            $('#page3').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#educationPage').hide();
            $('#bioPage').hide();
       });

       $('.goEdo').click(function(){
            $('#educationPage').fadeIn(1000);
            $('#page1').hide();
            $('#page2').hide();
            $('#page3').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#workHistory').hide();
            $('#bioPage').hide();
            
       });

       $('.goBio').click(function(){
            $('#bioPage').fadeIn(1000);
            $('#page1').hide();
            $('#page2').hide();
            $('#page3').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#workHistory').hide();
            $('#educationPage').hide();
            
            
       });

        $('.page2Btn').click(function(){
            $('#workHistory').hide();
            $('#page2').fadeIn(1000);
            $('#page3').hide();
            $('#page1').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#educationPage').hide();
            $('#bioPage').hide();
           
       });

        $('.page3Btn').click(function(){
            $('#workHistory').hide();
            $('#page2').hide();
            $('#page3').fadeIn(1000);
            $('#page1').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#educationPage').hide();
           $('#bioPage').hide();
       });
       $('#goStudy').click(function(){
            $('#study').fadeIn(1000);
            $('#page2').hide();
            $('#page3').hide();
            $('#page1').hide();
            $('#skillz').hide();
            $('#workHistory').hide();
            $('#educationPage').hide();
            $('#bioPage').hide();
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

var getGraph = function(){

 var HorizontalBarGraph = function(el, series) {
  this.el = d3.select(el);
  this.series = series;
};

HorizontalBarGraph.prototype.draw = function() {
  var x = d3.scale.linear()
    .domain([0, d3.max(this.series, function(d) { return d.value })])
    .range([0, 100]);

  var segment = this.el
    .selectAll('.horizontal-bar-graph-segment')
      .data(this.series)
    .enter()
      .append('div').classed('horizontal-bar-graph-segment', true);

  segment
    .append('div').classed('horizontal-bar-graph-label', true)
      .text(function(d) { return d.label });

  segment
    .append('div').classed('horizontal-bar-graph-value', true)
      .append('div').classed('horizontal-bar-graph-value-bar', true)
        .style('background-color', function(d) { return d.color })
        .text(function(d) { return d.inner_label ? d.inner_label : '' })
        .transition()
          .duration(1000)
          .style('min-width', function(d) { return x(d.value) + '%' });

};

var graph = new HorizontalBarGraph('#my-graph', [
  {label: 'Html', inner_label: 'pro', value: 100, color: '#6ea6df' },
  {label: 'Css',  inner_label: 'pro 95%',   value: 95,  color: '#84c26d' },
  {label: 'Blah',  inner_label: 'just okay',   value: 86,  color: '#e17a69' },
  {label: 'Blah',  inner_label: 'just okay',   value: 93,  color: '#e17a69' },
  {label: 'Blah',  inner_label: 'just okay',   value: 33,  color: '#e17a69' }
]);
graph.draw();


};

  

