module.exports = eleventyConfig => {
  eleventyConfig.addFilter("escape", input => `{{ ${input} }}`);

  return {
    dir: {
      data: "../_data",
      input: "src"
    }
  };
};
