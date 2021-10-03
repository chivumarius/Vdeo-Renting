// IMPORTAM:
const helmet = require('helmet');
const compression = require('compression');



//  FUNC. EXPORTATA 'PROD':
module.exports = function(app) {
    app.use(helmet());
    app.use(compression());
}