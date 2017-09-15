const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const redirect = ctx => {
    ctx.response.redirect('/');
}

const main = ctx => {
    ctx.response.body = 'guimeisang'
}

app.use(route.get('/redirect', redirect));
app.use(route.get('/', main));

app.use(main);
app.listen(3000);