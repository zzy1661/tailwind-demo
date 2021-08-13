// const colors = require('tailwindcss/colors')

// $spaces: 0, 8, 10, 12, 16, 20, 32, 40, 56, 64, 96, 128, 240, 480;
// $fontSize: 0, 24, 28, 32, 36, 40, 48, 56, 64;
// $widths: 44, 240, 400, 480;
// $heights: 200, 300;
// $boxSize: 80, 100, 120, 200;

// 基本填充颜色列表 //浅黄#
// $color-primary: #5965ba;
// $color-secondary: #999;
// $color-success: #1bb73a;
// $color-danger: #e83930;
// $color-warning: #fa8c16;
// $color-info: #FFE56C;
// $color-dark: #333;
// 带场景的填充颜色
// 选中
// $color-primary-active:#5965ba;
// $color-secondary-active: #999;
// $color-success-active:#1bb73a;
// $color-danger-active: #e83930;
// $color-warning-active: #fa8c16;
// $color-info-active:#FFE56C;
// $color-dark-active: #333;
// 不可操作,需要透明度TODO
// $color-primary-disable:#5965ba;
// $color-secondary-disable:#999
// $color-success-disable:#1bb73a;
// $color-danger-disable: #e83930;
// $color-warning-disable: #fa8c16;
// $color-info-disable:#FFE56C;
// $color-dark-disable: #333;

// 基本文字颜色列表 //近蓝B476C0
// $text-basic: #333333;
// $text-muted: #999999;
// $text-light: #fff;
// $text-primary: #5965ba;
// $text-tinge: #b476c0;
// $text-secondary: #666666;
// $text-success: #1bb73a;
// $text-danger: #e83930;
// $text-warning: #fa8c16; //#FB9716
// $text-info: #ffe56c;
// $text-dark: #000;

/**
 * 1. 先处理spacing
 * 2. 处理color
 * 3. 自定义box等
 * 4. 自定义组件
 * 
 * 
 * 
 * 
 */
 const spacings = [0, 8, 10, 12, 16, 20, 32, 40, 56, 64, 96, 128, 240, 480];
 const fontSizes= [0, 24, 28, 32, 36, 40, 48, 56, 64];
 const widths = [44, 240, 400, 480];
 const heights = [200, 300];
 const boxes= [80, 100, 120, 200];
module.exports = {
  // production下的tree shake
  purge: ["./src/**/*.html", "./src/**/*.js"],
  corePlugins: {
    colors: false, // 不生成默认colors
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {},
    colors: {
      primary: "#0000ff",
    },
    spacing: {
      px:'1px',
      ...spacings.reduce((pre,cur)=>{pre[cur]=cur+'px';return pre},{})
    },
    
    width:{
      ...widths.reduce((pre,cur)=>{pre[cur]=cur+'px';return pre},{})
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

