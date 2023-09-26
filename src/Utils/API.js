export async function fetcher(apiRoute) {
  const url = process.env.API_URL + apiRoute

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    return null
  }
}
