const mongoose = require('mongoose');

const conexaodb = () => {
    console.log("conectando ao Banco de Dados")

    mongoose.connect("mongodb+srv://natan:<natan>@cluster0.ye0ycfu.mongodb.net/?retryWrites=true&w=majority", 
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log ("MongoDB Atlas Conectado"))
    .catch((error) => console(error));


}

module.exports = conexaodb;
