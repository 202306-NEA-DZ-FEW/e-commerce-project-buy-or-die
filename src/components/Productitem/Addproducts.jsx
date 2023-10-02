import React, { useState, useEffect } from "react"
import { storage, db } from "@/Utils/firebase"
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  updateMetadata,
} from "firebase/storage"
import { getFirestore, collection, addDoc } from "firebase/firestore"

export default function ProductForm() {
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productImg, setProductImg] = useState(null)
  const [error, setError] = useState("")
  const [uploading, setUploading] = useState(false)

  const types = ["image/png", "image/jpeg"]

  const productImgHandler = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile)
      setError("")
    } else {
      setProductImg(null)
      setError("Please select a valid image type (jpg or png)")
    }
  }

  const addProduct = async (e) => {
    e.preventDefault()
    if (!productName || !productPrice || !productImg) {
      setError("All fields are required")
      return
    }

    setError("")
    setUploading(true)

    try {
      const imgRef = ref(storage, `product-images/${productImg.name}`)
      await uploadBytes(imgRef, productImg)

      const metadata = {
        customMetadata: {
          productName: productName,
          productPrice: productPrice,
        },
      }
      await updateMetadata(imgRef, metadata)

      const imgUrl = await getDownloadURL(imgRef)

      await addDoc(collection(db, "Products"), {
        ProductName: productName,
        ProductPrice: parseFloat(productPrice),
        ProductImg: imgUrl,
      })

      setProductName("")
      setProductPrice("")
      setProductImg(null)
      setUploading(false)
    } catch (error) {
      setError("Error adding product: " + error.message)
      setUploading(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form autoComplete="off" className="space-y-4" onSubmit={addProduct}>
        <div>
          <label htmlFor="product-name" className="block font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            className="form-input w-full"
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="product-price" className="block font-medium">
            Product Price
          </label>
          <input
            type="number"
            id="product-price"
            className="form-input w-full"
            required
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="product-img" className="block font-medium">
            Product Image
          </label>
          <input
            type="file"
            id="product-img"
            className="form-input w-full"
            accept="image/png, image/jpeg"
            required
            onChange={productImgHandler}
          />
        </div>
        {uploading && <p className="text-blue-500">Uploading image...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-[#405454] text-white rounded px-4 py-2 hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}
