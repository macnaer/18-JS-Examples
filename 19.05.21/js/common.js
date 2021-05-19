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

    console.clear();

    CarsArr.forEach(car => {
        car.Print();
    })

    console.log(CarsArr.length);
}