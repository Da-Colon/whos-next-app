import { useState } from 'react';

const Wheel = ({items, onSelectItem}) => {
  const [ selectedItem, setItem ] = useState(null)

  const selectItem = () => {
    if(selectedItem === null) {
      const itemSelected = Math.floor(Math.random() * items.length);
      if(onSelectItem) {
        onSelectItem(itemSelected)
      }
      setItem(itemSelected)
    } else {
      setItem(null)
    }
  }
  const wheelVars = {
    '--nb-item': items.length,
    '--selected-item': selectedItem,
  };

  const spinning = selectedItem !== null ? 'spinning' : '';

  return (
    <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={selectItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
  )
}

export default Wheel