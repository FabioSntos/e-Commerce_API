import Department from '../model/Department';
import Sequelize, { where } from 'sequelize'
import Product from '../model/Product';

class DepartmentController {

  async returnDept(req, res) {
    const departments = await Department.findAll();
    return res.json(departments);
  }

  async productByDep(req, res) {
    const { id } = req.params;
    const pksearch = await Department.findByPk(id);
    if(!pksearch){
      return res.status(404).json({ error: 'Departamento não encontrado' });

    }else{
    const products_dep = await Department.findAll({
      attributes: ['name_department'],
      include: [{
        model: Product,
        where: { id_dep: id },
        attributes: ['name', 'descricao','preco','estoque']
      }]
    })
   
    return res.json(products_dep)
  }
  }
  

}




export default new DepartmentController();
