const all_data = {

}
var products = new Array()
$(document).ready(function() {

    // if (window.location.href.slice(-3,-1)=='ru'){
    //     $('.language-span').html('Ru')

    // }
    // if (localStorage.getItem('lang')){
    //     var ln = localStorage.getItem('lang')
    //     $('.language-span').html(ln.slice(1,3))
    //     localStorage.removeItem('lang')
    // }
    if (localStorage.getItem('ids')) {

        var storedAry = localStorage.getItem('ids')
        products = JSON.parse(storedAry);
        all_data['product_ids'] = products
        loadAllData(all_data)
    }
});

// $(document).on('click', '.first-url', function (event) {
//     var href_arr = window.location.href.split('/')
//     var href = $(this).attr('href');
//     for (let i =0;i<href_arr.length-1;i++){
//         if(href_arr[i]=='ru'){
//             $(this).attr("href",`/ru${href}`);

//         }
//     }
// })
// $(document).on('click', '.second-url', function (event) {
//     var href_arr = window.location.href.split('/')
//     var href = $(this).attr('href');
//     for (let i =0;i<href_arr.length-1;i++){
//         if(href_arr[i]=='ru'){
//             $(this).attr("href",`/ru${href}`);
//         }
//     }
// })

$(document).on('click', '.language-button', function(event) {
    var lang = $(this).children('.choosed-language').html()
    localStorage.setItem('lang', JSON.stringify(lang));

})

document.querySelectorAll('.product-card__addtocart-icon').forEach(item => {
    item.addEventListener('click', event => {

        var product_id = item.getAttribute("data-id")
        products = Object.values(products)
        if (!(products.includes(product_id))) {
            products.push(product_id)

        }
        setCookies(products)
        all_data['product_ids'] = products
        loadAllData(all_data)
        swal({
                title: "Səbətə əlavə et",
                icon: "success",
                buttons: ["Bağla", "Səbətə keç"],
                dangerMode: false,
            })
            .then((willDelete) => {
                if (willDelete) {
                    window.location.href = `/cart/`
                }
            });
    })

})

function loadAllData(data) {
    $.ajax({
        url: '/api/v1.0/tyres/card-products/',
        method: "GET",
        data: data,
        success: function(response) {
            var total = 0
            var counter = 0
            document.querySelector('.dropcart__list').innerHTML = ''

            for (product of response.products) {
                counter = counter + 1
                total = total + product.cart_price
                document.querySelector('.dropcart__list').innerHTML += `
            <li class="dropcart__item">
                <div class="dropcart__item-image image image--type--product">
                    <a class="image__body" href="product-full.html">
                        <img class="image__tag"
                                src="${product.image}"
                                alt="">
                    </a>
                </div>
                <div class="dropcart__item-info">
                    <div class="dropcart__item-name" style="width: 168px;">
                        <a href="product-full.html">${ product.name }</a>
                    </div>
                    <ul class="dropcart__item-features">
                        <li>Width & Height: ${product.width} & ${product.height} </li>
                        <li>Radius: ${product.radius}</li>
                    </ul>
                    <div class="dropcart__item-meta">
                        <div class="dropcart__item-quantity">1</div>
                        <div class="dropcart__item-price">${ product.cart_price } AZN</div>
                    </div>
                </div>
                <button type="button" class="dropcart__item-remove cart-table__remove name="remove" data-id="${ product.id }"><svg width="10" height="10">
                <path d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6
c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4
C9.2,7.8,9.2,8.4,8.8,8.8z" />
            </svg>
        </button>
               
            </li>
            <li class="dropcart__divider" role="presentation"></li>
            `
            }
            document.querySelector('.total-price').innerHTML = `${total} AZN`
            document.querySelector('.indicator__value').innerHTML = `${total} ₼`
            document.querySelector('.indicator__counter').innerHTML = counter
            // document.querySelector('.mobile-menu__indicator-counter').innerHTML=counter
            document.querySelector('.mobile-indicator__counter').innerHTML = counter
        },
        error: function(error) {
        }
    })
}

$(document).on('click', '.cart-table__remove', function(event) {
    location.reload();
    event.preventDefault();
    const id = $(this).attr("data-id")
    for (var i = 0; i < products.length; i++) {
        if (products[i] === id) {
            products.splice(i, 1);
        }
    }
    all_data['product_ids'] = products
    localStorage.setItem('ids', JSON.stringify(products))

    $(this).closest('.cart-table__row').remove();
    loadAllData(all_data)
    var tot_price = 0
    var all_prices = document.getElementsByClassName('cart-table__column--price')
    for (i = 0; i < all_prices.length; i++) {
        var tot_price = tot_price + parseInt(all_prices[i].innerHTML);
    }
    document.querySelector('.indicator__counter').innerHTML = products.length
    document.querySelector('.total-price').innerHTML = `${tot_price} AZN`
    document.querySelector('.indicator__value').innerHTML = `${tot_price} AZN`
    $(this).parent('.cart-table__remove').remove();
    loadAllData(all_data)

})

$(document).on('click', '.dropcart__item-remove', function(event) {
    event.preventDefault();
    const id = $(this).attr("data-id")
    for (var i = 0; i < products.length; i++) {
        if (products[i] === id) {
            products.splice(i, 1);
        }
    }
    all_data['product_ids'] = products
    localStorage.setItem('ids', JSON.stringify(products))

    loadAllData(all_data)

})


function setCookies(myAry) {
    localStorage.setItem('ids', JSON.stringify(myAry));
}