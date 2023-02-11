<template>
<q-card>
    <q-card-section>
        <div class="text-h6">{{ title }}</div>
        <hr/>
    </q-card-section>
    <q-card-section>
        <div class="row">
            <div v-for="item in props" :key="item" class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                 
            </div>
        </div>
    </q-card-section>
</q-card>
</template>

<script>
export default{
    props:['data' , 'title'],
    setup(){
        return{

        }
    }
}
</script>