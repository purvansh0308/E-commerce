import React, { useContext, useEffect, useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import Title from '../component/Title';
import { shopDataContext } from '../context/ShopContext';
import Card from '../component/Card';

function Collections() {
  const [showFilter, setShowFilter] = useState(false);
  const { products, search, showSearch } = useContext(shopDataContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    const { value } = e.target;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const { value } = e.target;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = [...products];

    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProduct(filtered);
  };

  const sortProducts = () => {
    const sorted = [...filterProduct];

    switch (sortType) {
      case 'low-high':
        setFilterProduct(sorted.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProduct(sorted.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  return (
    <div className="w-full min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col md:flex-row pt-[70px] pb-[110px] overflow-x-hidden z-[2]">
      {/* Sidebar Filters */}
      <div
        className={`md:w-[25vw] w-full px-5 pt-4 md:min-h-[100vh] ${
          showFilter ? 'h-[50vh]' : 'h-[8vh]'
        } border-r border-gray-500 text-[#aaf5fa] md:fixed bg-[#1a1a1a] transition-all duration-300`}
      >
        <p
          className="text-[22px] font-semibold flex items-center gap-2 cursor-pointer"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          FILTERS
          {!showFilter ? (
            <FaChevronRight className="md:hidden" />
          ) : (
            <FaChevronDown className="md:hidden" />
          )}
        </p>

        <div
          className={`border mt-5 p-4 rounded-md bg-slate-700 ${
            showFilter ? '' : 'hidden'
          } md:block`}
        >
          <p className="text-[17px] font-medium mb-3">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-[15px]">
            {['Men', 'Women', 'Kids'].map((cat) => (
              <label key={cat} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="accent-[#aaf5fa]"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div
          className={`border mt-5 p-4 rounded-md bg-slate-700 ${
            showFilter ? '' : 'hidden'
          } md:block`}
        >
          <p className="text-[17px] font-medium mb-3">SUB-CATEGORIES</p>
          <div className="flex flex-col gap-2 text-[15px]">
            {['TopWear', 'BottomWear', 'WinterWear'].map((sub) => (
              <label key={sub} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={sub}
                  onChange={toggleSubCategory}
                  className="accent-[#aaf5fa]"
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-[25vw] w-full px-5">
        {/* Title + Sort */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 mt-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select
            className="bg-slate-600 text-white border-2 border-transparent hover:border-[#46d1f7] rounded-md px-4 py-2"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* Products */}
        <div className="w-full flex flex-wrap gap-6 justify-center items-center mt-8">
          {filterProduct.length > 0 ? (
            filterProduct.map((item, index) => (
              <Card
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
              />
            ))
          ) : (
            <p className="text-white text-[18px] mt-10">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collections;
