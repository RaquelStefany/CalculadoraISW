function c() {
    document.form.textview.value = ""; /*Apaga os numeros digitados*/
}

function back() {
    var exp = document.form.textview.value; /*Salva os numeros digitados*/
    document.form.textview.value = exp.substring(0, exp.length - 1); /*Apaga 1 numero*/
}

function insert(num) {
    document.form.textview.value = document.form.textview.value + num; /*Coloca o parâmetro que recebe o argumento*/
}

function equal() {
    exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp); /*Mostra o resultado da operação*/
    }
}