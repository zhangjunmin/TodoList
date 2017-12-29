const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const router = require('koa-router');

router.get('/',async (cxt,next)=>{
	cxt.body = await fs.readFile('./views/index.html', 'utf-8');
});

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);
