<template>
  <div>
    <body>
      <img src="../images/shopping.png" alt="" class="img-1">
      <img src="../images/delivery.png" alt="" class="img-2">
      <img src="../images/watch.png" alt="" class="img-3">
      <img src="../images/womenshopping.png" alt="" class="img-4">
    </body>
    <ul class="container">
      <li>
        <p> Are you interested in buying anything from USA?</p>
        <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?size=626&ext=jpg&ga=GA1.1.1265284119.1673620517&semt=sph" class="first-img" alt="">
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

.first-img {
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  height: 40%;
  width: 40%;
}

.img-1 {
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  height: 40%;
  width: 40%;
}
.img-2 {
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  height: 40%;
  width: 40%;
}
.img-3 {
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  height: 40%;
  width: 40%;
}
.img-4 {
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  height: 40%;
  width: 40%;
}

</style>
