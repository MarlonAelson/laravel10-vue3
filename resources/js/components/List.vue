<script>

export default {
	data(){
        return{
            lista:[],
		    NovoNome: '',
		    NovoEmail: ''
        }		
	},
	methods: {
		addNovoItem: function(e) {
			e.preventDefault();
			this.lista.push({nome: this.NovoNome, email : this.NovoEmail});
			this.NovoNome = '';
			this.NovoEmail = '';
		},
		removeItem: function(index){
            this.lista.splice(index, 1);
        },
        onListClean(){
            const acao = '';
            const retorno = confirm("Tem certeza que deseja limpar toda a listagem?");
            if (retorno == true){
                this.listClean()
            }
        },
        listClean(){
            this.lista.length = 0;
        }
	}
}
</script>

<template>
    
    <link rel="stylesheet" type="text/css" href="https://semantic-ui.com/dist/semantic.css">

<br>
<div class="ui two column stackable grid container" id="listaVue">
    <div class="column">
        <form class="ui form">
            <h1>Criando sua lista de Emails</h1>
            <label for="nome"> Nome:</label>
            <div class="field">
                <input type="text" name="nome" v-model="NovoNome">
            </div>
            <label for="email"> Email:</label>
            <div class="field">
                <input type="text" name="email" v-model="NovoEmail">
            </div>
            <hr>
            <button class="ui primary basic button" v-on:click="addNovoItem">Cadastrar</button>				
        </form>
    </div>
    <div class="column">
        <h1>Lista de Emails</h1>
        <button v-on:click="onListClean()">Limpar Lista</button>
        <div class="ui segments">

            <div class="ui ignored info message" v-if="lista.length == 0 ">
                <p>Atenção ! Cadastre um nome e um email para formar sua lista.</p>
            </div>
           
                <div class="ui segment"
                    v-for="(item, index) in lista " 
                    v-else="lista">
                  {{ index }} - {{item.nome}} - {{item.email}} <button v-on:click="removeItem(index)">Remover</button>
                </div>
            
            
        </div>
    </div>
    <pre>
        {{ $data | json }}
    </pre>
</div>

</template>