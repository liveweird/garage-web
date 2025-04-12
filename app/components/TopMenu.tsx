const getCategories = () => [
  { id: "books", name: "Books", isDefault: true },
  { id: "games", name: "Games" },
  { id: "other",name: "Other" }
];

const getCatalog = () => [
  { id: "1", categoryId: "books", name: "Book #1", description: "Description of Book #1", images: ["image11.jpg", "image12.jpg", "image13.jpg"] },
  { id: "2", categoryId: "books", name: "Book #2", description: "Description of Book #2", images: ["image21.jpg", "image22.jpg", "image23.jpg"] },
  { id: "3", categoryId: "books", name: "Book #3", description: "Description of Book #3", images: ["image31.jpg", "image32.jpg", "image33.jpg"] },
  { id: "4", categoryId: "games", name: "Game #1", description: "Description of Game #1", images: ["image41.jpg", "image42.jpg", "image43.jpg"] },
  { id: "5", categoryId: "others", name: "Other #1", description: "Description of Other #1", images: ["image51.jpg", "image52.jpg", "image53.jpg"] },
]

export default function TopMenu() {
  return (
    <>
      <nav className="navbar fixed-top bg-primary navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Brand text</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {getCategories().map((item, index) => (
                <li key={index} className="nav-item">
                  <a 
                    className={`nav-link ${item.isDefault ? 'active' : ''}`}
                    aria-current={item.isDefault ? 'page' : undefined}
                    href={item.id}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
} 