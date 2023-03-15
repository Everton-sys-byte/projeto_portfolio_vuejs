import {
    createApp
} from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import {
    MotionPlugin
} from '@vueuse/motion'

/* font awesome */
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

/* marcas */
import {
    faTwitter,
    faGithub,
    faLinkedinIn,
    faHtml5,
    faCss3Alt,
    faVuejs,
    faLaravel,
    faBootstrap,
    faDocker,
    faNode
} from '@fortawesome/free-brands-svg-icons'
/* icones */
import {
    faPhone,
    faCircleInfo,
    faHandshakeAngle,
    faEye,
    faUsers,
    faBookOpenReader,
    faK,
    faCloud,
    faPaperPlane,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

/* definindo na biblioteca os icones que vou usar */
library.add(faPhone, faTwitter, faGithub, faLinkedinIn, faCircleInfo, faHtml5, faCss3Alt, faVuejs, faLaravel, faBootstrap, faHandshakeAngle, faEye, faUsers, faBookOpenReader, faDocker, faNode, faK, faCloud, faPaperPlane, faEnvelope)

createApp(App).use(MotionPlugin).component('fa', FontAwesomeIcon).mount('#app')