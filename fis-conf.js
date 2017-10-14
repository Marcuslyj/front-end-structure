fis.match('styles.scss', {
    // 加前缀
    preprocessor: fis.plugin('autoprefixer', {
        "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
        "cascade": true
    }),
    // fis-parser-scss 插件进行解析
    parser: fis.plugin('scss'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css',
    // 不使用缓存
    useCache: false
})
.hook('relative')