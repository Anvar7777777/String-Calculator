function calculateLengths() {
    // Get the values of the input fields
    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;
    const string3 = document.getElementById("string3").value;
  
    // Calculate the lengths of the strings
    const length1 = string1.length;
    const length2 = string2.length;
    const length3 = string3.length;
  
    // Display the results
    document.getElementById("result1").textContent = "Length of String 1: " + length1;
    document.getElementById("result2").textContent = "Length of String 2: " + length2;
    document.getElementById("result3").textContent = "Length of String 3: " + length3;
  }
  function resetFields() {
    // Reset the input fields and results
    document.getElementById("string1").value = "";
    document.getElementById("string2").value = "";
    document.getElementById("string3").value = "";
    document.getElementById("result1").textContent = "";
    document.getElementById("result2").textContent = "";
    document.getElementById("result3").textContent = "";
  }