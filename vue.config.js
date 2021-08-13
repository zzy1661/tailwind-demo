module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  pages: {
    index: {
        entry: 'src/main.js',
      title: process.env.NODE_ENV === "production" ? "build" : "dev",
    },
  },
};
