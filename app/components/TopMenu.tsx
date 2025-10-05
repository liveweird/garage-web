"use client";

import { getCategories } from "../services/GetCategories";

type TopMenuProps = {
  selectedCategoryId: string;
  onCategorySelect: (newCategoryId: string) => void;
};

export default function TopMenu({
  selectedCategoryId,
  onCategorySelect,
}: TopMenuProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top">
        <div className="container-fluid px-4">
          <span className="navbar-brand text-white fw-bold fs-4">
            <i className="bi bi-house-door me-2"></i>
            Garage Sale Hub
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item me-2">
                <button
                  className={`btn ${selectedCategoryId === "" ? "btn-primary" : "btn-outline-light"} rounded-pill px-4`}
                  onClick={() => onCategorySelect("")}
                >
                  <i className="bi bi-grid me-2"></i>
                  All Categories
                </button>
              </li>
              {getCategories().map((category) => (
                <li key={category.id} className="nav-item me-2">
                  <button
                    className={`btn ${category.id === selectedCategoryId ? "btn-primary" : "btn-outline-light"} rounded-pill px-4`}
                    aria-current={
                      category.id === selectedCategoryId ? "page" : undefined
                    }
                    onClick={() => onCategorySelect(category.id)}
                  >
                    {category.name}
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
