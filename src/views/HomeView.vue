<template>
  <div>
    <ul class="container">
      <li>
        <p> Are you interested in buying anything from USA?</p>
      </li>
      <li> 
        <p> Would you like us to buy purchase somwthing for for from USA</p>
      </li>
      <li> 
        <p> We deliver to any parts of the Country in Zambia</p>
      </li>
      <li>
        <p> Tell us what you want and we shall do the rest</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>


<style scoped>
  .container {  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 6px 14px;
    grid-auto-flow: row;
    grid-template-areas:
      ". ."
      ". .";
}

</style>
