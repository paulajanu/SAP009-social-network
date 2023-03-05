export default () => {
  
  const container = document.createElement("div")
  const template = `
    <div class="main">
      <div class="txt-voltar">
        <button class="btn-voltar"><a href="#login">VOLTAR</a></button>
        <img src="./img/illustrations/dog_pop.png" class="ilustracao-redefinir-senha" alt="ilustração-redefinir-senha">
      </div>
      <div class="tela-principal">
        <div class="logo-tela-redefinir">
        <img src="./img/logo/logo.png" class="img-logo" alt="logo-dogTips">
      </div>
      <div class="estilo-card-redefir-senha">
        <p>Para redefinir sua senha, informe o endereço de e-mail cadastrado:</p>
        <form>
          <div class="input-card">
            <i class="fas fa-envelope"></i>
            <label for="email" class="label-esqueceu-senha">
              <input type="email" id="email" placeholder="E-mail" minlength="4" required />
            </label>
          </div>
          <div class="espaço-redefinir">
            <button type="submit" class="btn-redefinir-senha">REDEFINIR SENHA</button>
          </div>
        </form>
        <p id="msg-redefine-senha"></p>
      </div>
    </div>
  ` 
  container.innerHTML = template;
  return container; 
}