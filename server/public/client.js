$(document).ready(readyNow);

function readyNow() {
    getQuotes();
    $('#addQuoteButton').on('click', addQuote)
}

function addQuote(){
    let objectToSend = {
        quote: $('#quoteText').val(),
        author: $('#quoteAuthor').val()
    };
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: objectToSend
    }).then(function(response){
        getQuotes();
    })
}

function getQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then(function(response){
        displayQuotes(response);
    });
}

function displayQuotes(quotes) {
    let el = $('#quoteList');
    el.empty();
    for(quote of quotes){
        el.append('<li>' + quote.quote + ' - ' + quote.author + '</li>');
    }
}