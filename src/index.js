// 1.引入banner.js 和 tab.js
import './banner'
import './tab'

// 2.引入jquery
import $ from 'jquery'
$('#swiper').css('background-color','yellowgreen')

// 3.引入css样式  加载器 - 处理css文件
import './styles/index.css'

// 4.引入less样式  加载器 - 处理less文件
import './styles/index.less'

// 5.引入图片
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

import imgUrl1 from './assets/logo_small.png';

const img1 = document.createElement('img');
img1.src = imgUrl1;
document.body.appendChild(img1);

// 6.引入字体图标
import './assets/fonts/iconfont.css'