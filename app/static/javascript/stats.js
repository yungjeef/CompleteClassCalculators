
// jquery selector for getting the nav bar 
$(document).ready(function(){
    
    
     // single image popouts
    $('.formula').magnificPopup({
      type: 'image'
      // other options
    });
    
    
     // gallery
    $('.gallery').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        }
    });
    $('.gallery2').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        }
    });
    $('.gallery3').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        }
    });
    $('.gallery4').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        }
    });
    $('.gallery5').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        }
    });
    $('.gallery6').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        }
    });
    $('.gallery7').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        }
    });
    $('.gallery8').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        }
    });
    $('.gallery9').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        }
    });
    $('.gallery10').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        }
    });
    
    //video
    $('.video').magnificPopup({
        type: 'iframe',
        iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

          patterns: {
            youtube: {
              index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

              id: 'v=', // String that splits URL in a two parts, second part should be %id%
              // Or null - full URL will be returned
              // Or a function that should return %id%, for example:
              // id: function(url) { return 'parsed id'; }

              src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }

            // you may add here more sources

          },

          srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }
        
    // other options
    });
    
    
    
    
    
    
    
    
    
    
    // sticky bar nav
    $('.js--nav--bar').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset:'60px;'
    });
    
    
    
    
    
//    // top navigation scroll function
//    $(function() {
//      $('a[href*="#"]:not([href="#"])').click(function() {
//        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//          var target = $(this.hash);
//          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//          if (target.length) {
//            $('html, body').animate({
//              scrollTop: target.offset().top
//            }, 1);
//            return false;
//          }
//        }
//      });
//    });
    
    
    
    // mobile navigation 
    $('.nav-icon-popout').click(function() {
        var navPop = $('.main-nav-output');
        var icon = $('.nav-icon-popout ion-icon');
        
        navPop.slideToggle(200);
    

        if (icon.attr("name") === 'add-circle') {
            icon.attr("name", 'arrow-round-up');
        }
        else {
            icon.attr("name" , 'add-circle');
        }
        
        // windwos resize nav display
        $(window).resize(function() {
            if ($(window).width() > 767) {
                navPop.css('display', 'block');
                
                if (icon.attr("name") === 'arrow-round-up') {
                    icon.attr("name",'add-circle');
                }
            }
            else {
                navPop.css('display', 'none');
            }
        });
    
    });
    
    
    ////////////////// scrolling from navigation buttons //////////////////
    
    // too glitchy
//    // frequency scroll
//    $('.scroll-to-frequency').click(function () {
//        $('html, body').animate({scrollTop: $('.frequencies').offset().top}, 100);
//    });
//    
//    // stem and plot scroll
//    $('.scroll-to-stem-and-plot').click(function () {
//        $('html, body').animate({scrollTop: $('.stem-and-plot').offset().top}, 100);
//    });
//    
//    
//    // mean/median/mode scroll
//    $('.scroll-to-mean-median-mode').click(function () {
//        $('html, body').animate({scrollTop: $('.mean-median-mode').offset().top}, 100);
//    });
//    
//    // IQR scroll
//    $('.scroll-to-iqr').click(function () {
//        $('html, body').animate({scrollTop: $('.iqr').offset().top}, 100);
//    });
//    
//    // Variance SD scroll
//    $('.scroll-to-variance-sd').click(function () {
//        $('html, body').animate({scrollTop: $('.variance-sd').offset().top}, 100);
//    });
    

   
    
    
    

}); 
       












// calculates average whenever button is clicked
document.querySelector('#calculateaverage').addEventListener('click',getAverageFromArray);

// calculates frequencies when clicked
document.querySelector('#calculatefrequencies').addEventListener('click',frequencyFromArray);

// calculatures number
document.querySelector('#calculatefrequencies').addEventListener('click',calcNumber);

// calculatures stem and plot
document.querySelector('#calculatestemandplot').addEventListener('click',stemAndPlot);

// calculatures population proportion
document.querySelector('#calculatepopulationprobability').addEventListener('click',popPropCalc);

// calculates sample mean 
document.querySelector('#calculatesamplemean').addEventListener('click',sampleMeanCalc);

// calculates IQR
document.querySelector('#calculateIQR').addEventListener('click',getIQRFromArray);

// calculates population/sample variance and population standard deviation
document.querySelector('#calculatepopVarianceSD').addEventListener('click',populationOrSampleVarianceSD);

// calculates percentile
document.querySelector('#calculatepercentile').addEventListener('click',calcPercentile);

// calculates solely z-score
document.querySelector('#solvezscore').addEventListener('click', calcZScoreFunc);

// calculates correlation coefficient
document.querySelector('#calculatecorrelationcoefficient').addEventListener('click',calcCorrelationCoefficient);

// calculates residual
document.querySelector('#calculateresidual').addEventListener('click',calcResidual);

// calculates intersection, union, and differnce of 2 sets
document.querySelector('#calculateintersectionunion').addEventListener('click',calcSet);

// calculates conditional probability
document.querySelector('#calculateconditionalprob').addEventListener('click',calcConditionalProbability);

// calculates permutation and combination
document.querySelector('#calculatepermandcomb').addEventListener('click', calcPermAndComb);

// calculates discrete random variables
document.querySelector('#calculatediscreteranvar').addEventListener('click', calcDiscreteRanVar);

// calculates confidence interval for proportion 
document.querySelector('#calculateciproportion').addEventListener('click', calcCIProp);

// calculates confidence interval for proportion 
document.querySelector('#calculatecimean').addEventListener('click', calcCIMean);

// calculates sample size from CI sd and margin of Error
document.querySelector('#calculatecimeansamplesize').addEventListener('click', calcCISampleSize);

// calculates hypothesis test population proportion
document.querySelector('#calculateHTprop').addEventListener('click', calcHypothesisProp);

// calculates hypothesis test population mean
document.querySelector('#calculateHTmean').addEventListener('click', calcHypothesisMean);

// calculates two sample test population proportion
document.querySelector('#calculatecompareprop').addEventListener('click', comparePopProp);

// calculates two sample test population mean
document.querySelector('#calculatecomparemean').addEventListener('click', comparePopMean);





// sets up an initial empty plot so there is no white space
initialEmptyPlot()



     




//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 2:


//////////////////////////////////////////////////////////////////////////////////////////
// frequencies



function frequencyFromArray() {
    
    
    ///////////////////// array manipulation //////////////////////////
    // takes in array
    var inputArray = $("#inputfrequencytable").val();
    
    // gets rid of all commas in beginning
    while (inputArray[0] == ',') {
        inputArray = inputArray.slice(1, inputArray.length);
    }
    
    // gets rid of all commas at end
    while (inputArray[inputArray.length-1] == ',') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // gets rid of all commas in between 
    for (j=0; j<2; j++) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
                inputArray = inputArray.split(',,').join(',');
            }
        }
    }
    
    // gets rid of all decimals at end
    while (inputArray[inputArray.length-1] == '.') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // deals with first decimal
    if (inputArray[0] == '.') {
        inputArray = inputArray.split('.').join('0.');
    }
    
    // adds 0 in front of any decimal in between 
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
                inputArray = inputArray.split(',.').join(',0.');
            }
            else {
                inputArray = inputArray.split(',.').join('');
            }
            
        }
    }
    
    ///////////////////// array manipulation //////////////////////////

    
   // converts input into array 
     var myArray = JSON.parse("[" + inputArray + "]");
     var length = myArray.length;
    
    var a = [], b =[], prev;
    
    myArray.sort(function(a,b) {
        return a - b;
    });
    
    for (var i = 0; i < length; i++) {
        if (myArray[i] !== prev) {
            a.push(myArray[i]);
            b.push(1);
        }
        else {
            b[b.length-1]++;
        } 
        prev = myArray[i];
    }
    
    var ans2 ="";
    for (var i=0; i < b.length; i++) {
        if (i===0) {
            ans2 = "[" + a[i] + " = " + b[i] + "]";
        }
        else {
            ans2 = ans2 + ", [" + a[i] + " = " + b[i] + "]";
        }
        
    }
    
    for (var i=0; i < b.length; i++) {
        b[i] = b[i]/length;
    }
    
    var ans = "";
    for (var i=0; i < b.length; i++) {
        if (i===0) {
            ans = "[" + a[i] + " = " + b[i].toFixed(4) + "]";
        }
        else {
            ans = ans + ", [" + a[i] + " = " + b[i].toFixed(4) + "]";
        }
        
    }
    
    $("#outputfrequencytable").val(ans).toLocaleString();
    $("#outputabsolutefrequencytable").val(ans2).toLocaleString();
    
    
    
    // frequency graph, based on intervals
    
    var interval = Number($("#frequencygraphinterval").val());
    
    // finds the x values based on interval and sets them up in brackets
    var xValues = [];
    var yValues = []
    for (i=1; i<=myArray[length-1]; i+=interval) {
        var lower = i-1;
        var upper = i - 1 + interval;
        xValues.push('' + lower + ' - ' + upper);
        
        // finds number of values in each bracket
        var count = 0;
        for (j=0; j<length; j++) {
            var arrayVal = myArray[j];
            if (arrayVal > lower && arrayVal <= upper) {
                count += 1;
            }
        }
        yValues.push(count);
        
    }
    
    
    
    var trace1 = {
        x: xValues,
        y: yValues,
        name: '',
        type: 'bar'
    };
    
    var data = [trace1];
    
    var layout = {
        barmode: 'group',
        title: 'Frequency Graph'
    };
    
    Plotly.newPlot('frequencyPlot', data, layout);
        
}
    


    
    


function frequencyBoxAppear() {
    var x = $("#operatorfrequency").val();
    
    if (x == 3) {
        document.getElementById("frequencyCalc2").style.display='block';
        document.getElementById("textfrequencyCalc2").style.display='block';
    }
    else {
        document.getElementById("frequencyCalc2").style.display='none';
        document.getElementById("textfrequencyCalc2").style.display='none';
    }
    
}



function calcNumber() {
    var operator = $("#operatorfrequency").val();
    var first_number = Number($("#frequencyCalc1").val());
    var second_number = Number($("#frequencyCalc2").val());
    // takes in array
    var inputArray = $("#inputfrequencytable").val();
    
    
    
    ///////////////////// array manipulation //////////////////////////
    // takes in array
    var inputArray = $("#inputfrequencytable").val();
    
    // gets rid of all commas in beginning
    while (inputArray[0] == ',') {
        inputArray = inputArray.slice(1, inputArray.length);
    }
    
    // gets rid of all commas at end
    while (inputArray[inputArray.length-1] == ',') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // gets rid of all commas in between 
    for (j=0; j<2; j++) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
                inputArray = inputArray.split(',,').join(',');
            }
        }
    }
    
    // gets rid of all decimals at end
    while (inputArray[inputArray.length-1] == '.') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // deals with first decimal
    if (inputArray[0] == '.') {
        inputArray = inputArray.split('.').join('0.');
    }
    
    // adds 0 in front of any decimal in between 
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
                inputArray = inputArray.split(',.').join(',0.');
            }
            else {
                inputArray = inputArray.split(',.').join('');
            }
            
        }
    }
    
    ///////////////////// array manipulation //////////////////////////
    
    
    
   // converts input into array 
     var myArray = JSON.parse("[" + inputArray + "]");
     var length = myArray.length;
    
    
    myArray.sort(function(a,b) {
        return a - b;
    });
    
    var count = 0;
    var operatorWord = "";
    for (i=0;i<length;i++) {
        if (operator === "0") {
            if (first_number == myArray[i]) {
                count += 1;
            }
        }
        if (operator === "1") {
            if (myArray[i] > first_number) {
                count += 1;
            }
        }
        if (operator === "2") {
            if (myArray[i] < first_number) {
                count += 1;
            }
        }
        if (operator === "3") {
            if (first_number < second_number) {
                if (myArray[i] > first_number && myArray[i] < second_number) {
                count += 1;
                }   
            }
            else {
                if (myArray[i] > second_number && myArray[i] < first_number) {
                count += 1;
                }
            }
            
        }
        if (operator === "4") {
            if (first_number == myArray[i]) {
                count += 1;
            }
            if (myArray[i] > first_number) {
                count += 1;
            }
        }
        if (operator === "5") {
            if (first_number == myArray[i]) {
                count += 1;
            }
            if (myArray[i] < first_number) {
                count += 1;
            }
        }
    }
    
    if (operator === "0") {
         var ansString = "There are " + count + " numbers equal to " + first_number;
    }
    if (operator === "1") {
        var ansString = "There are " + count + " numbers greater than " + first_number;
    }
    if (operator === "2") {
        var ansString = "There are " + count + " numbers less than " + first_number;
    }
    if (operator === "3") {
        var ansString = "There are " + count + " numbers between " + first_number + " and " + second_number;
    }
    if (operator === "4") {
        var ansString = "There are " + count + " numbers greater than or equal to " + first_number;
    }
    if (operator === "5") {
        var ansString = "There are " + count + " numbers less than or equal to " + first_number;
    }
    
   
    
    $("#calculatenumberans").val(ansString);
}


//////////////////////////////////////////////////////////////////////////////////////////
// stem and plot


