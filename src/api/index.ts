export const getData = async (url: string, headers: Headers): Promise<void> => {
  const response: Response = await fetch(url, {
    headers,
    cache: 'no-cache'
  })
  return await response.json()
}

export const postData = async (
  url: string,
  headers: Headers,
  body: string
): Promise<void> => {
  const response: Response = await fetch(url, {
    method: 'POST',
    headers,
    body: body,
    cache: 'no-cache'
  })
  return await response.json()
}
