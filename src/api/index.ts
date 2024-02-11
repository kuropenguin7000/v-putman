export const getData = async (url: string, headers: Headers): Promise<void> => {
  const response: Response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
    headers
  })
  return await response.json()
}
