import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]




/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '宇宇的小站',
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-links-line',
        color: 'dodgerblue',
      },
      
      {
        name: '喜欢的女孩子',
        url: 'https://blog.lzc256.com/post/about/',
        icon: 'i-ri-heart-line',
        color: 'hotpink',
      },


    ],

    footer: {
      since: 2016,
      beian: {
        enable: false,
        icp: '',
      },
    },
  },

  

  unocss: { safelist },


    // 设置 valaxy-addon-waline 配置项
    addons: [
      addonWaline({
        serverURL: 'https://waline-blog-ivory.vercel.app',
      }),
    ],

})
