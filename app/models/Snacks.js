export class Snack {
    constructor({ name, price, imgUrl }) {
        this.name = name
        this.price = price
        this.imgUrl = imgUrl
    }

    get SnackTemplate() {
        return `
        <div class="col-3 card text-center">
          <img class="py-2"
            src="${this.imgUrl}"
            alt="">
          <p class="m-0">${this.name}</p>
          <button class="btn btn-success" onclick="app.SnacksController.buySnack('${this.name}')">BUY 💲${this.price}</button>
        </div>`
    }
}