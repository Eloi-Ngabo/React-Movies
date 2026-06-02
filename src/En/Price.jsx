import React from 'react'

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div>
      {salePrice && originalPrice ? (
        <>
          <span className="book__price--sale">${salePrice.toFixed(2)}</span>
          <span className="book__price--original">${originalPrice.toFixed(2)}</span>
        </>
      ) : (
        <div className="skeleton book__price--skeleton"></div>
      )}
    </div>
  )
}

export default Price
