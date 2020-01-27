const slugify = require("@11ty/eleventy/src/Filters/Slug");

const map = [
  ["Genesis", 50],
  ["Exodus", 40],
  ["Psalm", 90],
  ["Proverbs", 30],
  ["1 Soloman", 4],
  ["Ruth", 5]
];

// Convert `["Ruth", 5]` into `{ruth: {name:"Ruth", chapters:[1,2,3,4,5]}}`
module.exports = map.reduce((coll, [name, count]) => {
  const slug = slugify(name, { lower: true });
  const chapters = chapterArr(count);
  coll[slug] = { name, chapters };
  return coll;
}, {});

function chapterArr(length = 1) {
  return Array.from({ length }, (_, idx) => idx + 1);
}
