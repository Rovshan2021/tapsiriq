function cedvel(){
    let cedvel = document.getElementById("cedvel");
    let table = " ";
    for (let i = 1; i<=3; i++ ){
        table += `<tr>`;
        for(let j = 1; j<=3; j++){
            table += `<td> ${test.call(mer)} && ${test.call(mer)} </td>`;
        }
        table += `</tr>`;

    }
    cedvel.innerHTML = table;
}
cedvel();


let mer = {
    name: "Mersedes",
    speed: 320,
}

let bmw = {
    name: "Bmw",
    speed: 350,
}

// function test() {
//     let tbl = document.getElementById("show");
//     tbl.innerHTML = ` secilen masin ${this.name} - suret : ${this.speed} `
// }


let cars = document.getElementById("cars");

cars.onchange = function() {
    if (cars.value == 1) {
        test.call(mer)
    } else if (cars.value == 2) {
        test.call(bmw);
    }
}