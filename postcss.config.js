module.exports = ({ file }) => {
  const isVant = file && file.dirname && file.dirname.indexOf("vant") > -1;
  const rootValue = isVant ? 37.5 : 75;
  file && file.dirname.includes("scss") && console.log(file.dirname, rootValue);
  return {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-pxtorem": {
        rootValue: rootValue,
        unitPrecision: 6,
        propList: ["*"],
      },
    },
  };
};
