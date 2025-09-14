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
    <div className="p-3">
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="card-title mb-0">
            <i className="bi bi-funnel me-2"></i>Browse Items
          </h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <small className="text-muted d-block mb-2">Current Category</small>
            <span className="badge bg-light text-dark border px-3 py-2 w-100 text-start">
              {selectedCategoryId !== '' ? selectedCategoryId : "All Categories"}
            </span>
          </div>

          <div className="mb-3">
            <label htmlFor="itemFilter" className="form-label small text-muted">
              Search Items
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                id="itemFilter"
                className="form-control"
                type="search"
                placeholder="Type to filter..."
                aria-label="Filter items"
                value={state.itemFilter}
                onChange={e => onFilterChange(e.target.value)}
              />
              {state.itemFilter && (
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => onFilterChange('')}
                  title="Clear filter"
                >
                  <i className="bi bi-x"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h6 className="mb-0 text-muted">Items ({getFilteredItems().length})</h6>
        </div>
        <div className="card-body p-0">
          {getFilteredItems().length > 0 ? (
            <div className="list-group list-group-flush">
              {getFilteredItems().map((item) => (
                <button
                  key={item.id}
                  className={`list-group-item list-group-item-action d-flex justify-content-between align-items-start ${
                    selectedItem !== null && selectedItem.id === item.id ? 'active' : ''
                  }`}
                  aria-current={selectedItem !== null && selectedItem.id === item.id ? 'page' : undefined}
                  onClick={() => onItemSelect(item)}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-medium">{item.name}</div>
                    <small className={selectedItem !== null && selectedItem.id === item.id ? 'text-white-50' : 'text-muted'}>
                      ${item.price}
                    </small>
                  </div>
                  {selectedItem !== null && selectedItem.id === item.id && (
                    <i className="bi bi-check-circle-fill text-white"></i>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-4">
              <i className="bi bi-inbox display-4 text-muted mb-3"></i>
              <p className="text-muted mb-0">No items found</p>
              <small className="text-muted">Try adjusting your search or category filter</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 