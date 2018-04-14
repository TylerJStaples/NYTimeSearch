jQuery(document).ready(function(){
    $.getScript('app2.js');
});

//Global variables
var results = $("#results");
var jq_search = $("body");

function buildResponseArea() {
    var jq_newRow = $("<row>");
    jq_newRow.addClass("temp-class-response");

    jq_newResponseNum = $("<h2>");
    jq_newResponseNum.text(response-id);

    jq_newResponseP = $("<p>");
    jq_newResponseP.text(response);

    jq_newRow.append(jq_newResponseNum);
    jq_newRow.append(jq_newResponse);

    results.append(jq_newRow);
}

function getSearchTerm() {
   var searchTerm = jq_search.attr('search-term');
   console.log(searchTerm);
}

function getSearchNumber() {
   var searchNumber = jq_search.attr('search-number');
   console.log(searchNumber);

}

function getStartYear() {
   var searchStartYear = jq_search.attr('search-start-year');
   console.log(searchTerm);

}

function getEndYear () {
   var searchEndYear = jq_search.attr('search-end-year');
   console.log(searchTerm);

}
