
const express = require('express');
const ctrl = require('../controller/veiculoController');
const router = express.Router();

router.get('/', ctrl.listView);
router.get('/novo', ctrl.newView);
router.get('/:id/editar', ctrl.editView);

router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

router.get('/api/all/json', ctrl.apiList);

module.exports = router;
