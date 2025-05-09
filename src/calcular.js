// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  if (operador == '/' && num1 == 0 || num2 == 0) {
    return "Erro: divisão por zero"
  }

  else if (operador != '+' && operador != '-' && operador != '*' && operador != '/') {
    return "Erro: operação inválida"
  }
  else if (isNaN(num1) || isNaN(num2)) {
    return "Erro: parâmetros inválidos"
  }
  if (operador == '+') {
    let resultado = num1 + num2
    return resultado
  }
  else if (operador == '-') {
    let resultado = num1 - num2
    return resultado
  }
  else if (operador == '*') {
    let resultado = num1 * num2
    return resultado
  }
  else if (operador == '/') {
    let resultado = num1 / num2
    return resultado
  }


}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };