
var quoteArray = [];
var quoteIndex = 0;

getNewQuote();

function getNewQuote() {
    $.ajax({
        url: "http://api.forismatic.com/api/1.0/",
        jsonp: "jsonp",
        dataType: "jsonp",
        data: {
            method: "getQuote",
            lang: "en",
            format: "jsonp"
        }
    })
    .done(returnQuote)
    .fail(handleErr);
};

function returnQuote(response) {
    quoteArray.push(response);
    displayQuote();
    console.log(quoteArray);
    console.log(quoteIndex);
};

function handleErr(jqxhr, textStatus, err) {
    console.log("Request Failed: " + textStatus + ", " + err);
};

function displayQuote() {
    $("#quote").text(quoteArray[quoteIndex].quoteText);
    $("#author").text(quoteArray[quoteIndex].quoteAuthor);
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
})
