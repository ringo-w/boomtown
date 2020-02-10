import React from "react";
import PropTypes from "prop-types";

export const ItemPreviewContext = React.createContext();

const initialState = {
  imageurl: "http://via.placeholder.com/350x250?text=Please select an image",
  itemowner: {},
  email: "dummyemail@gmail.com",
  created: new Date(),
  title: "Name your item",
  description: "Describe your item",
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

ItemPreviewProvider.propTypes = {
  children: PropTypes.object.isRequired
};

export default ItemPreviewProvider;
