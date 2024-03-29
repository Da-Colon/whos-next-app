import { useState } from 'react';
import { ListProps } from '../../context/typescript/lists.types';

const Wheel = ({items, onSelectItem}: {items: ListProps[], onSelectItem?: (value: number | null) => void}) => {
  const [ selectedItem, setItem ] = useState<number | null>(null)

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
  const spinning = selectedItem !== null ? 'spinning' : '';

  return (
    <div className="wheel-container">
        <div className={`wheel ${spinning}`} onClick={selectItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
  )
}

export default Wheel