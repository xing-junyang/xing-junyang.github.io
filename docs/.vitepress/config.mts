import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小金魚的筆記本",
  description: "這是小金魚的軟工學習筆記",
  markdown: {math: true},
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主頁 🖥', link: '/' },
      { text: '筆記 📒', link: '/简介.md' }
    ],

    sidebar: [
      {
        items: [
          { text: '简介', link: '/简介' },
          { text: '编译原理', 
            collapsed: true,
            items: [
              { text: '编译原理的一些基本概念', link: '/编译原理/编译原理的一些基本概念.md' },
              { text: '有穷自动机', link: '/编译原理/有穷自动机.md' },
              { text: '中间代码生成 LLVM IR', link: '/编译原理/中间代码生成 LLVM IR.md' },
            ]
          },
          { text: '操作系统',
            collapsed: true,
            items: [
              { text: '并发',
                collapsed: true,
                items: [
                  { text: '并发的概念', link: '/操作系统/并发/并发的概念.md' },
                  { text: 'PV操作', link: '/操作系统/并发/PV操作.md' },
                  { text: '管程', link: '/操作系统/并发/管程.md' }
                ] 
              }
            ]
          },
          { text: 'QEMU虚拟机',
            collapsed: true,
            items: [
              { text: 'QEMU虚拟机简介',
                link: '/qemu虚拟机/qemu简介'
              },
              {
                text: '安装QEMU',
                link: '/qemu虚拟机/安装qemu'
              },
              {
                text: '创建并运行虚拟机',
                link: '/qemu虚拟机/创建qemu虚拟机'
              },
              {
                text: '杂项',
                link: '/qemu虚拟机/一些杂项'
              }
            ]
          },
          {
            text: '数海札记文章',
            collapsed: true,
            items: [
              {text: '积分视角下的均值不等式', link: '/数海札记/积分视角下的均值不等式'},
              {text: 'Gamma函数的唯一性', link: '/数海札记/Gamma函数的唯一性'}
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xing-junyang/xing-junyang.github.io' }
    ],

    search: {
      provider: 'local',
      options: {
        locales:{
          root: {
            translations: {
              button: {
                buttonText: '搜尋本站',
                buttonAriaLabel: '搜尋本站上的內容'
              },
              modal: {
                noResultsText: '無相關內容',
                resetButtonTitle: '清空搜索條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉此頁面'
                }
              }
            }
          }
        }
      }
    },
    lastUpdated: {
      text: "最後更新於",
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full',
      }
    },
    notFound:{
      title: 'Ah...404',
      quote: '小金魚不知道您要去向哪裡⋯⋯',
      linkText: '回到主頁吧',
      linkLabel: '回到主頁'
    },

    docFooter: {
      prev: '上一個頁面',
      next: '下一個頁面'
    },

    outline: {
      level: [1,6],
      label: '本頁面'
    },
  },
  lastUpdated: true,
  
})