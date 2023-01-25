<template>
    <nav class="px-4">
        <div class="flex items-center justify-between py-3 px-4 max-w-3xl m-auto bg-slate-800 mt-3 text-white rounded-md">
            <NuxtLink to="/" class="font-bold">NuxtAuth</NuxtLink>
            <ul class="flex items-center">
                <NuxtLink class="mx-4 font-semibold" to="/">Home</NuxtLink>
                
                <NuxtLink v-if="!loginData.isAuth" class="mx-4 font-semibold" to="/login">Login</NuxtLink>
                <NuxtLink v-if="!loginData.isAuth" class="ml-4 font-semibold" to="/signup">Signup</NuxtLink>
                
                <form @submit.prevent="logoutHandler" v-if="loginData.isAuth" class="ml-5">
                    <button type="submit" class="py-2 text-sm font-semibold inline-block px-4 bg-white rounded-md text-gray-600">Logout</button>
                </form>
            </ul>
        </div>
    </nav>
</template>

<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    axios.defaults.withCredentials = true;

    const loginData = useLoginState();

    const runtimeConfig = useRuntimeConfig();
    const router = useRouter();

    const logoutHandler = async () => {
        await axios.post(`${runtimeConfig.public.urlSecret}/logout`).then((response) => {
            loginData.value.name = null;
            loginData.value.email = null;
            loginData.value.isAuth = false;
            router.push('/login');
        });
    }
</script>