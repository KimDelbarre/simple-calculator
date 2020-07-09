function calculate(x,y) {
    let x = document.getElementById("firstnumber").value;
    let y = document.getElementById("secondnumber").value;
    let o = document.getElementById("operator").value;
    if (o === "+") {
      return x + y;
    };
   else if (o === "-") {
        return x - y;
    };
    else if (o === "*") {
        return x * y;
    };
    else if (o === "/") {
        return x / y;
    };
  };

  let result = function calculate;


  button.addEventListener("click", result);