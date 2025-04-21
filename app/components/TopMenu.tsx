'use client';

import { Category, getCategories }from "../services/GetCategories";

type TopMenuProps = {
  selectedCategoryId: string;
  onCategorySelect: (newCategoryId: string) => void;
};

export default function TopMenu({ selectedCategoryId, onCategorySelect }: TopMenuProps) {
  return (
    <>
      <nav className="navbar sticky-top bg-primary navbar-expand-lg" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">Brand text</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {getCategories().map((item, index) => (
                <li key={index} className="nav-item">
                  <button 
                    className={`nav-link ${item.isDefault ? 'active' : ''}`}
                    aria-current={item.isDefault ? 'page' : undefined}
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