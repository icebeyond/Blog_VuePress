
module.exports = {
    title:'浮沉杂记',
    head:[  //注入到当前页面的html <head>中的标签
        ['link',{rel:'icon',href:'/logo.png'}],
    ],
    themeConfig:{
        logo:'/logo.png',  // 左上角的logo
        // 导航栏
        nav:[
            {text:'Home', link:'/'},
            {
                text:'博客',
                items:[
                    {text:'总览', link:'/blog/overview/'},
                    {text:'硬件', link:'/blog/hardware/'},
                    {text:'软件', link:'/blog/software/'},
                    {text:'嵌入式', link:'/blog/embedded_system/'},
                    {text:'电力电子', link:'/blog/power_electronics/'},
                ]
            },
            {text:'杂记', link:'/essay/'},
            {text:'快捷访问', link:'/fastlink/'},
            {text:'书架', link:'/bookshelf/'},
            {text:'About', link:'/about/'},
            {text:'GitHub', link:'https://github.com/icebeyond'}
        ],

// 侧边导航栏设置
        sidebar: {
            '/bookshelf/': [
                '',
              ],

// 杂谈(Y1)  
            '/essay/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],


///////////////以下是博客文章的侧边栏配置部分////////////////////
// 总览
            '/blog/overview/': [
                ''
            ],


// 硬件(H) ////////////////////////
            /*仿真(H1)*/
            '/blog/hardware/simulation/': [
                '',
                'one'
            ],

            /*原理图和PCB(H2)*/
            '/blog/hardware/sch_pcb/': [
                '',
                'one'
            ],

            /*电路原理(H3)*/
            '/blog/hardware/circuit_principle/': [
                '',
                'one'
            ],

            /*模拟电子技术(H4)*/
            '/blog/hardware/analog/': [
                '',
                'one',
                'two'
            ],

            /*数字电子技术(H5)*/
            '/blog/hardware/digital/': [
                '',
                'one'
            ],

// 软件(S) ////////////////////////
            /*C语言(S1)*/
            '/blog/software/c/': [
                '',
                'one'
            ],
            
            /*Python(S2)*/
            '/blog/hardware/python/': [
                '',
                'one'
            ],

            /*C++(S3)*/
            '/blog/hardware/c_plusplus/': [
                '',
                'one'
            ],

            /*Web前端(S4)*/
            '/blog/hardware/web/': [
                '',
                'one'
            ],

// 嵌入式(E) ////////////////////////
            /*传感器(E1)*/
            '/blog/embedded_system/sensor/': [
                '',
                'one'
            ],

            /*ARM(E2)*/
            '/blog/embedded_system/arm/': [
                '',
                'one'
            ],

            /*DSP(E3)*/
            '/blog/embedded_system/dsp/': [
                '',
                'one'
            ],

// 电力电子(P) ////////////////////////
            /*电力电子技术(P1)*/
            '/blog/power_electronics/power_electronics/': [
                '',
                'one'
            ],

            /*开关电源(P2)*/
            '/blog/power_electronics/power_supply/': [
                '',
                'one'
            ],

            /*电机驱动(P3)*/
            '/blog/power_electronics/driver/': [
                '',
                'one'
            ],

            /*WPT(P4)*/
            '/blog/power_electronics/wpt/': [
                '',
                'one'
            ],

            '/blog/hardware/': [
                ''
            ],

            '/blog/software/': [
                ''
            ],

            '/blog/embedded_system/': [
                ''
            ],

            '/blog/power_electronics/': [
                ''
            ],

        },

    },
};
