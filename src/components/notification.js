import { notify } from 'react-notify-toast'

const popupStyles  = { background: '#28991d', text: '#FFFFFF' }

export const popupNotification = message => {
  notify.show(message, 'custom', 3000, popupStyles)
}