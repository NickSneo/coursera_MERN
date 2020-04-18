var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b) {
    console.log("l= " + l + " b= " + b);
    console.log("area = " + rect.area(l,b) + " perimeter = " + rect.perimeter(l,b));
}

solveRect(1,2);
solveRect(3,4);
solveRect(2,2);