const Project = require("../Models/projest");

/**
 * URL: api/categories/
 * METHOD: POST
 * ACCESS: private
 */
const addProject = async (req, res, next) => {

    try{
        const {body}=req
      if(await Project.create({...body})) res.status(200).send("created")
    }catch(e){
        return res.status(400).send({ message: e });
       }
    


};

/**
 * URL: api/categories/
 * METHOD: GET
 * ACCESS: private
 */
const getAllProjectes = async (req, res, next) => {

    try{
        res.status(200).send( await Project.find())
      }catch(e){
          return res.status(400).send({message:e})
      }
};

/**
 * URL: api/categories/:id
 * METHOD: GET
 * ACCESS: private
 */
const getCategoryById = async (req, res, next) => {
  const { id } = req.params;
  const categorie = await CategoryModel.findOne({
    where: {
      id,
    },
  });
  res.status(200).json({
    success: true,
    categorie: categorie,
  });
};

/**
 * URL: api/categories/:id
 * METHOD: PUT
 * ACCESS: private
 */
const updateCategory = async (req, res, next) => {
  //   let name = req.body.name || '';
  //   let id = req.params.id;
  //   try {
  //     new InputValidation().categorieValidation(name);
  //     const categorie = await CategoryModel.update(
  //       { name },
  //       {
  //         where: {
  //           id,
  //         },
  //       }
  //     );
  //     res.status(200).json({
  //       success: true,
  //       categorie: categorie,
  //       message: 'Category updated successfully',
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
};

/**
 * URL: api/categories/:id
 * METHOD: DELETE
 * ACCESS: private
 */
const deleteCategory = async (req, res, next) => {
  //   const { id } = req.params;
  //   const categorie = await CategoryModel.destroy({
  //     where: {
  //       id,
  //     },
  //   });
  //   res.status(200).json({
  //     success: true,
  //     message: 'Category deleted successfully',
  //   });
};

module.exports = {
    addProject,
    getAllProjectes,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
