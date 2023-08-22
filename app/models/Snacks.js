export class Snack {
    constructor({ name, price, imgUrl }) {
        this.name = name
        this.price = price
        this.imgUrl = imgUrl
        this.stock = 5
        this.enabled = 'disabled = "true"'
    }

    get SnackTemplate() {
        return `
        <div class="col-5 col-md-3 card text-center py-2">
            <h6> Stock: ${this.stock} </h6>
          <img class="py-2"
            src="${this.imgUrl}"
            alt="">
          <p class="m-0">${this.name}</p>
          <button ${this.enabled} class="btn btn-success" onclick="app.SnacksController.buySnack('${this.name}')">BUY 💲${this.price.toFixed(2)}</button>
        </div>`
    }

    get MySnackTemplate() {
        return `
        <div class="col-5 col-md-3 card text-center py-2">
          <img class="py-2"
            src="${this.imgUrl}"
            alt="">
          <p class="m-0">${this.name}</p>
        </div>`
    }
}