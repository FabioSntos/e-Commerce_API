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
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Falha ao cadastrar produto',
      });
    }

    const productExist = await Product.findOne({
      where: { name: req.body.name },
    });

    if (productExist) {
      return res.status(400).json({ error: 'Produto cadastrado' });
    }

    const { name, descricao, preco, disponivel, destaque, id } =
      await Product.create(req.body);

    return res.json({
      name,
      descricao,
      preco,
      disponivel,
      destaque,
    });
  }
  async delete(req, res) {
    const { id } = req.params;

    const idProduto = await Product.findByPk(id);
    if (!idProduto) console.log(id);
    return res.status(401).json({
      message: 'erro ao remover arquivo',
    });
  }

  async update(req, res) {
    const schema = await Yup.object().shape({
      name: Yup.string().required(),
      descricao: Yup.string().required(),
      preco: Yup.number().required(),
      disponivel: Yup.number().required(),
      destaque: Yup.number().required(),
    });

    const { name, descricao, preco, disponivel, destaque } =
      await Product.update(req.body);
    return res.json({
      name,
      preco,
      descricao,
      disponivel,
      destaque,
    });
  }
  async getAll(req, res) {
    const all = await Product.findAll();
    return res.json(all);
  }


  async returnProducts(req, res) {
    const products = await Product.findAll()
    return res.json(products)
  };


  async ProductById(req, res) {
    const { id } = req.params
    const selectedProduct = await Product.findByPk(id)
    if (!selectedProduct) {
      return res.status(404).json({ error: 'Produto não encontrado' })
    }
    return res.status(200).json({ selectedProduct })

  }

}

export default new ProductController();
