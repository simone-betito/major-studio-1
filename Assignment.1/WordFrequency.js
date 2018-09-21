var dictionary = [];
var textX = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#99B998');
    loadStrings('AfricaRenewableEnergy.txt', callback);
}

function display() {
    background('#99B998');
    push();
    translate(textX, height/2);
    for (var i=0; i<dictionary.length; i++) {
        textSize(dictionary[i].count);
        fill(244,248,244, 0.50)
        strokeWeight(1);
        stroke(51);
        var txtWidth = textWidth(dictionary[i].word);
        text(dictionary[i].word, 0, 0);
        translate(txtWidth, 0);
    }
    pop();
    console.log('Horizontal Speed', mouseX-pmouseX);
}

function mouseDragged() {
    display();
    textX += mouseX-pmouseX;
}

function callback(sotu) {
    // console.log(sotu);

    sotu.forEach(function(phrases) {
        // console.log(phrases);

        var words = phrases.split(' ');
        words.forEach(function(word){

            // var filteredWords = dictionary.filter(function(el) {
            //     return el.word == word;
            //     // return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
            // })
            // console.log('Filtered Words', filteredWords);
            // // dictionary.push({'word': word, 'count': 1});

            // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            var filteredWords = dictionary.filter(function(element) {
              return element.word == word;
            });

            if (filteredWords.length)
              filteredWords[0].count++;
            else
              dictionary.push({word: word, count: 1});

        });

    });

    console.log(dictionary);
        display();

}
