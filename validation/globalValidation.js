class GlobalValidation{
    static idValidation() {
        return [
          param("id")
            .notEmpty()
            .isNumeric()
            .withMessage(
              "L'ID de l'achat doit être numérique et ne doit pas être vide"
            ),
        ];
      }
}