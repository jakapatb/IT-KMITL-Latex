var fs = require("fs");

fs.readFile("COOP report/chapter1.tex", "utf-8", function(err, data) {
  if (err) throw err;

  console.log(data); // string

  data.replace(/\.\/+/, "myString");
});
