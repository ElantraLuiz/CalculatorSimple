function insert(number){
    let numberContent = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numberContent + number;
}

function clean(){
document.getElementById('result').innerHTML = "";
}

function back(){
    let resultContent = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultContent.substring(0, resultContent.length -1);
}

function calculate(){
    let resultContent = document.getElementById('result').innerHTML;
    if(resultContent) {
        document.getElementById('result').innerHTML = eval(resultContent);
    }
    else {
        document.getElementById('result').innetHTML = "Nothing...";
    }
}