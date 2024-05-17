const Item = require('../models/item');

exports.createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) throw new Error('Item not found');
    res.json(item);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) throw new Error('Item not found');
    await item.update(req.body);
    res.json(item);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) throw new Error('Item not found');
    await item.destroy();
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
