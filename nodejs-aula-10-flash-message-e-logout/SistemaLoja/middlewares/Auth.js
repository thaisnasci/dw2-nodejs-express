// Middleware de Autenticação
function Auth(req, res, next) {
  // Verificar se existe uma sessão para o usuário
  if (req.session.usuario != undefined) {
    // Permite o prosseguimento
    next();
  } else {
    // Se não existir a sessão
    // Exibe a página de login para o usuário
    res.redirect("/login");
  }
}

export default Auth;