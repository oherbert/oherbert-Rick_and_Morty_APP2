É necessário que você tenha o node. instalado na sua máquina.
Auto execução do projeto (fortemente recomendado que o projeto seja clonado a raiz do disco C, para evitar quaisquer problemas):
1º Execute o atalho pm2 Server e aguarde a instalação do servidor.
2º A aplicação pode ser executada a partir do atalho Start Servers automaticamente.
3º Para fechar os servidores ‘pm2’ é necessário executar o arquivo Stop Server.

Execução do projeto manualmente:
1º Abra o arquivo chamado Starter.exe
2º Copie os seguintes comandos dentro do prompt que abrirá (Somente da primeira vez);
npm install -g serve 
npm install pm2 -g
3º Em seguida copie o código abaixo e cole no prompt que está aberto.
cd backend 
pm2 start index.js --name Backend
cd..
cd frontend
pm2 serve build 3000 --spa --name Frontend 
start http://localhost:3000 
pm2 monit

4º Quando você quiser fechar os servidores escreva o seguinte comando no prompt:
pm2 kill

Observações:
É possível executar o projeto em modo de desenvolvimento através do comando “npm start” dentro das raízes das respectivas pastas: frontend e backend no prompt. 
* O backend está utilizando a porta 3030 e o frontend a porta 3000.
