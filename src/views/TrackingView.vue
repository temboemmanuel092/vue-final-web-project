<template>
    <div>
        <h1>Today's Update</h1>
        <div class="tracking">
            <label id="tracking" for="tracking">Track your parcel</label><br>
            <input id="field" type="text" placeholder="enter your parcel ID here"><br>
            <button id="tracking">Submit</button>
        </div>

        
    </div>
</template>

<script setup></script>

<style scoped>
    h1 {
        text-align: center;
        
    }
    #tracking {
        margin: 20px;
        padding: 15px;
        font-size: 26px;
        font-weight: 700;
    }
    .tracking {
        border: 5px solid black;
        padding: 30px;
    }
    #field {
        margin: 20px;
        padding: 15px;
        font-size: large;
        font-weight: 700;
        width: 30%;
    }

</style>