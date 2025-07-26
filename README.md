# 🛒 Carrinho de Compras

Uma aplicação web moderna e intuitiva para simulação de carrinho de compras com interface elegante e funcionalidades avançadas de gerenciamento de produtos.

## 📋 Sobre o Projeto

O **Carrinho de Compras** é uma aplicação web que simula um sistema completo de e-commerce com funcionalidades de adição, remoção e gerenciamento de produtos. Com design moderno e experiência de usuário otimizada, oferece uma interface limpa e profissional para demonstração de conceitos de desenvolvimento web.

## ✨ Funcionalidades

- 🛍️ **Seleção de produtos**: Dropdown com produtos pré-definidos e preços
- 📊 **Controle de quantidade**: Input numérico com validações inteligentes
- ➕ **Adicionar ao carrinho**: Sistema que agrupa produtos iguais automaticamente
- 📋 **Visualização dinâmica**: Lista atualizada em tempo real dos produtos
- 💰 **Cálculo automático**: Total calculado dinamicamente conforme adições
- 🗑️ **Limpar carrinho**: Função para resetar completamente o carrinho
- ✅ **Validações robustas**:
  - Quantidade mínima (maior que 0)
  - Quantidade máxima (999 unidades)
  - Confirmação antes de limpar
  - Tratamento de valores inválidos

## 🖥️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica com formulários acessíveis
- **CSS3**: Estilização avançada com:
  - CSS Grid para layout responsivo
  - Gradientes lineares para background
  - Box-shadow e filter effects
  - Variáveis CSS para consistência
  - Customização de elementos form
- **JavaScript**: Lógica complexa incluindo:
  - Manipulação de arrays e objetos
  - Parsing de strings e dados
  - Validações em tempo real
  - Atualização dinâmica do DOM
  - Sistema de confirmação de ações

## 🎨 Design

Interface com design clean e profissional:
- **Paleta de cores**:
  - Azul principal: `#1875E8`
  - Fundo escuro: `#01080E`
  - Background branco com gradiente
- **Tipografia**:
  - Chakra Petch para títulos (700)
  - Inter para textos (400, 600, 700)
- **Layout**: Grid responsivo com duas colunas
- **Elementos visuais**: Ícones SVG, grafismos decorativos e imagem de óculos VR

## 🚀 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   cd carrinho-compras
   ```

2. **Estrutura necessária**:
   Certifique-se de ter as pastas:
   ```
   assets/
   js/
   ```

3. **Abra a aplicação**:
   - Abra o arquivo `index.html` em qualquer navegador moderno

4. **Use o carrinho**:
   - Selecione um produto no dropdown
   - Digite a quantidade desejada
   - Clique em "Adicionar" para incluir no carrinho
   - Visualize o total sendo calculado automaticamente
   - Use "Limpar" para resetar o carrinho

## 📁 Estrutura do Projeto

```
carrinho-compras/
├── index.html              # Página principal
├── style.css              # Estilos da aplicação
├── js/
│   └── app.js             # Lógica JavaScript
├── assets/
│   ├── carrinho-cinza.svg # Ícone do carrinho (grande)
│   ├── icone-carrinho.svg # Ícone do carrinho (pequeno)
│   ├── grafismo-azul.svg  # Elemento decorativo
│   ├── arrow-down.svg     # Seta do dropdown
│   └── oculos.png         # Imagem decorativa VR
└── README.md              # Documentação
```

## 🛍️ Produtos Disponíveis

O catálogo atual inclui:

1. **Fone de ouvido** - R$ 100
2. **Celular** - R$ 1.400
3. **Oculus VR** - R$ 5.000

## 🔧 Funcionalidades Técnicas

### Gerenciamento de Estado
```javascript
let produtosCarrinho = [];
let somaTotal = 0;
```

### Sistema de Agrupamento
```javascript
// Verifica se produto já existe
let produtoExistente = produtosCarrinho.find(item => item.nome === nomeProduto);

if (produtoExistente) {
    // Soma quantidade ao existente
    produtoExistente.quantidade += quantidade;
} else {
    // Adiciona novo produto
    produtosCarrinho.push({...});
}
```

### Parsing Inteligente
```javascript
// Extrai nome e valor do produto selecionado
let nomeProduto = produto.split('-')[0];
let valorProduto = produto.split('R$')[1];
```

### Validações Implementadas
- **Quantidade válida**: Deve ser número positivo
- **Limite máximo**: Máximo 999 unidades por adição
- **Confirmação**: Dialog antes de limpar carrinho
- **Reset automático**: Campo quantidade zerado após adicionar

## 🌟 Características Especiais

- **Agrupamento automático**: Produtos iguais são somados automaticamente
- **Interface responsiva**: Adapta-se a diferentes tamanhos de tela
- **Feedback visual**: Botões com shadow e efeitos hover
- **Acessibilidade**: Labels semânticos e navegação por teclado
- **Performance**: Atualização eficiente do DOM
- **UX otimizada**: Confirmações e validações em pontos estratégicos

## 📱 Layout Responsivo

O projeto utiliza CSS Grid para layout adaptativo:
```css
.conteudo-principal {
  display: grid;
  grid-template-columns: 1.375fr 1fr;
  column-gap: 5rem;
}
```

## 🛠️ Customização

### Adicionar Novos Produtos
No HTML, adicione nova `<option>` no select:
```html
<option value="Novo Produto - R$999">Novo Produto - R$999</option>
```

### Modificar Limites
No JavaScript, altere as validações:
```javascript
if (quantidade > 999) {  // Altere o limite aqui
    alert('Quantidade máxima: 999');
    return;
}
```

### Personalizar Estilos
Use as variáveis CSS definidas:
```css
:root {
  --Light-Blue: #1875E8;
  --Void: #01080E;
  --Branco: #FFF;
}
```

## 🔍 Funcionalidades Avançadas

### Sistema de Busca (Futuro)
- Campo de busca para filtrar produtos
- Autocomplete para melhor UX

### Persistência (Futuro)
- LocalStorage para manter carrinho entre sessões
- Sistema de favoritos

### Checkout (Futuro)
- Formulário de finalização
- Cálculo de frete
- Métodos de pagamento

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Add: Nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para demonstrar conceitos modernos de desenvolvimento web e e-commerce.

---

**Experimente o carrinho de compras mais moderno! 🚀**
