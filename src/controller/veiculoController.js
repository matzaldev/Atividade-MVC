const Veiculo = require('../model/veiculoModel');

const listView = (req, res) => {
  const data = Veiculo.getAll();
  res.render('veiculos/index', { veiculos: data });
};

const newView = (req, res) => {
  res.render('veiculos/form', { veiculo: null, action: '/veiculos', method: 'POST', btn: 'Salvar' });
};

const editView = (req, res) => {
  const v = Veiculo.findById(req.params.id);
  if (!v) return res.status(404).send('Veículo não encontrado');
  res.render('veiculos/form', { veiculo: v, action: `/veiculos/${v.id}?_method=PUT`, method: 'POST', btn: 'Atualizar' });
};

const create = (req, res) => {
  Veiculo.create(req.body);
  res.redirect('/veiculos');
};

const update = (req, res) => {
  const updated = Veiculo.updateById(req.params.id, req.body);
  if (!updated) return res.status(404).send('Veículo não encontrado');
  res.redirect('/veiculos');
};

const remove = (req, res) => {
  Veiculo.deleteById(req.params.id);
  res.redirect('/veiculos');
};

const apiList = (req, res) => res.json(Veiculo.getAll());

module.exports = { listView, newView, editView, create, update, remove, apiList };