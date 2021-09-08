import { formatDistanceToNow, parseISO } from 'date-fns'
import React from 'react'
export default function TimeAgo({ timesStamps }) {
  let timeAgo = ''
  if (timesStamps) {
    const date = parseISO(timesStamps)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }
  console.log(`Time Ago ${timesStamps}`)
  return (
    <span title={timesStamps}>
      &nbsp;<i>{timeAgo}</i>
    </span>
  )
}
