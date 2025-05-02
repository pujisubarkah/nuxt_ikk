import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faClipboardList,
  faDownload,
  faUsers,
  faPalette,
  faUserCheck,
  faComments,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faClipboardList, faDownload, faUsers, faPalette, faUserCheck, faComments)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
