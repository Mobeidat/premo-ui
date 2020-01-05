import PremoBtn from '@/../packages/PremoBtn'
import PremoCheckbox from '@/../packages/PremoCheckbox'
import PremoCollapse from '@/../packages/PremoCollapse'
import PremoDialog from '@/../packages/PremoDialog'
import PremoInput from '@/../packages/PremoInput'
import PremoLoader from '@/../packages/PremoLoader'
import PremoPhoneNumberInput from '@/../packages/PremoPhoneNumberInput'
import PremoSelect from '@/../packages/PremoSelect'
import PremoSidebar from '@/../packages/PremoSidebar'
import PremoSpinner from '@/../packages/PremoSpinner'
import PremoSwitch from '@/../packages/PremoSwitch'

import { version } from '@/../package.json'
import './theme'

if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_MAZ === 'development') {
  require('../packages/scss/style-helpers/index.scss')
} else {
  require('../dist/vue-mazel-ui.css')
}

const components = [
  PremoBtn,
  PremoCheckbox,
  PremoCollapse,
  PremoDialog,
  PremoInput,
  PremoLoader,
  PremoPhoneNumberInput,
  PremoSelect,
  PremoSwitch,
  PremoSidebar,
  PremoSpinner
]
// eslint-disable-next-line
const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  version,
  PremoBtn,
  PremoCheckbox,
  PremoCollapse,
  PremoDialog,
  PremoInput,
  PremoLoader,
  PremoPhoneNumberInput,
  PremoSelect,
  PremoSwitch,
  PremoSidebar,
  PremoSpinner
}

export default {
  version,
  install
}
