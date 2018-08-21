base层是高度重用的基础层，各网站通用。
推荐的base.css: css reset + 通用原子类

  1. /*
  2. * base.css
  3. * 一个属性单行，超过一个多行
  4. */
  5. /*CSS reset*/
  6. body,div,
  7. dl,dt,dd,
  8. ul,ol,li,
  9. h1,h2,h3,h4,h5,h6,
  10. pre,form,fieldset,
  11. input,textarea,p,blockquote,th,td {
  12.     margin: 0;
  13.     padding: 0;
  14. }
  15. table {
  16. 	border-collapse: collapse;
  17. 	border-spacing: 0;
  18. }
  19. fieldset,img {border: 0;}
  20. address,caption,cite,code,dfn,em,strong,th,var {
  21. 	font-style: normal;
  22. 	font-weight: normal;
  23. }
  24. ol,ul {list-style: none;}
  25. caption,th {text-align: left;}
  26. h1,h2,h3,h4,h5,h6 {
  27. 	font-size: 100%;
  28. 	font-weight: normal;
  29. }
  30. q:before,q:after {content: '';}
  31. abbr,acronym {border: 0;}
  32. /*font*/
  33. .f12 {font-size: 12px;}
  34. .f13 {font-size: 13px;}
  35. .f14 {font-size: 14px;}
  36. .f16 {font-size: 16px;}
  37. .f20 {font-size: 20px;}
  38. .fb {font-weight: bold;}
  39. .fn {font-weight: normal;}
  40. .t2 {text-indent: 2em;}
  41. .lh150 {line-height: 150%;}
  42. .lh180 {line-height: 180%;}
  43. .lh200 {line-height: 200%;}
  44. .unl {text-decoration: underline;}
  45. .no_unl {text-decoration: none;}
  46. /*position*/
  47. .tl {text-align: left;}
  48. .tc {text-align: center;}
  49. .tr {text-align: right;}
  50. .bc {
  51. 	margin-left: auto;
  52. 	margin-right: auto;
  53. }
  54. .fl {
  55. 	float: left;
  56. 	display: inline;
  57. }
  58. .fr {
  59. 	float: right;
  60. 	display: inline;
  61. }
  62. .cl {clear: left;}
  63. .cr {clear: right;}
  64. .cb {clear: both;}
  65. .clearfix {display: inline-block;}
  66. * html .clearfix {height: 1%;}
  67. .Clearfix {display: block;}
  68. .clearfix:after {
  69. 	content: '.';
  70. 	display: block;
  71. 	height: 0;
  72. 	clear: both;
  73. 	visibility: hidden;
  74. }
  75. .vm {vertical-align: middle;}
  76. .pr {position: relative;}
  77. .pa {position: absolute;}
  78. .abs-right {
  79. 	position: absolute;
  80. 	right: 0;
  81. }
  82. .zoom {zoom: 1;}
  83. .hidden {visibility: hidden;}
  84. .none {display: none;}
  85. /*size*/
  86. .w {width: 100%}
  87. .w10 {width: 10px;}
  88. .w20 {width: 20px;}
  89. .w30 {width: 30px;}
  90. .w40 {width: 40px;}
  91. .w50 {width: 50px;}
  92. .w60 {width: 60px;}
  93. .w70 {width: 70px;}
  94. .w80 {width: 80px;}
  95. .w90 {width: 90px;}
  96. .w100 {width: 100px;}
  97. .w200 {width: 200px;}
  98. .w250 {width: 250px;}
  99. .w300 {width: 300px;}
  100. .w400 {width: 400px;}
  101. .w500 {width: 500px;}
  102. .w600 {width: 600px;}
  103. .w700 {width: 700px;}
  104. .w800 {width: 800px;}
  105. .h {height: 100%;}
  106. .h50 {height: 50px;}
  107. .h80 {height: 80px;}
  108. .h100 {height: 100px;}
  109. .h200 {height: 200x;}
  110. /*margin && padding*/
  111. .m10 {margin: 10px;}
  112. .m15 {margin: 15px;}
  113. .m30 {margin: 30px;}
  114. .mt5 {margin-top: 5px;}
  115. .mt10 {margin-top:10px;}
  116. .mt15 {margin-top: 15px;}
  117. .mt20 {margin-top: 20px;}
  118. .mt30 {margin-top: 30px;}
  119. .mt50 {margin-top: 50px;}
  120. .mt100 {margin-top: 100px;}
  121. .mr5 {margin-right: 5px;}
  122. .mr10 {margin-right:10px;}
  123. .mr15 {margin-right: 15px;}
  124. .mr20 {margin-right: 20px;}
  125. .mr30 {margin-right: 30px;}
  126. .mr50 {margin-right: 50px;}
  127. .mr100 {margin-right: 100px;}
  128. .mb5 {margin-bottom: 5px;}
  129. .mb10 {margin-bottom:10px;}
  130. .mb15 {margin-bottom: 15px;}
  131. .mb20 {margin-bottom: 20px;}
  132. .mb30 {margin-bottom: 30px;}
  133. .mb50 {margin-bottom: 50px;}
  134. .mb100 {margin-bottom: 100px;}
  135. .ml5 {margin-left: 5px;}
  136. .ml10 {margin-left:10px;}
  137. .ml15 {margin-left: 15px;}
  138. .ml20 {margin-left: 20px;}
  139. .ml30 {margin-left: 30px;}
  140. .ml50 {margin-left: 50px;}
  141. .ml100 {margin-left: 100px;}
  142. .p10 {padding: 10px;}
  143. .p15 {padding: 15px;}
  144. .p30 {padding: 30px;}
  145. .pt5 {padding-top: 5px;}
  146. .pt10 {padding-top:10px;}
  147. .pt15 {padding-top: 15px;}
  148. .pt20 {padding-top: 20px;}
  149. .pt30 {padding-top: 30px;}
  150. .pt50 {padding-top: 50px;}
  151. .pt100 {padding-top: 100px;}
  152. .pr5 {padding-right: 5px;}
  153. .pr10 {padding-right:10px;}
  154. .pr15 {padding-right: 15px;}
  155. .pr20 {padding-right: 20px;}
  156. .pr30 {padding-right: 30px;}
  157. .pr50 {padding-right: 50px;}
  158. .pr100 {padding-right: 100px;}
  159. .pb5 {padding-bottom: 5px;}
  160. .pb10 {padding-bottom:10px;}
  161. .pb15 {padding-bottom: 15px;}
  162. .pb20 {padding-bottom: 20px;}
  163. .pb30 {padding-bottom: 30px;}
  164. .pb50 {padding-bottom: 50px;}
  165. .pb100 {padding-bottom: 100px;}
  166. .pl5 {padding-left: 5px;}
  167. .pl10 {padding-left:10px;}
  168. .pl15 {padding-left: 15px;}
  169. .pl20 {padding-left: 20px;}
  170. .pl30 {padding-left: 30px;}
  171. .pl50 {padding-left: 50px;}
  172. .pl100 {padding-left: 100px;}


