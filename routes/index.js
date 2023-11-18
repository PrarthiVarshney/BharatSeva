const express = require('express');
const router = express.Router();


router.get
    ('/', (req, res) => {
        res.render('Splash');
    }
    );
router.get('/HomePage', (req, res) => {
    res.render('HomePage');
})


router.get('/home', (req, res) => {
    res.render('opening');
}
);

//log in handle
router.get('/login', (req, res) => {
    res.render('login');
}
);

router.get('/register', (req, res) => {
    res.render('register');
}
);



module.exports = router;