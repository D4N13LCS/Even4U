# Sobre

Even4U é uma plataforma de eventos gratuitos que possui como objetivo trazer acessibilidade à cultura àqueles em vulnerabilidade financeira. Os eventos são totalmente gratuitos e dispõem todas as informações necessárias sobre seu funcionamento.

# Funcionamento

Como a um dos objetivo da plataforma é praticidade, não é necessário login para se inscrever, basta clicar em "Inscrever-se" e preencher um formulário.

![even4uDestaque](https://github.com/user-attachments/assets/34d92222-4a54-4338-a47c-4b9165c02215)


## Formulário

![even4uForms](https://github.com/user-attachments/assets/6d7b37c6-01ce-49a8-ab6d-ed3d760c06f6)


Após preencher o formulário, um email de confirmação será enviado para o email fornecido.

<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" height="60"/> 

OBS: Não é possível confirmar através do celular, por isso, abra o email no seu computador. Caso contrário, o link gerará um erro.

## Confirmação

![even4uConf](https://github.com/user-attachments/assets/244a0939-53db-400f-b201-12aeef17138f)

Após clicar no link e ser redirecionado(a) para a página de confirmação, basta confirmar ou cancelar sua inscrição. Independentemente da escolha, você será redirecionado(a) para a home do site.

# Teste você mesmo

<img src="https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo.png" height="120"/>

Para testar essa aplicação, é necessário possuir o docker instalado e as seguintes portas disponíveis: 5173, 3000 e 3306.

Após o docker instalado, faça o seguinte: 

- clone esse repositório na sua máquina local por meio do seguinte comando: <code> git clone https://github.com/D4N13LCS/Even4U </code>

- crie um arquivo .env no diretório Even4U/backend da seguinte forma: 

![even4uEnv](https://github.com/user-attachments/assets/0d61ad06-48a8-4a58-9811-6defe3bcd018)

- dentro do diretório onde os arquivos foram clonados, utilize o comando: <code> docker compose up --build </code>

- Por último, acesse http://localhost:5173/ no seu navegador.
