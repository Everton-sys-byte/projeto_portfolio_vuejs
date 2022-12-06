<template>


    <main>
        
    </main>
    <!--
        <main class="header-main" >
            <table class="address-information">
                <thead>
                    <tr>
                        <th class="border">ID</th>
                        <th class="border">Rua</th>
                        <th class="border">Numero</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in enderecos" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.rua}}</td>
                        <td>{{item.numero}}</td>
                    </tr>
                </tbody>
            </table>
        </main>
        -->
</template>


<script>

export default ({
    setup() {
        /* iniciando uma variável 
        const enderecos = [
            {
                id: 1,
                rua: 'Santos Dummond',
                numero: 120
            },
            {
                id: 2,
                rua: 'Jaqueline Salgueira',
                numero: 345
            },
        ];

        return { enderecos }
        */
    },
    
})
</script>



<style scoped>
    /* aplicando classes dentro do style, sem ser necessário aplicar no template 
    .header-main {
        @apply container w-screen mx-auto p-2 min-h-screen bg-slate-400
    }

    .address-information {
        @apply bg-slate-300 w-3/6 h-3/6 text-center mx-auto 
    }

    .border {
        @apply border-solid border-2 border-blue-800 rounded
    }
    */
</style>