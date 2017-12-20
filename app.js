const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

app.use(ctx => {
    ctx.body = fs.readFileSync('./views/index.html', 'utf8');
});
app.listen(3000);