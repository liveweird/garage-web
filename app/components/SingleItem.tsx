'use client';

import { Item } from "../services/GetItems";

export default function SingleItem({ item }: { item: Item }) {
    return (
        <div className="container-fluid p-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            {item.images.length > 0 ? (
                                <div id={`carousel-${item.id}`} className="carousel slide rounded" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        {item.images.map((_, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                data-bs-target={`#carousel-${item.id}`}
                                                data-bs-slide-to={index}
                                                className={index === 0 ? "active" : ""}
                                                aria-current={index === 0 ? "true" : "false"}
                                                aria-label={`Slide ${index + 1}`}
                                            ></button>
                                        ))}
                                    </div>
                                    <div className="carousel-inner rounded">
                                        {item.images.map((imageUrl, index) => (
                                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                                <img
                                                    src={imageUrl}
                                                    className="d-block w-100 rounded"
                                                    alt={`${item.name} image ${index + 1}`}
                                                    style={{ height: "400px", objectFit: "cover" }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${item.id}`} data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${item.id}`} data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="d-flex align-items-center justify-content-center bg-light rounded" style={{ height: "400px" }}>
                                    <span className="text-muted fs-5">
                                        <i className="bi bi-image me-2"></i>No images available
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="col-lg-6">
                            <div className="mb-4">
                                <h1 className="display-6 fw-bold text-primary mb-2">{item.name}</h1>
                                <h2 className="text-success fw-bold fs-2 mb-3">${item.price}</h2>
                                <span className="badge bg-secondary fs-6 mb-3">Category: {item.categoryId}</span>
                            </div>

                            {item.description && (
                                <div className="mb-4">
                                    <h5 className="text-muted mb-2">Description</h5>
                                    <p className="lead text-dark">{item.description}</p>
                                </div>
                            )}

                            {item.attributes.length > 0 && (
                                <div className="mb-4">
                                    <h5 className="text-muted mb-3">Specifications</h5>
                                    <div className="row g-2">
                                        {item.attributes.map((attribute, index) => (
                                            <div key={index} className="col-12">
                                                <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                                                    <span className="fw-medium text-dark">{attribute.name}</span>
                                                    <span className="text-muted">{attribute.value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                                <button className="btn btn-primary btn-lg me-md-2" type="button">
                                    <i className="bi bi-heart me-2"></i>Add to Wishlist
                                </button>
                                <button className="btn btn-outline-secondary btn-lg" type="button">
                                    <i className="bi bi-share me-2"></i>Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}