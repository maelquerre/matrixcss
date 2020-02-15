const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy('docs/css')
  eleventyConfig.addPassthroughCopy('docs/fonts')
  eleventyConfig.addPassthroughCopy('docs/images')

  return {
    templateFormats: ['html'],
    dir: {
      input: 'docs',
      output: 'docs/_site',
      layouts: '_layouts'
    }
  }
}