function stemAndPlot() {
    // take in all the arrays
    var array0 = $("#stemandplot0").val();
    var array1 = $("#stemandplot1").val();
    var array2 = $("#stemandplot2").val();
    var array3 = $("#stemandplot3").val();
    var array4 = $("#stemandplot4").val();
    var array5 = $("#stemandplot5").val();
    var array6 = $("#stemandplot6").val();
    var array7 = $("#stemandplot7").val();
    var array8 = $("#stemandplot8").val();
    var array9 = $("#stemandplot9").val();
    var array10 = $("#stemandplot10").val();
    
    var allArrays = [array0,array1,array2,array3,array4,array5,
                     array6,array7,array8,array9,array10]
    
    
//    ///////////////////// array manipulation //////////////////////////
//    // takes in array
//    var inputArray = $("#inputfrequencytable").val();
//    
//    // gets rid of all commas in beginning
//    while (inputArray[0] == ',') {
//        inputArray = inputArray.slice(1, inputArray.length);
//    }
//    
//    // gets rid of all commas at end
//    while (inputArray[inputArray.length-1] == ',') {
//        inputArray = inputArray.slice(0, inputArray.length-1);
//    }
//    
//    // gets rid of all commas in between 
//    for (j=0; j<2; j++) {
//        for (i=0; i<inputArray.length; i++) {
//            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
//                inputArray = inputArray.split(',,').join(',');
//            }
//        }
//    }
//    
//    // gets rid of all decimals at end
//    while (inputArray[inputArray.length-1] == '.') {
//        inputArray = inputArray.slice(0, inputArray.length-1);
//    }
//    
//    // deals with first decimal
//    if (inputArray[0] == '.') {
//        inputArray = inputArray.split('.').join('0.');
//    }
//    
//    // adds 0 in front of any decimal in between 
//    for (i=0; i<inputArray.length; i++) {
//        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
//            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
//                inputArray = inputArray.split(',.').join(',0.');
//            }
//            else {
//                inputArray = inputArray.split(',.').join('');
//            }
//            
//        }
//    }
//    
//    ///////////////////// array manipulation //////////////////////////
//    
    
    // converts input into array 
    var fullArray = [];
    var add = 0;
    for (i=0;i<allArrays.length;i++) {
        var tempArray = JSON.parse("[" + allArrays[i] + "]");
        for (j=0; j<tempArray.length; j++) {
            var num = add + tempArray[j];
            fullArray = fullArray.concat(num);
        }
        add = add + 10;
    }
    
    // sort finished array
    fullArray.sort(function(a,b) {
        return a - b;
    });
    
    var length = fullArray.length;
    
    
    var operator = $("#sandpoperatorfrequency").val();
    var first_number = Number($("#sandpCalc1").val());
    var second_number = Number($("#sandpCalc2").val());
    
    var count = 0;
    for (i=0;i<length;i++) {
        if (operator === "0") {
            if (first_number == fullArray[i]) {
                count += 1;
            }
        }
        if (operator === "1") {
            if (fullArray[i] > first_number) {
                count += 1;
            }
        }
        if (operator === "2") {
            if (fullArray[i] < first_number) {
                count += 1;
            }
        }
        if (operator === "3") {
            if (first_number < second_number) {
                if (fullArray[i] > first_number && fullArray[i] < second_number) {
                count += 1;
                }   
            }
            else {
                if (fullArray[i] > second_number && fullArray[i] < first_number) {
                count += 1;
                }
            }
        }
        if (operator === "4") {
            if (first_number == fullArray[i]) {
                count += 1;
            }
            if (fullArray[i] > first_number) {
                count += 1;
            }
        }
        if (operator === "5") {
            if (first_number == fullArray[i]) {
                count += 1;
            }
            if (fullArray[i] < first_number) {
                count += 1;
            }
        }
    }
    
    
    if (operator === "0") {
         var ansString = "There are " + count + " numbers equal to " + first_number;
    }
    if (operator === "1") {
        var ansString = "There are " + count + " numbers greater than " + first_number;
    }
    if (operator === "2") {
        var ansString = "There are " + count + " numbers less than " + first_number;
    }
    if (operator === "3") {
        var ansString = "There are " + count + " numbers between " + first_number + " and " + second_number;
    }
    if (operator === "4") {
        var ansString = "There are " + count + " numbers greater than or equal to " + first_number;
    }
    if (operator === "5") {
        var ansString = "There are " + count + " numbers less than or equal to " + first_number;
    }
    
    $("#calculatestemandplotans").val(ansString);
    
    sumMedianMeanStemAndPlot(fullArray);
    
}

function stemAndPlotBoxAppear() {
    var x = $("#sandpoperatorfrequency").val();
    
    if (x == 3) {
        document.getElementById("sandpCalc2").style.display='block';
        document.getElementById("textsandpCalc2").style.display='block';
    }
    else {
        document.getElementById("sandpCalc2").style.display='none';
        document.getElementById("textsandpCalc2").style.display='none';
    }
    
}


function sumMedianMeanStemAndPlot(array) {
    
    var length = array.length;
    
    //median
    var median = 0;
    array.sort(function(a,b) {
        return a - b;
    });
    if (length%2 === 0) { // is even 
        median = (array[length/2-1] + array[length/2]) / 2;
    }
    else { // is odd
        median = array[(length-1)/2];
    }
    
    $("#averagetablemedian2").val(Number(parseFloat(median).toFixed(4)));
    
    
    // finds sum and mean
    if (array.length) {
        var sum = array.reduce(function(a,b) { return a + b; });
    }
    var average = sum/length
    
    $("#averagetablemean2").val(Number(parseFloat(average).toFixed(4)));
    $("#averagetablesum2").val(Number(parseFloat(sum).toFixed(4)));
    
     $("#averagetablelargest").val(array[length-1]);
     $("#averagetablesmallest").val(array[0]);
}



//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 3:




//////////////////////////////////////////////////////////////////////////////////////////
// average mean mode sum

function getAverageFromArray() {
    
    
    
    ///////////////////// array manipulation //////////////////////////
    // takes in array
    var inputArray = $("#inputarraytable").val();
    
    // gets rid of all commas in beginning
    while (inputArray[0] == ',') {
        inputArray = inputArray.slice(1, inputArray.length);
    }
    
    // gets rid of all commas at end
    while (inputArray[inputArray.length-1] == ',') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // gets rid of all commas in between 
    for (j=0; j<2; j++) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
                inputArray = inputArray.split(',,').join(',');
            }
        }
    }
    
    // gets rid of all decimals at end
    while (inputArray[inputArray.length-1] == '.') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // deals with first decimal
    if (inputArray[0] == '.') {
        inputArray = inputArray.split('.').join('0.');
    }
    
    // adds 0 in front of any decimal in between 
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
                inputArray = inputArray.split(',.').join(',0.');
            }
            else {
                inputArray = inputArray.split(',.').join('');
            }
            
        }
    }
    
    ///////////////////// array manipulation //////////////////////////
    
    
    
    
    
    
    
   // converts input into array 
     var myArray = JSON.parse("[" + inputArray + "]");
     var length = myArray.length;
    
    var median = findMedian(myArray,length);
    findMode(myArray,length);
    
    // finds sum
    if (myArray.length) {
        var sum = myArray.reduce(function(a,b) { return a + b; });
    }
    var average = sum/length
    
    
    // mean absolute deviation
    var mad = 0;
    for (i=0; i<length; i++) {
        var tempNum = myArray[i] - average;
        if (tempNum < 0) {
            tempNum = tempNum * -1;
        }
        mad += tempNum;
    }
    
    mad = mad/length;
    
    $("#averagetablemean").val(Number(parseFloat(average).toFixed(4)));
    $("#averagetablesum").val(Number(parseFloat(sum).toFixed(4)));
    $("#IQRtablemad").val(Number(parseFloat(mad).toFixed(4)));
    
    
//    // creates histogram
// 
//    var trace1 = {
//        x: myArray,
//        type: 'histogram'
//    };
//    
//    var trace2 = {
//        x: median,
//        y: mode,
//        marker: {
//            color: "rgba(255, 100, 102, 0.7)", 
//            line: {
//                color:  "rgba(255, 100, 102, 1)", 
//                width: 1
//             }
//        },  
//        opacity: 0.5,
//        type: 'histogram',
//    };
//    
//    var data = [trace1,trace2];
//    var layout = {barmode: "stack"};
//    
//    
//    Plotly.newPlot('medianPlot', data, layout);

    
    
}

function findMode(array,len) {
    
    var modes = [], 
        count = [],
        i,
        number,
        maxIndex = 0;
    for (i=0; i<len;i+=1) {
        number = array[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    var numberOf = 0;
    
    for (i in count) if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
            modes.push(Number(i));
            numberOf = count[i];
        }
    }

    ansString = "[" + modes.toLocaleString() + "] : " + numberOf + "";
    $("#averagetablemode").val(ansString).toLocaleString();
    
    
    
}


function findMedian(array, len) {
    var median = 0;
    array.sort(function(a,b) {
        return a - b;
    });
    if (len%2 === 0) { // is even 
        median = (array[len/2-1] + array[len/2]) / 2;
    }
    else { // is odd
        median = array[(len-1)/2];
    }
    
    $("#averagetablemedian").val(Number(parseFloat(median).toFixed(4)));
    
    return median;
}



//////////////////////////////////////////////////////////////////////////////////////////
// IQR 

function getIQRFromArray() {
    
    
    
    
    
    ///////////////////// array manipulation //////////////////////////
    // takes in array
    var inputArray = $("#inputIQRtable").val();
    
    // gets rid of all commas in beginning
    while (inputArray[0] == ',') {
        inputArray = inputArray.slice(1, inputArray.length);
    }
    
    // gets rid of all commas at end
    while (inputArray[inputArray.length-1] == ',') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // gets rid of all commas in between 
    for (j=0; j<2; j++) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
                inputArray = inputArray.split(',,').join(',');
            }
        }
    }
    
    // gets rid of all decimals at end
    while (inputArray[inputArray.length-1] == '.') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // deals with first decimal
    if (inputArray[0] == '.') {
        inputArray = inputArray.split('.').join('0.');
    }
    
    // adds 0 in front of any decimal in between 
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
                inputArray = inputArray.split(',.').join(',0.');
            }
            else {
                inputArray = inputArray.split(',.').join('');
            }
            
        }
    }
    
    ///////////////////// array manipulation //////////////////////////
    
    

    
    
   // converts input into array 
     var array = JSON.parse("[" + inputArray + "]");
     var len = array.length;
    
    var median = 0;
    var q1 = 0;
    var q3 = 0;
    
    
    // sorts in order
    array.sort(function(a,b) {
        return a - b;
    });
    


    
    
    // calculate q1 and q3
    var range = array[len-1] - array[0];
    var midRange = (array[len-1] + array[0])/2;
    
    if(len >= 5) {
        
        if (len%2 === 0) { // is even 
            median = (array[len/2-1] + array[len/2]) / 2;
            
            var refNum = len/2;
            if (refNum%2 === 0) { // even
                q1 = (array[refNum/2] + array[(refNum/2)-1])/2;
                q3 = (array[refNum + refNum/2] + array[refNum + (refNum/2) -1])/2;
            }
            
            else { // odd
                q1 = array[(refNum-1)/2];
                q3 = array[(refNum + (refNum-1)/2)];
            }
        }   
        
        
        else { // is odd
        
            var medNum = (len-1)/2;
            median = array[medNum];
            
            
            if (medNum%2 === 0) { // is even
                q1 = (array[medNum/2] + array[medNum/2-1]) /2;
                q3 = (array[medNum + (medNum/2)] + array[medNum + medNum/2 + 1]) / 2;
                
            }
            
            else { // is odd
                q1 = array[(medNum-1)/2];
                q3 = array[(medNum + (medNum+1)/2)]
            }
        }
    }
    
    
    // find the outliers
    var q1outlier = q1 - (1.5*(q3-q1));
    var q3outlier = q3 + (1.5*(q3-q1));
    var outliers = []; 
    for (i=0; i<len; i++) {
        if (array[i] > q3outlier || array[i] < q1outlier) {
            outliers.push(array[i]);
        }
    }
    
    
    
    
    $("#IQRtableoutliers").val(outliers);
    $("#IQRtablemidrange").val(Number(parseFloat(midRange).toFixed(4)));
    $("#IQRtableoutliers").val(outliers);
    $("#IQRtablemedian").val(Number(parseFloat(median).toFixed(4)));
    $("#IQRtableq1").val(Number(parseFloat(q1).toFixed(4)));
    $("#IQRtableq3").val(Number(parseFloat(q3).toFixed(4)));
    $("#IQRtableIQR").val(Number(parseFloat(q3-q1).toFixed(4)));
    $("#IQRtablerange").val(Number(parseFloat(range).toFixed(4)));
    $("#IQRtableupperfence").val(Number(parseFloat(q3outlier).toFixed(4)));
    $("#IQRtablelowerfence").val(Number(parseFloat(q1outlier).toFixed(4)));
    
    var trace1 = {
      x: [array[0],q1,q1,median,q3,q3,array[len-1]],
      type: 'box',
      name: ''
    };


    var data = [trace1];

    var layout = {
      title: 'Box and Whisker Plot'
    };

    Plotly.newPlot('boxplot', data, layout);
    
    
    
    
}


function initialEmptyPlot() {
    
    // creates empty iqr plot
    var trace1 = {
      x: [0,0,0,0,0],
      type: 'box',
      name: ''
    };


    var data = [trace1];

    var layout = {
      title: 'Box and Whisker Plot'
    };

    Plotly.newPlot('boxplot', data, layout);
    
    // creates empty scatter plot
    var trace1 = {
        x: [1,2,3,4,5],
        y: [1,2,3,4,5],
        mode: 'markers',
        type: 'scatter',

    };

    var data = [trace1];
    
    var layout = {
      title: 'Scatter Plot'
        };

    Plotly.newPlot('scatterplot', data, layout);
    
    // creates empty residual plot
    var trace1 = {
        x: [1,2,3,4,5],
        y: [0,0,0,0,0],
        mode: 'markers',
        type: 'scatter',

    };

    var data = [trace1];
    
    var layout = {
      title: 'Residual Plot'
        };

    Plotly.newPlot('residualplot', data, layout);
    
    
    
    
    
    var trace1 = {
        x: [1,2,3,4,5,6],
        y: [0,0,0,0,0,0],
        name: '',
        type: 'bar'
    };
    
    var data = [trace1];
    
    var layout = {
        barmode: 'group',
        title: 'Frequency Graph'
    };
    
    Plotly.newPlot('frequencyPlot', data, layout);
}


/////////////////////////////////////////////////////////////////////////////////////
// determins which function to call
function populationOrSampleVarianceSD() {
    var operator = $("#variance-sd-sam-or-pop").val();
    
    // population
    if ($("#variance-sd-sam-or-pop").prop('checked')) {
        populationVariance();
    }
    else {
        sampleVariance();
    }
}

/////////////////////////////////////////////////////////////////////////////////////
// shows sample or population
function populationOrSampleVarianceSDShow() {
    

    // population
    if ($("#variance-sd-sam-or-pop").prop('checked')) {
        document.getElementById("variance-sd-sam-text").className = "hide";
        document.getElementById("variance-sd-sam-table").className = "hide";
        document.getElementById("variance-sd-pop-text").className = " ";
        document.getElementById("variance-sd-pop-table").className = "output-table";
        
    }
    // sample
    else {
        document.getElementById("variance-sd-sam-text").className = " ";
        document.getElementById("variance-sd-sam-table").className = "output-table";
        document.getElementById("variance-sd-pop-text").className = "hide";
        document.getElementById("variance-sd-pop-table").className = "hide";
    }
   
    

    
}


///////////////////////////////////////////////////////////////////////////////////////////
// variance and sd of a population

