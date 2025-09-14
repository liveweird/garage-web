'use client';

import { getCategories }from "../services/GetCategories";

type TopMenuProps = {
  selectedCategoryId: string;
  onCategorySelect: (newCategoryId: string) => void;
};

export default function TopMenu({ selectedCategoryId, onCategorySelect }: TopMenuProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top">
        <div className="container-fluid px-4">
          <button
            className="navbar-brand btn btn-link text-white text-decoration-none p-0 border-0 fw-bold fs-4"
            onClick={() => onCategorySelect('')}
            style={{ background: 'none' }}
          >
            <i className="bi bi-house-door me-2"></i>
            Garage Sale Hub
          </button>

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
                  className={`btn ${selectedCategoryId === '' ? 'btn-primary' : 'btn-outline-light'} rounded-pill px-4`}
                  onClick={() => onCategorySelect('')}
                >
                  <i className="bi bi-grid me-2"></i>
                  All Categories
                  {selectedCategoryId === '' && (
                    <span className="badge bg-light text-dark ms-2">
                      {getCategories().length}
                    </span>
                  )}
                </button>
              </li>
              {getCategories().map((category) => (
                <li key={category.id} className="nav-item me-2">
                  <button
                    className={`btn ${category.id === selectedCategoryId ? 'btn-primary' : 'btn-outline-light'} rounded-pill px-4`}
                    aria-current={category.id === selectedCategoryId ? 'page' : undefined}
                    onClick={() => onCategorySelect(category.id)}
                  >
                    <i className="bi bi-tag me-2"></i>
                    {category.name}
                    {category.id === selectedCategoryId && (
                      <i className="bi bi-check-circle-fill ms-2"></i>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center">
              <span className="badge bg-secondary rounded-pill px-3 py-2 me-3">
                <i className="bi bi-collection me-2"></i>
                {getCategories().length} Categories
              </span>
              <div className="dropdown">
                <button
                  className="btn btn-outline-light btn-sm rounded-circle p-2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  title="More options"
                >
                  <i className="bi bi-three-dots-vertical"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => onCategorySelect('')}
                    >
                      <i className="bi bi-arrow-clockwise me-2"></i>
                      Reset Filters
                    </button>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item" disabled>
                      <i className="bi bi-info-circle me-2"></i>
                      About
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
} 