import { Item, getItems } from "../services/GetItems";

type LeftMenuProps = {
  selectedCategoryId: string;
  selectedItemId: string;
  onItemSelect: (newItemId: string) => void;
};

export default function LeftMenu({ selectedCategoryId, selectedItemId, onItemSelect }: LeftMenuProps) {
  const items = getItems().filter(item => item.categoryId === selectedCategoryId);

  return (
    <ul className="nav flex-column">
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