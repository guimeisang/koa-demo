const Koa = require('koa');
const fs = require('fs');
const route = require('koa-route');
const app = new Koa();

const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href = "/">Index Page</a>'
}

const main = ctx => {
    ctx.response.body = 'guimeisang';
}

app.use(route.get('/', main));
app.use(route.get('/about', about));

app.listen(3000);

console.log(' http://127.0.0.1:3000');