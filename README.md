# Como executar ...
API em construção, apenas para teste estão disponíveis os métodos GET e POST ainda sem persistência no banco de dados.

### Para executar realize os procedimentos abaixo:

Baixe o conteúdo para sua máquina pelo site ou no terminal executanto:
* git clone https://github.com/AdilsonBND/price_average/

Inicie seu docker, e no terminal inicie o prejeto executando:

* docker-compose up

Agora acesso o diretório do projeto no VSCode e realize os passos a seguir:

* Instale a extensão APICliente
* No aquivo api.http clique em "Send Request", isso fará com que o APICliente realize POST inserindo os dados JSON na memória
* Abra seu navegador no local http://localhost:3000 e serão apresentados os dados inseridos pelo POST realizado no passo anterior.

Próximo passo:
  * Persistência de dados no MongoDB.
