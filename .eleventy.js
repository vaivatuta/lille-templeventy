module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/js");
  
    return {
      passthroughFileCopy: true,
      dir: {
        input: "src",
        // output: "public", // for use with neocities
        output: ".", // for use with github pages, note: generates redundant files/folders at the root
        includes: "_includes",
      },
    };
  };