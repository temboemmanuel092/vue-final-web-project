<template>
    <div>
        <h1> services</h1>
        

    </div>

    <div class="card">
        <div id="card-1">
            <article class="card">
                <header>
                    <h2 id="header" >
                        Assisted purchasing
                    </h2>
                </header>
                <img class="img-s1" src="https://cdn.pixabay.com/photo/2017/01/31/17/00/buy-2025564__340.png" alt="">
                <div class="content">
                    <p>
                        Make a request of the product you would like us to purchase for you or share the link.
                    </p>
                </div>
            </article>
        </div>
        <div id="card-2">
            <article class="card">
                <header>
                    <h2 id="header" >
                        Package consolidation
                    </h2>
                </header>
                <img class="img-s2" src="https://cdn.pixabay.com/photo/2017/07/08/10/44/parcels-2484036__340.png" alt="">
                <div class="content">
                    <p>
                        Make a request of the product you would like us to purchase for you or share the link.
                    </p>
                </div>
            </article>
        </div>
        <div id="card-3">
            <article class="card">
                <header>
                    <h2 id="header" >
                        Delivering to your home
                    </h2>
                </header>
                <img class="img-s3" src="https://cdn.pixabay.com/photo/2015/11/06/12/52/roller-1027350__340.jpg" alt="">
                <div class="content">
                    <p>
                        Make a request of the product you would like us to purchase for you or share the link.
                    </p>
                </div>
            </article>
        </div>
        <div id="card-4">
            <article class="card">
                <header>
                    <h2 id="header">
                        Pricing
                    </h2>
                </header>
                <img class="img-s4" src="https://cdn.pixabay.com/photo/2015/04/04/19/08/ten-706887__340.jpg" alt="">
                <div class="content">
                    <p>
                        Make a request of the product you would like us to purchase for you or share the link.
                    </p>
                </div>
            </article>
        </div>
    </div>
    
</template>

<script></script>


<style scoped>
    h1 {
        text-align: center;
        border: 10px solid;
    }
.card {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit,300px);
    place-content: center;
    grid-gap: 20px;

}
#header {

    text-align: center;
}
.img-s1 {
    height: 250px;
    width: 250px;
    margin-left: 50px;
    
}
.img-s2 {
    height: 250px;
    width: 250px;
    margin-left: 50px;
}
.img-s3 {
    height: 250px;
    width: 250px;
    margin-left: 30px;
}
.img-s4 {
    height: 250px;
    width: 250px;
    margin-left: 30px;
}
#card-1 {
    border: 3px solid black;
}
#card-2 {
    border: 3px solid black;
}
#card-3 {
    border: 3px solid black;
}  
#card-4 {
    border: 3px solid black;
}

</style>