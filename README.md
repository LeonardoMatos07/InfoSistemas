# Teste InfoSistemas

## Ferramentas utilizadas:

- express de framework;
- axios para requisicoes http;
- pino para logs da aplicação;
- jsonwebtoken para autenticação via jwt;
- mongoose para ODM;

<br />

## Como executar a aplicação:

### Criar arquivo .env com configurações baseado no .env_exemple
- Definir string de conexão com o mongodb
- Definir SECRET_HASH da aplicação


<br />

### No diretorio do projeto, rode:

### Usando Yarn:

#### `yarn` para instalação das dependencias

#### `yarn start` para executar a aplicação

### Usando NPM:

#### `npm install` para instalação das dependencias

#### `npm start` para executar a aplicação



<br />

## Rotas e exemplos:

<br />
Para cadastrar um veiculo

#### [POST] em /veiculo/create
<br />

```json
{
	"placa": "JBL4545",
	"chassi": "1234567",
	"renavam": "1234",
	"modelo": "Uno",
	"marca": "Fiat",
	"ano": "2016"

}
```
<br />
Para buscar veiculo pelo renavam

#### [GET] em /veiculo/get


```json
{
	"renavam": "123"
	
}
```
<br />
Para deletar um veiculo

#### [DELETE] em /veiculo/delete


```json
{
	"_id": "61df87b9a20c9eee8f82bda4"
	
}
```
<br />
Para atualizar um veiculo

#### [PUT] em /veiculo/update


```json
{
	"_id": "61df87b9a20c9eee8f82bda4",
	"placaUp": "jbl12345",
	"chassiUp": "1233",
	"renavamUp": "123",
	"modeloUp": "gol",
	"marcaUp": "VW",
	"anoUp": "2015"

	
}
```
<br />
Para listar relação de veiculos por marca

#### [GET] em /veiculoList/get


```json
{
		"marca": "Fiat"
}
```
<br />



# Teste InfoSistemas
