export default () => {
  const container = document.createElement("div")
  const template = `
  <button class="btn-voltar"><a href="index.html">Voltar</a></button>
  <div class="tela-principal">
    <div class="logo-tela-redefinir">
      <img src="./img/logo/logo.png" class="img-logo" alt="logo-dogTips">
    </div>
    <div class="estilo-card-redefir-senha">
      <form>
        <label class="label-esqueceu-senha">Para redefinir sua senha, informe o endereço de e-mail cadastrado: </label>
        <div class="input-card">
          <i class="fas fa-envelope"></i>
          <input type="email" id="email" placeholder="E-mail" minlength="4" required />
        </div>
        <div class="espaço-redefinir">
        <button type="submit" class="btn-redefinir-senha">REDEFINIR SENHA</button>
        </div>
        </div>
    </form>
    <p id="msg-redefine-senha"></p>
  </div>
` 
        container.innerHTML = template;

        return container; 
}
