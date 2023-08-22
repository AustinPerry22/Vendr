import { AppState } from "../AppState.js";
import { Snack } from "../models/Snacks.js";

class SnacksServices {

    addMoney(value) {
        if (value < 0 && AppState.money < .25) {
        } else {
            AppState.money += value
            this.enableButton()
        }
    }

    buySnack(snackName) {
        const snack = AppState.snacks.find(snack => snackName == snack.name)

        if (AppState.money >= snack.price && snack.stock > 0) {
            snack.stock--
            AppState.money -= snack.price
            this.addMySnack(snackName)
            this.enableButton()
        }
    }

    addMySnack(snackName) {
        const snack = AppState.snacks.find(snack => snackName == snack.name)
        AppState.mySnacks.push(snack)
        AppState.emit('mySnacks')
    }

    enableButton() {
        AppState.snacks.forEach(snack => {
            if (snack.price <= AppState.money) {
                snack.enabled = ''
            } else {
                snack.enabled = 'disabled = "true"'
            }
            AppState.emit('snacks')
        })
    }
}

export const snacksServices = new SnacksServices()