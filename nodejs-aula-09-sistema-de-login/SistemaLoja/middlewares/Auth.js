//Middleware de autentição

function Auth(req, res, next){
    //Verificar se existe uma sessão para o usuario
    if(req.session.usuario != undefined){
        //Permite o prosseguimento
        next()
        //Se a sessão nao existir
    } else {
        //Exibe a pagina de login
        res.render("login");
    }
}
export default Auth;