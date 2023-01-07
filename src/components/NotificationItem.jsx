import { useNotificationContext } from "../context/NotificationContext"

export default function NotificationItem({notification}) {

  const { notifications, setNotifications } = useNotificationContext()

  function setItemRead(){
    const notiDraft = notifications.map(item => {
      if(item.id === notification.id){
        item.alreadyRead = true
      }
      return item
    })
    setNotifications(notiDraft)
  }

  return(
    <div className="notification-item-container" onClick={setItemRead}>
      <div className="row">
        <div className="col">
          <img src={notification.imageUser} alt={'Avatar de ' + notification.user}/>
        </div>
        <div className="col">
          <div className="row">
          <span>
            {notification.user + ' ' + notification.description}
          </span>
          {!notification.alreadyRead && <div className="red-badge"></div> }
          </div>
          <div className="row">
            1 minute ago
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}