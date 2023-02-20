<template>
    <Header></Header>
        <div class="row h-75 justify-content-around mt-5 mt-md-0" v-if="step === 1">
            <div class="col-12 d-flex justify-content-center align-items-center">
                <h1 class="display-3 text-center">Di Cosa Hai Bisogno?</h1>
            </div>
            <div @click="selectType('voltura')" class="col-5 col-md-2 text-center mt-md-4 d-flex flex-column align-items-center justify-content-center tile voltura">
                <h1>Voltura</h1>
            </div>
            <div @click="selectType('nuovo contratto')" class="col-5 col-md-2 text-center mt-md-4 d-flex flex-column align-items-center justify-content-center tile cambio">
                <h1>Nuovo Contratto</h1>
            </div>
            <div @click="selectType('cambio gestore')" class="col-5 col-md-2 text-center mt-4 d-flex flex-column align-items-center justify-content-center tile nuovo">
                <h1>Cambio Gestore</h1>
            </div>
            <div @click="selectType('info')" class="col-5 col-md-2 text-center mt-4 d-flex flex-column align-items-center justify-content-center tile info">
                <h1>Info</h1>
            </div>
        </div>
        <div class="row justify-content-center align-items-center px-md-5" v-if="step === 2">
            <div class="col-12 d-flex justify-content-center align-items-center">
                <h3 class="display-6 text-center pt-4">Dacci maggiori informazioni e successivamente allega una foto del tuo attuale contratto al messaggio WhatsApp</h3>
            </div>
            <div class="col-10 mt-4">
                <div class="form-group">
                    <textarea v-model="message" @input="setText" class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="scrivi qui il tuo messaggio"></textarea>
                </div>
            </div>
            <div class="col-10 d-flex justify-content-center px-5 mt-3">
                <a :href="url"><img class="img-fluid" src="../assets/WhatsAppButtonGreenLarge.png" alt=""></a>
            </div>
        </div>
</template>

<script setup>
    import Header from './Header.vue'
    import {ref} from 'vue'

    let step = ref(1);
    let type = ref('');
    let message = ref('');
    let text = '';
    let url = ''
    
    function selectType(req) {
        type.value = req
        step.value++
        text = 'motivo del contatto: ' + req
        url = ref('https://wa.me/3487934801?text=' + encodeURIComponent(text))
    }   

    function setText() {
        if (message.value) {
            text = 'motivo del contatto: ' + type.value + ', messaggio: ' + message.value
        } 
        url = ref('https://wa.me/3487934801?text=' + encodeURIComponent(text))
    }
</script>

<style scoped>
    .voltura {
        background-color: rgb(139, 215, 113);
        border-radius: 10px;
    }

    .cambio {
        background-color: rgba(139, 215, 113, 0.8);
        border-radius: 10px;
    }

    .nuovo {
        background-color: rgba(139, 215, 113, 0.597);
        border-radius: 10px;
    }

    .info {
        background-color: rgba(139, 215, 113, 0.377);
        border-radius: 10px;    
    }

    .tile {
        height: 20vh;
        cursor: pointer;
    }
</style>