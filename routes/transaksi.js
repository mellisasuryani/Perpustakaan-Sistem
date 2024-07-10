const express = require('express');
const router = express.Router();


// Data  yang akan kita tampilkan
const transaksi = [
    {IDtransaksi:4123, tanggalPengembalian : 12, IDanggota :123 , IDbuku : 1111 , IDpengembalian: 3123  },
    {IDtransaksi:4122, tanggalPengembalian : 21, IDanggota :212, IDbuku : 1222 , IDpengembalian:3122  },
];

// Rute GET untuk mendapatkan daftar 
router.get('/', function(req, res, next) {
    res.json(transaksi);
    });



// Endpoint untuk menambahkan produk baru
router.post('/',   async (req, res, next) => {
    try {
        const { tanggalPengembalian, IDanggota, IDbuku, IDpengembalian } =
    req.body;
        const newTransaksi = await transaksi.create({ tanggalPengembalian, IDanggota, IDbuku, IDpengembalian });
        res.status(201).json(newTransaksi);
    } catch (err) {
        next(err);
    }
    });
    
    // Endpoint untuk menampilkan semua produk
    router.get('/',  async (req, res, next) => {
        try {
            const transaksi = await transaksi.findAll();
            res.json(transaksi);
            } catch (err) {
            next(err);
            }
            });
    
            // Endpoint untuk menampilkan produk berdasarkan ID
            router.get('/:id',  async (req, res, next) => {
            try {
            const transaksi = await transaksi.findByPk(req.params.id);
            if (transaksi) {
            res.json(transaksi);
            } else {
            res.status(404).json({ message: 'transaksi not found' });
            }
            } catch (err) {
            next(err);
            }
            });
            // Endpoint untuk memperbarui produk berdasarkan ID
            router.put('/:id', async (req, res, next) => {
            try {
            const { tanggalPengembalian, IDanggota, IDbuku, IDpengembalian } =
            req.body;
            const transaksi = await transaksi.findByPk(req.params.id);
            if (transaksi) {
            transaksi.tanggalPengembalian = tanggalPengembalian;
            transaksi.IDanggota = IDanggota;
            transaksi.IDbuku = IDbuku;
            transaksi.IDpengembalian = IDpengembalian;
            await transaksi.save();
            res.json(transaksi);
            } else {
            res.status(404).json({ message: 'transaksi not found' });
            }
            } catch (err) {
            next(err);
            }
            });
            // Endpoint untuk menghapus produk berdasarkan ID
            router.delete('/:id',  async (req, res, next) => {
            try {
            const transaksi = await transaksi.findByPk(req.params.id);
            if (transaksi) {
                await transaksi.destroy();
                res.json({ message: 'transaksi deleted' });
                } else {
                res.status(404).json({ message: 'transaksi not found' });
                }
                } catch (err) {
                next(err);
                }
                }); 
    
        module.exports = router;
    