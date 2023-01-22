<template>
    <div>
        <h1>Welcome to HomePage!</h1>
        <button @click="fetchUsers" class="py-2 mb-3 px-4 rounded-md bg-blue-600 text-white mt-3">Fetch Users</button>
        <ul v-if="users">
            <li v-for="user in users" :key="user.id" class="mb-2">- {{ user.name }} - {{ user.email }}</li>
        </ul>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    axios.defaults.withCredentials = true;
    const runtimeConfig = useRuntimeConfig();
    const users = ref(null);

    async function fetchUsers(){
        await axios.get(`${runtimeConfig.public.apiSecret}/user`).then((response) => {
            console.log(response.data)
            users.value = response.data;
        });
    }
</script>