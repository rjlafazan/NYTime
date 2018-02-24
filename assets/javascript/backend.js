$("#searchButton").on('click', function(event) {
    event.preventDefault();
    getArticles();
})

function getArticles() {

    var searchTerms = $("#searchTerm").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();


    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3e043087ee1a444fb64f1bff59901b08";

    url += '&q=' + searchTerms;

    if (startYear !== "") {
        url += '&begin_date=' + startYear;
    } else if (endYear !== "") {
        url += '&end_date=' + endYear;
    };

    console.log(url);

    // url += '?' + $.param({
    // 	'api-key': "3e043087ee1a444fb64f1bff59901b08",
    // 	'q': searchTerms,
    // 	'begin_date': startYear,
    // 	'end_date': endYear
    // });

    $.ajax({
        url: url,
        method: 'GET',
    }).then(function(result) {
        console.log(result);

        var results = result.response.docs

        for (var i = 0; i < results.length; i++) {

            $('#results').append(results[i]);
        };

    });
}