import Product from '../model/Product';
import * as Yup from 'yup';

class ProductController {
  async store(req, res) {
    const schema = await Yup.object().shape({
      name: Yup.string().required(),
      descricao: Yup.string().required(),
      preco: Yup.number().required(),
      disponivel: Yup.number().required(),
      destaque: Yup.number().required(),
      estoque: Yup.number().required(),

      id_dep: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Falha ao cadastrar produto; Por favor corrija os dados para alteração',
      });
    }

    const productExist = await Product.findOne({
      where: { name: req.body.name },
    });

    if (productExist) {
      return res.status(400).json({ error: 'Produto já existe no sistema' });
    }

    const { name, descricao, preco, disponivel, destaque, id, id_dep, estoque } =
      await Product.create(req.body);

    return res.json({
      name,
      descricao,
      preco,
      disponivel,
      estoque,
      destaque,
      id_dep
    });
  }
  async delete(req, res) {
    const { id } = req.params;

    const idProduto = await Product.findByPk(id);
    if (!idProduto)
      return res.status(404).json({
        message: 'Erro ao remover; ID selecionado não existe na base',
      });
    await Product.destroy({ where: { id } });
    return res.json({
      message: 'Produto removido com sucesso',
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const idProduto = await Product.findByPk(id);

    const schema = await Yup.object().shape({
      name: Yup.string().required(),
      descricao: Yup.string().required(),
      preco: Yup.number().required(),
      disponivel: Yup.number().required(),
      destaque: Yup.number().required(),
      estoque: Yup.number().required(),
      id_dep: Yup.number().required()
    });
    
    if (!idProduto)
      return res.status(404).json({
        message: 'Erro ao alterar o produto; ID selecionado não existe em nossa base',
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
          message: 'Falha na validação; Por favor corrija os dados para alteração',
        });
      }
    else {
      const { id, name, descricao, preco, disponivel, destaque,estoque, id_dep } =
        await idProduto.update(req.body);
      return res.json({
        id,
        name,
        preco,
        descricao,
        disponivel,
        estoque,
        destaque,
        id_dep
      });
    }
  }
  async getAll(req, res) {
    const all = await Product.findAll();
    return res.json(all);
  }

  async returnProducts(req, res) {
    const products = await Product.findAll();
    return res.json(products);
  }

  async ProductById(req, res) {
    const { id } = req.params;
    const selectedProduct = await Product.findByPk(id);
    if (!selectedProduct) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    return res.status(200).json({ selectedProduct });
  }
}

export default new ProductController();
