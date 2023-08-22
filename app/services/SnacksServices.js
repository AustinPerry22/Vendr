import { AppState } from "../AppState.js";
import { Snack } from "../models/Snacks.js";

class SnacksServices {

    addMoney() {
        AppState.money += 0.25
        this.enableButton()
    }

    buySnack(snackName) {
        const snack = AppState.snacks.find(snack => snackName == snack.name)

        if (AppState.money >= snack.price) {
            AppState.money -= snack.price
            this.enableButton()
        }
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