const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    ctx.response.body = 'guimeisang';
}

app.use(main);
app.listen(3000);

console.log(' http://127.0.0.1:3000');