var QueryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
QueryURL += '?' + $.param({
  'api-key': "88523d24c2e24d70a4d7adbeceffc8d9"
});
$.ajax({
    url: QueryURL,
    method: "GET",
}).then(function(response) {
    console.log(response);
});