function populationVariance() {
    
    
    ///////////////////// array manipulation //////////////////////////
    // takes in array
    var inputArray = $("#inputpopVarianceSDtable").val();
    
    // gets rid of all commas in beginning
    while (inputArray[0] == ',') {
        inputArray = inputArray.slice(1, inputArray.length);
    }
    
    // gets rid of all commas at end
    while (inputArray[inputArray.length-1] == ',') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // gets rid of all commas in between 
    for (j=0; j<2; j++) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
                inputArray = inputArray.split(',,').join(',');
            }
        }
    }
    
    // gets rid of all decimals at end
    while (inputArray[inputArray.length-1] == '.') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // deals with first decimal
    if (inputArray[0] == '.') {
        inputArray = inputArray.split('.').join('0.');
    }
    
    // adds 0 in front of any decimal in between 
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
                inputArray = inputArray.split(',.').join(',0.');
            }
            else {
                inputArray = inputArray.split(',.').join('');
            }
            
        }
    }
    
    ///////////////////// array manipulation //////////////////////////
    
    
    

    // converts input into array 
    var array = JSON.parse("[" + inputArray + "]");
    var len = array.length;
      
    // sorts in order
    array.sort(function(a,b) {
        return a - b;
    });
    
    // finds sum
    if (array.length) {
        var sum = array.reduce(function(a,b) { return a + b; });
    }
    var mean = sum/len; 
    
    // finds variance
    function numerator(val) {
        return ((val-mean)*(val-mean));
    }
    
    var variance = array.map(numerator); 
    variance = variance.reduce(function(a,b) { return (a + b); });  
    variance = variance/len;
    
    standardDeviation(variance, mean);
}


function standardDeviation(variance, mean) {
    
    sd = Math.sqrt(variance);
    
    $("#popVarSDtablemean").val(Number(parseFloat(mean).toFixed(4)));
    $("#popVarSDtablevar").val(Number(parseFloat(variance).toFixed(4)));
    $("#popVarSDtablesd").val(Number(parseFloat(sd).toFixed(4)));
    
}



///////////////////////////////////////////////////////////////////////////////////////////
// variance and sd of a sample

function sampleVariance() {
    
    ///////////////////// array manipulation //////////////////////////
    // takes in array
    var inputArray = $("#inputpopVarianceSDtable").val();
    
    // gets rid of all commas in beginning
    while (inputArray[0] == ',') {
        inputArray = inputArray.slice(1, inputArray.length);
    }
    
    // gets rid of all commas at end
    while (inputArray[inputArray.length-1] == ',') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // gets rid of all commas in between 
    for (j=0; j<2; j++) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
                inputArray = inputArray.split(',,').join(',');
            }
        }
    }
    
    // gets rid of all decimals at end
    while (inputArray[inputArray.length-1] == '.') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // deals with first decimal
    if (inputArray[0] == '.') {
        inputArray = inputArray.split('.').join('0.');
    }
    
    // adds 0 in front of any decimal in between 
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
                inputArray = inputArray.split(',.').join(',0.');
            }
            else {
                inputArray = inputArray.split(',.').join('');
            }
            
        }
    }
    
    ///////////////////// array manipulation //////////////////////////
    
    
    
    // converts input into array 
    var array = JSON.parse("[" + inputArray + "]");
    var len = array.length;
      
    // sorts in order
    array.sort(function(a,b) {
        return a - b;
    });
    
    // finds sum
    if (array.length) {
        var sum = array.reduce(function(a,b) { return a + b; });
    }
    var mean = sum/len;     
    function numerator(val) {
        return ((val-mean)*(val-mean));
    }
    var variance = array.map(numerator); 
    variance = variance.reduce(function(a,b) { return (a + b); }); 
    variance = variance/(len-1);

    standardDeviation2(variance, mean);
}


function standardDeviation2(variance, mean) {
    
    sd = Math.sqrt(variance);
    
    $("#samVarSDtablemean").val(Number(parseFloat(mean).toFixed(4)));
    $("#samVarSDtablevar").val(Number(parseFloat(variance).toFixed(4)));
    $("#samVarSDtablesd").val(Number(parseFloat(sd).toFixed(4)));
    
}









//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 4:




// hides other boxes if one box is entered for percentile
function hidePercentileBox() {
    
    var num = 0;
    var per = 0;
    
    num = $("#percentilecalc").val();
    per = $("#percentilecalc2").val();
    
    
    if (num > 0) {
        document.getElementById("percentilecalc2").className = "extra-input-box-disabled";
        document.getElementById("percentilecalc2").disabled = true;
        document.getElementById("percentile-text-2").className = "hide";
        document.getElementById("percentile-text-1").className = " ";
        $("#percentilecalc2").val(0);
    }
    else if (per > 1) {
        alert("Percentile must be less than 1. \nEx: 70th percentile must be entered as .70");
        $("#percentilecalc2").val(0);
    }
    else if (per > 0 && per <= 1) {
        document.getElementById("percentilecalc").className = "extra-input-box-disabled";
        document.getElementById("percentilecalc").disabled = true;
        document.getElementById("percentileoperator").disabled = true;
        document.getElementById("percentileoperator").style = "background-color: rgba(162, 159, 163, 0.5);";
        document.getElementById("percentile-text-2").className = " ";
        document.getElementById("percentile-text-1").className = "hide";
        per = $("#percentilecalc").val(0);
    }
    else {
        document.getElementById("percentilecalc").className = "extra-input-box";
        document.getElementById("percentilecalc2").className = "extra-input-box";
        document.getElementById("percentilecalc").disabled = false;
        document.getElementById("percentilecalc2").disabled = false;
        document.getElementById("percentileoperator").disabled = false;
        document.getElementById("percentileoperator").style = "background-color: white;";
        document.getElementById("percentile-text-2").className = "hide";
        document.getElementById("percentile-text-1").className = " ";
    }
   
        
}









///////////////////////////////////////////////////////////////////////////////////////////
// percentile 

function calcPercentile() {
    
    
    ///////////////////// array manipulation //////////////////////////
    // takes in array
    var inputArray = $("#inputpercentile").val();
    
    // gets rid of all commas in beginning
    while (inputArray[0] == ',') {
        inputArray = inputArray.slice(1, inputArray.length);
    }
    
    // gets rid of all commas at end
    while (inputArray[inputArray.length-1] == ',') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // gets rid of all commas in between 
    for (j=0; j<2; j++) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
                inputArray = inputArray.split(',,').join(',');
            }
        }
    }
    
    // gets rid of all decimals at end
    while (inputArray[inputArray.length-1] == '.') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // deals with first decimal
    if (inputArray[0] == '.') {
        inputArray = inputArray.split('.').join('0.');
    }
    
    // adds 0 in front of any decimal in between 
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
                inputArray = inputArray.split(',.').join(',0.');
            }
            else {
                inputArray = inputArray.split(',.').join('');
            }
            
        }
    }
    
    ///////////////////// array manipulation //////////////////////////
    
    
    
    
    
    // converts input into array 
    var array = JSON.parse("[" + inputArray + "]");
    var len = array.length;

    // sorts in order
    array.sort(function(a,b) {
        return a - b;
    });
    
    
    
    ///
    var num = $("#percentilecalc").val();
    var per = $("#percentilecalc2").val();
    
    // find percentile by number
    if (num > 0) {
        var operator = $("#percentileoperator").val();
        var count = 0;
        for (i=0; i<len; i++) {
            if (operator === "0") {
                if (array[i] < num) {
                    count += 1;
                }
            }
            if (operator === "1") {
                if (num == array[i]) {
                    count += 1;
                }
                if (array[i] < num) {
                    count += 1;
                }
            }
        }
    
        var ans = count/len;
    
        
    }
    // find number from percentile
    if (per > 0 && per <= 1) {
        var numPer = Number(per) * len;
        
        if (Number.isInteger(numPer)) {
            var ans = (array[numPer-1] + array[numPer]) / 2
        }
        else {
            numPer = Math.ceil(numPer);
            var ans = array[numPer-1];
        }  
    }
    
    $("#percentiletableans").val(Number(parseFloat(ans).toFixed(4)));
}





///////////////////////////////////////////////////////////////////////////////////////////
// which z score test to display

function ZScoreOption() {
    
    // z score
    if ($("#z-score-option1").prop('checked')) {
        document.getElementById("z-table-input-xvalue").className = " ";
        document.getElementById("z-table-input-percentile").className = "hide";
        document.getElementById("z-table-inputoperator").className = "hide";
        document.getElementById("zscorex2").style.display='none';
        document.getElementById("zscoretext").style.display='none';
        document.getElementById("z-score-percentile-text").className = "hide";
        document.getElementById("z-score-z-text").className = " ";
        document.getElementById("z-score-xvalue-text").className = "hide";
        document.getElementById("zscoresolveoutputtableans2").className = "hide";
        $("#zscoresolveoutputtableans").val(" ");
        
    }
    // percentile from z score
    else if ($("#z-score-option2").prop('checked')) {
        document.getElementById("z-table-inputoperator").className = " ";
        document.getElementById("z-table-input-percentile").className = "hide";
        document.getElementById("z-table-input-xvalue").className = "hide";
        document.getElementById("z-score-percentile-text").className = " ";
        document.getElementById("z-score-z-text").className = "hide";
        document.getElementById("z-score-xvalue-text").className = "hide";
        document.getElementById("zscoresolveoutputtableans2").className = "hide";
        $("#zscoresolveoutputtableans").val(" ");
        
        var x = $("#zscoreoperator").val();
    
        if (x == 3) {
            document.getElementById("zscorex2").style.display='block';
            document.getElementById("zscoretext").style.display='block';
        }
        if (x != 3 ) {
            document.getElementById("zscorex2").style.display='none';
            document.getElementById("zscoretext").style.display='none';
        }
        
    }
    // z score from percentile
    else {
        document.getElementById("z-table-input-percentile").className = " ";
        document.getElementById("z-table-inputoperator").className = "hide";
        document.getElementById("z-table-input-xvalue").className = "hide";
        document.getElementById("zscorex2").style.display='none';
        document.getElementById("zscoretext").style.display='none';
        document.getElementById("z-score-percentile-text").className = "hide";
        document.getElementById("z-score-z-text").className = " ";
        document.getElementById("z-score-xvalue-text").className = " ";
        document.getElementById("zscoresolveoutputtableans2").className = "output";
        $("#zscoresolveoutputtableans").val(" ");
        
    }
    
}


// decides which function run
function calcZScoreFunc() {
    
    // z score
    if ($("#z-score-option1").prop('checked')) {
        solveZScore();
    }
    // percentile from z score
    else if ($("#z-score-option2").prop('checked')) {
        calcZScore();
    }
    // z score from percentile
    else {
        percentileToZScore();
    }
}




///////////////////////////////////////////////////////////////////////////////////////////
// solving for z score 

function solveZScore() {
    
    var mean = 0;
    var sd = 0;
    var x = 0;
    
    mean = Number($("#zscoremeansolve").val());
    sd = Number($("#zscoresdsolve").val());
    x = Number($("#zscorexvaluesolve").val());
    
    var z = (x - mean)/sd;
    
    $("#zscoresolveoutputtableans").val(Number(parseFloat(z).toFixed(4)));
}



///////////////////////////////////////////////////////////////////////////////////////////
// finding percentile using z score 

function calcZScore() {
    
   
    var mean = Number($("#zscoremeansolve").val());
    var sd = Number($("#zscoresdsolve").val());
    var x = Number($("#zscorexvaluesolve").val());
    var operator = $("#zscoreoperator").val();
    var second_num = Number($("#zscorex2").val());
    
    
    var ans = 0;
    
    // greater than
    if (operator == 1) {
        ans = 1 - calcPercentileNormDist3(mean,x,sd);
    }
    // less than
    if (operator == 2) {
        ans = calcPercentileNormDist3(mean,x,sd);
    }
    // in between
    if (operator == 3) {
        
        if (x < second_num) {
             ans = calcPercentileNormDist3(mean,second_num,sd) - calcPercentileNormDist3(mean,x,sd);
        }
        else {
            ans = calcPercentileNormDist3(mean,x,sd) - calcPercentileNormDist3(mean,second_num,sd);
        }
    }
    
    $("#zscoresolveoutputtableans").val(Number(parseFloat(ans).toFixed(4)));
    
}



// calculates percentile from z score
function calcPercentileNormDist3(M,Z,SD) {
    
    var prob = 0;
    with (Math) {
        if (SD<0) {
            alert("the standard deviation can not be negative.");
        }
        else if (SD==0) {
            if (Z>M) {
                prob = 0;
            }
            else {
                prob = 1;
            }
        }
        else {
            prob = normalDist((Z-M)/SD);
            prob = round(100000*prob)/100000;
        }
    }
    
    return prob;
    
}

// takes in z score and does calc for normal dist
function normalDist(X) {
    var T = 1/(1+.2316419*Math.abs(X));
    var D = .3989423*Math.exp(-X*X/2);
    var prob = D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
    if (X>0) {
        prob = 1-prob;
    }
    return prob;
}




