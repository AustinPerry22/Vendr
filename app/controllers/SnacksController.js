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
        AppState.on('mySnacks', this.drawMySnacks)
    }


    addMoney(value) {
        snacksServices.addMoney(value)
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
        setHTML('snacks', snacksContent)
    }

    drawMySnacks() {
        const mySnacks = AppState.mySnacks
        let mySnacksContent = ''
        mySnacks.forEach(snack => {
            mySnacksContent += snack.MySnackTemplate
        })
        setHTML('mySnacks', mySnacksContent)
    }
}