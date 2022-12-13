<script lang="ts">
import TextInput from '../inputs/TextInput.vue';
import type { VueCookies } from "vue-cookies";
import { inject } from 'vue';


export default {
    props: ['name', 'id'],
    data() {
        const cookies = inject<VueCookies>('$cookies');
        return {
            cookies,
            active: false,
            showpopup: false
        }
    },
    mounted() {
    },
    methods: {
        createServer: async function(){
            var createServerField: any = await document.getElementById("createServerField");
            console.log(createServerField);
            let res = await fetch(import.meta.env.VITE_API_URL + "Server/createServer", {
                method: "POST",
                headers: new Headers({
                    'Accept': "*/*",
                    "Content-Type": "application/json",
                    'Authorization': "Bearer " + this.cookies?.get("jwt")
                }),
                body: JSON.stringify({
                    name: createServerField.value
                })
            })
            res.json().then((a) => {
                this.$router.push({ name: "server", query: { id: a } }).then(() => {
                    window.location.reload();
                })
            })
        },
        joinServer: async function(){
            var joinServerField: any = await document.getElementById("joinServerField");
            let res = await fetch(import.meta.env.VITE_API_URL + "Member/joinServer/" + joinServerField.value, {
                method: "GET",
                headers: new Headers({
                    'Accept': "*/*",
                    "Content-Type": "application/json",
                    'Authorization': "Bearer " + this.cookies?.get("jwt")
                }),
            })
        }
    },  
    components: {
        TextInput
    }
}
</script>

<template>
    <div class="server-icon" v-on:mouseenter="active = true" v-on:mouseleave="active = false" v-on:click="showpopup = true">
        <i class="bi bi-bookmark-plus-fill add-server"></i>
        <div v-if="active" class="annotation">
            Añadir nuevo / Unirse
        </div>
    </div>
    <div v-if="showpopup" class="popup" v-on:click="showpopup = false;">
        <div class="modal" v-on:click="" v-on:click.stop>
            <h2 style="text-align:center; padding-bottom: 10px;">Añadir nuevo / Unirse</h2>
            Unirse a un servidor
            <div class="enterfield">
                <TextInput type="number" id="joinServerField"/>
                <button class="button" v-on:click="joinServer()">Enviar</button>
            </div>
            Crear un nuevo servidor
            <div class="enterfield">
                <TextInput id="createServerField"/>
                <button class="button" v-on:click="createServer()">Enviar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.server-icon {
    min-width:60px;
    max-width:60px;
    min-height:60px;
    max-height:60px;
    background-color: #303134;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    font-family: 'Uni Sans';
    font-size: 20px;
    transition: 0.25s border-radius;
}

.server-icon:hover{
    border-radius: 30%;
}

.annotation {
    position:fixed;
    background-color: black;
    left: 75px;
    z-index:9999;
    opacity: 1;
    color:white;
    padding:2px;
    padding-left:10px;
    padding-right:10px;
    border-radius: 5px;
    font-family: 'Open Sans';
    font-size: 14px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    animation-name: showAnim;
    animation-duration: 0.25s;
}

@keyframes showAnim {
    from { opacity: 0; }
    to { opacity: 1; }
}

.add-server {
    color: #5F5DA6;
}

.popup {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.50);
    opacity: 1;
    right:0;
    top:0;
    display:flex;
    width: 100%;
    height:100%;
    align-items: center;
    justify-content: center;
    z-index:9999;
}

.modal {
    opacity: 1;
    background-color: white;
    min-width: 512px;
    padding:30px;
    border-radius: 10px;
}

.button {
    margin-left:5px;
    background-color: #5F5DA6;
    color:white;
    border-radius: 5px;
    outline: 0;
    border: 0;
}



.enterfield {
    display:flex;
    padding-top:5px;
    padding-bottom:5px;
}
</style>