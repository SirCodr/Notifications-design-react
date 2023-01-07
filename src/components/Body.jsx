import { useNotificationContext } from "../context/NotificationContext"
import NotificationItem from "./NotificationItem"

export default function Body() {
  const { notifications, loading } = useNotificationContext()

  if(loading) {
    return 'Cargando...'
  }

  return (
    <div className="body-container">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  )
}
