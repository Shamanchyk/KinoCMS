<template>
    <div class="login-box">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="/" class="h1">KinoCMS</a>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Sign in to start your session</p>
          <form action="/sign" method="post" @submit.prevent="login">
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email" v-model="email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password" v-model="password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember">
                  <label for="remember">
                    Remember Me
                  </label>
                </div>
              </div>

              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              </div>

            </div>
          </form>
          <p class="mb-0">
            <a href="/reg" class="text-center">Register a new membership</a>
          </p>
        </div>

      </div>

    </div>
</template>


<script>

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/index.js'
import router from '@/router'

export default {
  
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
      console.log(auth.currentUser.displayName)
      router.push('/')
    }
  }
  
};

</script>


<style>

[class*=icheck-] {
    display: flex;
    min-height: 22px;
    margin-top: 6px!important;
    margin-bottom: 6px!important;
    padding-left: 0;
}

[class*=icheck-]>input:first-child {
    position: absolute!important;
    opacity: 0;
    margin: 0;
}

[class*=icheck-]>label {
    padding-left: 29px!important;
    min-height: 22px;
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin-bottom: 0;
    font-weight: 400;
    cursor: pointer;
}

[class*=icheck-]>input:first-child+label::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 22px;
    height: 22px;
    border: 1px solid #D3CFC8;
    border-radius: 0;
    margin-left: -29px;
}

[class*=icheck-]>input:first-child:checked+label::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 7px;
    height: 10px;
    border: 2px solid #fff;
    border-left: none;
    border-top: none;
    transform: translate(7.75px,4.5px) rotate(45deg);
    -ms-transform: translate(7.75px,4.5px) rotate(45deg);
}

.mb-0{
  margin-top: 20px;
}

</style>