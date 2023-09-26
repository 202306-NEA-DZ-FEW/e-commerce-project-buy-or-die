export async function fetcher(apiRoute) {
  const url = "https://dummyjson.com/" + apiRoute

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    return null
  }
}
