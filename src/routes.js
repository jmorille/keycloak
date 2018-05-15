
const Router = require('koa-router');

const router = new Router();

// Routes
router.get('/', ctx => {
    ctx.body = {
        name: "keycloak"
    }
});
router.get('/user', ctx => {
    ctx.body = {
        user: ctx
    }
});
router.get('/secure',  ctx => {
    ctx.body = {
        name: "Secure keycloak"
    }
});

module.exports = router;