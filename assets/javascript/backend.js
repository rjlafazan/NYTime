
var searchTerms = $(this).attr('#searchTerm');
var startYear = $(this).attr('#startYear');
var endYear = $(this).attr('#endYear');

// var searchTerms = "obama";
// var startYear = "19911211";
// var endYear = "19921211";
// var recordsNumber = 1;


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3e043087ee1a444fb64f1bff59901b08";

url += '&q=' + searchTerms;

if (startYear !== ""){
	url += '&begin_date=' + startYear;
} else if (endYear !== ""){
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
	
	for (var i = 0; i < result.length; i++) {
		
		$('#results').append(result.response.docs[i]);
	};

});
