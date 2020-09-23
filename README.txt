É que você tenha o node. instalado.
1º Execute o atalho pm2 Server e aguarde a instalação do servidor.
2º A aplicação pode ser executada a partir do atalho Start Servers automaticamente. (preferível que o projeto seja clonado a raiz do disco C).
3º Para fechar o server ‘pm2’ é necessário executar o arquivo Stop Server.
O backend está utilizando a porta 3030 e o frontend a porta 3000.
Se houver problemas no atalho é necessário abrir prompt de comando e chegar na raiz da pasta backend e executar: ”pm2 start index.js --name Backend” e na raiz da pasta frontend executar:“ pm2 serve build 3000 --spa --name Frontend”.
Para ver o estado dos servidores execute no prompt:“pm2 monit”.
Para fechar os servidores execute no prompt: “pm2 kill”.
* Se houver problemas com as portas é possível trocar no backend manualmente executando na pasta raiz: “pm2 start index.js --name Backend -- --port PARÂMETRO_PORT” e alterando o parâmetro port. Contudo é necessário entrar na pasta frontend/src/pages/Search/index.js dentro dele colocar na const port o novo valor, ela estará com o valor ‘3030”.
** No frontend pm2 serve build 3000 --spa --name Frontend no lugar de 3000 pode se colocar qualquer porta disponível que dará qualquer problema.
***Se não funcionar o pm2 os projetos podem ser executados a partir do comando npm start na raiz de cada pasta, no modo de desenvolvimento.
