var express = require('express');
var router = express.Router();

// Data  yang akan kita tampilkan
const admin = [
{ id: 123, nama: 'Salsa', alamat:'jln.ki ageng pemanahan' },
{ id: 122, nama: 'bayu', alamat:'jln.ki ageng pemanahan' },
];
// Rute GET untuk mendapatkan daftar 
router.get('/', function(req, res, next) {
res.json(admin);
});


module.exports = router;
