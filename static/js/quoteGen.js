
var quoteArray = [];
var quoteIndex = 0;

getNewQuote();

function getNewQuote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(json){
        returnQuote(json[0]);
    });
};

function returnQuote(response) {
    quoteArray.push(response);
    displayQuote();
    console.log(quoteArray);
    console.log(quoteIndex);
};

function displayQuote() {
    $("#quote p").replaceWith(quoteArray[quoteIndex].content);
    $("#author").text(quoteArray[quoteIndex].title);
    console.log(quoteArray[quoteIndex].quoteText);
};


$("#next-arrow").click(function() {
    if (quoteIndex < quoteArray.length) {
        getNewQuote();
    }
    quoteIndex++;
    displayQuote();
});

$("#prev-arrow").click(function() {
    if (quoteIndex > 0) {
        quoteIndex--;
    }
    displayQuote();
});

$('#tweet-button').click(function (e) {
    var tweetText = $("#quote p").text().trim() + " -" + $("#author").text().trim();
    var tweet = 'http://twitter.com/home?status=' + encodeURIComponent(tweetText);
    window.open(tweet, '_blank');
});
