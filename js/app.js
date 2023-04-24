import '../styles/app.css'

/**
 * Register components
 */
// import { tapPlaceComponent } from './components/tap-place'

// AFRAME.registerComponent('tap-place', tapPlaceComponent)

/**
 * Register components
 */
import {
  avatarMoveComponent,
  swapCamComponent,
  avatarRecenterComponent,
} from './components/components'
import { responsiveImmersiveComponent } from './components/responsive-immersive'
import { avatarFaceComponent } from './avatar/avatar-face-effects'
import { receiveMessage } from './avatar/avatar-instantiate'
import { animationRigComponent } from './avatar/rig-animation.js'

AFRAME.registerComponent('avatar-move', avatarMoveComponent)
AFRAME.registerComponent('avatar-recenter', avatarRecenterComponent)
AFRAME.registerComponent('swap-camera', swapCamComponent())
AFRAME.registerComponent('responsive-immersive', responsiveImmersiveComponent)

window.addEventListener('message', receiveMessage, false)

const registerComponents = (components) =>
  Object.keys(components).map((k) => AFRAME.registerComponent(k, components[k]))
registerComponents(avatarFaceComponent())

AFRAME.registerComponent('rig-animation', animationRigComponent)
