import { OUTLINE_FEATURE } from './features'

export default {
  title: `FlutterKaigi 2022 ハンズオン`,
  description: `ハンズオンでご紹介のあった資料を中心に記録しています。`,
  head: [
    [
      `meta`,
      {
        hid: `description`,
        name: `description`,
        content: `FlutterKaigi 2022 ハンズオンでご紹介のあった資料を中心に記録しています。`
      }
    ],
    [
      `meta`,
      {
        hid: `title`,
        name: `title`,
        content: `FlutterKaigi 2022 ハンズオン`
      }
    ],
    [
      `meta`,
      {
        hid: `og:type`,
        name: `og:type`,
        content: `website`
      }
    ],
    [
      `meta`,
      {
        hid: `og:description`,
        name: `og:description`,
        content: `FlutterKaigi 2022 ハンズオンでご紹介のあった資料を中心に記録しています。`
      }
    ],
    [
      `meta`,
      {
        hid: `og:title`,
        name: `og:title`,
        content: `FlutterKaigi 2022 ハンズオン`
      }
    ],
    [
      `meta`,
      {
        hid: `og:url`,
        name: `og:url`,
        content: `https://flutterkaigi-2022-workshop.netlify.app`
      }
    ],
    [
      `meta`,
      {
        hid: `og:image`,
        name: `og:image`,
        content: `https://flutterkaigi-2022-workshop.netlify.app/top.png`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:description`,
        name: `twitter:description`,
        content: `FlutterKaigi 2022 ハンズオンでご紹介のあった資料を中心に記録しています。`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:title`,
        name: `twitter:title`,
        content: `FlutterKaigi 2022 ハンズオン`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:card`,
        name: `twitter:card`,
        content: `summary_large_image` // ex: summary, summary_large_image
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:site`,
        name: `twitter:site`,
        content: `@FlutterKaigi`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:creator`,
        name: `twitter:creator`,
        content: `@FlutterKaigi`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:site`,
        name: `twitter:site`,
        content: `@FlutterKaigi`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:image`,
        name: `twitter:image`,
        content: `https://flutterkaigi-2022-workshop.netlify.app/top.png`
      }
    ],
  ],
  base: `/`,
  themeConfig: {
    repo: `FlutterKaigi/graphql_handson`,
    editLinks: false,
    docsDir: `docs`,
    nav: [
      OUTLINE_FEATURE
        ? {
            text: `Outline`,
            items: [
              {
                text: `Flutter で環境変数を取り扱う`,
                link: `/outline/1_environment-variables.md`
              },
              {
                text: `GraphQL クライアントを選定する`,
                link: `/outline/2_graphql-client.md`
              },
              {
                text: `リポジトリ一覧をフェッチする`,
                link: `/outline/3_fetch-repositories.md`
              },
              {
                text: `issue 一覧をフェッチする`,
                link: `/outline/4_fetch-issues.md`
              },
              {
                text: `issue を追加、更新する`,
                link: `/outline/5_post-issue.md`
              }
            ]
          }
        : {
            text: `Registration`,
            items: [
              {
                text: `イベント登録`,
                link: `https://connpass.com/event/263057/`
              }
            ]
          },
      {
        text: `Past Kaigis`,
        items: [
          { text: `FlutterKaigi 2022`, link: `https://flutterkaigi-2022-workshop.netlify.app/` },
          { text: `FlutterKaigi 2021`, link: `https://flutterkaigi-2021-workshop.netlify.app/` }
        ]
      }
    ],
    sidebarDepth: 3,
  },
  markdown: {
    toc: { includeLevel: [1, 2] },
    config: (md) => {
      md.use(require('@nekohack/markdown-it-link-preview'))
    }
  }
}
