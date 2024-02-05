export const getData = async (url: string): Promise<void> => {
  const response: Response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await response.json()
}
