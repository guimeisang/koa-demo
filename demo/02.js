const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.body = 'guimeisang';
}

app.use(main);
app.listen(3000);

console.log(' http://127.0.0.1:3000');