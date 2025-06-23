import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
import { v4 as uuid } from "uuid";

function ShoppingList() {
  const [items, setItems] = useState([
    {
      id: uuid(),
      product: "Bananas",
      quantity: 2,
    },
    {
      id: uuid(),
      product: "Mangos",
      quantity: 3,
    },
  ]);

  const addItem = (item) => {
    // if (!item.product) return;
    setItems((currItems) => {
      return [...currItems, { ...item, id: uuid() }];
    });
  };

  return (
    <div>
      <h1>ShoppingList</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      <ValidatedShoppingListForm addItem={addItem} />
    </div>
  );
}

export default ShoppingList;
