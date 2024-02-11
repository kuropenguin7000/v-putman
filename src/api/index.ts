export const getData = async (
  url: string,
  headers: Headers,
  httpMethod: string
): Promise<void> => {
  const response: Response = await fetch(url, {
    method: httpMethod,
    mode: 'cors',
    credentials: 'same-origin',
    headers
  })
  return await response.json()
}
