document.getElementById('search').addEventListener('input', function() {
    console.log('here')
    var searchInput = document.getElementById('search');
    var inputValue = searchInput.value;
    console.log(inputValue);
    $.ajax({

        url: '/api/v1.0/tyres/searched/',
        method: 'GET',
        data: {
            'inputValue': inputValue,
        },
        success: function(response) {
            $('.suggestions__group').html('')
            if (inputValue) {
                console.log()
                for (let object of response.filtered_tyres) {
                    $('.suggestions__group').append(`<a class="suggestions__item suggestions__product" href="/tyresdetail/${object.id}/">
                    <div class="suggestions__product-image image image--type--product">
                        <div class="image__body">
                            <img class="image__tag"
                                 src="${object.image}" alt="">
                        </div>
                    </div>
                    <div class="suggestions__product-info">
                        <div class="suggestions__product-name">${object.name}</div>
                        <div class="suggestions__product-rating">
                                                
                                                <div class="suggestions__product-rating-label">${object.width}/${object.height} R${object.radius}</div>
                                            </div>
                    </div>
                    <div class="suggestions__product-price">${object.price} AZN</div>
                </a>`)

                }
                if (response.count > 3 && window.location.href.includes("filtered")) {
                    $('.suggestions__group').append(`     <div class="d-flex justify-content-center">
                <a class="p-3 " href="?filterData=${inputValue}">See al products</a>
            </div>`)
                } else if (response.count > 3) {
                    $('.suggestions__group').append(`     <div class="d-flex justify-content-center">
                <a class="p-3 " href="filtered/?filterData=${inputValue}">See al products</a>
            </div>`)
                }
            }
        },
        error: function(error_response) {
            console.log(error_response);
        }
    })
});


document.getElementById('mobile-search').addEventListener('input', function() {
    console.log('here')
    var searchInput = document.getElementById('mobile-search');

    var inputValue = searchInput.value;
    console.log(inputValue);
    $.ajax({

        url: '/api/v1.0/tyres/searched/',
        method: 'GET',
        data: {
            'inputValue': inputValue,
        },

        success: function(response) {
            // $('.all-inputs').html()=''
            document.getElementById("for-submitting").href = `filtered/?filterData=${inputValue}`;

            //     $('.mobile-search__body').append(`
            //     <a  class="p-3" onclick="document.getElementsByClassName('mobile-search__body').submit(); href="filtered/?filterData=${inputValue}"></a>
            // `)


        },
        error: function(error_response) {
            console.log(error_response);
        }
    })
});