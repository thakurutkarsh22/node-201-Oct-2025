const { validateBlogInput } = require('../Validators/BlogInputValidator');

function BLogInputValidationMiddleware(req, res, next) {
    const body = req.body;
    const { error, value } = validateBlogInput(body);

    if(error) {
        return res.status(400).json({
            message: "Invalid blog input",
            error: error
        });
    } else {
        next();
    }
    

}

module.exports = BLogInputValidationMiddleware;