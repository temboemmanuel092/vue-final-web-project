<template>
  <div>
    <h1>Sign up here</h1>
    <form action="" class="login-form">
      <div>
        <label for="username"><strong>Email address</strong></label><br>
        <input class="field" type="text" placeholder="enter your email address here"><br>
        <label><strong>Password</strong></label><br>
        <input class="field" type="password" placeholder="enter your password"><br>
        <button class="btn">Sign up</button>
        <button class="btn-2">Sign in</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
  .login-form {
    font-size: 26px;
    margin: 20px;
    padding: 20px;
  }
  .login-form {
    border: 5px solid black;
    border-radius: 10px solid black;
  }
  .field {
    width: 30%;
    height: 30px;
    border: 3px solid black;
  }
  button {
    font-size: 26px;
    margin-top: 20px;

  }
  .login-form {
    padding-left: 20px;
    
  }
  .btn-2 {
    margin-left: 210px;
  }


</style>