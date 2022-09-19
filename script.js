function tabuada(){
    var numero = document.getElementById('n')
    var calc = document.getElementById('calc')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }else {
        calc.innerHTML = ''
        var n = Number(numero.value)
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `calc${c}`
            calc.appendChild(item)
        }
    }
}