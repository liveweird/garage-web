'use client';

import { useEffect } from 'react';
import { Item } from "../services/GetItems";

export default function SingleItem({ item }: { item: Item }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <div className="container-fluid">
            <div className="row mb-3">
                <div className="col-md-3"><strong>Name:</strong></div>
                <div className="col-md-9">{item.name}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-3"><strong>Category:</strong></div>
                <div className="col-md-9">{item.categoryId}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-3"><strong>Price:</strong></div>
                <div className="col-md-9">${item.price}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-3"><strong>Description:</strong></div>
                <div className="col-md-9">{item.description}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-3"><strong>Images:</strong></div>
                <div className="col-md-9">
                    {item.images.length > 0 ? (
                        <div id={`carousel-${item.id}`} className="carousel slide" data-bs-ride="carousel">
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
                            <div className="carousel-inner">
                                {item.images.map((imageUrl, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <img
                                            src={imageUrl}
                                            className="d-block w-100"
                                            alt={`${item.name} image ${index + 1}`}
                                            style={{ maxHeight: "400px", objectFit: "contain" }}
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
                        <span className="text-muted">No images</span>
                    )}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-3"><strong>Attributes:</strong></div>
                <div className="col-md-9">
                    {item.attributes.length > 0 ? (
                        <div>
                            {item.attributes.map((attribute, index) => (
                                <div key={index} className="row mb-2">
                                    <div className="col-md-4"><strong>{attribute.name}:</strong></div>
                                    <div className="col-md-8">{attribute.value}</div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <span className="text-muted">No attributes</span>
                    )}
                </div>
            </div>
        </div>
    );
}