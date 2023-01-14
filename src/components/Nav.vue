
<template>
    <div class="first-div">
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
    .first-div {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul {
        list-style-type: none;
    }
    ul {
        display: flex;
        justify-content: space-evenly;
        font-size: 30px;
    }
    ul {
        height: 70px;
        border: 10px double gold;
        outline: 5px solid purple;
        outline-offset: 5px;
    }
    ul {
        border-radius: 5px;
        margin: 20px;
        padding: 20px;
        padding-top: 40px;
    }
</style>

