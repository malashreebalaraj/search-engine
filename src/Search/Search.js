import jsonData from "../data/data.json";

//Step 2: Search Utility
const search = (searhInput, querySummary) => {
  const input = searhInput.toLowerCase();
  const maxBookSearchLimit = 3;

  var bookId = ""; // String of bookIds separated ,
  var noOfBooks = []; // Array of bookIds related to more than one query
  var masterBookArray = []; // Array of Book details
  var bookCounter = 0;

  //Iterating through the Query List till maxBookSearchLimit
  for (
    var x = 0;
    x < jsonData.queries.length &&
    (bookCounter === 0 || masterBookArray.length < maxBookSearchLimit);
    x++
  ) {
    if (jsonData.queries[x].includes(input)) {
      bookId = querySummary[x];
      if (bookId.length > 1) {
        noOfBooks = bookId.split(",");
      } else {
        noOfBooks.push(bookId);
      }

      //Iterate the no.of books and retrieve corresponding book details
      while (
        (bookCounter === 0 || masterBookArray.length < maxBookSearchLimit) &&
        bookCounter < noOfBooks.length
      ) {
        var bookTitle = jsonData.titles[noOfBooks[bookCounter]];
        var bookSummary = jsonData.summaries[noOfBooks[bookCounter]].summary;
        var bookAuthor = jsonData.authors[noOfBooks[bookCounter]].author;

        //Single Book details
        var bookArray = [bookTitle, bookSummary, bookAuthor];
        var skipBookflag = false; // To skip the duplicate book

        //Iterate through list of master book array for unique title
        for (
          var uniqueTitleCounter = 0;
          bookCounter !== 0 && uniqueTitleCounter < masterBookArray.length;
          uniqueTitleCounter++
        ) {
          //Check if current book title is present in the master book array
          if (bookArray[0] === masterBookArray[uniqueTitleCounter][0]) {
            skipBookflag = true;
          }
        }
        if (!skipBookflag) {
          masterBookArray.push(bookArray);
        }
        bookCounter++;
      }
    }
  }
  return masterBookArray;
};

export default search;
