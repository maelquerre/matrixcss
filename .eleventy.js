const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy("css")
  eleventyConfig.addPassthroughCopy("images")

  return {
    templateFormats: ['html'],
    dir: {
      input: 'docs',
      output: 'docs/_site',
      layouts: '_layouts'
    }
  }
}
