let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// Get all items
export const getItems = (req, res) => {
  res.status(200).json(items);
};
import { getItems, createItem, updateItem, deleteItem } from './controller.js';


// Create a new item
export const createItem = (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
};

// Get a single item by ID
export const getItem = (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = items.find(i => i.id === itemId);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.status(200).json(item);
};

// Update an item by ID
export const updateItem = (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = items.find(i => i.id === itemId);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  item.name = req.body.name;
  res.status(200).json(item);
};

// Delete an item by ID
export const deleteItem = (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const itemIndex = items.findIndex(i => i.id === itemId);
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  items.splice(itemIndex, 1);
  res.status(200).json({ message: "Item deleted successfully" });
};
