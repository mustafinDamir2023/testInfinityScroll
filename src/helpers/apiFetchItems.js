export const apiFetchItems = async (page = 1, limit = 3) => {
  try {
    const response = await fetch(
      `http://localhost:3003/api/items/?page=${page}&limit=${limit}`
    )

    // Проверяем, успешен ли ответ
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    // Ждем, пока ответ будет преобразован в JSON
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching items:', error)
    throw error // Пробрасываем ошибку дальше
  }
}
