module.exports = eleventyConfig => {
  // https://www.11ty.dev/docs/data-deep-merge/
  // This lets us split the front-matter between templates and config JSON.
  eleventyConfig.setDataDeepMerge(true);

  return {
    htmlTemplateEngine: "njk",
    dir: {
      data: "../_data",
      input: "src"
    }
  };
};
