$(document).ready(function() {
    var url = 'https://cors.io/?https://newsapi.org/v2/top-headlines?country=in&apiKey=bde505d74ff54e6eaca2aecb6f8c2dd9';
    $.getJSON(url, function(data) {
        var currentQuote = '';
    
        $('.read').on('click', function() {
            currentQuote = data.articles[Math.floor(Math.random() * 9)];
            
            $('.quoteBody').hide();
            $('.quoteBodyLink').html(currentQuote.title);
            $('.quoteBodyLink')
                .attr('href', currentQuote.url)
                .attr('target', '_blank');
            $('.quoteAuthor').html(`Author : ${currentQuote.author}`);
            $('.quotedesc').html(`Author : ${currentQuote.description}`);
                        $('.read').html('Show me one more');
    
        console.log(currentQuote.urlToImage);
         $('.bkg').css({
                        backgroundImage: 'url(currentQuote.url)'
                    });
    });      console.log(data.articles[0].title);

        console.log(data);
    });
});
