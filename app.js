// 路由
const router = require('./router/router');
// 格式化参数
const bodyParse = require('koa-bodyparser');
// 视图
const views = require('koa-views');
// 静态资源
const serve = require('koa-static');

// 导入koa
const Koa = require('koa');
const app = new Koa();

// 设置静态资源地址
app.use(serve(__dirname + '/bower_components'));
app.use(serve(__dirname + '/resource'));
//view
app.use(views(__dirname + '/views'));

app.use(router.routes());
app.listen(3000, function() {
    console.log('server is running！');
});