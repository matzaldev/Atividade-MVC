let _seq = 4;
const veiculos = [
  { id: 1, nome: 'Camaro' },
  { id: 2, nome: 'Golf' },
  { id: 3, nome: 'Mustang' },
];

const getAll = () => veiculos;

const findById = (id) => veiculos.find(v => v.id === Number(id));

const create = (data) => {
  const novo = { id: _seq++, nome: String(data.nome || '').trim() };
  veiculos.push(novo);
  return novo;
};

const updateById = (id, data) => {
  const idx = veiculos.findIndex(v => v.id === Number(id));
  if (idx === -1) return null;
  veiculos[idx] = { ...veiculos[idx], nome: String(data.nome || '').trim() };
  return veiculos[idx];
};

const deleteById = (id) => {
  const idx = veiculos.findIndex(v => v.id === Number(id));
  if (idx === -1) return false;
  veiculos.splice(idx, 1);
  return true;
};

module.exports = { getAll, findById, create, updateById, deleteById };