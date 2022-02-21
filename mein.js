'Use strict'

const chery = {
    make: "Chery",
    model: "Tigo 3",
    year: 2020,
    color: "white",
    passengers: 4, 
    convertible: false,
    mileage: 9000,
    started: false,
    fuel: 0,
    light: function() {
        console.log('Включен ближний цвет');
    },
    start: function() {
        if (this.fuel == 0) {
            alert("Бак пуст, заправьте автомобиль.");
        } else {
            
            this.started = true;
        }   
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(`${this.make} ${this.model} поехалa`);
                this.fuel = this.fuel - 1;
            } else {
                alert("Необходимо заправить автомобиль.");
                this.stop();
            }
        } else {
            alert("Необходимо завести автомобиль.");
        }
    },  
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};


//chery.start();
//chery.drive();
//chery.addFuel(2);
//chery.start();
//chery.drive();
//chery.drive();
//chery.drive();
//chery.stop();
