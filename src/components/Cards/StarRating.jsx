import React from "react"

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating - fullStars >= 0.5
  const hasExtraStar = rating - fullStars >= 0.9

  const renderStars = () => {
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          aria-hidden="true"
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            clipRule="evenodd"
            stroke="orange"
          />
        </svg>,
      )
    }

    if (hasHalfStar && !hasExtraStar) {
      stars.push(
        <svg
          className="h-5 w-5 text-yellow-300"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="half_grad">
              <stop offset="55%" stop-color="yellow" />
              <stop offset="45%" stop-color="grey" stop-opacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M10 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            fill="url(#half_grad)"
            stroke-width="1"
            stroke="orange"
          />
        </svg>,
      )
    }

    return stars
  }

  return <div className="flex items-center">{renderStars()}</div>
}

export default StarRating
