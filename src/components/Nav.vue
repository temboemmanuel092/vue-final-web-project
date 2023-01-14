
<template>
    <div>
        <nav class="nav-bar">
            <ul class="nav-list">
                <li>
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'services' }">Services</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'tracking' }">Tracking</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'sign-up' }">Sign-up/Sign-in</router-link>
                </li>

            </ul>

            

        </nav>
    </div>
</template>

<script setup>
</script>

<style scoped>
    ul {
        list-style-type: none;
    }
    ul {
        display: flex;
        justify-content: space-between;
        font-size: 30px;
    }
    ul {
        height: 70px;
        width: 100%;
       border: 2px solid;
    }
    ul {
        border-radius: 5px;
        margin: 20px;
        padding: 20px;
        padding-top: 40px;
    }
</style>

<!--  -->