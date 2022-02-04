# Space Flight News

## Descrição do Projeto

<h1 align="center">
    <a href="https://pt-br.reactjs.org/">⚛️ React</a>
</h1>
<p align="center">Aplicativo que exibe informações sobre viagens espaciais da API Space Flight News.</p>

<h2 align="center">Conteúdo</h2>

<p align="center">
  <a href="#objetivo">Objetivo</a> <br /> 
  <a href="#use">Como utilizar</a> <br />
  <a href="#status">Status do Projeto</a> <br />
  <a href="#deploy">Link do deploy no Vercel</a> <br />
  <a href="#tech">Tecnologias Utilizadas</a> <br />
  <a href="#author">Autor</a> <br />
</p>

</br>

<h2 id="objetivo">Objetivo</h2>
Exibir de forma amigável as notícias disponibilizadas pela API. </br>
Este é um desafio da plataforma <a href="https://coodesh.com/">Coodesh</a>.  |
This is a challenge by <a href="https://coodesh.com/">Coodesh</a>.

</br>


<h2>Apresentação</h2>

Link com a apresentação do aplicativo:
<a href="https://www.loom.com/share/34227994f35b43dda8154adaa6a73a89">Apresentação</a>.

</br>


<h2 id="use">Como utilizar</h2>

<h3><b>Home Page</b></h3>

Algumas informações são exibidas no cabeçalho e ao final da página, como título, função da aplicação bem como alguns links do autor e também deste repositório.

Um botão central direciona o usuário para o *dashboard*, onde são exibidas as notícias.

<h3><b>Dashboard Page</b></h3>

Ao entrar no *Dashboard* são exibidos ao usuário os mecanismos de busca e seleção de notícias, bem como uma listagem destas notícias, ordenadas da mais nova para a mais antiga e limitadas de inicio a 10 publicações.

Descendo para o final da página, após a última notícia, um botão é exibido. Pressionando o mesmo mais 10 notícias são carregadas, e assim sucessivamente.

Os mecanismos de busca funcionam da seguinte maneira:

- **Botão sort**: Muda a ordenação das notícias por ordem de data:
  - Seta indicativa para baixo: ordena da mais nova para a mais antiga;
  - Seta indicativa para  cima: ordena da mais antiga para a mais nova.
- **Botão Mais Antigas**: Busca por notícias mais antigas, mantendo a quantidade de exibições;
- **Botão Mais Novas**: Funciona de modo similar ao anterior, mas buscando por notícias mais novas;
- **Campo de busca**: Procura por termos digitados localizados nos títulos das noticias exibidas na página. Após a procura a lupa é substituída por um X, que ao ser pressionado limpa o campo e reseta a pesquisa.
- OBS: Caso nenhum resultado seja exibido, pode-se tentar encontrar noticias mais antigas ao pressionar-se o botão <b>Mais antigas</b>.

 </br>

<h2>Instalação</h2>

Para utilizar a aplicação a mesma poderá ser instalada localmente.

Para tanto existem algumas possibilidades:

- Poderá ser feito o Fork do repositório original para o seu particular na página principal do projeto no GitHub e depois baixá-lo para sua máquina;
- Poderá ser feito o download de todo o código, também na página do projeto no GitHub;
- A alternativa final seria fazer a clonagem do projeto para a sua máquina acessando as alternativas na página do projeto no GitHub.

Depois que estiver com o código em sua máquina, abra o terminal na pasta root do código e digite o seguinte:

<i>nome@nome:~/pastaDoProjeto$</i> <b>yarn</b>

Este comando baixará todas as dependências necessárias para o projeto poder ser executado localmente.

Após o término da instalação digite o seguinte:

<i>nome@nome:~/pastaDoProjeto$</i> <b>yarn start</b>

<b>OBS1</b>: Caso o yarn não esteja instalado em seu sistema, recomenda-se acessar a página oficial para mais informações: [Yarn](https://yarnpkg.com/);</br>
<b>OBS2</b>: Exemplos de comando a serem feitos em linux. Os comandos do windows são semelhantes, mas caso ocorra algum erro favor acessar a página oficial do [Yarn](https://yarnpkg.com/) para obter informações adicionais. 

</br>

<h2>Testes com o Cypress</h2>

Para iniciar os testes com o Cypress são necessários os seguintes passos:
- Abra o terminal na pasta raíz do projeto e rode o aplicativo com o comando:</br>
  <i>nome@nome:~/pastaDoProjeto$<i><b> yarn start</b>;
- Abra um segundo terminal, também na pasta raíz, e rode o Cypress com o seguinte comando:
  <i>nome@nome:~/pastaDoProjeto$ <b> yarn run cypress open </b> 

Uma janela do Cypress será aberta...no menu à esquerda basta clicar em <b>AppTests.spec.js</b>.</br>
Os testes serão iniciados automaticamente em uma janela do navegador.

</br>

<h2 id="status">Status do Projeto</h2>
Projeto já finalizado e funcional

</br>

<h2 id="deploy">Link do deploy com o aplicativo funcional</h2>

<a href="https://space-flight-news-eta.vercel.app/">Space Flight News</a>

</br>

<h2 id="tech">🛠 Tecnologias</h2>
<ul>
  <li>React</li>
  <li>Context API</li>
  <li>JavaScript</li> 
  <li>Material UI</li>
  <li>Axios</li>
  <li>React-Router-Dom</li>
  <li>Vercel</li>
  <li>Cypress e2e test tool</li>
</ul>

</br>

<h2 id="author">Autor</h2>

<div>
  <img src="https://avatars.githubusercontent.com/u/79763201?s=96&v=4" alt="avatar" />
</div>

<a href="https://www.linkedin.com/in/robertobressanelli/"> 🚀 Roberto Bressanelli</a>
