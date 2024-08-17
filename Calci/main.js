let output = document.getElementById("result");

function display(num){
    output.value+=num;
}

function Clear(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);
}

function equalto(){
    try{
      output.value = eval(output.value)
    }
    catch(error){
      alert("Invalid")
    }
}
