const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/exploratory-data-analysis-with-r-no-code-4c70de64c855").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
