
const Router = require('koa-router');

const router = new Router();

// Routes
router.get('/', ctx => {
    ctx.body = {
        name: "keycloak"
    }
});


module.exports = router;