import React from "react";

export const ItemPreviewContext = React.createContext();

const initialState = {
  imageurl: "http://via.placeholder.com/350x250?text=Please select an image",
  itemOwner: {},
  created: new Date(),
  title: "Dummy Title",
  description: "Dummy description",
  tags: []
};

const ItemPreviewProvider = props => {
  // React hooks 'Item': state & 'setItem' is setState to update the state
  const [item, setItem] = React.useState(initialState); // inside useState is the initial state. empty = nothing

  const updatePreview = itemInput => {
    const newItem = { ...item, ...itemInput };
    setItem(newItem);
  };

  const resetPreview = () => {
    setItem(initialState);
  };

  return (
    <ItemPreviewContext.Provider
      value={{
        state: item,
        resetPreview: resetPreview,
        updatePreview: updatePreview
      }}
    >
      {props.children}
    </ItemPreviewContext.Provider>
  );
};

export default ItemPreviewProvider;
