import { useState } from 'react';

import { getItems, Item } from "../services/GetItems";

type LeftMenuProps = {
  selectedCategoryId: string;
  selectedItem: Item | null;
  onItemSelect: (newItem: Item) => void;
};

type LeftMenuState = {
  itemFilter: string;
};

export default function LeftMenu({ selectedCategoryId, selectedItem, onItemSelect }: LeftMenuProps) {
  const [state, setState] = useState<LeftMenuState>({
    itemFilter: '',
  });

  function getFilteredItems() : Item[] {
    const byCategory = selectedCategoryId !== '' ?
      getItems().filter(item => item.categoryId === selectedCategoryId) :
      getItems();

    const andFiltered = state.itemFilter !== '' ?
      byCategory.filter(item => item.name.toLowerCase().includes(state.itemFilter.toLowerCase())) :
      byCategory;

    return andFiltered;
  }

  function onFilterChange(newFilter: string) {
    setState({
      ...state,
      itemFilter: newFilter,
    });
  }

  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <button className="nav-link disabled" aria-disabled="true">Selected category: {selectedCategoryId !== '' ? selectedCategoryId : "all"}</button>
      </li>
      <li className="nav-item">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Filter"
            aria-label="Filter"
            value={state.itemFilter}
            onChange={e => {
              onFilterChange(e.target.value);
            }}
          />
          <button className="btn btn-primary" type="reset" onClick={
            e => {
              e.preventDefault();
              onFilterChange('');
            }
          }>Clear</button>
        </form>
      </li>
      {getFilteredItems().map((item) => (
        <li key={item.id} className="nav-item">
          <button 
            className={`nav-link ${selectedItem !== null && selectedItem.id === item.id ? 'active' : ''}`}
            aria-current={selectedItem !== null && selectedItem.id === item.id ? 'page' : undefined}
            onClick={() => onItemSelect(item)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
} 