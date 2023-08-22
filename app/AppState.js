import { Snack } from "./models/Snacks.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  snacks = [
    new Snack({ name: 'Popcorn', price: 1.00, imgUrl: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9wY29ybnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }), new Snack({ name: 'JellyBeans', price: 0.75, imgUrl: "https://plus.unsplash.com/premium_photo-1663853120656-82f3842928f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVsbHliZWFuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" })
  ]

  money = 0







  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
