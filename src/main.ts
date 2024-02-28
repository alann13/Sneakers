import './main.css'

window.addEventListener('DOMContentLoaded', () => {
  const ui = {
    imageList: document.querySelectorAll<HTMLImageElement>(
      '#product-image-list li > img'
    ),
    carouselImage: document.querySelector<HTMLImageElement>(
      '.active-carousel-img'
    ),
    addBtn: document.querySelector<HTMLButtonElement>('.add-btn'),
    minusBtn: document.querySelector<HTMLButtonElement>('.minus-btn'),
    addToCartNum: document.querySelector<HTMLParagraphElement>(
      '.add-to-cart-number'
    ),
    addToCartBtn: document.querySelector('.add-to-cart-btn'),
    cartIcon: document.querySelector('.cart-icon-btn'),
    avatarBtn: document.querySelector('.avatar-btn'),
    cartDialog: document.querySelector<HTMLDialogElement>('.cart-dialog'),
  }

  for (const image of ui.imageList) {
    image.addEventListener('click', (event) => {
      const imgNumb =
        event.currentTarget?.attributes['data-image-product'].value
      ui.carouselImage!.src = `/image-product-${imgNumb}.jpg`
    })
  }

  ui.addBtn?.addEventListener('click', () => {
    let num = Number(ui.addToCartNum?.textContent) + 1
    ui.addToCartNum!.textContent = num.toString()
  })

  ui.minusBtn?.addEventListener('click', () => {
    if (ui.addToCartNum?.textContent >= '1') {
      let num = Number(ui.addToCartNum?.textContent) - 1
      ui.addToCartNum!.textContent = num.toString()
    }
  })

  ui.addToCartBtn?.addEventListener('click', () => {
    console.log('added to cart')
  })

  ui.cartIcon?.addEventListener('click', () => {
    console.log('cart icon here')
    ui.cartDialog!.showModal()
  })

  ui.avatarBtn?.addEventListener('click', () => {
    console.log('avatar btn here here')
  })
})
