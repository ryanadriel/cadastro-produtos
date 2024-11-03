function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;
  const quantidade = document.getElementById("quantidade").value;
  const categoria = document.getElementById("categoria").value;
  const mensagem = document.getElementById("mensagem");

  // Limpa a mensagem de erro
  mensagem.textContent = "";

  // Verifica se os campos estão vazios
  if (!nome) {
      mensagem.textContent = "Por favor, preencha o nome do produto.";
      return;
  }
  if (!preco) {
      mensagem.textContent = "Por favor, preencha o preço do produto.";
      return;
  }
  if (!quantidade) {
      mensagem.textContent = "Por favor, preencha a quantidade do produto.";
      return;
  }
  if (!categoria) {
    mensagem.textContent = "Por favor, preencha a categoria do produto.";
    return;
}

  // Se todos os campos estiverem preenchidos, exibe uma mensagem de sucesso
  mensagem.textContent = "Produto cadastrado com sucesso!";
  mensagem.style.color = "green";

  // Limpa os campos após o cadastro
  document.getElementById("produtoForm").reset();
}
