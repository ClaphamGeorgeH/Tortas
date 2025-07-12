const cellphoneNumber = 51985804828; 

const cakes = [
    {
        "name" : "Pie de limón",
        "price" : 55,
        "currency" : "S/",
        "hasHalf" : false,
        "price_half": 0,
        "path" : "assets/images/pie_de_limon_2.jpg",
        "isActive" : true,
        "isWeighed" : false,
        "amount" : null,
        "amount_measure_unit": null,
    },
    {
        "name" : "Torta galés de frutos secos",
        "price" : 50,
        "currency" : "S/",
        "hasHalf" : true,
        "price_half" : 27.50,
        "path" : "assets/images/torta_galesa_de_frutos_secos.jpeg",
        "isActive" : true,
        "isWeighed" : true,
        "amount" : 1800,
        "amount_measure_unit": 'gr',
    },
    {
        "name" : "Turrón bitter de chocolate y frutos secos",
        "price" : 80,
        "currency" : "S/",
        "hasHalf" : true,
        "price_half": 42.50,
        "path" : "assets/images/turron_bitter_de_chocolate.jpeg",
        "isActive" : true,
        "isWeighed" : true,
        "amount" : 1700,
        "amount_measure_unit": 'gr',
    },
    {
        "name" : "Turrón de pecanas",
        "price" : 75,
        "currency" : "S/",
        "hasHalf" : true,
        "price_half": 40,
        "path" : "assets/images/turron_de_pecanas.jpeg",
        "isActive" : true,
        "isWeighed" : true,
        "amount" : 1700,
        "amount_measure_unit": 'gr',
    }
]

const cakes_list = document.getElementById("dessert-list-container");


cakes.forEach( cake => {

    if (!cake["isActive"]) return;

    var cakeDiv = document.createElement("div");
    cakeDiv.className = "dessert-card col-12 col-md-4";
    
    /*cakeDiv.innerHTML = 
            `<a href="">
                <img src=${cake.path} class="img-fluid" alt="...">
            </a>
            <div class="dessert-card-body">
                <div class="row">
                    <div class="col-10">
                        <a href="https://wa.me/ Estoy interesado en la torta ${cake.name} de precio ${cake.currency}${cake.price} / ${cake.amount}${cake.amount_measure_unit}. ¿Me daria información al respecto? Gracias.">
                            <p class="dessert-card-body-description" style="text-align:left; margin:0px; font-weight: bold;">${cake.name + " ("+cake.amount+cake.amount_measure_unit+")" }</p>
                        </a>
                    </div>
                    <div class="col-2">
                        <p class="dessert-card-body-price text-end fw-bolder">${cake.currency}${cake.price}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="dessert-card-body-price text-end fw-bolder">${cake.hasHalf ? "precio mitad: "+cake.currency+cake.price_half : ""}</p>
                    </div>
                </div>
            </div>`;    */
           
    cakeDiv.innerHTML =
        `
            <div class="card">
                <a href="https://wa.me/${cellphoneNumber}?text=Estoy interesado en la torta ${cake.name} . ¿Me más daria información al respecto? Gracias.">
                    <img src="${cake.path}" class="card-img-top" alt="...">
                </a>
                <div class="card-body">
                    <div class="row">
                    <div class="col-9">
                        <a href="https://wa.me/${cellphoneNumber}?text=Estoy interesado en la torta ${cake.name}. ¿Me daria más información al respecto? Gracias.">
                            <p class="dessert-card-body-description" style="text-align:left; margin:0px; font-weight: bold;">${cake.name}${cake.isWeighed ? " ("+cake.amount+cake.amount_measure_unit+")":""}</p>
                        </a>
                    </div>
                    <div class="col-3">
                        <p class="dessert-card-body-price text-end fw-bolder">${cake.currency}${cake.price}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="dessert-card-body-price text-end fw-bolder">${cake.hasHalf ? "precio mitad: "+cake.currency+cake.price_half : ""}</p>
                    </div>
                </div>
                </div>
            </div>
        `;
    cakes_list.appendChild(cakeDiv);
    
});