import { getItems } from "../services/GetItems";

type LeftMenuProps = {
  selectedCategoryId: string;
  selectedItemId: string;
  onItemSelect: (newItemId: string) => void;
};

export default function LeftMenu({ selectedCategoryId, selectedItemId, onItemSelect }: LeftMenuProps) {
  const items =
    selectedCategoryId !== '' ?
      getItems().filter(item => item.categoryId === selectedCategoryId) :
      getItems();

  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <button className="nav-link disabled" aria-disabled="true">Selected category: {selectedCategoryId !== '' ? selectedCategoryId : "all"}</button>
      </li>
      {items.map((item) => (
        <li key={item.id} className="nav-item">
          <button 
            className={`nav-link ${selectedItemId === item.id ? 'active' : ''}`}
            aria-current={selectedItemId === item.id ? 'page' : undefined}
            onClick={() => onItemSelect(item.id)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
} 