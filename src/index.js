const Koa = require('koa');
const router = require('./routes');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');


//
const PORT = process.env.PORT || 3001;
const app = new Koa();
app.use(bodyParser());

app.keys = ['some secret hurr'];
app.use(session({}, app));


var OICStrategy = require('passport-openid-connect').Strategy
var User = require('passport-openid-connect').User

const passport = require('koa-passport');

const oicConf = {
    "issuerHost": "http://thor:8080/auth/realms/dory",
    "client_id": "dory-app",
    "redirect_uri": "http://max:3001/callback",
    "scope": "openid userid email profile userid-feide"
};
const oic = new OICStrategy(oicConf);

passport.use(oic);
passport.serializeUser(OICStrategy.serializeUser);
passport.deserializeUser(OICStrategy.deserializeUser);


app.use(passport.initialize());
app.use(passport.session());

const Router = require('koa-router');
const router2 = new Router();
router2.get('/login', passport.authenticate('passport-openid-connect', {"successReturnToOrRedirect": "/"}));
router2.get('/callback', passport.authenticate('passport-openid-connect', {"callback": true, "successReturnToOrRedirect": "/"}));
router2.get('/logout',  ctx => {
   // if (ctx.isAuthenticated()) {
        ctx.logout();
        ctx.redirect(`${oicConf.issuerHost}/protocol/openid-connect/logout?redirect_uri=http%3A%2F%2Fmax%3A3001`);
    //}
});
app.use(router2.routes());
app.use(router2.allowedMethods());

// Bootstrap application router
app.use(router.routes());
app.use(router.allowedMethods());




app.listen(PORT, () => {
    console.log(`Server listening http://localhost:${PORT}`);
});