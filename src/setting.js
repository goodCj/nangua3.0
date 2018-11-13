import { version } from '../package'

export default {
  // 快捷键
  // 支持快捷键 例如 ctrl+shift+s
  hotkey: {
    search: {
      open: 's',
      close: 'esc'
    }
  },
  // 侧边栏默认折叠状态
  menu: {
    asideCollapse: false
  },
  // 在读取持久化数据失败时默认页面
  page: {
    opened: [
      {
        name: 'index',
        meta: {
          title: '首页',
          requiresAuth: false
        }
      }
    ]
  },
  // 版本
  releases: {
    version
  },
  // 菜单搜索
  search: {
    enable: true
  },
  // 注册的主题
  theme: {
    list: [
      {
        title: 'd2admin 经典',
        name: 'd2',
        preview: 'image/theme/d2/preview@2x.png'
      },
      {
        title: '紫罗兰',
        name: 'violet',
        preview: 'image/theme/violet/preview@2x.png'
      },
      {
        title: '主题一',
        name: 'themeOne',
        backgroundImage: 'image/theme/themeOne/bg.jpg',
        preview: 'image/theme/themeOne/preview@2x.png'
      },
      {
        title: '主题二',
        name: 'themeTwo',
        backgroundImage: 'image/theme/themeTwo/bg.jpg',
        preview: 'image/theme/themeTwo/preview@2x.png'
      },
      {
        title: '主题三',
        name: 'themeThree',
        backgroundImage: 'image/theme/themeThree/bg.jpg',
        preview: 'image/theme/themeThree/preview@2x.png'
      },
      {
        title: '主题四',
        name: 'themeFour',
        backgroundImage: 'image/theme/themeFour/bg.jpg',
        preview: 'image/theme/themeFour/preview@2x.png'
      },
      {
        title: '主题五',
        name: 'themeFive',
        backgroundImage: 'image/theme/themeFive/bg.jpg',
        preview: 'image/theme/themeFive/preview@2x.png'
      }
      // {
      //   title: '简约线条',
      //   name: 'line',
      //   backgroundImage: 'image/theme/line/bg.jpg',
      //   preview: 'image/theme/line/preview@2x.png'
      // },
      // {
      //   title: '流星',
      //   name: 'star',
      //   backgroundImage: 'image/theme/star/bg.jpg',
      //   preview: 'image/theme/star/preview@2x.png'
      // },
      // {
      //   title: 'Tomorrow Night Blue (vsCode)',
      //   name: 'tomorrow-night-blue',
      //   preview: 'image/theme/tomorrow-night-blue/preview@2x.png'
      // }
    ]
  },
  // 是否默认开启页面切换动画
  transition: {
    active: true
  },
  // 在读取持久化数据失败时默认用户信息
  user: {
    info: {
      name: 'Ghost'
    }
  }
}