// uses z score to find percentiel
function percentileToZScore() {
    
    var zTable = [0.5000,0.5040,0.5080,0.5120,0.5160,0.5199,0.5239,0.5279,0.5319,0.5359,
                 0.5398,0.5438,0.5478,0.5517,0.5557,0.5596,0.5636,0.5675,0.5714,0.5753,
                 0.5793,0.5832,0.5871,0.5910,0.5948,0.5987,0.6026,0.6064,0.6103,0.6141,
                 0.6179,0.6217,0.6255,0.6293,0.6331,0.6368,0.6406,0.6443,0.6480,0.6517,
                 0.6554,0.6591,0.6628,0.6664,0.6700,0.6736,0.6772,0.6808,0.6844,0.6879,
                 0.6915,0.6950,0.6985,0.7019,0.7054,0.7088,0.7123,0.7157,0.7190,0.7224,
                 0.7257,0.7291,0.7324,0.7357,0.7389,0.7422,0.7454,0.7486,0.7517,0.7549,
                 0.7580,0.7611,0.7642,0.7673,0.7704,0.7734,0.7764,0.7794,0.7823,0.7852,
                 0.7881,0.7910,0.7939,0.7967,0.7995,0.8023,0.8051,0.8078,0.8106,0.8133,
                 0.8159,0.8186,0.8212,0.8238,0.8264,0.8289,0.8315,0.8340,0.8365,0.8389,
                 0.8413,0.8438,0.8461,0.8485,0.8508,0.8531,0.8554,0.8577,0.8599,0.8621,
                 0.8643,0.8665,0.8686,0.8708,0.8729,0.8749,0.8770,0.8790,0.8810,0.8830,
                 0.8849,0.8869,0.8888,0.8907,0.8925,0.8944,0.8962,0.8980,0.8997,0.9015,
                 0.9032,0.9049,0.9066,0.9082,0.9099,0.9115,0.9131,0.9147,0.9162,0.9177,
                 0.9192,0.9207,0.9222,0.9236,0.9251,0.9265,0.9279,0.9292,0.9306,0.9319,
                 0.9332,0.9345,0.9357,0.9370,0.9382,0.9394,0.9406,0.9418,0.9429,0.9441,
                 0.9452,0.9463,0.9474,0.9484,0.9495,0.9505,0.9515,0.9525,0.9535,0.9545,
                 0.9554,0.9564,0.9573,0.9582,0.9591,0.9599,0.9608,0.9616,0.9625,0.9633,
                 0.9641,0.9649,0.9656,0.9664,0.9671,0.9678,0.9686,0.9693,0.9699,0.9706,
                 0.9713,0.9719,0.9726,0.9732,0.9738,0.9744,0.9750,0.9756,0.9761,0.9767,
                 0.9772,0.9778,0.9783,0.9788,0.9793,0.9798,0.9803,0.9808,0.9812,0.9817,
                 0.9821,0.9826,0.9830,0.9834,0.9838,0.9842,0.9846,0.9850,0.9854,0.9857,
                 0.9861,0.9864,0.9868,0.9871,0.9875,0.9878,0.9881,0.9884,0.9887,0.9890,
                 0.9893,0.9896,0.9898,0.9901,0.9904,0.9906,0.9909,0.9911,0.9913,0.9916,
                 0.9918,0.9920,0.9922,0.9925,0.9927,0.9929,0.9931,0.9932,0.9934,0.9936,
                 0.9938,0.9940,0.9941,0.9943,0.9945,0.9946,0.9948,0.9949,0.9951,0.9952,
                 0.9953,0.9955,0.9956,0.9957,0.9959,0.9960,0.9961,0.9962,0.9963,0.9966,
                 0.9965,0.9966,0.9967,0.9968,0.9969,0.9970,0.9971,0.9972,0.9973,0.9974,
                 0.9974,0.9975,0.9976,0.9977,0.9977,0.9978,0.9979,0.9979,0.9980,0.9981,
                 0.9981,0.9982,0.9982,0.9983,0.9984,0.9984,0.9985,0.9985,0.9986,0.9986,
                 0.9987,0.9987,0.9987,0.9988,0.9988,0.9989,0.9989,0.9989,0.9990,0.9990,
                 0.9990,0.9991,0.9991,0.9991,0.9992,0.9992,0.9992,0.9992,0.9993,0.9993,
                 0.9993,0.9993,0.9994,0.9994,0.9994,0.9994,0.9994,0.9995,0.9995,0.9995,
                 0.9995,0.9995,0.9995,0.9996,0.9996,0.9996,0.9996,0.9996,0.9996,0.9997,
                 0.9997,0.9997,0.9997,0.9997,0.9997,0.9997,0.9997,0.9997,0.9997,0.9998];
    
    var mean = 0;
    var sd = 0;
    var x = 0;
    mean = Number($("#zscoremeansolve").val());
    sd = Number($("#zscoresdsolve").val());
    x = Number($("#zscorexvaluesolve").val());
    
    var ans = 0;
    
    if (x < 0 || x > 1) {
        alert("Please enter the percentile in decimal form  \n(a number between 0 and 1) \nEx: 70% should be entered as 0.70");
    }
    else {
        if (x === 0) {
        }
        if (x === 1) {
        }

        if (x >= .5) {   
            for (i=0; i<zTable.length; i++) {        
                if (x == zTable[i]) {
                    ans = i;
                    break;
                }
                if (x < zTable[i]) {
                    ans = i;
                    break;
                }
            }
        }

        if (x <= .5) {
            for (i=0; i<zTable.length; i++) {        
                if ((1-x) == zTable[i]) {
                    ans = i * -1;
                    break;
                }
                if ((1-x) < zTable[i]) {
                    ans = i * -1;
                    break;
                }
            }
        }

        zTableValue = ans/100;

        zScore = mean+(zTableValue*sd);

        $("#zscoresolveoutputtableans").val(Number(parseFloat(zScore).toFixed(4)));
        $("#zscoresolveoutputtableans2").val(Number(parseFloat(zTableValue).toFixed(4)));
        
    }
    
    
}










//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 5:

///////////////////////////////////////////////////////////////////////////////////////////
// calculating correlation coefficient 

function calcCorrelationCoefficient() {
    
    
    ///////////////////// array manipulation //////////////////////////
    // takes in array
    // takes in array
    var inputArray = $("#inputcorrelationCoefficientX").val();
    
    // gets rid of all commas in beginning
    while (inputArray[0] == ',') {
        inputArray = inputArray.slice(1, inputArray.length);
    }
    
    // gets rid of all commas at end
    while (inputArray[inputArray.length-1] == ',') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // gets rid of all commas in between 
    for (j=0; j<2; j++) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
                inputArray = inputArray.split(',,').join(',');
            }
        }
    }
    
    // gets rid of all decimals at end
    while (inputArray[inputArray.length-1] == '.') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // deals with first decimal
    if (inputArray[0] == '.') {
        inputArray = inputArray.split('.').join('0.');
    }
    
    // adds 0 in front of any decimal in between 
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
                inputArray = inputArray.split(',.').join(',0.');
            }
            else {
                inputArray = inputArray.split(',.').join('');
            }
            
        }
    }
    
    ///////////////////// array manipulation //////////////////////////
    
    var inputArrayX = inputArray;
    
    
    ///////////////////// array manipulation //////////////////////////
    // takes in array
    inputArray = $("#inputcorrelationCoefficientY").val();
    
    // gets rid of all commas in beginning
    while (inputArray[0] == ',') {
        inputArray = inputArray.slice(1, inputArray.length);
    }
    
    // gets rid of all commas at end
    while (inputArray[inputArray.length-1] == ',') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // gets rid of all commas in between 
    for (j=0; j<2; j++) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
                inputArray = inputArray.split(',,').join(',');
            }
        }
    }
    
    // gets rid of all decimals at end
    while (inputArray[inputArray.length-1] == '.') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // deals with first decimal
    if (inputArray[0] == '.') {
        inputArray = inputArray.split('.').join('0.');
    }
    
    // adds 0 in front of any decimal in between 
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
                inputArray = inputArray.split(',.').join(',0.');
            }
            else {
                inputArray = inputArray.split(',.').join('');
            }
            
        }
    }
    
    ///////////////////// array manipulation //////////////////////////
    
    var inputArrayY = inputArray;
    
    
    
    // converts input into array 
    var arrayX = JSON.parse("[" + inputArrayX + "]");
    var arrayY = JSON.parse("[" + inputArrayY + "]");
    
    // finds sum and mean
    if (arrayX.length) {
        var sumX = arrayX.reduce(function(a,b) { return a + b; });
    }
    var averageX = sumX/arrayX.length;

    if (arrayY.length) {
        var sumY = arrayY.reduce(function(a,b) { return a + b; });
    }
    var averageY = sumY/arrayY.length;

    // finds SAMPLE variance X
    function numerator1(val) {
        return ((val-averageX)*(val-averageX));
    }
    
    var varianceX = arrayX.map(numerator1); 
    varianceX = varianceX.reduce(function(a,b) { return (a + b); }); 

    varianceX = varianceX/(arrayX.length-1);
    
    var sdX = Math.sqrt(varianceX);
   
    // finds SAMPLE variance Y
    function numerator2(val) {
        return ((val-averageY)*(val-averageY));
    }
                
    var varianceY = arrayY.map(numerator2); 
    varianceY = varianceY.reduce(function(a,b) { return (a + b); });  
    varianceY = varianceY/(arrayY.length-1);
    
    var sdY = Math.sqrt(varianceY);
    
    var sumRightSide = 0;
    if (arrayX.length === arrayY.length) {
        
        for (i=0; i<arrayX.length; i++) {
            var left = (arrayX[i] - averageX)/sdX;
            var right = (arrayY[i] - averageY)/sdY;
            sumRightSide = sumRightSide + (left*right);
        }
        var ans = 1/(arrayX.length-1)*sumRightSide;
        var rSquared = ans*ans;
        $("#rsquaredanswer").val(Number(parseFloat(rSquared).toFixed(4)));
        $("#correlationcoefficientanswer").val(Number(parseFloat(ans).toFixed(4)));
        
        // calculates equation of a regression line 
        var m = parseFloat(ans * sdY/sdX).toFixed(2);
        
        var b = parseFloat(averageY - m*averageX).toFixed(2);
        
        if(b>=0) {
            var ans2 = "ŷ = " + m + "x + " + b;
        }
        if(b<0) {
            var ans2 = "ŷ = " + m + "x - " + (b*-1);
        }
        
        $("#regressionlineanswer").val(ans2);
        
        
        // creates scatter plot
        var trace1 = {
            x: arrayX,
            y: arrayY,
            mode: 'markers',
            type: 'scatter',
            name: '',
            
        };
        
        // creates line of best fit
        var arrayLOBF = [];
        for (i=0; i< arrayX.length; i++) {
            var yLine = Number(m)*arrayX[i] + Number(b);
            arrayLOBF.push(yLine);
        }
        
        var trace2 = {
            x: arrayX,
            y: arrayLOBF,
            mode: 'lines',
            type: 'scatter',
            name: '',
            
        };
        
        var data = [trace1, trace2];
        
        var layout = {
            title: 'Scatter Plot'
        };
        
        Plotly.newPlot('scatterplot', data, layout);
        
        
        // creates residual plot
        
        var residualArray = [];
        var rmse = 0;
        for (i=0; i< arrayX.length; i++) {
            var yHat = Number(b) + Number(m)*arrayX[i];
            var res = arrayY[i] - yHat;
            residualArray.push(res);
            rmse = rmse + res*res;
        }
        
        rmse = Math.sqrt(rmse / (arrayX.length-1));
        $("#rmseanswer").val(Number(parseFloat(rmse).toFixed(4)));
        
        var trace1 = {
            x: arrayX,
            y: residualArray,
            mode: 'markers',
            type: 'scatter',
            
        };
        
        var data = [trace1];
        
        var layout = {
            title: 'Residual Plot'
        };
        
        Plotly.newPlot('residualplot', data, layout);
        
        
        
        
        
        
        
    }
    else {
        var num = arrayX.length- arrayY.length;
        alert("The number of X-Values must equal the number of Y-Values \n\nX-Values: " + (arrayX.length) + "\nY-Values: " + (arrayY.length));
    }
    
    
    
    
             
    
}


    


///////////////////////////////////////////////////////////////////////////////////////////
// calculating residual

function calcResidual() {
    
    var xVal = $("#residualxvalue").val();
    if (Number(xVal) >= 0 || Number(xVal) < 0) {
        xVal = Number(xVal);
    }
    else {
        var indexOfDash = xVal.indexOf("/");
        var firstNum = xVal.slice(0,indexOfDash);
        var secondNum = xVal.slice(indexOfDash+1);
        xVal = firstNum/secondNum;
    }
    
    var bVal = $("#residualbvalue").val();
    if (Number(bVal) >= 0 || Number(bVal) < 0) {
        bVal = Number(bVal);
    }
    else {
        var indexOfDash = bVal.indexOf("/");
        var firstNum = bVal.slice(0,indexOfDash);
        var secondNum = bVal.slice(indexOfDash+1);
        bVal = firstNum/secondNum;
    }
    
    var xTest = $("#residualxtest").val();
    if (Number(xTest) >= 0 || Number(xTest) < 0) {
        xTest = Number(xTest);
    }
    else {
        var indexOfDash = xTest.indexOf("/");
        var firstNum = xTest.slice(0,indexOfDash);
        var secondNum = xTest.slice(indexOfDash+1);
        xTest = firstNum/secondNum;
    }
    
    var yTest = $("#residualytest").val();
    if (Number(yTest) >= 0 || Number(yTest) < 0) {
        yTest = Number(yTest);
    }
    else {
        var indexOfDash = yTest.indexOf("/");
        var firstNum = yTest.slice(0,indexOfDash);
        var secondNum = yTest.slice(indexOfDash+1);
        yTest = firstNum/secondNum;
    }
    
    var yHat = bVal + xVal*xTest;
    
    var ans = yTest - yHat;
    
    $("#residualanswer").val(Number(parseFloat(ans).toFixed(4)));
}




















//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 6:


///////////////////////////////////////////////////////////////////////////////////////////
// statistics and probability
























//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 7:


///////////////////////////////////////////////////////////////////////////////////////////
// calculating numbers with sets


