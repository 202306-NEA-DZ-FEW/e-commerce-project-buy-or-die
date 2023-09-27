// import React, { useState } from 'react';
// import ProductCard from '@/components/ProductCard';

// const ProductSlider = ({ products }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNextSlide = () => {
//     const nextIndex = (currentIndex + 1) % products.length;
//     setCurrentIndex(nextIndex);
//   };

//   const handlePrevSlide = () => {
//     const prevIndex = (currentIndex - 1 + products.length) % products.length;
//     setCurrentIndex(prevIndex);
//   };

//   return (
//     <div className="product-slider relative">
//       <button
//         onClick={handlePrevSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2"
//       >
//         &lt; Prev
//       </button>
//       <div className="slider-content relative overflow-hidden">
//         {products.map((product, index) => (
//           <div
//             key={product.id}
//             className={`slide absolute top-0 ${
//               index === currentIndex ? 'left-0' : 'left-full'
//             } transition-transform duration-300 transform`}
//           >
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={handleNextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2"
//       >
//         Next &gt;
//       </button>
//     </div>
//   );
// };

// export default ProductSlider;
