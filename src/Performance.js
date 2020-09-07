import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API } from 'aws-amplify'
import { getPerformance } from './graphql/queries'

function Performance() {
  const { id } = useParams()
  const [performance, setPerformance] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchPerformanceInfo() {
      try {
        const talkInfo = await API.graphql({
          query: getPerformance,
          variables: { id },
          authMode: 'API_KEY',
        })
        setPerformance(talkInfo.data.getPerformance)
      } catch (err) {
        console.log('error fetching talk info...', err)
      }
      setLoading(false)
    }

    fetchPerformanceInfo()
  }, [id])

  return (
    <div>
      <p>Performance</p>
      {loading && <h3>Loading...</h3>}
      {performance && (
        <div>
          <h1>{performance.performer}</h1>
          <h3>{performance.time}</h3>
          <p>{performance.description}</p>
        </div>
      )}
    </div>
  )
}

export default Performance
