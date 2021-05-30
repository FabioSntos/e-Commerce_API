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
    /*
    const productExist = await Product.findOne({
      where: { name: req.body.name },
    });

    if (productExist) res.status(400).json({ error: 'Produto cadastrado' });
    */
    const { name, descricao, preco, disponivel, destaque } =
      await Product.create(req.body);

    return res.json({
      name,
      descricao,
      preco,
      disponivel,
      destaque,
    });
  }
  /*
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
  */
}

export default new ProductController();
