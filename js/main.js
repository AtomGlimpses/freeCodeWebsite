window.addEventListener('DOMContentLoaded', function () {
    function getMultiLine(f) {
        const lines = f.toString();
        return lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
    }

    // 字符画不能随意缩进，不然显示会错位
    const console_text = function () {
        /* 
                        _ooOoo_
                       o8888888o
                       88" . "88
                       (| -_- |)
                       O\  =  /O
                    ____/`---'\____
                  .'  \\|     |//  `.
                 /  \\|||  :  |||//  \
                /  _||||| -:- |||||-  \
                |   | \\\  -  /// |   |
                | \_|  ''\---/''  |   |
                \  .-\__  `-`  ___/-. /
              ___`. .'  /--.--\  `. . __
           ."" '<  `.___\_<|>_/___.'  >'"".
          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
          \  \ `-.   \_ __\ /__ _/   .-` /  /
     ======`-.____`-.___\_____/___.-`____.-'======
                        `=---='
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  Buddha Bless, No Bug !           
                  
    %c 未知苦处,不信神佛.
                           Copyright© 2024 By SouthAki All Rights Reserved.
        */
    };

    console.log(getMultiLine(console_text), 'color:black;font-size:16px;font-style:italic;font-family:Monospace;');

    // 业务逻辑
    // 打印页面相关信息（代码更新时间）
    const date = new Date();
    const a = 'background: #606060; color: #fff; border-radius: 3px 0 0 3px;'
    const b = 'background: #1475B2; color: #fff; border-radius: 0 3px 3px 0;'
    console.log(`%c Now Time : %c ${date} `, a, b);
    /* 样式代码 */
    const styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
    const styleTitle2 = `
font-style: oblique;
font-size:14px;
color: rgb(244,167,89);
font-weight: 400;
`
    const styleContent = `
color: rgb(30,152,255);
`

    /* 内容代码 */
    const title1 = '🗺️🧭 FreecodeWebsite '
    const title2 = '前往开源的星辰大海'

    // => 读取配置型（在配置文件里配置这些会变动的网址）
    const offiUrl = 'https://freecode.southaki.cn'
    const content = `
版 本 号：1.0.0    【正式版】
编译日期：2025-02-20 10:24:00 
版权声明：
该项目已经选择开源,遵守GPL开源协议
项目可在Github上下载到源码,除商用外,准许任何形式的使用.
让我们拥抱开源的星辰大海  -- Org
🏠官网:  ${offiUrl}
`
    console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)
    const runtime = document.querySelector('.runtime');
    const star = document.querySelector('.star');
    const nowtime = document.querySelector('.nowtime');
    const creation_time = '2025/02/20 09:00:00'; // Voyager 1 launch date
    let days = null;
    let hours = null;
    let minutes = null;
    let seconds = null;
    let t = null;
    let newa = null;
    const timer = setInterval(() => {
        // 获取现在时间
        const now = new Date();
        nowtime.innerHTML = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0') }`
        // 经过的时间
        const runTime = Math.floor((now.getTime() - new Date(creation_time).getTime()) / 1000);

        // 计算旅行者一号飞行的千米数和天文单位数
        const newT = Math.trunc(234e8 + runTime / 1e3 * 17);
        const newA = parseFloat((newT / 1496e5).toFixed(6));

        // 赋值
        days = Math.floor(runTime / 86400);
        hours = Math.floor((runTime % 86400) / 3600);
        minutes = Math.floor((runTime % 3600) / 60);
        seconds = Math.floor(runTime % 60);
        newa = newA;
        t = newT
        runtime.innerHTML = `本站已经安全运行了：${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`
        star.innerHTML = `旅行者一号现在距离地球：${t}千米  约为${newA}天文单位`
    }, 1000);

    

    
})