<template>
    <h2>Máscaras</h2>
    <label for="">Telefone: </label>
    <input type="tel" v-mask="['(##) ####-####', '(##) # ####-####']">

    <label for="">CPF/CNPJ: </label>
    <input type="text" v-mask="['##.###.###-##', '##.####.####/####-##']">

    <label for="">Valor: </label>
    <input type="text" v-mask="['#,##', '##,##', '###,##', '####,##', '#####,##', '######,##', '#######,##']">
</template>