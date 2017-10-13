  ● 一列固定宽度
      a. <div id="layout">1列固定宽度</div>
      a. #layout {
      b. 	background-color: #ccc;
      c. 	border: 2px solid #333;
      d. 	width: 300px;
      e. 	height: 300px;
      f. }

  ● 一列宽度自适应
      a. #layout {
      b. 	background-color: #ccc;
      c. 	border: 2px solid #333;
      d. 	width: 80%;
      e. 	height: 300px;
      f. }

  ● 一列固定宽度居中
      a. #layout {
      b. 	background-color: #ccc;
      c. 	border: 2px solid #333;
      d. 	width: 300px;
      e. 	height: 300px;
      f. 	margin: 0 auto;
      g. }

  ● 二列固定宽度
      a. <div id="left">左列</div>
      b. <div id="right">右列</div>
      a. #left,#right {
      b. 	background-color: #ccc;
      c. 	border: 2px solid #333;
      d. 	width: 300px;
      e. 	height: 300px;
      f. 	float: left;
      g. }

  ● 二列宽度自适应
      a. #left,#right {
      b. 	background-color: #ccc;
      c. 	border: 2px solid #333;
      d. 	width: 20%;
      e. 	height: 300px;
      f. 	float: left;
      g. }
      h. #right {
      i. 	width: 70%;
      j. }

  ● 二列右列宽度自适应
      a. #left {
      b. 	background-color: #ccc;
      c. 	border: 2px solid #333;
      d. 	width: 100px;
      e. 	height: 300px;
      f. 	float: left;
      g. }
      h. #right {
      i. 	background-color: #ccc;
      j. 	border: 2px solid #333;
      k. 	height: 300px;
      l. }

  ● 二列固定宽度居中
      a. <div id="layout">
      b.     <div id="left">左列</div>
      c.     <div id="right">右列</div>
      d. </div>
      a. #layout {
      b. 	margin: 0 auto;
      c. 	width: 408px;
      d. }
      e. #left,#right {
      f. 	background-color: #ccc;
      g. 	border: 2px solid #333;
      h. 	width: 200px;
      i. 	height: 300px;
      j. 	float: left;
      k. }

  ● 三列中间宽度自适应
      a. <div id="left">左列</div>
      b. <div id="center">中间自适应</div>
      c. <div id="right">右列</div>
      a. #left,#right,#center {
      b. 	background: #ccc;
      c. 	border: 2px solid #333;
      d.     height: 300px;
      e. }
      f. #left,#right {
      g. 	width: 200px;
      h. 	position: absolute;
      i. 	top: 0;
      j. }
      k. #left {
      l. 	left: 0;
      m. }
      n. #right {
      o. 	right: 0;
      p. }
      q. #center {
      r. 	margin: 0 204px;
      s. }

  ● 高度自适应
      a. html,body {
      b.     margin: 0;
      c.     height: 100%;
      d. }
      e. #left {
      f.     background-color: #ccc;
      g.     width: 300px;
      h.     height: 100%;
      i.     float: left;
      j. }
给body设置height: 100%的原因：
        子元素的自适应高度取决于父元素
给html设置height: 100%的原因：
在 IE中，html 高度默认为100%，body 不是。
在 Firefox 中，html 高度默认不是100%。


自己总结：div 默认宽度100%，或者100%-element(float)
           float 为了设置文字环绕效果，设置了float会丢失宽高，等于加            了属性display: inline-block,所以设置float的块状元素必须设置宽高
