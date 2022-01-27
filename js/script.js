

let list = document.querySelectorAll(".container ul li");

list.forEach(function(ele){
    ele.onclick = function(){
        list.forEach(function(ele){
            ele.classList.remove("active");
        });
        this.classList.add("active");
    };
});


// Menu toggle


let box = document.querySelectorAll(".content .boxes .box");

box.forEach(function(ele){
    ele.onclick = function(){
        box.forEach(function(ele){
            ele.classList.remove("active");
        });
        this.classList.add("active");
    };
});

let toggle = document.querySelector(".toggle");
let navBar = document.querySelector(".container");
let main = document.querySelector(".content");

toggle.onclick = function(){
    navBar.classList.toggle("active");
    main.classList.toggle("active");
}
