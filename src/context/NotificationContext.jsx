import { useState, createContext, useContext, useEffect } from "react";
import notifications from "../db/notifications"

const NotificationContext = createContext()

const NotificationContextProvider = ({children}) => {
  const [notifications, setNotifications] = useState([])
  const [allNotificationsRead, setAllNotificationsRead] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async() => {
      const noti = await getInitialNotifications()
      setNotifications(noti)
    })()
  }, [])

  useEffect(() => {
    if(notifications.length){
      setLoading(false)
    }

    const areAllNotificationsRead = notifications.every(noti => noti.alreadyRead === true)

    if(areAllNotificationsRead){
      setAllNotificationsRead(true)
      return
    }

    const areAllNotificationsNotRead = notifications.every(noti => noti.alreadyRead === false)

    if(areAllNotificationsNotRead){
      setAllNotificationsRead(false)
      return
    }

  }, [notifications])

  return (
    <NotificationContext.Provider value={{notifications, setNotifications, allNotificationsRead, setAllNotificationsRead, loading}}>
      {children}
    </NotificationContext.Provider>
  )
}

function useNotificationContext(){
  return useContext(NotificationContext)
}

async function getInitialNotifications(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(notifications)
    }, 2200)
  })
}

export { NotificationContext, NotificationContextProvider, useNotificationContext }