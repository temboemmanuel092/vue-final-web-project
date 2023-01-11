
<template>
    <div>
        <nav>
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

<script>
</script>

<style scoped>
    .nav-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav {
        background-color: aliceblue;
        margin: 30px;
        padding: 20px;
        border-radius: 10px;
    }
</style>