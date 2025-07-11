'use client';

import { getCategories }from "../services/GetCategories";

type TopMenuProps = {
  selectedCategoryId: string;
  onCategorySelect: (newCategoryId: string) => void;
};

export default function TopMenu({ selectedCategoryId, onCategorySelect }: TopMenuProps) {
  return (
    <>
      <nav className="navbar sticky-top bg-primary navbar-expand-lg" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#" onClick={(e) => {
            e.preventDefault();
            onCategorySelect('');
          }}>Garage Sale!</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {getCategories().map((item, index) => (
                <li key={index} className="nav-item">
                  <button 
                    className={`nav-link ${item.id === selectedCategoryId ? 'active' : ''}`}
                    aria-current={item.id === selectedCategoryId ? 'page' : undefined}
                    onClick={() => onCategorySelect(item.id)}>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
} 