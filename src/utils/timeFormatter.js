import { DateTime, Interval } from "luxon";

const TIME_UNITS_IN_SECONDS = {
  'second': 1,
  'minute': 60,
  'hour': 3600,
  'day': 86400,
  'week': 604800,
  'month': 2592000,
  'year': 32400000
}

function readSeconds(seconds){
  let matchUnit = null

  for(let unit of Object.keys(TIME_UNITS_IN_SECONDS)){
    const timeValue = TIME_UNITS_IN_SECONDS[unit]

    if(seconds >= timeValue){
      matchUnit = unit
      continue
    }

    if(seconds < timeValue){
      break
    }
  }

  const res = Math.floor(seconds / TIME_UNITS_IN_SECONDS[matchUnit])

  if(res > 1){
    matchUnit += 's'
  }
  return res.toString() + ' ' + matchUnit
}

export function getTimeAgo(dateTime) {
  const propDateTime = DateTime.fromSQL(dateTime)
  const currentDateTime = DateTime.now()

  const timeDiff = Interval.fromDateTimes(propDateTime, currentDateTime)
  return readSeconds(timeDiff.length('seconds'));
}