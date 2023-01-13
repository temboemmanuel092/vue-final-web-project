<template>
  <div>
    <h1>Sign up here</h1>
    <form action="" class="login-form">
      <label for="username" class="label-1"><strong>Email address</strong></label><br>
      <input type="text" placeholder="enter your email address here"><br>
      <label><strong>Password</strong></label><br>
      <input type="password" placeholder="enter your password"><br>
      <button>Sign up</button>

      <button>Sign in</button>
    </form>
  </div>
</template>

<style scoped>
  .login-form {
    width:100%;
    margin: 20px;
    padding:30px;
    border-radius: 10px;
    background-color: rgb(96, 181, 202);
    align-items: center;
    
  }

  h1 {
    text-align: center;
    color: crimson;
  }
</style>