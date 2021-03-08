const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tables = require('./infraestrutura/tables');

conexao.connect(erro => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('Banco conectado!');
        
        Tables.init(conexao);

        const app = customExpress();
        app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));
    };
});
