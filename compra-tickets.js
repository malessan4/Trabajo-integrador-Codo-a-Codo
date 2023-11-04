const valorTicket = 200;


let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;


let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");


function total_a_pagar() {
	

	
	    let totalValorTickets = (cantidadTickets.value) * valorTicket;
		
		    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets ;
    }
			if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    }	
			if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
			if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }
	
	
    totalPago.innerHTML = totalValorTickets;
}


btnResumen.addEventListener('click', total_a_pagar);


function reset_total_a_pagar() {
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_total_a_pagar);