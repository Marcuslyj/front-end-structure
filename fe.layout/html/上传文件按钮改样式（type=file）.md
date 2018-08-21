<input type="file" >改样式有很多种方法，比如将其隐藏，然后通过$("[type='file']").click()来触发。但是在IE8中不支持，可设置透明度来实现兼容。
  1. input[type="file"] {
  2.     opacity: 0;
  3.     filter: alpha(opcity=0);
  4. }
