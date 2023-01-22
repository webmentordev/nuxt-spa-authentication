<template>
    <div class="h-[50vh] flex items-center justify-center">
        <form @submit.prevent="loginHandler" class="p-6 rounded-md border border-gray-200 bg-gray-200 shadow-md">
            <h1 class="mb-3 font-bold text-2xl">Login Account!</h1>
            <input type="email" v-model="email" placeholder="Email Address"
            class="w-full p-3 rounded-md mb-3">
            <input type="password" v-model="password" placeholder="Password"
            class="w-full p-3 rounded-md mb-3">
            <button type="submit" class="py-2 px-6 bg-blue-600 text-white rounded-md font-medium">Login</button>
        </form>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    axios.defaults.withCredentials = true;
    const runtimeConfig = useRuntimeConfig();

    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const loginHandler = async () => {
        await axios.get(`${runtimeConfig.public.urlSecret}/sanctum/csrf-cookie`).then(() => {
            axios.post(`${runtimeConfig.public.urlSecret}/login`, {
                email: email.value,
                password: password.value
            }).then(() => {
                router.push('/');
            });
        });
    }
</script>