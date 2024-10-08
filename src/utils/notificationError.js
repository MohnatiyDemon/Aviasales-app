import { notification } from 'antd'

export const notificationError = (message) => {
  notification.error({
    message: 'Ошибка',
    description: message,
    placement: 'topRight',
  })
}
