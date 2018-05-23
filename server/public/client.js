$(document).ready(readyNow);

function readyNow() {
    getQuotes();
    
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