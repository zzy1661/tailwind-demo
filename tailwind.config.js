const plugin = require('tailwindcss/plugin')

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



/**
 * 1. 先处理spacing
 * 2. 处理color
 * 3. 自定义box等
 * 4. 自定义组件
 * 5. 考虑dark模式
 * 6. 全局的默认样式
 * 7. 验证样式是否缺漏
 * 
 * 
 * 
 * 
 */
// 一下数字单位都是750设计稿的px
const spacings = [0, 8, 10, 12, 16, 20, 32, 40, 56, 64, 96, 128, 240, 480];
const fontSizes = [0, 36, 40, 48, 56, 64];//  TODO,需要查看设计稿
const widths = [44, 240, 400, 480];
const heights = [200, 300];
const boxes = [80, 100, 120, 200]; // 正方形盒子，不建议使用，盒子的大小，尤其是高度，应当由内容撑起
module.exports = {
  // production下的tree shake
  purge: ["./src/**/*.html", "./src/**/*.js"],
  corePlugins: {
    colors: false, // 不生成默认colors
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // 为了复用colors
      textColor: {
        // 基本文字颜色列表 文字的secondary和color的不一致，需要确认设计稿，缺失选中和disable
        "basic": {
          DEFAULT: "#333333",
          active: "#333333",
          disable: '"#333333"'
        },
        "muted": {
          DEFAULT: "#999999",
          active: "#999999",
          disable: '"#999999"'
        },
        "light": {
          DEFAULT: "#fff",
          active: "#fff",
          disable: '"#fff"'
        },
        "tinge": {
          DEFAULT: "#b476c0",
          active: "#b476c0",
          disable: '"#b476c0"'
        },
        "secondary": {
          DEFAULT: "#666666",
          active: "#666666",
          disable: '"#666666"'
        },
        "dark": {
          DEFAULT: "#000",
          active: "#000",
          disable: '"#000"'
        },
        // "primary": "#5965ba",
        // "success": "#1bb73a",
        // "danger": "#e83930",
        // "warning": "#fa8c16", //#FB9716
        // "info": "#ffe56c",
      },
    },
    colors: {
      // 基本填充颜色列表,缺失选中/禁用的效果
      "primary": {
        DEFAULT: "#5965ba",
        active: "#5965ba",
        disable: "#5965ba",
      },
      "secondary": {
        DEFAULT: "#999",
        active: "#999",
        disable: "#999",
      },
      "success": {
        DEFAULT: "#1bb73a",
        active: "#1bb73a",
        disable: "#1bb73a",
      },
      "danger": {
        DEFAULT: "#e83930",
        active: "#e83930",
        disable: "#e83930",
      },
      "warning": {
        DEFAULT: "#fa8c16",
        active: "#fa8c16",
        disable: "#fa8c16",
      },
      "info": {
        DEFAULT: "#FFE56C",
        active: "#FFE56C",
        disable: "#FFE56C",
      },
      "dark": {
        DEFAULT: "#333",
        active: "#333",
        disable: "#333",
      },
    },

    spacing: {
      px: '1px',
      ...spacings.reduce((pre, cur) => { pre[cur] = cur + 'px'; return pre }, {})
    },
    width: {
      ...widths.reduce((pre, cur) => { pre[cur] = cur + 'px'; return pre }, {})
    },
    heights: {
      ...heights.reduce((pre, cur) => { pre[cur] = cur + 'px'; return pre }, {})
    },
    fontSize: {
      //字号和行高，12号字体1行高
      sm: ['24px', '24px'],//最小12，12一下不能保证
      base: ['28px', '40px'],
      lg: ['32px', '48px'], // 以上三种为项目中主要字号，不以数字命名，其他特殊字号以数字命名
      ...fontSizes.reduce((pre, cur) => { pre[cur] = cur + 'px'; return pre }, {})
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({
        html: {
          fontSize: '10vw',
          // 默认字体：iOS 9+ Safari开始支持 -apple-system 参数， Chrome 使用 BlinkMacSystemFont ，兼容 iOS ／ MacOS，9以前的用Helvetica
          // Microsoft YaHei 兼容win系统
          // 安卓无法预知发行厂商预制何种字体
          // 除非引入字体文件（太大不推荐），否则无法保证字体生效
          fontFamily: 'PingFangSC-Regular,"PingFang SC","Microsoft YaHei",sans-serif,-apple-system,BlinkMacSystemFont,"Helvetica Neue"'
        }
      })

      // .box-80
      const boxComponents = boxes.map(size => ({
        ['.box-' + size]: {
          width: size + 'px',
          height: size + 'px'
        }
      }))

      addComponents(boxComponents)
    }),
  ],

};

