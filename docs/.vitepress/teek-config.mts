// .vitepress/teek-config.mts
// @ts-ignore
import { defineTeekConfig } from "vitepress-theme-teek/config";

interface BeianConfig {
    icpRecord?: { name: string; link: string};
}

// @ts-ignore
const icpName = process.env.ICP_NAME || null;

const beianConfig: BeianConfig = {
    ...(
        icpName?{
            icpRecord: {
                name: icpName,
                link: "https://beian.miit.gov.cn/",
            },
        } :{}
    )
}

// Teek 主题配置，所有 Teek 配置都放到 ... 中
export const teekConfig = defineTeekConfig({

    vitePlugins: {
        sidebar: false,
    },

    breadcrumb: {
        enabled: false
    },

    toComment: {
        enabled: false,
    },

    backTop: {
        content: "icon"
    },

    loading: "加载中...",

    themeEnhance: {
        layoutSwitch: {
            disabled: true,
            hidden: true,
        },
        themeColor: {
            disabled: true,
            hidden: true,
        },

    },

    codeBlock: {
        // enabled: false,
    },

    footerInfo:{
        // 博客版权配置
        copyright: {
            show: true, // 是否显示博客版权
            // createYear: 2024, // 创建年份
            suffix: "BRIMS++", // 后缀
        },
        ...beianConfig,
        theme: {
            show: false,
        },
    },

    articleUpdate: {
        enabled: false,
    },

    /*siteAnalytics: [
        {
            provider: "umami",
            options: {
                id: "1bba0724-3239-42f6-8ffc-143dbe308e39",
                src: "https://umami.pgigi.com/script.js",
            },
        },
    ],*/

});