import { useEffect } from 'react'
import { useState } from 'react'
import { OneItem } from './components/oneItem'
import { apiFetchItems } from './helpers/apiFetchItems'
import { Content } from './app.styles'

function App() {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  console.log(items.length, 'LENGTH')

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await apiFetchItems(page, 3)
      if (data) {
        setItems((prev) => [...prev, ...data])
      }
      setLoading(false)
    }
    fetchData()
  }, [page])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <Content onScroll={handleScroll}>
        {items.map((item) => (
          <OneItem key={item.id} item={item} />
        ))}
      </Content>
    </>
  )
}

export default App
