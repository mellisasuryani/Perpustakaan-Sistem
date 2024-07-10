const express = require('express');
const router = express.Router();


// Data  yang akan kita tampilkan
const anggota = [
{ idAnggota: 211, nama: 'anis', noHP: 123456 },
{ idAnggota: 212, nama: 'vivi', noHP: 1223456 },
];
// Rute GET untuk mendapatkan daftar 
router.get('/', function(req, res, next) {
res.json(anggota);
});




// Endpoint untuk menambahkan produk baru
router.post('/',   async (req, res, next) => {
try {
    const { nama, noHP} =
req.body;
    const newAnggota= await admin.create({ nama, noHP});
    res.status(201).json(newAnggota);
} catch (err) {
    next(err);
}
});

// Endpoint untuk menampilkan semua produk
router.get('/',  async (req, res, next) => {
    try {
        const Anggota = await Anggota.findAll();
        res.json(Anggota);
        } catch (err) {
        next(err);
        }
        });

        // Endpoint untuk menampilkan produk berdasarkan ID
        router.get('/:id', async (req, res, next) => {
        try {
        const Anggota= await Anggota.findByPk(req.params.id);
        if (Anggota) {
        res.json(Anggota);
        } else {
        res.status(404).json({ message: 'anggota not found' });
        }
        } catch (err) {
        next(err);
        }
        });
        // Endpoint untuk memperbarui produk berdasarkan ID
        router.put('/:id',  async (req, res, next) => {
        try {
        const { nama, noHP} =
        req.body;
        const Anggota = await Anggota.findByPk(req.params.id);
        if (Anggota) {
        product.nama = nama;
        product.noHP = noHP;
        await Anggota.save();
        res.json(Anggota);
        } else {
        res.status(404).json({ message: 'anggota not found' });
        }
        } catch (err) {
        next(err);
        }
        });
        // Endpoint untuk menghapus produk berdasarkan ID
        router.delete('/:id',  async (req, res, next) => {
        try {
        const Anggota = await admin.findByPk(req.params.id);
        if (Anggota) {
            await Anggota.destroy();
            res.json({ message: 'Anggota deleted' });
            } else {
            res.status(404).json({ message: 'Anggota not found' });
            }
            } catch (err) {
            next(err);
            }
            }); 

    module.exports = router;
