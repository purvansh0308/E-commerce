import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopDataContext } from '../context/ShopContext';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct';
import Loading from '../component/Loading';

function ProductDetail() {
  const { productId } = useParams();
  const { products, currency, addtoCart, loading } = useContext(shopDataContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image1);
    }
  }, [productId, products]);

  if (!productData) return <div className='opacity-0'></div>;

  return (
    <div>
      <div className='w-[99vw] h-fit bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col lg:flex-row items-center justify-start gap-[20px]'>
        {/* Image Gallery */}
        <div className='lg:w-[50vw] w-[90vw] mt-[70px] flex flex-col-reverse lg:flex-row items-center justify-center gap-[20px]'>
          <div className='flex lg:flex-col flex-row gap-[10px]'>
            {[productData.image1, productData.image2, productData.image3, productData.image4].map((img, idx) => (
              <div key={idx} className='w-[60px] h-[60px] md:w-[100px] md:h-[100px] bg-slate-300 rounded-md overflow-hidden border'>
                <img src={img} alt='' className='w-full h-full object-cover cursor-pointer' onClick={() => setImage(img)} />
              </div>
            ))}
          </div>
          <div className='lg:w-[60%] w-[80%] border rounded-md overflow-hidden'>
            <img src={image} alt='' className='w-full h-full object-fill' />
          </div>
        </div>

        {/* Product Info */}
        <div className='lg:w-[50vw] w-full px-[30px] lg:px-0 py-[20px] flex flex-col gap-[10px] text-white'>
          <h1 className='text-[40px] font-semibold'>{productData.name.toUpperCase()}</h1>
          <div className='flex items-center gap-1'>
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStarHalfAlt className='text-[20px] fill-[#FFD700]' />
            <p className='text-[18px] font-semibold'>(124)</p>
          </div>
          <p className='text-[30px] font-semibold'>{currency} {productData.price}</p>
          <p className='w-[90%] text-[16px] md:text-[20px]'>{productData.description}</p>

          {/* Size Selector */}
          <div className='mt-4'>
            <p className='text-[20px] font-semibold'>Select Size</p>
            <div className='flex gap-2 mt-2 flex-wrap'>
              {productData.sizes?.map((item, index) => (
                <button key={index} onClick={() => setSize(item)}
                  className={`border px-4 py-2 bg-slate-300 rounded-md ${item === size ? 'bg-black text-[#2f97f1] text-[20px]' : ''}`}>
                  {item}
                </button>
              ))}
            </div>
            <button
              className='mt-4 text-[16px] bg-[#495b61c9] text-white py-2 px-5 rounded-2xl border shadow-md'
              onClick={() => addtoCart(productData._id, size)}>
              {loading ? <Loading /> : "Add to Cart"}
            </button>
          </div>

          <div className='w-full h-[1px] bg-slate-700 my-4'></div>
          <div className='text-[16px]'>
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description and Related */}
      <div className='w-full min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] py-8'>
        <div className='flex gap-4 px-[20px] lg:px-[80px] mb-4'>
          <p className='border px-5 py-3 text-sm text-white'>Description</p>
          <p className='border px-5 py-3 text-sm text-white'>Reviews (124)</p>
        </div>

        <div className='w-[80%] md:h-[150px] h-[220px] bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] px-[20px] flex items-center mx-auto'>
          <p>Upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on OneCart. Crafted from breathable, high-quality fabric, it offers all-day comfort and effortless style. Easy to maintain and perfect for any setting, this shirt is a must-have essential for those who value both fashion and function.</p>
        </div>

        <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id} />
      </div>
    </div>
  );
}

export default ProductDetail;
