<template>
    <q-card>
        <q-card-section>
            <div class="row">
               <div v-for="item in data" class="col-md-4 col-lg-3 col-xs-12 col-sm-12">
                 <div class="text-h5">{{ item.name }}</div>
                 <div class="text-h5">{{ item.number }}</div>
               </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script>
import {ref} from "vue"
export default {
    props:["data"],
    setup(){
        return{

        }
    }
}
</script>
