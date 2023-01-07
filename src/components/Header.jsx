import { useNotificationContext } from "../context/NotificationContext"

export default function Header(){
  const { notifications, setNotifications, allNotificationsRead, setAllNotificationsRead } = useNotificationContext()
  const notReadNotifications = notifications.filter(noti => !noti.alreadyRead)

  function setNotificationsAsRead(){
    const notificationsRead = notifications.map(noti => {
      noti.alreadyRead = true
      return noti
    })
    setNotifications(notificationsRead)
  }

  function setNotificationsAsNotRead(){
    const notificationsRead = notifications.map(noti => {
      noti.alreadyRead = false
      return noti
    })
    setNotifications(notificationsRead)
  }

  return (
    <div className="header-container">
      <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
        <h4>Notifications</h4>
        <div className="badge">{notReadNotifications.length}</div>
      </div>
      {
        !allNotificationsRead ?
        <button onClick={setNotificationsAsRead} >
          <small>Mark all as read</small>
        </button> :
        <button onClick={setNotificationsAsNotRead}><small>Reset</small></button>
      }
    </div>
  )
}