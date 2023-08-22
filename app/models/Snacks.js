export class Snack {
    constructor({ name, price, imgUrl }) {
        this.name = name
        this.price = price
        this.imgUrl = imgUrl
        this.enabled = 'disabled = "true"'
    }

    get SnackTemplate() {
        return `
        <div class="col-3 card text-center py-2">
          <img class="py-2"
            src="${this.imgUrl}"
            alt="">
          <p class="m-0">${this.name}</p>
          <button ${this.enabled} class="btn btn-success" onclick="app.SnacksController.buySnack('${this.name}')">BUY 💲${this.price}</button>
        </div>`
    }
}