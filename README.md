<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Ecommerce api</h3>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

This is a Ecommerce Project developed with Node.js and Mysql, it's possible add new products, change, delete & get them.  

### Built With

- [express](https://expressjs.com/)
- [yup](https://www.npmjs.com/package/yup)
- [docker](https://www.docker.com/)
- [sequelize](https://sequelize.org/)
- [mysql](https://laravel.com)

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

- Docker
  ```sh
  https://www.docker.com/products/docker-desktop
  ```

- npm
  ```sh
  npm install npm@latest -g
  ```
- Sequelize-cli
  ```sh
  npm install sequelize-cli -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/FabioSntos/e-Commerce_API
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
4. docker Image
   ```sh
   docker run -d --name sistema -p 3306:3306 -e MYSQL_ROOT_PASSWORD=pass -e MYSQL_DATABASE=sistema mysql:8.0.25 --default-authentication-plugin=mysql_native_password
   ```
5. Run migrations
   ```JS
   npx sequelize db:migrate
   ```
6. Run seeds
   ```JS
   npx sequelize db:seed:all
   ```
7. start the project
   ```JS
   npm run dev
   ```



### Test Case

|   Endpoint   	|  HTTP  	|                        Proposta                        	|                Test                	|                                                                    Body example                                                                    	|
|:------------:	|:------:	|:------------------------------------------------------:	|:----------------------------------:	|:--------------------------------------------------------------------------------------------------------------------------------------------------:	|
|   /produto   	|   GET  	|        Retorno da lista de produtos existentes.        	|    http://localhost:3333/produto   	|                                                                                                                                                    	|
| /produto/:id 	|   GET  	|              Retorno de produto específico             	|  http://localhost:3333/produto/:id 	|                                                                                                                                                    	|
|  /remove/:id 	| DELETE 	|            Remoção de um produto específico            	|  http://localhost:3333/remove/:id  	|                                                                                                                                                    	|
|    /store    	|  POST  	|            Inclusão de um produto específico           	|     http://localhost:3333/store    	|        {"name":"Calça Corinthians", "descricao":"Vai timão", "preco": "200", "disponivel":"1", "destaque":"1", "estoque":"1", "id_dep": "5"}       	|
| /alterar/:id 	|   PUT  	|                  Alteração de produto                  	|  http://localhost:3333/alterar/:id 	| {"name":"Calça Santos", "descricao":"Caiu na vila o peixe fuzila", "preco": "200", "disponivel":"1", "destaque":"1", "estoque":"1", "id_dep": "5"} 	|
|    /deptos   	|   GET  	|            Retorno de todos os departamentos           	|     http://localhost:3333/deptos   	|                                                                                                                                                    	|
|  /deptos/:id 	|   GET  	| Retorno de um departamento e todos produtos associados 	|  http://localhost:3333/deptos/:id  	|                                                                                                                                                    	|


### Seeds Data
In our seeds you will find a total of 9 departments and 9 products; Some departments have more than one product attached and others are empty. For test cases, you can use our seeds for GET and PUT, and if you use POST, the return will be an object of ID 10. Have fun!

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Project

Project Link: [https://github.com/FabioSntos/e-Commerce_API](https://github.com/FabioSntos/e-Commerce_API)
