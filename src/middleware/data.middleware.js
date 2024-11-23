export const validateData = (scheme) => (req, res, next) => {
    try {
        scheme.parse(req.body);
        next();
    } catch (error) {
        next(error);
    }
};
