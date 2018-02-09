// 路由
const router = require('koa-router')();
// 格式化参数
const bodyParse = require('koa-bodyparser');

// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const app = new Koa();

app.use(bodyParser());
// 列表
router.get('/list', async (cxt, next) => {
    cxt.response.body = '<h1>list</h1>';
})
// 详情
router.get('/detail/:id', async (cxt, next) => {
    var id = cxt.params.id;
    cxt.response.body = `<h1>detail</h1><p>${id}</p>`;
})
// 首页
router.get('/', async (cxt, next) => {
    cxt.response.body = '<h1>Index</h1>';
})


app.use(router.routes());
app.listen(3000, function() {
    console.log('server is running！');
});