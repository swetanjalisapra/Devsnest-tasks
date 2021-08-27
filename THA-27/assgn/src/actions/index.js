const addItem = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};

const removeItem = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};

export { addItem, removeItem };
