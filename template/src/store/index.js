import Tinax from '@tinajs/tinax'

import items from './modules/items'

export const tinax = new Tinax({
  modules: {
    items,
  },
})
