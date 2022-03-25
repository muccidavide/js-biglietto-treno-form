// Immaganizzare Dati Passegero

function myFunction() {

    
    const full_name = document.getElementById("full_nameid").value; // raccolta dato nome
    document.getElementById("passenger_name").innerHTML = full_name;

    const km_trip = document.getElementById("km_tripid").value; // raccolta dato km

    const age = document.getElementById("age_id").value; // raccolta dato eta
    document.getElementById('discount_type').innerHTML = age;

    const cost_for_km = 0.21;
    const total_price = km_trip * cost_for_km; // Prezzo Totale 
    
    const under_18_discount = (total_price * 0.8).toFixed(2);
    const over_65_discount = (total_price *0.6).toFixed(2);
    
    var price;

    if (age == "Under 18") {
        price = (under_18_discount);
        document.getElementById('final_price').innerHTML = price + "€";
    } else if(age == "Over 65" ){
        price = (over_65_discount);
        document.getElementById('final_price').innerHTML = price + "€";
    } else {
        price = total_price.toFixed(2);
        document.getElementById('final_price').innerHTML = price + "€";
    }

    const carriage = (Math.random()*10).toFixed(0)
    document.getElementById('carriage_number').innerHTML = carriage;

    const cd_code = (Math.random()*100000).toFixed(0)
    document.getElementById('code_number').innerHTML = cd_code;
    
}
