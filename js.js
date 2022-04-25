class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar() {
        let produto = this.lerDados();

        if(this.validaCampo(produto)) {
            this.adicionar(produto);
        }

        this.listaTabela();

        console.log(this.arrayProdutos)

        this.cancelar()
    }

    cancelar() {
        
       document.getElementById('produto').value = ''

       document.getElementById('preço').value = ''

    }

    lerDados() {
        let produtto = {}

        produtto.id = this.id;

        produtto.nomeProduto = document.getElementById('produto').value;

        produtto.preco = document.getElementById('preço').value;

        return produtto;
    }

    validaCampo(produto) {
        let msg = '';

        if (produto.nomeProduto === '') {
            msg += '- Informe o Nome do Produto \n' 
        } 
        
        if (produto.preco === '') {
            msg += '- Informe o Preço do Produto \n'
        } 
        
        if (msg != '') {
            alert(msg);
            return false
        }

        return true
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);

        this.id++;
    }

    listaTabela() { 
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''; 

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_acoes = tr.insertCell();

            
            td_id.innerText = this.arrayProdutos[i].id;  
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].preco;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'imgs/edit.svg'

            let imgDelet = document.createElement('img');
            imgDelet.src = 'imgs/delet.svg'

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelet)
        }
    }

}

let produto = new Produto();