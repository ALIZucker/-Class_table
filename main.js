const tableContent = document.getElementById("demo");
const table = document.createElement("table");
const tabletr = document.createElement("tr");
const form = document.createElement("form");
const inputname = document.createElement("input");
const inputyaer = document.createElement("input");
const inputmodel = document.createElement("input");
const inputpower = document.createElement("input");
const button = document.createElement("a");

inputname.setAttribute("id", "name");
inputyaer.setAttribute("id", "year");
inputmodel.setAttribute("id", "model");
inputpower.setAttribute("id", "power");
button.setAttribute("onclick", "InsertData()");

///////////////////////--------------------------------------------------------------
class Vehicle {
    constructor(strname, stryear, strmodel) {
        this.cname = strname;
        this.year = stryear;
        this.model = strmodel;
    }

    showName() {
        return this.cname;
    }

    showYaer() {
        return this.year;
    }

    showModel() {
        return this.model;
    }
}

class Car extends Vehicle {
    constructor(strname, stryear, strmodel, strpower) {
        super(strname, stryear, strmodel);
        this.power = strpower;
    }

    showpower() {
        return this.power;
    }
}


//-----------------------------------------------------------------------------------
const datatitr = ["Car Name", "Model", "Year", "Power"];

for (let x of datatitr) {
    tabletr.append(CreateTitr(x))
}
table.append(tabletr);


const datatd = [];

const pride = new Car("پراید111","1399", "سایپا", "75horse");
const pride1 = new Car("پراید111","1399", "سایپا", "75horse");
datatd.push(pride,pride1);

ItrateData();

button.innerHTML = "Insert"
form.append(inputname, inputmodel, inputyaer, inputpower, button);
tableContent.append(table, form)
Jquery()

//-------------------------------------------------------------------------------------
function InsertData() {
    if (inputname.value !== "" && inputmodel.value !== "" && inputyaer.value !== "" && inputpower.value !== "") {
        const car = new Car(inputname.value, inputmodel.value, inputyaer.value, inputpower.value);
        datatd.push(car);
        ItrateData();
        Jquery();
    } else {
        alert("جای خالی را با متن مناسب پر کنید !!!")
    }

}

function ItrateData() {
    for (let x of datatd) {
        table.append(ShowCar(x))
    }

}

function CreateTitr(strName) {
    const tableth = document.createElement("th");
    tableth.innerHTML = strName
    console.log("asdasdasdasd")
    return tableth;
}

function ShowCar(carOb) {
    const tabletd1 = document.createElement("td");
    const tabletd2 = document.createElement("td");
    const tabletd3 = document.createElement("td");
    const tabletd4 = document.createElement("td");
    const tabletr = document.createElement("tr");
    tabletd1.innerHTML = carOb.showName();
    tabletd2.innerHTML = carOb.showModel();
    tabletd3.innerHTML = carOb.showYaer();
    tabletd4.innerHTML = carOb.showpower()
    tabletr.append(tabletd1, tabletd2, tabletd3, tabletd4);
    return tabletr;
}
function Jquery() {
    $(document).ready(function () {
        $("table").css({width: '83%', border: "1px black solid", backgroundColor: 'gray'});
        $("th").css({
            width: '20%', border: "1px black solid", fontSize: '1.5vw', padding: '2vh 0'
        });
        $("td").css({backgroundColor: '#dbd7d7', textAlign: "center", fontSize: '1.3vw', padding: '2vh 0'});
        $("input ").css({
            marginLeft: '2vw',
            marginTop: '5vh',
            width: '12vw',
            height: '5vh',
            fontSize: '1.3vw',
            padding: '0.5vh 1vw',
            direction:"rtl"
        });
        $('a').css({
            width: '8vw',
            height: '4vh',
            marginLeft: '15vw',backgroundColor: '#dbd7d7', textAlign: "center",padding: '0.7vh 0',
            marginTop: '5vh',fontSize: '1.1vw',display: 'inline-block'
        });
        $('form').css({backgroundColor: '#65bf79', height: '20vh', textAlign: "center", marginTop: '1vh',})
    });
}


//--------------------------------------------------------------------------------------