HTML 标签存在默认样式

不同的浏览器的默认样式也有差别，例如：
    ul 的默认缩进，在 IE 下，是通过 margin 实现的，在 Firefox 下，通过 padding 实现。

CSS reset，用重新定义的样式覆盖掉浏览器默认样式，提高开发效率。

最早的 CSS reset：
  1. * {
  2.     margin: 0;
  3.     padding: 0;
  4. }
不完善的原因：
1.HTML 标签默认的其他属性没有得到去除。
2.“*”是通配符，包括大量生僻标签和淘汰标签。

为什么没有加上颜色，大小等过多的属性，而只选择原子类？
CSS 很多样式具有继承性，权重很低，比标签选择符更低。会破坏CSS的继承性，page层会额外增加很多代码。

为什么对于浮动的元素加display:inline;？
解决IE6 的双外边距bug：在 IE6 下，如果对元素同时设置了浮动和左边距或者右边距，那么边距会加倍。

.zoom{zoom:1;} 触发 IE 的hasLayout。在 IE7 出来之前，一般通过height: 1%; 来触发，因为 IE6 默认将 height 解析成 min-height，不会引入副作用。但是 IE7 发布后就不适用了，采用zoom: 1;

m5,m10 这些虽然繁杂，但是可以大量减少page层的代码量。
