export default () => {

    const container = document.createElement("div")
    const template = `
        <div class="main">
            <div class="txt-entrar"> 
                <h3>Já possui cadastro?</h3>
                <p class="txt-entrar">Clique no botão abaixo e veja as últimas atualizações dos seus amigos.</p>
                <button class="btn-entrar"><a href="#login">ENTRAR</a></button>
                <img src="./img/illustrations/good_dogg.png" class="ilustracao-cadastro" alt="ilustração-cadastro">
            </div>
            <div class="tela-principal">
                <div class="logo-tela">
                    <img src="./img/logo/logo.png" id="logo" alt="logo-dogTips">
                </div>
                <div class="estilo-card">
                    <form>
                        <div class="input-card">
                            <i class="fas fa-user"></i>
                            <label for="nometutor" class="label-registro">
                                <input type="text" id="nometutor" placeholder="Seu nome" minlength="3" required/>
                            </label>
                        </div>
                        <div class="input-card">
                            <i class="fas fa-paw"></i>
                            <label for="nomecao" class="label-registro">
                                <input type="text" id="nomecao" placeholder="Nome do cãozinho" minlength="3" required/>
                            </label> 
                        </div>
                        <div class="input-card">
                            <i class="fas fa-envelope"></i>
                            <label for="email" class="label-registro">
                                <input type="email" id="email" placeholder="email@dominio.com" minlength="4" required/>
                            </label>
                        </div>
                        <div class="input-card">
                            <i class="fas fa-lock"></i>
                            <label for="password" class="label-registro">
                                <input type="password" id="password" placeholder="••••••" minlength="6" required/>
                            </label>
                        </div>
                        <div class="espaço-entrar">
                            <button type="submit" value="cadastrar" id="cadastrar" class="btn-cadastrar">CADASTRAR</button>
                        </div>
                        <p class="text-cadastro-google">Ou cadastre-se com o Google</p>
                        <div class="cadastro-google"> 
                            <a href="#" id="register-google" class="icon-google">
                            <i class="fa-brands fa-google"></i>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        ` 
        container.innerHTML = template;
        return container; 
}

