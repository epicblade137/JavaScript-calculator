class Calc {
constructor(result) {
result = document.getElementById("result").value;
}
};

document.addEventListener('DOMContentLoaded', cls());

function check() {
    if (isNaN(this.result.value)) {
        return true;
    }
    else if (this.result.value == undefined) {
        cls();
    }
    else {
        alert("Invalid data!");
    } return false;
}

function sub() {
        this.result.value = this.result.value.substring(0, this.result.value.length -1);
}; 
function cls() {
    this.result.value = 0;
};

function add (a) {
    if(this.result.value == null || this.result.value == "0" ||
    this.result.value == undefined)
    this.result.value = a;
    else {this.result.value+=a};
};

function solve() {
    check();
    if (true) {
        this.result.value = eval(this.result.value);
    }
};
function sqrt() {
    this.result.value = Math.sqrt(this.result.value);
};
function cos () {
    this.result.value = Math.cos(this.result.value);
};
function sin () {
    this.result.value = Math.sin(this.result.value);
};
function tan () {
    this.result.value = Math.tan(this.result.value);
};
function log () {
    this.result.value = Math.log(this.result.value);
};
function exp () {
    this.result.value = Math.exp(this.result.value);
};
function square () {
    this.result.value = eval(this.result.value) * eval(this.result.value);
};
function abs() {
    this.result.value = Math.abs(this.result.value);
}
function dot(a) {
    if (this.result.value == 0) {
        this.result.value = "0.";
}
else {
    this.result.value += a;
}
};

function strong(i, s) {
    i = 1;
    s = 1;
while( i <= this.result.value ) s *= i++;
this.result.value = s;
}

function ln() {
    this.result.value = Math.ln(this.result.value);
}
function chan() {
    this.result.value = this.result.value * -1;
}