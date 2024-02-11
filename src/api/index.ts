export const getData = async (
  url: string,
  headers: Headers,
  httpMethod: string
): Promise<void> => {
  const response: Response = await fetch(url, {
    method: httpMethod,
    headers
  })
  return await response.json()
}
