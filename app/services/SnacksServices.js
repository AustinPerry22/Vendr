import { AppState } from "../AppState.js";
import { Snack } from "../models/Snacks.js";

class SnacksServices {

    addMoney() {
        AppState.money += 0.25
        console.log('adding money')
    }

    buySnack(snackName) {
        const snack = AppState.snacks.find(s => snackName == s.name)

        if (AppState.money >= snack.price) {
            console.log('buying snack', snack)
            AppState.money -= snack.price
            console.log(AppState.money)
        }
    }
}

export const snacksServices = new SnacksServices()