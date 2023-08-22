import { validationResult } from "express-validator";

class Validation{
    static valide(request, response, next){
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
           return response.status(400).json({ errors: errors.array() });
        }
    }
}

export default Validation;