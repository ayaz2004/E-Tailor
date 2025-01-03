import React from "react";

export default function Home() {
  const categories = [
    {
      title: "Coats & Jackets",
      products: [
        { id: 1, name: "Classic Trench Coat", price: "$120", image: "/images/trench-coat.jpg" },
        { id: 2, name: "Winter Overcoat", price: "$150", image: "/images/overcoat.jpg" },
      ],
    },
    {
      title: "Hoodies & Sweatshirts",
      products: [
        { id: 3, name: "Classic Hoodie", price: "$60", image: "/images/hoodie.jpg" },
        { id: 4, name: "Zip Sweatshirt", price: "$80", image: "/images/sweatshirt.jpg" },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white h-[600px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold uppercase">New Arrivals</h1>
          <p className="text-lg mt-4">Tailored Fashion, Just for You</p>
          <button className="mt-6 px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white hover:shadow-lg">
            Shop Now
          </button>
        </div>
      </section>

      {/* Product Categories */}
      {categories.map((category, index) => (
        <section key={index} className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{category.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-900"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} E-Tailor. All rights reserved.</p>
          <p className="mt-2">Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
}
