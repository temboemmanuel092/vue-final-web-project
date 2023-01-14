<template>
    <div class="wrapper">
        <div class="content-div">
            <p class="box-1"> Are you trying to buy anything from the USA?</p>
        
            <p class="box-2"> Do you want us to buy you something from the USA? </p>
        
            <p class="box-3">Do you want it delivered to your place anywhere within Zambia?</p>
        
            <p class="box-4">Tell us what you want and we shall? </p>
        </div>
        <div>
            <h2>WHY YOU SHOULD CHOOSE US</h2>
            <ol class="description-text">
                <li>Experienced and knowledgeable staff: Our team of forwarding experts has a wealth of experience and knowledge in the industry, and they are dedicated to providing the best service to our customers.</li>
                <li>Extensive network of global partners: We have a wide network of partners and agents in various locations around the world, which allows us to offer efficient and cost-effective forwarding services to our customers.</li>
                <li>Advanced technology: We use state-of-the-art technology to track and manage our shipments, ensuring that our customers always have real-time visibility into the status of their goods.</li>
                <li>Tailored solutions: We understand that every customer's needs are different, so we offer customized forwarding solutions that are tailored to meet the specific requirements of each individual client.</li>
                <li>Competitive pricing: We work hard to provide our customers with the best possible prices for our services, and we are constantly looking for ways to reduce costs and pass the savings on to our clients.</li>
            </ol>
        </div>
        <div class="image-section">
            <img class="img-1" src="https://cdn.pixabay.com/photo/2018/03/03/19/15/silhouette-3196354__340.png" alt="" >
            <img src="https://cdn.pixabay.com/photo/2013/07/13/12/34/handbag-159884__340.png" alt="" class="img-4">
            <img src="https://cdn.pixabay.com/photo/2014/04/03/10/00/shopping-cart-309592__340.png" alt="" class="mg-3">
            <img src="https://cdn.pixabay.com/photo/2015/11/06/11/46/internet-1026465__340.jpg" alt="">
            <img src="https://cdn.pixabay.com/photo/2014/04/03/11/54/mannequin-312526__340.png" alt="">

        </div>
    </div>
</template>
<script></script>

<style scoped> 
    .wrapper {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .wrapper .content-div {
        display: grid;
        grid-auto-flow: column;
        border: 2px solid black;
    
    }
    .box-1 {
        background-color: burlywood;
        height: 250px;
        width: 250px;
    }
    p.box-2 {
        background-color: darkcyan;
        height: 250px;
        width: 250px;
    }
    p.box-3 {
        background-color: rgba(154, 247, 103, 0.954);
        height: 250px;
        width: 250px;
    }
    p.box-4 {
        background-color: rgb(234, 72, 85);
        height: 250px;
        width: 250px;
    }
    .content-div {
        margin-top: 40px;
        padding: 20px;
        border-radius: 10px;
    }
    .content-div {
        font-size: 22px;
        font-weight: bold;
        gap: 10px;
    }
    p {
        padding: 20px;
        margin-top: 20px;
        border-radius: 10px;
    }

    .image-section {
        margin-top: 20px;
        padding: 20px;
        border-radius: 10px;
        border: 5px solid black;
        gap: 10px;
    }
    .image-section .img-1 {
       height: 20px;
       width: auto;
    }

    h2 {
        text-align: center;
    }
    .description-text {
        font-size: 20px;
        font-weight: bold;
        text-decoration: brown;
    }
   

</style>