require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError");
const express = require('express'); //aqui importa os módulos da pasta express em node_modules

const cors = require('cors');

const routes = require("./routes");
const uploadConfig = require("./configs/upload");

migrationsRun(); 

const app = express(); //aqui faz a execução do express
app.use(cors());
app.use(express.json()); //informa que o conteúdo vai ser no formato JSON

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);    

app.use((error, request, response, next) =>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }
    console.error(error);
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

const PORT = 3333; //porta de acesso ao servidor
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); //faz a impressão dessa mensagem no console