function calcSet() {
    
  
    
    ///////////////////// array manipulation //////////////////////////
    // takes in array
    // takes in array
    var inputArray = $("#inputintersectionunion1").val();
    
    // gets rid of all commas in beginning
    while (inputArray[0] == ',') {
        inputArray = inputArray.slice(1, inputArray.length);
    }
    
    // gets rid of all commas at end
    while (inputArray[inputArray.length-1] == ',') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // gets rid of all commas in between 
    for (j=0; j<2; j++) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
                inputArray = inputArray.split(',,').join(',');
            }
        }
    }
    
    // gets rid of all decimals at end
    while (inputArray[inputArray.length-1] == '.') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // deals with first decimal
    if (inputArray[0] == '.') {
        inputArray = inputArray.split('.').join('0.');
    }
    
    // adds 0 in front of any decimal in between 
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
                inputArray = inputArray.split(',.').join(',0.');
            }
            else {
                inputArray = inputArray.split(',.').join('');
            }
            
        }
    }
    
    ///////////////////// array manipulation //////////////////////////
    
    var inputArrayX = inputArray;
    
    
    ///////////////////// array manipulation //////////////////////////
    // takes in array
    inputArray = $("#inputintersectionunion2").val();
    
    // gets rid of all commas in beginning
    while (inputArray[0] == ',') {
        inputArray = inputArray.slice(1, inputArray.length);
    }
    
    // gets rid of all commas at end
    while (inputArray[inputArray.length-1] == ',') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // gets rid of all commas in between 
    for (j=0; j<2; j++) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] == ',' && inputArray[i+1] == ',') {
                inputArray = inputArray.split(',,').join(',');
            }
        }
    }
    
    // gets rid of all decimals at end
    while (inputArray[inputArray.length-1] == '.') {
        inputArray = inputArray.slice(0, inputArray.length-1);
    }
    
    // deals with first decimal
    if (inputArray[0] == '.') {
        inputArray = inputArray.split('.').join('0.');
    }
    
    // adds 0 in front of any decimal in between 
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i] == ',' && inputArray[i+1] == '.' ) {
            if (inputArray[i+2] == 1 || inputArray[i+2] == 2 || inputArray[i+2] == 3 || inputArray[i+2] == 4 || inputArray[i+2] == 5 || inputArray[i+2] == 6 || inputArray[i+2] == 7 || inputArray[i+2] == 8 || inputArray[i+2] == 9 || inputArray[i+2] == 0) {
                inputArray = inputArray.split(',.').join(',0.');
            }
            else {
                inputArray = inputArray.split(',.').join('');
            }
            
        }
    }
    
    ///////////////////// array manipulation //////////////////////////
    
    var inputArrayY = inputArray;
    
    
    
    
    // converts input into array 
    var arrayX = JSON.parse("[" + inputArrayX + "]");
    var arrayY = JSON.parse("[" + inputArrayY + "]");
    
    ///////////////// finds X intersect (and) Y
    var xintersecty = [];
    // interates through first set
    for (i=0; i<arrayX.length; i++) {
        // compares first set with second set
        for (h=0; h<arrayY.length; h++) {
            // finds an intersect
            if (arrayX[i] === arrayY[h]) {
                var num = arrayX[i];
                var count = 0;
                // tests to see if intersect already exists in intersect array
                for (j=0; j<xintersecty.length; j++) {
                    if (num === xintersecty[j]) {
                        // makes count 1 if found
                        count += 1;
                    }
                }
                if (count === 0) {
                    xintersecty.push(num);
                }
            }
        }
    }
    
    // sorts the array for presentation
    xintersecty.sort(function(a,b) {
        return a - b;
    });


    // puts intersection into a string         
    var intersection = "{";
    for (i=0; i<xintersecty.length-1; i++) {
        
        intersection = intersection + xintersecty[i] + ", ";
    }
    intersection = intersection + xintersecty[xintersecty.length-1] +"}"
    
    $("#xintersectanswer").val(intersection);
    
    
    
    
    ////////////// creates array for union
    var union = [];
    
    // iterates through 1st set
    for (i=0; i<arrayX.length; i++) {
        // checks against union set
        var count = 0;
        for (h=0; h<union.length; h++) {
            if (arrayX[i] === union[h]) {
                count += 1;
            }
        }
        if (count === 0) {
            union.push(arrayX[i]);
        } 
    }
    
    // iterates through 2nd set
    for (i=0; i<arrayY.length; i++) {
        // checks against union set
        var count = 0;
        for (h=0; h<union.length; h++) {
            if (arrayY[i] === union[h]) {
                count += 1;
            }
        }
        if (count === 0) {
            union.push(arrayY[i]);
        } 
    }
    
    // sorts the array for presentation
    union.sort(function(a,b) {
        return a - b;
    });
    
    // puts union into a string         
    var unionString = "{";
    for (i=0; i<union.length-1; i++) {
        
        unionString = unionString + union[i] + ", ";
    }
    unionString = unionString + union[union.length-1] +"}"
    
    $("#xunionyanswer").val(unionString);
    

    
    ////////////// relative complement or difference between sets
    
    var relativeComplement1m2 = [];
    
    // interates through 1st
    for (i=0; i<arrayX.length; i++) {
        // interates through second
        var count = 0;
        for (h=0; h<arrayY.length; h++) {
            if (arrayX[i] === arrayY[h]) {
                count += 1 ;
            }
        }
        if (count === 0) {
            relativeComplement1m2.push(arrayX[i]);
        }
    }
    
    // sorts the array for presentation
    relativeComplement1m2.sort(function(a,b) {
        return a - b;
    });
    
    // puts 1-2 into a string         
    var m12String = "{";
    for (i=0; i<relativeComplement1m2.length-1; i++) {
        
        m12String = m12String + relativeComplement1m2[i] + ", ";
    }
    m12String = m12String + relativeComplement1m2[relativeComplement1m2.length-1] +"}"
    
    $("#aminusbrelativecomplement").val(m12String);
    
    
    
    
    
    var relativeComplement2m1 = [];
    
    // interates through 1st
    for (i=0; i<arrayY.length; i++) {
        // interates through second
        var count = 0;
        for (h=0; h<arrayX.length; h++) {
            if (arrayY[i] === arrayX[h]) {
                count += 1 ;
            }
        }
        if (count === 0) {
            relativeComplement2m1.push(arrayY[i]);
        }
    }
    
    // sorts the array for presentation
    relativeComplement2m1.sort(function(a,b) {
        return a - b;
    });
    
    // puts 2-1 into a string         
    var m21String = "{";
    for (i=0; i<relativeComplement2m1.length-1; i++) {
        
        m21String = m21String + relativeComplement2m1[i] + ", ";
    }
    
    
    m21String = m21String + relativeComplement2m1[relativeComplement2m1.length-1] +"}"
    
    $("#bminusarelativecomplement").val(m21String);
    
    ///////// testing for subsets 

    // no
    

    
    
}


///////////////////////////////////////////////////////////////////////////////////////////
// calculating conditional probabilities


// hides other boxes if one box is entered for conditional probability
function hideConditionalBox() {
    

    
    aGivB = $("#probagivb").val();
    bGivA = $("#probbgiva").val();
    aAndB = $("#probaandb").val();
    
    if (aGivB > 0 && aGivB < 1) {
        document.getElementById("probbgiva").className = "output";
        document.getElementById("probaandb").className = "output";
        document.getElementById("probaandb").disabled = true;
        document.getElementById("probbgiva").disabled = true;
         
    }
    else if (aGivB < 0 || aGivB > 1) {
        alert("Probability must be between 0 and and 1");
        $("#probagivb").val(0);
    }
    else {
        if (bGivA > 0 && bGivA < 1) {
            document.getElementById("probagivb").className = "output";
            document.getElementById("probaandb").className = "output";
            document.getElementById("probagivb").disabled = true;
            document.getElementById("probaandb").disabled = true;
            
        }
        else if (bGivA < 0 || bGivA > 1) {
            alert("Probability must be between 0 and and 1");
            $("#probbgiva").val(0);
        }
        else {
            if (aAndB > 0 && aAndB < 1) {
                document.getElementById("probagivb").className = "output";
                document.getElementById("probbgiva").className = "output";
                document.getElementById("probagivb").disabled = true;
                document.getElementById("probbgiva").disabled = true;
                
            }
            else if (aAndB < 0 || aAndB > 1) {
                alert("Probability must be between 0 and and 1");
                $("#probaandb").val(0);
            }
            else {
                document.getElementById("probagivb").className = "";
                document.getElementById("probbgiva").className = "";
                document.getElementById("probaandb").className = "";
                
                document.getElementById("probagivb").disabled = false;
                document.getElementById("probbgiva").disabled = false;
                document.getElementById("probaandb").disabled = false;
            }
        }
    }
        
}



function calcConditionalProbability() {
    
    var pA = Number($("#proba").val());
    var pB = Number($("#probb").val());
    var AgivB = Number($("#probagivb").val());
    var bGivA = Number($("#probbgiva").val());
    var aAndB = Number($("#probaandb").val());
    
    
    if ((pA > 0 && pA < 1) && (pB > 0 && pB < 1)) {
        if (AgivB > 0 && AgivB < 1) {
            aAndB = AgivB * pB; 
            bGivA = aAndB / pA;
        }
        if (bGivA > 0 && bGivA < 1) {
            aAndB = bGivA * pA;
            AgivB = aAndB / pB;
        }
        if (aAndB > 0 && aAndB < 1) {
            AgivB = aAndB / pB;
            bGivA = aAndB / pA;
        }
    }
    else if (pA > 0 && pA < 1) {
        if (AgivB > 0 && AgivB < 1) {
            
        }
        if (bGivA > 0 && bGivA < 1) {
            aAndB = bGivA * pA;
        }
        if (aAndB > 0 && aAndB < 1) {
            bGivA = aAndB / pA;
        }
        
    }
    else if (pB > 0 && pB < 1) {
        if (AgivB > 0 && AgivB < 1) {
            aAndB = AgivB * pB;
        }
        if (bGivA > 0 && bGivA < 1) {
        }
        if (aAndB > 0 && aAndB < 1) {
            AgivB = aAndB / pB;
        }
    }
    else if (pA < 0 || pA > 1) {
        alert("Probability of A must be between 0 and 1");
        var pA = $("#proba").val(0);
    }
    else if (pB < 0 || pB > 1) {
        alert("Probability of B must be between 0 and 1");
        var pB = $("#probb").val(0);
    }
    
    
    $("#probagivbans").val(Number(parseFloat(AgivB).toFixed(4)));
    $("#probbgivaans").val(Number(parseFloat(bGivA).toFixed(4)));
    $("#probaandbans").val(Number(parseFloat(aAndB).toFixed(4)));
    
}


















//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 8:



///////////////////////////////////////////////////////////////////////////////////////////
// permutations and combinations

function calcPermAndComb() {
    
    var n = Number($("#permcondn").val());
    var k = Number($("#permcondk").val());
    var top = 1;
    var bottom = 1;
    
    // checks for validity
    if (k > 0 && k <= n) {
        // calculates permutation
        var count = n;
        while (count>0) {
            top *= count;
            count -= 1;
        }
    
        var nk = n-k;
        while (nk>0) {
            bottom *= nk;
            nk -= 1;
        }
        
        var perm = top/bottom;
        
        // combination calc
        var bottom2 = 1;
        
        var countk = k;
        while (countk>0) {
            bottom2 *= countk;
            countk -= 1;
        }
        
        var comb = perm/bottom2;
        
        if (perm > 1000) {
            perm = perm.toExponential(4);
        }
        else {
            perm = Number(parseFloat(perm).toFixed(4));
        }
        if (comb > 1000) {
            comb = comb.toExponential(4);
        }
        else {
            comb = Number(parseFloat(comb).toFixed(4));
        }
        
        
        $("#permans").val(perm);
        $("#combans").val(comb);
    
        
    }
    else {
        alert("k must be greater than 0 and less than or equal to n");
    }
    
    
}
















//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 9:



///////////////////////////////////////////////////////////////////////////////////////////
// discrete variable probability



// displays the proper table
function discreteTableDisplay() {
    
    // takes x value 
    var numX = Number($("#numofXval").val());
    
    // turn all boxes gray
    for (i=0; i<10; i++) {
        var numChoice = i+1;
        var xString = "x" + numChoice;
        var rString = "r" + numChoice;
        var pString = "p" + numChoice;
        
        document.getElementById(xString).disabled = true;
        document.getElementById(rString).disabled = true;
        document.getElementById(pString).disabled = true;
        
        document.getElementById(xString).className = "output";
        document.getElementById(rString).className = "output";
        document.getElementById(pString).className = "output";
        

    }
    
    
    // turn all boxes that arent using to null
    for (i=numX; i<10; i++) {
        var numChoice = i+1;
        var xString = "x" + numChoice;
        var rString = "r" + numChoice;
        var pString = "p" + numChoice;
        $("#" + xString).val("");
        $("#" + rString).val("");
        $("#" + pString).val("");
    }
    
    
    
    // reveals x value boxes
    for (i=0; i<numX; i++) {
        var numChoice = i+1;
        var stringChoice = "x" + numChoice;
        document.getElementById(stringChoice).className = "";
        document.getElementById(stringChoice).disabled = false;
    }
    
    // reveals EITHER raw boxes or probabilities
    
    // 1 is raw
    // 2 is prob
    var operator = Number($("#raworprob").val());
    
    
    // reveal raw boxes
    if (operator === 1) {
        for (i=0; i<numX; i++) {
            var numChoice = i+1;
            var stringChoice = "r" + numChoice;
            document.getElementById(stringChoice).className = "";
            document.getElementById(stringChoice).disabled = false;
        }
    }
    // reveal prob boxes
    else if (operator === 2) {
        for (i=0; i<numX; i++) {
            var numChoice = i+1;
            var stringChoice = "p" + numChoice;
            document.getElementById(stringChoice).className = "";
            document.getElementById(stringChoice).disabled = false;
        }
    }
    
}




function calcDiscreteRanVar() {
    
    var xs = [];
    var rs = [];
    var ps = [];
    
    // takes x value 
    var numX = Number($("#numofXval").val());
    
    // reveals EITHER raw boxes or probabilities
    
    // 1 is raw
    // 2 is prob
    var operator = Number($("#raworprob").val());
    
    
    // takes in all the values in arrays
    for (i=0;i<numX;i++) {
        var numChoice = i+1;
        var xString = "x" + numChoice;
        var rString = "r" + numChoice;
        var pString = "p" + numChoice;
        
        xs.push(Number($("#" + xString).val()));
        rs.push(Number($("#" + rString).val()));
        ps.push(Number($("#" + pString).val()));
    }
    
    
    
    
    if (operator === 1) {
        var sum = 0;
        ps = [];
        // finds sum of raw # to turn into probs
        if (rs.length) {
            sum = rs.reduce(function(a,b) { return a + b; });
        }
        
        // calculates probabilites 
        for (i=0; i<numX; i++) {
            var numChoice = i+1;
            var pString = "p" + numChoice;
            var temp = parseFloat(rs[i]/sum).toFixed(4)
            $("#" + pString).val(temp);
            ps.push((rs[i]/sum))
        }
        
        var meanVal = 0;
        // solves for mean(expected value)
        for (i=0; i<xs.length; i++) {
            meanVal = meanVal + xs[i] * ps[i];
        }
        $("#discretevartableanswermev").val(Number(parseFloat(meanVal).toFixed(4)));
        
        // solves for variance and sd
        var variance = 0;
        for (i=0;i<xs.length;i++) {
            variance = variance + ((xs[i]-meanVal)**2)*ps[i];
        }
        var sd = Math.sqrt(variance);
        $("#discretevartableanswervar").val(Number(parseFloat(variance).toFixed(4)));
        $("#discretevartableanswersd").val(Number(parseFloat(sd).toFixed(4)));
       
        

        
        // solves probability problem
        var op = Number($("#operatorprobofX").val());
        var testX = Number($("#xinputdiscreteranvar").val());
        var ans = 0;
            
            
        for (i=0; i<xs.length; i++) {

            // if equal
            if (op === 0) {
                if (xs[i] === testX ) {
                    ans = ps[i];
                }
            }
            // if greater than or equal
            if (op === 4) {
                if (xs[i] === testX || xs[i] > testX) {
                    ans += ps[i]
                }
            }
            // greater than
            if (op === 1) {
                if (xs[i] > testX) {
                    ans += ps[i]
                }
            }
            // less than
            if (op === 2) {
                if (xs[i] < testX) {
                    ans += ps[i]
                }
            }
            // less than or equal
            if (op === 5) {
                if (xs[i] === testX || xs[i] < testX) {
                    ans += ps[i]
                }
            }

        }


        $("#xoutputdiscreteranvar").val(Number(parseFloat(ans).toFixed(4)));
        
    }
    
    else if (operator === 2) {
        // finds sum
        var sum = 0;
        if (ps.length) {
            sum = ps.reduce(function(a,b) { return a + b; });
        }
        
        var meanVal = 0;
        // solves for mean(expected value)
        for (i=0; i<xs.length; i++) {
            meanVal = meanVal + xs[i] * ps[i];
        }
        $("#discretevartableanswermev").val(Number(parseFloat(meanVal).toFixed(4)));
        
        // solves for variance and sd
        var variance = 0;
        for (i=0;i<xs.length;i++) {
            variance = variance + ((xs[i]-meanVal)**2)*ps[i];
        }
        var sd = Math.sqrt(variance);
        
        
        // checks to make sure all entered probabilities equal 1
        if (sum === 1) {
            var op = Number($("#operatorprobofX").val());
            var testX = Number($("#xinputdiscreteranvar").val());
            var ans = 0;
            
            
            for (i=0; i<xs.length; i++) {
                
                // if equal
                if (op === 0) {
                    if (xs[i] === testX ) {
                        ans = ps[i];
                    }
                }
                // if greater than or equal
                if (op === 4) {
                    if (xs[i] === testX || xs[i] > testX) {
                        ans += ps[i]
                    }
                }
                // greater than
                if (op === 1) {
                    if (xs[i] > testX) {
                        ans += ps[i]
                    }
                }
                // less than
                if (op === 2) {
                    if (xs[i] < testX) {
                        ans += ps[i]
                    }
                }
                // less than or equal
                if (op === 5) {
                    if (xs[i] === testX || xs[i] < testX) {
                        ans += ps[i]
                    }
                }
                
            }
            
            
            $("#xoutputdiscreteranvar").val(Number(parseFloat(ans).toFixed(4)));
                    
        }
        else {
            alert("A valid probability model requires the probabilities to sum up to 1.")
        }
    }
    
    
    
}





