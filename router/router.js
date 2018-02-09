const router = require('koa-router')();

// 列表
router.get('/list', async (cxt, next) => {
    await cxt.render('list');
})
// 详情
router.get('/detail/:id', async (cxt, next) => {
    var id = cxt.params.id;
    await cxt.render('detail');
})
// 首页
router.get('/', async (cxt, next) => {
    await cxt.render('index');
})

module.exports = router;