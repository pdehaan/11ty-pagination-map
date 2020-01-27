# 11ty-pagination-map

Little script that dynamically generates Nunjucks templates based on a data file.

In order to generate the Nunjucks templates, you need to run the <kbd>npm run seed:templates</kbd> script which will generate files in ./src/*.njk, based on the template in ./_templates/template.tmpl.njk (using the data in ./_data/map.js).

Once the ./src/*.njk files are generated, you can run <kbd>npm run build</kbd> to generate the output files in ./_site/.

To add more books to the data, you need to edit the ./_data/map.js file and then rerun <kbd>npm run seed:templates</kbd>.

I don't think this approach is ideal, as we only know the number of chapters in a book, but not the actual contents. If we had a bigger data set, we could probably generate the entire site from a huge JSON file (or split files, similar to the code in https://github.com/pdehaan/11ty-data-bible). So the approach might be similar where we fetch the data file once and cache it, and then modify the JSON file for optimal 11ty pagination in the ./_data/ directory. Or whatever.