//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 10:


///////////////////////////////////////////////////////////////////////////////////////////
// population probabilty, samplying distribution 

function poppropBoxAppear() {
    var x = $("#popproboperator").val();
    
    if (x == 3) {
        document.getElementById("popprobtext").style.display='block';
        document.getElementById("populationprobability2").style.display='block';
    }
    else {
        document.getElementById("popprobtext").style.display='none';
        document.getElementById("populationprobability2").style.display='none';
    }
    
}


function popPropCalc() {
    
    var p = Number($("#populationmean").val());
    var n = Number($("#populationn").val());
    var npString = Number(parseFloat(n*p).toFixed(4)).toLocaleString();
    var n1pString = Number(parseFloat(n*(1-p)).toFixed(4)).toLocaleString();
    // is dist approx norm
    if (Math.round(n*p) >= 10) {
        $("#approxnormcheck1").val(npString + ": Yes");
    }
    else {
         $("#approxnormcheck1").val(npString + ": No");
    }
    
    if (Math.round(n*(1-p)) >= 10) {
        $("#approxnormcheck2").val(n1pString + ": Yes");
    }
    else {
        $("#approxnormcheck2").val(n1pString + ": No");
    }
    
    var sd = Math.sqrt(p*(1-p)/n)
    $("#poppropanswersd").val(Number(parseFloat(sd).toFixed(4)));
    
    var mean = p;
        
    propPHat(mean, sd);
    
}


function propPHat(mean, sigma) {
    
    var operator = $("#popproboperator").val();
    var first_num = $("#populationprobability").val();
    var second_num = $("#populationprobability2").val();
    
    var ans = 0;
    
    // greater than
    if (operator == 1) {
        ans = 1 - (normalcdf(mean, sigma, first_num));
    }
    // less than
    if (operator == 2) {
        ans = normalcdf(mean, sigma, first_num);
    }
    // in between
    if (operator == 3) {
        if (first_num < second_num) {
             ans = normalcdf(mean, sigma, second_num) - normalcdf(mean, sigma, first_num);
        }
        else {
            ans = normalcdf(mean, sigma, first_num) - normalcdf(mean, sigma, second_num);
        }
    }
    
    $("#poppropanswerprob").val(Number(parseFloat(ans).toFixed(4)));
}



