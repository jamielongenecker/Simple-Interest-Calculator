// function to compute interest
const compute = () =>
{
    // get variables by ID from HTML document
    var principal = +document.getElementById("principal").value;
    var rate = +document.getElementById("rate").value;
    var years = +document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
    
    // convert number to US currency fo aestheics
    const currency = num => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);

    // highlight values returned from this function.
    const highlight = (string) => {
        return `<span class="highlight"> ${string} </span>`;
    }

    // validate user input is a positive number
    if (principal <= 0) {
        alert("Enter a positive number.");
        principal.focus();
        return false;
    }

    // write 
    document.getElementById("result").innerHTML = 
        `<br /> If you deposit $${highlight(currency(principal))},` 
        + `<br /> at an interest rate of ${highlight(rate +'%')}.`
        + `<br /> You will receive an amount of $${highlight(currency(interest))},`
        + `<br /> in the year ${highlight(year)}. <br />`;
}

// function to update the rate as slider is moved
const updateRate = () => {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
