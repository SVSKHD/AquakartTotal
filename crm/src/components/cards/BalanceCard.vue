<template>
<q-card>
    <q-card-section>
        <div class="text-h5">{{ title }}</div>
        <hr/>
    </q-card-section>
    <q-card-section>

    </q-card-section>
</q-card>
</template>

<script>
export default{
    props:['title' , 'data'],
    setup(){
        return{

        }
    }
}
</script>