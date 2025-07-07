const cakes = [
    {
        "name" : "Pie de limón",
        "price" : 55,
        "currency" : "S/",
        "price_half": 0,
        "path" : "images/pie_de_limon_2.jpg",
        "active?" : true,
        "amount" : null,
        "amount_measure_unit": null,
    },
    {
        "name" : "Torta galés de frutos secos",
        "price" : 50,
        "currency" : "S/",
        "price_half" : 27.50,
        "path" : "images/torta_galesa_de_frutos_secos.jpeg",
        "active?" : true,
        "amount" : 1800,
        "amount_measure_unit": 'gr',
    },
    {
        "name" : "Turrón bitter de chocolate y frutos secos",
        "price" : 80,
        "currency" : "S/",
        "price_half": 42.50,
        "path" : "images/turron_bitter_de_chocolate.jpeg",
        "active?" : true,
        "amount" : 1700,
        "amount_measure_unit": 'gr',
    },
    {
        "name" : "Turrón de pecanas",
        "price" : 75,
        "currency" : "S/",
        "price_half": 40,
        "path" : "images/turron_de_pecanas.jpeg",
        "active?" : true,
        "amount" : 1700,
        "amount_measure_unit": 'gr',
    }
]

const cakes_list = document.getElementById("dessert-list-container");

cakes.forEach( cake => {

    if (!cake["active?"]) return;

    const cakeDiv = document.createElement("div");
    cakeDiv.className = "col-12 col-md-4 align-self-center dessert-card me-4";
    cakeDiv.innerHTML = 
            `<a href="">
                <img src=${cake.path} class="img-fluid" alt="...">
            </a>
            <div class="dessert-card-body">
                <div class="row">
                    <div class="col-10">
                        <a href="https://wa.me/51985804828?text=I'm%20interested%20in%20your%20car%20for%20sale">
                            <p class="dessert-card-body-description" style="text-align:left; margin:0px; font-weight: bold;">${cake.name}</p>
                        </a>
                    </div>
                    <div class="col-2">
                        <p class="dessert-card-body-price" style="text-align:right; margin:0px">${cake.currency}${cake.price}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <p class="dessert-card-body-description" style="text-align:left; margin:0px">${cake.amount}${cake.amount_measure_unit}</p>
                    </div>
                    <div class="col-6">
                        <p class="dessert-card-body-price" style="text-align:right; margin:0px">precio mitad: ${cake.currency}${cake.price_half}</p>
                    </div>
                </div>
            </div>`;           
    cakes_list.appendChild(cakeDiv);
    
});