<template>
    <div>
        <h1>Welcome to HomePage!</h1>
        <button @click="fetchUsers" class="py-2 mb-3 px-4 rounded-md bg-blue-600 text-white mt-3">Fetch Users</button>
        <ul v-if="user">
            <li class="mb-2">{{ loginData.name }} - {{ loginData.email }}</li>
        </ul>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { ref } from 'vue';

    definePageMeta({
        middleware: 'auth'
    })

    axios.defaults.withCredentials = true;
    const runtimeConfig = useRuntimeConfig();
    const user = ref(null);

    const loginData = useLoginState();

    async function fetchUsers(){
        await axios.get(`${runtimeConfig.public.apiSecret}/user`).then((response) => {
            user.value = response.data;
            loginData.value.name = response.data.name;
            loginData.value.email = response.data.email;
            loginData.value.isAuth = true;
        });
    }
</script>