var DataTypes = require("sequelize").DataTypes;
var _CLIENTE = require("./CLIENTE");
var _ENTREGA = require("./ENTREGA");
var _FATORES = require("./FATORES");
var _PERFIL = require("./PERFIL");
var _PRAZOS = require("./PRAZOS");
var _SATISFACAO = require("./SATISFACAO");
var _SCORE_LUCRO = require("./SCORE_LUCRO");
var _USUARIOS = require("./USUARIOS");

function initModels(sequelize) {
  var CLIENTE = _CLIENTE(sequelize, DataTypes);
  var ENTREGA = _ENTREGA(sequelize, DataTypes);
  var FATORES = _FATORES(sequelize, DataTypes);
  var PERFIL = _PERFIL(sequelize, DataTypes);
  var PRAZOS = _PRAZOS(sequelize, DataTypes);
  var SATISFACAO = _SATISFACAO(sequelize, DataTypes);
  var SCORE_LUCRO = _SCORE_LUCRO(sequelize, DataTypes);
  var USUARIOS = _USUARIOS(sequelize, DataTypes);

  ENTREGA.belongsTo(CLIENTE, { as: "ID_CLIENTE_CLIENTE", foreignKey: "ID_CLIENTE"});
  CLIENTE.hasMany(ENTREGA, { as: "ENTREGAs", foreignKey: "ID_CLIENTE"});
  SCORE_LUCRO.belongsTo(ENTREGA, { as: "NUMERO_NOTA_ENTREGA", foreignKey: "NUMERO_NOTA"});
  ENTREGA.hasOne(SCORE_LUCRO, { as: "SCORE_LUCRO", foreignKey: "NUMERO_NOTA"});
  SCORE_LUCRO.belongsTo(FATORES, { as: "ID_FATOR_FATORE", foreignKey: "ID_FATOR"});
  FATORES.hasMany(SCORE_LUCRO, { as: "SCORE_LUCROs", foreignKey: "ID_FATOR"});
  CLIENTE.belongsTo(PERFIL, { as: "IDPERFIL_PERFIL", foreignKey: "IDPERFIL"});
  PERFIL.hasMany(CLIENTE, { as: "CLIENTEs", foreignKey: "IDPERFIL"});
  ENTREGA.belongsTo(PRAZOS, { as: "ID_PRAZO_PRAZO", foreignKey: "ID_PRAZO"});
  PRAZOS.hasMany(ENTREGA, { as: "ENTREGAs", foreignKey: "ID_PRAZO"});
  ENTREGA.belongsTo(SATISFACAO, { as: "NUMERO_NOTA_SATISFACAO", foreignKey: "NUMERO_NOTA"});
  SATISFACAO.hasOne(ENTREGA, { as: "ENTREGA", foreignKey: "NUMERO_NOTA"});

  return {
    CLIENTE,
    ENTREGA,
    FATORES,
    PERFIL,
    PRAZOS,
    SATISFACAO,
    SCORE_LUCRO,
    USUARIOS,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
