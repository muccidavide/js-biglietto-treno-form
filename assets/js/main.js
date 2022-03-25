// Immaganizzare Dati Passegero

function myFunction() {

    
    const full_name = document.getElementById("full_nameid").value; // raccolta dato nome
    document.getElementById("passenger_name").innerHTML = full_name;
    console.log(full_name); 

    const km_trip = document.getElementById("km_tripid").value; // raccolta dato km
    console.log(km_trip);

    const age = document.getElementById("age_id").value; // raccolta dato eta
    document.getElementById('discount_type').innerHTML = age;
    console.log(age);

    const cost_for_km = 0.21;
    const total_price = km_trip * cost_for_km; // Prezzo Totale
    console.log(total_price); 
    
    const under_18_discount = (total_price * 0.8).toFixed(2);
    const over_65_discount = (total_price *0.6).toFixed(2);
    
    var price;

    if (age == "Under 18") {
        price = (under_18_discount);
        console.log(price);
        document.getElementById('final_price').innerHTML = price;
    } else if(age == "Over 65" ){
        price = (over_65_discount);
        console.log(price);
        document.getElementById('final_price').innerHTML = price;
    } else {
        price = total_price.toFixed(2);
        console.log(price);
        document.getElementById('final_price').innerHTML = price;
    }

    
}