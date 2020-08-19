import jsonData from "../data/data.json";

function indexData() {
  //Step 1: Query to Summary Mapping
  var queryKeyword = [];
  var querySummary = [];
  //iterate through Query list
  for (var i = 0; i < jsonData.queries.length; i++) {
    var bookIndex = "";
    queryKeyword = jsonData.queries[i].split(" ");
    // iterate through Book Summary List
    for (var j = 0; j < jsonData.summaries.length; j++) {
      var summaryKeywordCounter = 0;
      // For each keyword check if it is present in the current summary
      for (var k = 0; k < queryKeyword.length; k++) {
        if (
          jsonData.summaries[j].summary.toLowerCase().includes(queryKeyword[k])
        ) {
          summaryKeywordCounter++;
        }
      }
      //check if the no.of matching keywords from summary is same as query
      if (summaryKeywordCounter === queryKeyword.length) {
        // maintain a string of book indexes
        if (bookIndex === "") {
          bookIndex = j;
        } else {
          bookIndex = bookIndex + "," + j;
        }
      }
    }
    //QuerySummary index is having 1:1 mapping with Querylist index
    querySummary[i] = bookIndex;
  }
  return querySummary;
}

export default indexData;
