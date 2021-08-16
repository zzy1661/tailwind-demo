const plugin = require('tailwindcss/plugin')



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
      // 为了复用colors，放在extend中，会覆盖colors中冲突的配置
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
      },
    },
    // 背景、文字等颜色
    colors: {
      golden: '#DAA341',
      gray: '#F0F0F0',
      // 基本填充颜色列表,缺失选中/禁用的效果
      "primary": {
        DEFAULT: "#5965ba",
        active: "#5965ba",
        disable: "rgba(89, 101, 186, 0.1)",
      },
      "secondary": {
        DEFAULT: "#999",
        active: "#999",
        disable: "rgba(153, 153, 153, 0.1)",
      },
      "success": {
        DEFAULT: "#1bb73a",
        active: "#1bb73a",
        disable: "rgba(27, 183, 58, 0.1)",
      },
      "danger": {
        DEFAULT: "#FA3A1A",
        active: "#FA3A1A",
        disable: "rgba(250, 58, 26, 0.1)",
      },
      "warning": {
        DEFAULT: "#fa8c16",
        active: "#fa8c16",
        disable: "rgba(250, 140, 22, 0.1)",
      },
      "info": {
        DEFAULT: "#b476c0",
        active: "#b476c0",
        disable: 'rgba(180, 118, 192, 0.1)'
      },
      "required": {// 必填后面的星号
        DEFAULT: '#E83930',
        active: '#E83930',
        disable: 'rgba(232, 57, 48, 0.1)'
      },
      "light": {  //高亮，类似warning的颜色
        DEFAULT: '#FB9716',
        active: '#FB9716',
        disable: 'rgba(251, 151, 22, 0.1)'
      },
      "dark": {
        DEFAULT: "#333",
        active: "#333",
        disable: "rgba(51, 51, 51, 0.1)",
      },
      "white": {
        DEFAULT: '#FFF',
        active: '#fff',
        disable: 'rgba(255,255,255,0.3)'
      },
      "bottom": {// 底色，通常用作背景
        DEFAULT: '#F8F8FA',
        active: '#F8F8FA',
        disable: "rgba(248, 248, 250, 0.1)"
      },
      "guide": { //诱导点击的颜色，如展开、更多，类似primary
        DEFAULT: '#2E42C7',
        active: '#2E42C7',
        disable: "rgba(46, 66, 199, 0.1)"
      },
      "tip": { //类似成功的积极提示
        DEFAULT: '#14C437',
        active: '#14C437',
        disable: "rgba(20, 196, 55, 0.1)"
      }
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
      ...fontSizes.reduce((pre, cur) => { pre[cur] = [cur + 'px', 1]; return pre }, {})
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

