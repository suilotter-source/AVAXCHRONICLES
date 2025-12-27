import React, { useEffect, useState } from 'react'

export default function App() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then((r) => r.json())
      .then((d) => setMsg(d.message))
      .catch(() => setMsg('No backend response'))
  }, [])

  return (
    <div style={{fontFamily: 'sans-serif', padding: 20}}>
      <h1>AVAXCHRONICLES (frontend)</h1>
      <p>Backend says: {msg}</p>
    </div>
  )
}
