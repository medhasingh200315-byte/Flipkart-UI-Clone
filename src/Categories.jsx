const Categories = () => {
    const categoryData = [
      { name: "Minutes", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100" },
      { name: "Mobiles & Tablets", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" },
      { name: "Fashion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwy7quOZ9mGqHxQuSRK1jOaBjSo7Fi33Lpmg&s", hasDropdown: true },
      { name: "Electronics", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_BWZWXjAZxddByC2Oob1GQoRjDcAwbPrhdQ&s", hasDropdown: true },
      { name: "TVs & Appliances", img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/e90944802d996756.jpg?q=100" },
      { name: "Home & Furniture", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZI-26-tLnkFjJT9XKspqPMk3eacZA_1Ykw&s" },
      { name: "Flight Booking", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100" },
      { name: "Beauty,Food", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08MKE37g7shFoq9D21jVhilthZ5CUpHttwA&s" },
      { name: "Grocery", img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/e730a834ad950bae.png?q=100" }
    ];
  
    return (
      <div className="categories-container">
        {categoryData.map((item, index) => (
          <div key={index} className="category-item">
            <div className="category-image-wrapper">
              {item.badge && <span className="new-badge">{item.badge}</span>}
              <img src={item.img} alt={item.name} />
            </div>
            <p>
              {item.name} {item.hasDropdown && <span className="arrow">⌄</span>}
            </p>
          </div>
        ))}
      </div>
    );
};

export default Categories;