import { AppState } from "../AppState.js";
import { Snack } from "../models/Snacks.js";

class SnacksServices {

    addMoney() {
        AppState.money += 0.25
        this.enableButton()
        console.log('adding money')
    }

    buySnack(snackName) {
        const snack = AppState.snacks.find(snack => snackName == snack.name)

        if (AppState.money >= snack.price) {
            console.log('buying snack', snack)
            AppState.money -= snack.price
            this.enableButton()
            console.log(AppState.money)
        }
    }

    enableButton() {
        AppState.snacks.forEach(snack => {
            if (snack.price <= AppState.money) {
                snack.enabled = ''
                console.log(snack, AppState.money)
            } else {
                snack.enabled = 'disabled = "true"'
                console.log(snack, AppState.money)
            }
            AppState.emit('snacks')
        })
    }
}

export const snacksServices = new SnacksServices()