// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


function divide(x,y)
{
	//Write your code below this line
	if(y === 0 ){
	    alert("Cannot divide by 0");
	} else {
	    return Math.round(x/y);
	}
}

function multiply(x,y)
{
	return x*y;
}

function subtract(x,y)
{
	return x-y;
}

function add(x,y)
{
	return x+y;
}

function power(x,y)
{
    return Math.pow(x,y);	
    
}

function square_root(x)
{
	return Math.round(Math.sqrt(x), 2);

}

function logBase10(x)
{
	return Math.round(Math.log10(x));
}

function generateRandomNumber()
{
	return Math.round(Math.random());
}