function normalcdf(mean, sigma, x) {
    var z =(x-mean)/Math.sqrt(2*sigma*sigma);
    var t = 1/(1+0.3275911*Math.abs(z));
    var a1 = .254829592;
    var a2 = -.284496736;
    var a3 = 1.421413741;
    var a4 = -1.453152027;
    var a5 = 1.061405429;
    var erf = 1-(((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-z*z);
    var sign = 1;
    if (z < 0)
        { sign = -1;
        }
    return (1/2)*(1+sign*erf);
}



///////////////////////////////////////////////////////////////////////////////////////////
// sample mean probabilty, samplying distribution 


function sampleMeanBoxAppear() {
    var x = $("#samplemeanoperator").val();
    
    if (x == 3) {
        document.getElementById("samplemeantext").style.display='block';
        document.getElementById("samplemeanmean2").style.display='block';
    }
    else {
        document.getElementById("samplemeantext").style.display='none';
        document.getElementById("samplemeanmean2").style.display='none';
    }
    
}


function sampleMeanCalc() {
    
    var mu = Number($("#samplemeanpopulationmean").val());
    var sd = Number($("#samplemeansd").val());
    var n = Number($("#samplemeann").val());
    
    var sd2 = sd / Math.sqrt(n)
    $("#samplemeananswersd").val(Number(parseFloat(sd2).toFixed(4)));
    
    var mean = mu;
    
        
    propMu(mean, sd2);
    
}


function propMu(mean, sigma) {
    
    var operator = $("#samplemeanoperator").val();
    var first_num = $("#samplemeanmean").val();
    var second_num = $("#samplemeanmean2").val();
    
    var ans = 0;
    
    // greater than
    if (operator == 1) {
        ans = 1 - (normalcdf(mean, sigma, first_num));
    }
    // less than
    if (operator == 2) {
        ans = normalcdf(mean, sigma, first_num);
    }
    // in between
    if (operator == 3) {
        if (first_num < second_num) {
             ans = normalcdf(mean, sigma, second_num) - normalcdf(mean, sigma, first_num);
        }
        else {
            ans = normalcdf(mean, sigma, first_num) - normalcdf(mean, sigma, second_num);
        }
    }
    
    $("#samplemeananswerprob").val(Number(parseFloat(ans).toFixed(4)));
}








//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 11:


///////////////////////////////////////////////////////////////////////////////////////////
// Confidence Interval Population Proportion

function calcCIProp() {
    
    
    var x = Number($("#ciproptablex").val());
    var n = Number($("#ciproptablesamplesize").val());
    var operator = $("#ciproptableci").val();
    var z = 1.96;
    
    // stores the z score based on operator input
    if (operator == 50) {
        z = .674;
    }
    if (operator == 60) {
        z = .842;
    }
    if (operator == 70) {
        z = 1.036;
    }
    if (operator == 80) {
        z = 1.282;
    }
    if (operator == 90) {
        z = 1.645;
    }
    if (operator == 95) {
        z = 1.960;
    }
    if (operator == 98) {
        z = 2.326;
    }
    if (operator == 99) {
        z = 2.576;
    }
    if (operator == 99.8) {
        z = 3.090;
    }
    if (operator == 99.9) {
        z = 3.291;
    }
      
    // if input is a decimal, just set as decimal
    var phat = 0;
    if (x > 0 && x < 1) {
        phat = x;
    }
    // if input not a decimal then turn into decimal form
    if (x >= 1 && x <= n) {
        phat = x/n;
    }
    // send alert if number entered is  wrong
    if (x > n || x < 0) {
        alert("enter x as a decimal percentage (0>x>1) or as a number less than "  + n);
    }
    
    var ME = phat * (1-phat) / n;
    ME = Math.sqrt(ME);
    
    var MarginofError = z * ME;
    
    var lowerBound = phat - MarginofError;
    var upperBound = phat + MarginofError;
    
    var stringAns = "" + parseFloat(phat).toFixed(4) + " ± " + parseFloat(MarginofError).toFixed(4);
    
    var explanation = "In the context of this problem, we can say that with " + operator + "% confidence, the population proportion is somewhere between " + parseFloat(upperBound).toFixed(4) + " and " + parseFloat(lowerBound).toFixed(4);
    
    
    $("#CIpropanswerupper").val(parseFloat(upperBound).toFixed(4));
    $("#CIpropanswerlower").val(parseFloat(lowerBound).toFixed(4));
    $("#CIpropanswerinterval").val(stringAns);
    
    $("#CIpropexplanation").val(explanation);
    
    

}





///////////////////////////////////////////////////////////////////////////////////////////
// Confidence Interval Population Mean

function calcCIMean() {
    
    var sd = Number($("#cimeantablesd").val());
    var n = Number($("#cimeantablesamplesize").val());
    var mean = Number($("#cimeantablemean").val());
    var df;
    var SEM;
    
    
    // sovles for degres of freedom
    if (n > 1 && n <=30) {
        df = n-1;
    }
    // just assumes z table values if sample is greater than 30
    if (n > 30) {
        df = 31;
    }
    var sampleSD;
    if ($("#cimeantablesample").prop('checked')) {
        sampleSD = true;
    }
    else {
        sampleSD = false;
    }
    
    var operator = $("#cimeantableci").val();
    var t;
    
    // logs the whole t table
    var fifty = [1.000,0.816,0.765,0.741,0.727,0.718,0.711,0.706,0.703,0.700,0.697,0.695,0.694,0.692,0.691,
                 0.690,0.689,0.688,0.688,0.687,0.686,0.686,0.685,0.685,0.684,0.684,0.684,0.683,0.683,0.683];
    var sixty = [1.376,1.061,0.978,0.941,0.920,0.906,0.896,0.889,0.883,0.879,0.876,0.873,0.870,0.868,0.866,
                 0.865,0.863,0.862,0.861,0.860,0.859,0.858,0.858,0.857,0.856,0.856,0.855,0.855,0.854,0.854];
    var seventy = [1.963,1.386,1.250,1.190,1.156,1.134,1.119,1.108,1.100,1.093,1.088,1.083,1.079,1.076,1.074,
                   1.071,1.069,1.067,1.066,1.064,1.063,1.061,1.060,1.059,1.058,1.058,1.057,1.056,1.055,1.055];
    var eighty = [3.078,1.886,1.638,1.533,1.476,1.440,1.415,1.397,1.383,1.372,1.363,1.356,1.350,1.345,1.341,
                  1.337,1.333,1.330,1.328,1.325,1.323,1.321,1.319,1.318,1.316,1.315,1.314,1.313,1.311,1.310];
    var ninety = [6.314,2.920,2.353,2.132,2.015,1.943,1.895,1.860,1.833,1.812,1.796,1.782,1.771,1.761,1.753,
                  1.746,1.740,1.734,1.729,1.725,1.721,1.717,1.714,1.711,1.708,1.706,1.703,1.701,1.699,1.697];
    var nineFive = [12.71,4.303,3.182,2.776,2.571,2.447,2.365,2.306,2.262,2.228,2.201,2.179,2.160,2.145,2.131,
                    2.120,2.110,2.101,2.093,2.086,2.080,2.074,2.069,2.064,2.060,2.056,2.052,2.048,2.045,2.042];
    var nineEight = [31.82,6.965,4.541,3.747,3.365,3.143,2.998,2.896,2.821,2.764,2.718,2.681,2.650,2.624,2.602,
                    2.583,2.567,2.552,2.539,2.528,2.518,2.508,2.500,2.492,2.485,2.479,2.473,2.467,2.462,2.457];
    var nineNine = [63.66,9.925,5.841,4.604,4.032,3.707,3.499,3.355,3.250,3.169,3.106,3.055,3.012,2.977,2.947,
                    2.921,2.898,2.878,2.861,2.845,2.831,2.819,2.807,2.797,2.787,2.779,2.771,2.763,2.756,2.750];
    var nineNineEight = [318.31,22.327,10.215,7.173,5.893,5.208,4.785,4.501,4.297,4.144,4.025,3.930,3.852,3.787,3.733,
                        3.686,3.646,3.610,3.579,3.552,3.527,3.505,3.485,3.467,3.450,3.435,3.421,3.408,3.396,3.385,3.307];
    var nineNineNine = [636.62,31.599,12.924,8.610,6.869,5.959,5.408,5.041,4.781,4.587,4.437,4.318,4.221,4.140,4.073,
                       4.015,3.965,3.922,3.883,3.850,3.819,3.792,3.768,3.745,3.725,3.707,3.690,3.674,3.659,3.646];
    
    
    // use t table if you dont have popiulation sd and sample size is less than 30
    if (sampleSD == true && n <= 30) {
        
        if (operator == 50) {
            t = fifty[df-1];
        }
        if (operator == 60) {
            t = sixty[df-1];
        }
        if (operator == 70) {
            t = seventy[df-1];
        }
        if (operator == 80) {
            t = eighty[df-1];
        }
        if (operator == 90) {
            t = ninety[df-1];
        }
        if (operator == 95) {
            t = nineFive[df-1];
        }
        if (operator == 98) {
            t = nineEight[df-1];
        }
        if (operator == 99) {
            t = nineNine[df-1];
        }
        if (operator == 99.8) {
            t = nineNineEight[df-1];
        }
        if (operator == 99.9) {
            t = nineNineNine[df-1];
        }
    }
    else {
        if (operator == 50) {
            t = .674;
        }
        if (operator == 60) {
            t = .842;
        }
        if (operator == 70) {
            t = 1.036;
        }
        if (operator == 80) {
            t = 1.282;
        }
        if (operator == 90) {
            t = 1.645;
        }
        if (operator == 95) {
            t = 1.960;
        }
        if (operator == 98) {
            t = 2.326;
        }
        if (operator == 99) {
            t = 2.576;
        }
        if (operator == 99.8) {
            t = 3.090;
        }
        if (operator == 99.9) {
            t = 3.291;
        }
        

    }
    
    
    SEM = sd / Math.sqrt(n) * t;
    
    var lowerBound = mean - SEM;
    var upperBound = mean + SEM;
    
    var stringAns = "" + parseFloat(mean).toFixed(4) + " ± " + parseFloat(SEM).toFixed(4);
    
    var explanation = "In the context of this problem, we can say that with " + operator + "% confidence, the population mean is somewhere between " + parseFloat(upperBound).toFixed(4) + " and " + parseFloat(lowerBound).toFixed(4);
    
    
    $("#CImeananswerupper").val(parseFloat(upperBound).toFixed(4));
    $("#CImeananswerlower").val(parseFloat(lowerBound).toFixed(4));
    $("#CImeananswerinterval").val(stringAns);
    
    $("#CImeanexplanation").val(explanation);
    
    
}



///////////////////////////////////////////////////////////////////////////////////////////
// Finding Sample size from population standard deviation and margin of error

function calcCISampleSize() {
    
    var popSD = Number($("#confidenceintervalssamplesizesolvesd").val());
    var MarginofError = Number($("#confidenceintervalssamplesizesolvesdMoE").val());
    
    var sampleSize = 0;
    
    // logs z score value
    var operator = $("#confidenceintervalssamplesizesolveci").val();
    var z = 1.96;
    
    if (operator == 50) {
        z = .674;
    }
    if (operator == 60) {
        z = .842;
    }
    if (operator == 70) {
        z = 1.036;
    }
    if (operator == 80) {
        z = 1.282;
    }
    if (operator == 90) {
        z = 1.645;
    }
    if (operator == 95) {
        z = 1.960;
    }
    if (operator == 98) {
        z = 2.326;
    }
    if (operator == 99) {
        z = 2.576;
    }
    if (operator == 99.8) {
        z = 3.090;
    }
    if (operator == 99.9) {
        z = 3.291;
    }
    
    // mean calculation
    if ($("#cimeanvsproportionsamplesize").prop('checked')) {
        sampleSize = (z*popSD/MarginofError)**2;
    }
    // proportion calculation
    else {
        sampleSize = (z/MarginofError/2)**2;
        
    }
    sampleSize = Math.ceil(sampleSize);
    
    $("#confidenceintervalssamplesizeansSS").val(sampleSize);
    
}


function calcCISSHide() {
    
    var mean;
    
    // hides pop sd box if using proportion 
    if ($("#cimeanvsproportionsamplesize").prop('checked')) {
        document.getElementById("confidenceintervalssamplesizesolvesd").className = "";
        document.getElementById("confidenceintervalssamplesizesolvesd").disabled = false;
    }
    else {
        document.getElementById("confidenceintervalssamplesizesolvesd").className = "output";
        $("#confidenceintervalssamplesizesolvesd").val("");
        document.getElementById("confidenceintervalssamplesizesolvesd").disabled = true;
    }
}






//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 12:


///////////////////////////////////////////////////////////////////////////////////////////
// Hypothesis Testing Population Proportion

function calcHypothesisProp() {
    var alpha = Number($("#hypotestproptablealpha").val());
    var P = Number($("#hypotestproptablepp").val());
    var p = Number($("#hypotestproptablesp").val());
    var n = Number($("#hypotestproptablen").val());
    
    if (p > 1) {
        p = p/n;
    }
    
    console.log(P);
    console.log(p);
    console.log(n);
    
    var sd = Math.sqrt(P*(1-P)/n);
    
    console.log(sd);
    
    var testStat = (p-P)/sd;
    
    console.log(testStat);
    
    var ans = 0;
    if (testStat < 0) {
        ans = calcPercentileNormDist(testStat,sd);
    }
    if (testStat >= 0) {
        ans = 1 - calcPercentileNormDist(testStat,sd);
    }
    
    // double test
    if ($("#hypotestproptable1v2").prop('checked') == false) {
        ans = ans*2;
    }
    
    var ansText = "";
    // fail to reject null
    if (ans >= alpha) {
        ansText = "Since the P-value (" + parseFloat(ans).toFixed(4) + ") is GREATER THAN the significance level (" + alpha + "), we FAIL TO REJECT the NULL hypothesis";
    }
    // reject null
    else {
        ansText = "Since the P-value (" + parseFloat(ans).toFixed(4) + ") is LESS THAN the significance level (" + alpha + "), we REJECT the NULL hypothesis";
    }
    
    $("#hypothesispropexplanation").val(ansText);
    
    
}


// calculates percentile from z score
function calcPercentileNormDist(Z,SD) {
    
    var prob = 0;
    with (Math) {
        if (SD<0) {
            alert("the standard deviation can not be negative.");
        }
        else {
            prob = normalDist(Z);
            prob = round(100000*prob)/100000;
        }
    }
    
    return prob;
    
}

// takes in z score and does calc for normal dist
function normalDist(X) {
    var T = 1/(1+.2316419*Math.abs(X));
    var D = .3989423*Math.exp(-X*X/2);
    var prob = D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
    if (X>0) {
        prob = 1-prob;
    }
    return prob;
}



///////////////////////////////////////////////////////////////////////////////////////////
// Hypothesis Testing Population Mean

function calcHypothesisMean() {
    var alpha = Number($("#hypothesistestmeantablealpha").val());
    var u = Number($("#hypothesistestmeantableu").val());
    var x = Number($("#hypothesistestmeantablex").val());
    var n = Number($("#hypothesistestmeantablen").val());
    var sd = Number($("#hypothesistestmeantablesd").val());
    
    var testStat = (x - u) / (sd / Math.sqrt(n));
    
    if (testStat > 0) {
        testStat = testStat * -1;
    }
    var df = n-1;

    var ans = 0;
    console.log(testStat);
    
    ans = calcTDist(testStat,df);
    
    // double test
    if ($("#hypothesistestmeantable1v2").prop('checked') == false) {
        ans = ans*2;
    }
    
    var ansText = "";
    // fail to reject null
    if (ans >= alpha) {
        ansText = "Since the P-value (" + parseFloat(ans).toFixed(4) + ") is GREATER THAN the significance level (" + alpha + "), we FAIL TO REJECT the NULL hypothesis";
    }
    // reject null
    else {
        ansText = "Since the P-value (" + parseFloat(ans).toFixed(4) + ") is LESS THAN the significance level (" + alpha + "), we REJECT the NULL hypothesis";
    }
    
    $("#hypothesismeanexplanation").val(ansText);
    
 
}

// turns test stat and df into p value
function calcTDist(X,df) {
    if (df<=0) {
			alert("Degrees of freedom must be positive")
		} else {
			A=df/2;
			S=A+.5;
			Z=df/(df+X*X);
			BT=Math.exp(LogGamma(S)-LogGamma(.5)-LogGamma(A)+A*Math.log(Z)+.5*Math.log(1-Z));
			if (Z<(A+1)/(S+2)) {
				betacdf=BT*Betinc(Z,A,.5)
			} else {
				betacdf=1-BT*Betinc(1-Z,.5,A)
			}
			if (X<0) {
				tcdf=betacdf/2
			} else {
				tcdf=1-betacdf/2
			}
		}
		tcdf=Math.round(tcdf*100000)/100000;
    
    return tcdf;
}

function LogGamma(Z) {
    var S = 1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);
    var LG = (Z-.5)*Math.log(Z+4.5)-(Z+4.5)+Math.log(S*2.50662827465);
    
    return LG;
}



function Betinc(X,A,B) {
	var A0=0;
	var B0=1;
	var A1=1;
	var B1=1;
	var M9=0;
	var A2=0;
	var C9;
	while (Math.abs((A1-A2)/A1)>.00001) {
		A2=A1;
		C9=-(A+M9)*(A+B+M9)*X/(A+2*M9)/(A+2*M9+1);
		A0=A1+C9*A0;
		B0=B1+C9*B0;
		M9=M9+1;
		C9=M9*(B-M9)*X/(A+2*M9-1)/(A+2*M9);
		A1=A0+C9*A1;
		B1=B0+C9*B1;
		A0=A0/B1;
		B0=B0/B1;
		A1=A1/B1;
		B1=1;
	}
	return A1/A
}









//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SECTION 13:


///////////////////////////////////////////////////////////////////////////////////////////
// Comparing 2 Population Proportions


function comparePopProp() {
    
    var alpha = Number($("#comparetwoproptablealpha").val());
    var p1 = Number($("#comparetwoproptablep1").val());
    var p2 = Number($("#comparetwoproptablep2").val());
    var n1 = Number($("#comparetwoproptablen1").val());
    var n2 = Number($("#comparetwoproptablen2").val());
    var p = 0;
    
    if (p1 > n1 || p1 < 0) {
        alert("enter p1 as a decimal percentage (0>x>1) or as a number less than "  + n1);
    }
    if (p2 > n2 || p2 < 0) {
        alert("enter p2 as a decimal percentage (0>x>1) or as a number less than "  + n2);
    }
    
    var tempP1 = p1;
    var tempP2 = p2;
    // if p is in decimal form, calculator proportion
    if (p1 > 0 && p1 < 1) {
        tempP1 = p1 * n1;
    }
    if (p2 > 0 && p2 < 1) {
        tempP2 = p2 * n2;
    }
    
    p = (tempP1 + tempP2) / (n1 + n2);
    
    // if p is not in deimcal form
    if (p1 >= 1 && p1 <= n1) {
        p1 = p1/n1;
    }
    if (p2 >= 1 && p2 <= n2) {
        p2 = p2/n2;
    }
    
    
    ////
    
    var top = p1-p2;
    var bottom = Math.sqrt(p*(1-p)*(1/n1 + 1/n2));
    
    var testStat = top/bottom;
    if (testStat < 0) {
        testStat = testStat * -1;
    }
    
    
    var ans = 1 - calcPercentileNormDist(testStat,1);
    
    // two tailed test
        if ($("#comparetwoproptable1v2").prop('checked') == false) {
            ans = ans*2;
        }
    
    
    var ansText = "";
    // fail to reject null
    if (ans >= alpha) {
        ansText = "Since the P-value (" + parseFloat(ans).toFixed(4) + ") is GREATER THAN the significance level (" + alpha + "), we FAIL TO REJECT the NULL hypothesis";
    }
    // reject null
    else {
        ansText = "Since the P-value (" + parseFloat(ans).toFixed(4) + ") is LESS THAN the significance level (" + alpha + "), we REJECT the NULL hypothesis";
    }
    
    $("#comparetwopropsexplanation").val(ansText);
    
    
    
}



///////////////////////////////////////////////////////////////////////////////////////////
// Comparing 2 Population Means

function comparePopMean() {
    
    var alpha = Number($("#comparetwomeantablealpha").val());
    var x1 = Number($("#comparetwomeantablex1").val());
    var x2 = Number($("#comparetwomeantablex2").val());
    var n1 = Number($("#comparetwomeantablen1").val());
    var n2 = Number($("#comparetwomeantablen2").val());
    var s1 = Number($("#comparetwomeantables1").val());
    var s2 = Number($("#comparetwomeantables2").val());
    
    var df = n1-1;
    if (n1 > n2) {
        df = n2-1;
    }
    
    
    // shared sd
    if ($("#hypothesistestmeantablesdtype").prop('checked') == true) {
        df = n1 + n2 - 2;
    }
    
    console.log("df: " + df);
    
    // if confidence interval 
    if ($("#hypothesistestmeantabletesttype").prop('checked') == false){


        var operator = $("#comparemeanci").val();
        var t;
        

        // logs the whole t table
        var fifty = [1.000,0.816,0.765,0.741,0.727,0.718,0.711,0.706,0.703,0.700,0.697,0.695,0.694,0.692,0.691,
                     0.690,0.689,0.688,0.688,0.687,0.686,0.686,0.685,0.685,0.684,0.684,0.684,0.683,0.683,0.683];
        var sixty = [1.376,1.061,0.978,0.941,0.920,0.906,0.896,0.889,0.883,0.879,0.876,0.873,0.870,0.868,0.866,
                     0.865,0.863,0.862,0.861,0.860,0.859,0.858,0.858,0.857,0.856,0.856,0.855,0.855,0.854,0.854];
        var seventy = [1.963,1.386,1.250,1.190,1.156,1.134,1.119,1.108,1.100,1.093,1.088,1.083,1.079,1.076,1.074,
                       1.071,1.069,1.067,1.066,1.064,1.063,1.061,1.060,1.059,1.058,1.058,1.057,1.056,1.055,1.055];
        var eighty = [3.078,1.886,1.638,1.533,1.476,1.440,1.415,1.397,1.383,1.372,1.363,1.356,1.350,1.345,1.341,
                      1.337,1.333,1.330,1.328,1.325,1.323,1.321,1.319,1.318,1.316,1.315,1.314,1.313,1.311,1.310];
        var ninety = [6.314,2.920,2.353,2.132,2.015,1.943,1.895,1.860,1.833,1.812,1.796,1.782,1.771,1.761,1.753,
                      1.746,1.740,1.734,1.729,1.725,1.721,1.717,1.714,1.711,1.708,1.706,1.703,1.701,1.699,1.697];
        var nineFive = [12.71,4.303,3.182,2.776,2.571,2.447,2.365,2.306,2.262,2.228,2.201,2.179,2.160,2.145,2.131,
                        2.120,2.110,2.101,2.093,2.086,2.080,2.074,2.069,2.064,2.060,2.056,2.052,2.048,2.045,2.042];
        var nineEight = [31.82,6.965,4.541,3.747,3.365,3.143,2.998,2.896,2.821,2.764,2.718,2.681,2.650,2.624,2.602,
                        2.583,2.567,2.552,2.539,2.528,2.518,2.508,2.500,2.492,2.485,2.479,2.473,2.467,2.462,2.457];
        var nineNine = [63.66,9.925,5.841,4.604,4.032,3.707,3.499,3.355,3.250,3.169,3.106,3.055,3.012,2.977,2.947,
                        2.921,2.898,2.878,2.861,2.845,2.831,2.819,2.807,2.797,2.787,2.779,2.771,2.763,2.756,2.750];
        var nineNineEight = [318.31,22.327,10.215,7.173,5.893,5.208,4.785,4.501,4.297,4.144,4.025,3.930,3.852,3.787,3.733,
                            3.686,3.646,3.610,3.579,3.552,3.527,3.505,3.485,3.467,3.450,3.435,3.421,3.408,3.396,3.385,3.307];
        var nineNineNine = [636.62,31.599,12.924,8.610,6.869,5.959,5.408,5.041,4.781,4.587,4.437,4.318,4.221,4.140,4.073,
                           4.015,3.965,3.922,3.883,3.850,3.819,3.792,3.768,3.745,3.725,3.707,3.690,3.674,3.659,3.646];


        // use t table if you dont have popiulation sd and sample size is less than 30
        if (df < 30) {

            if (operator == 50) {
                t = fifty[df-1];
            }
            if (operator == 60) {
                t = sixty[df-1];
            }
            if (operator == 70) {
                t = seventy[df-1];
            }
            if (operator == 80) {
                t = eighty[df-1];
            }
            if (operator == 90) {
                t = ninety[df-1];
            }
            if (operator == 95) {
                t = nineFive[df-1];
            }
            if (operator == 98) {
                t = nineEight[df-1];
            }
            if (operator == 99) {
                t = nineNine[df-1];
            }
            if (operator == 99.8) {
                t = nineNineEight[df-1];
            }
            if (operator == 99.9) {
                t = nineNineNine[df-1];
            }
        }
        else {
            if (operator == 50) {
                t = .674;
            }
            if (operator == 60) {
                t = .842;
            }
            if (operator == 70) {
                t = 1.036;
            }
            if (operator == 80) {
                t = 1.282;
            }
            if (operator == 90) {
                t = 1.645;
            }
            if (operator == 95) {
                t = 1.960;
            }
            if (operator == 98) {
                t = 2.326;
            }
            if (operator == 99) {
                t = 2.576;
            }
            if (operator == 99.8) {
                t = 3.090;
            }
            if (operator == 99.9) {
                t = 3.291;
            }
        }
        

        var left = x1 - x2;
        if (x1 < x2) {
            left = x2 - x1;
        }
        
        
        // shared sd
        if ($("#hypothesistestmeantablesdtype").prop('checked') == true) {
            var sp2 = ((n1-1)*s1**2 + (n2-1)*s2**2) / (n1+n2-2);
            
            var SE = t * (Math.sqrt(sp2 * (1/n1 + 1/n2)));
            
        }
        else {
           var SE = t * Math.sqrt(s1**2 / n1 + s2**2 / n2); 
        }
        
        console.log("t score " + t);
        
            
        var upperBound = left + SE;
        var lowerBound = left - SE;
        
        var stringAns = "" + parseFloat(left).toFixed(4) + " ± " + parseFloat(SE).toFixed(4);
    
        var explanation = "We can say that with " + operator + "% confidence, the difference betwen the two population means is somewhere between " + parseFloat(lowerBound).toFixed(4) + " and " + parseFloat(upperBound).toFixed(4);
        
        $("#comparetwomeansexplanation").val(explanation);
        
    }    
        
        
    // if hypothesis test 
    if ($("#hypothesistestmeantabletesttype").prop('checked') == true) {

        // shared sd
        if ($("#hypothesistestmeantablesdtype").prop('checked') == true) {
            var sp2 = ((n1-1)*s1**2 + (n2-1)*s2**2)/(n1+n2-2);
            
            var testStat = (x1-x2)/(Math.sqrt(sp2 * (1/n1 + 1/n2)));
            df = n1+n2-2;
            
            if (testStat > 0) {
                testStat = testStat * -1;
            }
            
            
            
            ///////
            // logs the whole t table
            var a1 = [3.078,1.886,1.638,1.533,1.476,1.440,1.415,1.397,1.383,1.372,1.363,1.356,1.350,1.345,1.341,
                          1.337,1.333,1.330,1.328,1.325,1.323,1.321,1.319,1.318,1.316,1.315,1.314,1.313,1.311,1.310];
            var a05 = [6.314,2.920,2.353,2.132,2.015,1.943,1.895,1.860,1.833,1.812,1.796,1.782,1.771,1.761,1.753,
                          1.746,1.740,1.734,1.729,1.725,1.721,1.717,1.714,1.711,1.708,1.706,1.703,1.701,1.699,1.697];
            var a025 = [12.71,4.303,3.182,2.776,2.571,2.447,2.365,2.306,2.262,2.228,2.201,2.179,2.160,2.145,2.131,
                        2.120,2.110,2.101,2.093,2.086,2.080,2.074,2.069,2.064,2.060,2.056,2.052,2.048,2.045,2.042];
            var a01 = [31.82,6.965,4.541,3.747,3.365,3.143,2.998,2.896,2.821,2.764,2.718,2.681,2.650,2.624,2.602,
                            2.583,2.567,2.552,2.539,2.528,2.518,2.508,2.500,2.492,2.485,2.479,2.473,2.467,2.462,2.457];
            var a005 = [63.66,9.925,5.841,4.604,4.032,3.707,3.499,3.355,3.250,3.169,3.106,3.055,3.012,2.977,2.947,
                        2.921,2.898,2.878,2.861,2.845,2.831,2.819,2.807,2.797,2.787,2.779,2.771,2.763,2.756,2.750];
            var a0025 = [127.3,14.09,7.453,5.598,4.773,4.317,4.029,3.833,3.690,3.581,3.497,3.428,3.372,3.326,3.286,
                        3.252,3.222,3.197,3.174,3.153,3.135,3.119,3.104,3.091,3.078,3.067,3.057,3.047,3.038,3.030];
            var a001 = [318.31,22.327,10.215,7.173,5.893,5.208,4.785,4.501,4.297,4.144,4.025,3.930,3.852,3.787,3.733,
                            3.686,3.646,3.610,3.579,3.552,3.527,3.505,3.485,3.467,3.450,3.435,3.421,3.408,3.396,3.385,3.307];
            var a0005 = [636.62,31.599,12.924,8.610,6.869,5.959,5.408,5.041,4.781,4.587,4.437,4.318,4.221,4.140,4.073,
                           4.015,3.965,3.922,3.883,3.850,3.819,3.792,3.768,3.745,3.725,3.707,3.690,3.674,3.659,3.646];

            var t=0;
            
            // one tailed test
            if ($("#comparetwomeantable1v2").prop('checked') == true) {
                
            }
            // two tailed test
            else {
                
                alpha = alpha/2;
                
                if (alpha == 0.10 || alpha == 0.05 || alpha == 0.025 || alpha == 0.01 || alpha == 0.005 || alpha == 0.001 || alpha == 0.0005) {
                    
                }
                else {
                    alert("two tailed test can not be performed");
                }
            }
            
            

            if (df < 31) {
                if (alpha == 0.10) {
                    t = a1[df-1];
                }
                if (alpha == 0.05) {
                    t = a05[df-1];
                }
                if (alpha == 0.025) {
                    t = a025[df-1];
                }
                if (alpha == 0.01) {
                    t = a01[df-1];
                }
                if (alpha == 0.005) {
                    t = a005[df-1];
                }
                if (alpha == 0.0025) {
                    t = a0025[df-1];
                }
                if (alpha == 0.001) {
                    t = a001[df-1];
                }
                if (alpha == 0.0005) {
                    t = a0005[df-1];
                }
                
                
                
            }
            else {
                if (alpha == 0.10) {
                    t = 1.282;
                }
                if (alpha == 0.05) {
                    t = 1.645;
                }
                if (alpha == 0.025) {
                    t = 1.960;
                }
                if (alpha == 0.01) {
                    t = 2.326;
                }
                if (alpha == 0.005) {
                    t = 2.576;
                }
                if (alpha == 0.0025) {
                    t = 2.807;
                }
                if (alpha == 0.001) {
                    t = 3.090;
                }
                if (alpha == 0.0005) {
                    t = 3.291;
                }
            }


            console.log("t value " + t);
            ///////
            
            var ans = calcTDist(testStat,df);
            
            // two tailed test
            if ($("#comparetwomeantable1v2").prop('checked') == false) {
                alpha = alpha*2
                ans = ans*2;
            }


            var ansText = "";
            // fail to reject null
            if (ans >= alpha) {
                ansText = "Since the P-value (" + parseFloat(ans).toFixed(4) + ") is GREATER THAN the significance level (" + alpha + "), we FAIL TO REJECT the NULL hypothesis";
            }
            // reject null
            else {
                ansText = "Since the P-value (" + parseFloat(ans).toFixed(4) + ") is LESS THAN the significance level (" + alpha + "), we REJECT the NULL hypothesis";
            }

            $("#comparetwomeansexplanation").val(ansText);
        }
            
            

    

        // no shared sd
        if ($("#hypothesistestmeantablesdtype").prop('checked') == false) {
            var top = x1-x2;
            var bottom = Math.sqrt(s1**2 / n1 + s2**2 / n2);
            var testStat = top/bottom;

            if (testStat > 0) {
                testStat = testStat * -1;
            }

            ans = calcTDist(testStat,df);
            
            // two tailed test
            if ($("#comparetwomeantable1v2").prop('checked') == false) {
                ans = ans*2;
            }

            var ansText = "";
            // fail to reject null
            if (ans >= alpha) {
                ansText = "Since the P-value (" + parseFloat(ans).toFixed(4) + ") is GREATER THAN the significance level (" + alpha + "), we FAIL TO REJECT the NULL hypothesis";
            }
            // reject null
            else {
                ansText = "Since the P-value (" + parseFloat(ans).toFixed(4) + ") is LESS THAN the significance level (" + alpha + "), we REJECT the NULL hypothesis";
            }

            $("#comparetwomeansexplanation").val(ansText);


            ///////
            // logs the whole t table
            var a1 = [3.078,1.886,1.638,1.533,1.476,1.440,1.415,1.397,1.383,1.372,1.363,1.356,1.350,1.345,1.341,
                          1.337,1.333,1.330,1.328,1.325,1.323,1.321,1.319,1.318,1.316,1.315,1.314,1.313,1.311,1.310];
            var a05 = [6.314,2.920,2.353,2.132,2.015,1.943,1.895,1.860,1.833,1.812,1.796,1.782,1.771,1.761,1.753,
                          1.746,1.740,1.734,1.729,1.725,1.721,1.717,1.714,1.711,1.708,1.706,1.703,1.701,1.699,1.697];
            var a025 = [12.71,4.303,3.182,2.776,2.571,2.447,2.365,2.306,2.262,2.228,2.201,2.179,2.160,2.145,2.131,
                        2.120,2.110,2.101,2.093,2.086,2.080,2.074,2.069,2.064,2.060,2.056,2.052,2.048,2.045,2.042];
            var a01 = [31.82,6.965,4.541,3.747,3.365,3.143,2.998,2.896,2.821,2.764,2.718,2.681,2.650,2.624,2.602,
                            2.583,2.567,2.552,2.539,2.528,2.518,2.508,2.500,2.492,2.485,2.479,2.473,2.467,2.462,2.457];
            var a005 = [63.66,9.925,5.841,4.604,4.032,3.707,3.499,3.355,3.250,3.169,3.106,3.055,3.012,2.977,2.947,
                        2.921,2.898,2.878,2.861,2.845,2.831,2.819,2.807,2.797,2.787,2.779,2.771,2.763,2.756,2.750];
            var a0025 = [127.3,14.09,7.453,5.598,4.773,4.317,4.029,3.833,3.690,3.581,3.497,3.428,3.372,3.326,3.286,
                        3.252,3.222,3.197,3.174,3.153,3.135,3.119,3.104,3.091,3.078,3.067,3.057,3.047,3.038,3.030];
            var a001 = [318.31,22.327,10.215,7.173,5.893,5.208,4.785,4.501,4.297,4.144,4.025,3.930,3.852,3.787,3.733,
                            3.686,3.646,3.610,3.579,3.552,3.527,3.505,3.485,3.467,3.450,3.435,3.421,3.408,3.396,3.385,3.307];
            var a0005 = [636.62,31.599,12.924,8.610,6.869,5.959,5.408,5.041,4.781,4.587,4.437,4.318,4.221,4.140,4.073,
                           4.015,3.965,3.922,3.883,3.850,3.819,3.792,3.768,3.745,3.725,3.707,3.690,3.674,3.659,3.646];


            var t=0;
            
            
            // one tailed test
            if ($("#comparetwomeantable1v2").prop('checked') == true) {
                
            }
            // two tailed test
            else {
                
                alpha = alpha/2;
                
                if (alpha == 0.10 || alpha == 0.05 || alpha == 0.025 || alpha == 0.01 || alpha == 0.005 || alpha == 0.001 || alpha == 0.0005) {
                    
                }
                else {
                    alert("two tailed test can not be performed with this alpha value");
                }
            }
            

            if (n1 < 31 || n2 < 31) {
                if (alpha == 0.10) {
                    t = a1[df-1];
                }
                if (alpha == 0.05) {
                    t = a05[df-1];
                }
                if (alpha == 0.025) {
                    t = a025[df-1];
                }
                if (alpha == 0.01) {
                    t = a01[df-1];
                }
                if (alpha == 0.005) {
                    t = a005[df-1];
                }
                if (alpha == 0.0025) {
                    t = a0025[df-1];
                }
                if (alpha == 0.001) {
                    t = a001[df-1];
                }
                if (alpha == 0.0005) {
                    t = a0005[df-1];
                }
            }
            else {
                if (alpha == 0.10) {
                    t = 1.282;
                }
                if (alpha == 0.05) {
                    t = 1.645;
                }
                if (alpha == 0.025) {
                    t = 1.960;
                }
                if (alpha == 0.01) {
                    t = 2.326;
                }
                if (alpha == 0.005) {
                    t = 2.576;
                }
                if (alpha == 0.0025) {
                    t = 2.807;
                }
                if (alpha == 0.001) {
                    t = 3.090;
                }
                if (alpha == 0.0005) {
                    t = 3.291;
                }
            }


            console.log("t value " + t);
            ///////
        }
    }
}





///////////////////////////////////////////////////////////////////////////////////////////
// Comparing 2 Population Means display


function comparePopMeanDisplay() {
    
    // hypothesis test
    if ($("#hypothesistestmeantabletesttype").prop('checked') == true) {
        document.getElementById("comparemeansigtext").className = "";
        document.getElementById("comparemeansiginput").className = "";
        
//        document.getElementById("comparemeansdtext").className = "";
//        document.getElementById("comparemeansdinput").className = "";
        
        document.getElementById("comparemeancitext").className = "hide";
        document.getElementById("comparemeanciinput").className = "hide";
        
        document.getElementById("comparemean1v2text").className = "";
        document.getElementById("comparemean1v2input").className = "";
        
        
        
        // different sd
        if ($("#hypothesistestmeantablesdtype").prop('checked') == true) {
            
//            document.getElementById("comparemeansd2text").className = "hide";
//            document.getElementById("comparemeansd2input").className = "hide";

        }

        // shared sd
        else {
            
            
//            document.getElementById("comparemeansd2text").className = "";
//            document.getElementById("comparemeansd2input").className = "";

        }
    }
    
    // confidence interval
    else {
        document.getElementById("comparemeansigtext").className = "hide";
        document.getElementById("comparemeansiginput").className = "hide";
        //$("#confidenceintervalssamplesizesolvesd").val("");
        
        document.getElementById("comparemeancitext").className = "";
        document.getElementById("comparemeanciinput").className = "";
        
//        document.getElementById("comparemeansdtext").className = "hide";
//        document.getElementById("comparemeansdinput").className = "hide";
//        
        document.getElementById("comparemean1v2text").className = "hide";
        document.getElementById("comparemean1v2input").className = "hide";
        
//        document.getElementById("comparemeansd2text").className = "";
//        document.getElementById("comparemeansd2input").className = "";
        
        
    }
    
    
    
    
}

