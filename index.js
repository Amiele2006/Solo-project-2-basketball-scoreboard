let points = 0;
let points2 = 0;

//Home
const pointsContainer = document.getElementById("text")

//Away
const pointsContainer1 = document.getElementById("text-2")

//Home
const onept = document.getElementById("1pt");
const twopt = document.getElementById("2pt");
const threept = document.getElementById("3pt");

//Away
const onept2 = document.getElementById("1pt-2");
const twopt2 = document.getElementById("2pt-2");
const threept2 = document.getElementById("3pt-2");


//Home
onept.addEventListener("click", function add1point(){
    points += 1 
    pointsContainer.innerHTML = points
})

twopt.addEventListener("click", function add2points(){
    points += 2
    pointsContainer.innerHTML = points
})

threept.addEventListener("click", function add3points(){
    points += 3
    pointsContainer.innerHTML = points
})

//Away
onept2.addEventListener("click", function add1point(){
    points2 += 1 
    pointsContainer1.innerHTML = points2
})

twopt2.addEventListener("click", function add2points(){
    points2 += 2
    pointsContainer1.innerHTML = points2
})

threept2.addEventListener("click", function add3points(){
    points2 += 3
    pointsContainer1.innerHTML = points2
})