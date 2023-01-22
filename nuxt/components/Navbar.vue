<template>
    <nav class="px-4">
        <div class="flex items-center justify-between py-3 px-4 max-w-2xl m-auto bg-slate-800 mt-3 text-white rounded-md">
            <NuxtLink to="/" class="font-bold">NuxtAuth</NuxtLink>
            <ul class="flex items-center">
                <NuxtLink class="mx-4 font-semibold" to="/">Home</NuxtLink>
                <NuxtLink class="mx-4 font-semibold" to="/login">Login</NuxtLink>
                <NuxtLink class="ml-4 font-semibold" to="/signup">Signup</NuxtLink>
                <form @submit.prevent="logoutHandler" class="ml-5">
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
    const runtimeConfig = useRuntimeConfig();
    const router = useRouter();

    const logoutHandler = async () => {
        await axios.post(`${runtimeConfig.public.urlSecret}/logout`).then((response) => {
            router.push('/');
        });
    }
</script>