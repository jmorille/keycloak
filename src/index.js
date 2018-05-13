const Koa = require('koa');
const app = new Koa();

const router = require('./routes');

// Bootstrap application router
app.use(router.routes());
app.use(router.allowedMethods());




app.listen(3000, () => {
    console.log("Server listening http://localhost:3000");
});