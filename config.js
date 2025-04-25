function mostrarConteudo(tipo) {
    const container = document.getElementById("conteudo-dinamico");
    let html = "";

    switch (tipo) {
        case 'perfil':
            html = `
              <h3>Editar Perfil</h3>
              <form id="form-perfil" onsubmit="salvarPerfil(event)">
                <label>Nome</label>
                <input type="text" id="nome" placeholder="Seu nome" required />
                
                <label>Telefone</label>
                <input type="tel" id="telefone" placeholder="(99) 99999-9999" required />
                
                <label>Email</label>
                <input type="email" id="email" placeholder="seu@email.com" required />
                
                <label>Endereço</label>
                <input type="text" id="endereco" placeholder="Rua Exemplo, 123" required />
                
                <button type="submit" class="btn-vermelho">Salvar</button>
              </form>
            `;
            break;
        case 'chats':
            html = "<h3>Minhas Conversas</h3><p>Veja aqui suas conversas anteriores.</p>";
            break;
        case 'notificacoes':
            html = "<h3>Notificações</h3><p>Configure suas notificações.</p>";
            break;
        case 'cupons':
            html = `
                  <h3>Adicionar Cupom</h3>
                  <form id="form-cupom" onsubmit="adicionarCupom(event)">
                    <label for="codigo-cupom">Cupom</label>
                    <input type="text" id="codigo-cupom" placeholder="Digite seu cupom" required />
                    <button type="submit" class="btn-vermelho">Adicionar</button>
                  </form>
                  <div id="cupom-resultado" style="margin-top: 15px;"></div>
                `;
            break;

        case 'favoritos':
            html = "<h3>Locais Favoritos</h3><p>Gerencie seus locais favoritos.</p>";
            break;
        case 'pagamento':
            html = `
          <div class="tabs">
            <button class="tab active" onclick="alternarAba('app')">PAGUE PELO APP</button>
          </div>
  
          <div id="conteudo-pagamento">
            <div id="app" class="aba-conteudo active">
              <div class="metodo">
                <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" alt="PIX" />
                <span>PIX</span>
              </div>
              <div class="metodo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
                <span>Visa • Crédito</span>
              </div>
              <div class="metodo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
                <span>Mastercard • Crédito</span>
              </div>
              <button class="btn-vermelho">Adicionar novo cartão</button>
            </div>
  
            <div id="entrega" class="aba-conteudo">
              <p>Você poderá pagar com dinheiro ou maquininha no final do serviço.</p>
            </div>
          </div>
        `;
            break;
    }

    container.innerHTML = html;
}

function alternarAba(abaId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.aba-conteudo').forEach(div => div.classList.remove('active'));

    document.querySelector(`.tab[onclick*="${abaId}"]`).classList.add('active');
    document.getElementById(abaId).classList.add('active');
}

function salvarPerfil(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const endereco = document.getElementById("endereco").value;

    // Aqui você pode enviar para um backend, salvar localStorage, etc.
    alert(`Perfil salvo!\n\nNome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nEndereço: ${endereco}`);
}

function adicionarCupom(event) {
    event.preventDefault();
    const cupom = document.getElementById("codigo-cupom").value.trim().toUpperCase();
    const resultado = document.getElementById("cupom-resultado");
  
    if (cupom === "") {
      resultado.innerHTML = `<p style="color: red;">Por favor, digite um código de cupom válido.</p>`;
      return;
    }
  
    // Aqui você pode simular a verificação com backend se quiser
    resultado.innerHTML = `<p style="color: green;">Cupom <strong>${cupom}</strong> adicionado com sucesso! 🎉</p>`;
    document.getElementById("form-cupom").reset();
  }
  
