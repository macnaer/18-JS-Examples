const btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", GetCar);

const vendor = document.getElementById("Vendor");
const model = document.getElementById("Model");
const price = document.getElementById("Price");

let CarsArr = [];

function GetCar() {
    event.preventDefault();

    let Car = {
        Vendor: vendor.value,
        Model: model.value,
        Price: price.value,
        Print() {
            console.log(`Vendor: ${this.Vendor}\nModel: ${this.Model}\nPrice: ${this.Price}`)
        }
    }

    vendor.value = "";
    model.value = "";
    price.value = "";

    CarsArr.push(Car)
    Render();

    // console.clear();

    // CarsArr.forEach(car => {
    //     car.Print();
    // })

    // console.log(CarsArr.length);
}


function Render() {
    const root = document.getElementById("root");
    let span = document.createElement("span");
    span.setAttribute("class", "test");
    span.innerHTML = "Some text";
    root.appendChild(span);
}

// Declaration
// function Plus(a, b) {
//     console.log(a + b);
// }
// // Sum(4, 6);


// // Expression
// const Minus = function (a, b) {
//     console.log(a - b);
// }

// // Minus(20, 5);

// // Arrow
// const Multiply = (a, b) => {
//     console.log(a / b);
// }

// Multiply(10, 5);

// Annonyumous
// (function (a, b) {
//     console.log(a * b);
// }(20, 5));

// function Car(vendor, model, price) {
//     this.vendor = vendor;
//     this.model = model;
//     this.price = price;
//     this.Print = function () {
//         console.log(`${this.vendor}\n${this.model}\n${this.price}`)
//     }
// }

// const Audi = new Car("Audi", "A8", 12000);
// Audi.Print();

// const BMW = new Car("BMW", "320", 11000);
// BMW.Print();
