import { AppState } from "../AppState.js";
import { Snack } from "../models/Snacks.js";
import { snacksServices } from "../services/SnacksServices.js";
import { setHTML } from "../utils/Writer.js";

export class SnacksController {
    constructor() {
        this.drawMoney()
        this.drawSnacks()
        AppState.on('money', this.drawMoney)
        AppState.on('snacks', this.drawSnacks)
    }


    addMoney() {
        snacksServices.addMoney()
        console.log(AppState.money)
    }

    buySnack(snackName) {
        snacksServices.buySnack(snackName)
        this.drawSnacks()
    }

    drawMoney() {
        const money = AppState.money
        let moneyElem = document.getElementById("money")
        moneyElem.innerText = `Money = 💲${money.toFixed(2).toString()}`
    }

    drawSnacks() {
        const snacks = AppState.snacks
        let snacksContent = ''
        snacks.forEach(snack => {
            snacksContent += snack.SnackTemplate
        })
        setHTML('my-snacks', snacksContent)
    }
}