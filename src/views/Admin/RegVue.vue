<template>
  <div class="register-page">
    <div class="register-box">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="/" class="h1">KinoCMS</a>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Register a new membership</p>
          <form action="/reg" method="post" @submit.prevent="signUp">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Full name" v-model="username"/>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email" v-model="email"/>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div v-show="error" class="error">{{ error }}</div>
            <div class="row">
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Register
                </button>
              </div>
            </div>
          </form>
          <a href="/sign" class="text-center mb-0"
            >I already have a membership</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/firebase/index.js'
import router from '@/router'

export default {

  data() {
    return {
      username: '',
      email:    '',
      password: ''
    }
  },
  methods: {
    signUp() {
      // register and login user
      createUserWithEmailAndPassword(auth,this.email,this.password)
      router.push('/')
      .then(() => {

        // update 'displayName'
        updateProfile(auth.currentUser, {
          displayName: this.username
        })
        .then(() => {
          console.log(auth.currentUser.displayName)
        })

      })
    }
  }

};


  // setup(){
  //   const register_form = ref({})
  //   const store = useStore()

  //   const register = () => {
  //     store.dispatch('register', register_form.value)
  //   }

  //   return{
  //     register_form,
  //     register
  //   }
  // },
  // data(){
  //   return{
  //     fullName: '',
  //     email: '',
  //     password: '',
  //     error: null,
  //     errorMsg: '',
  //   }
  // },

  // methods: {
  //   async register() {
  //     if(this.fullName !== '' &&
  //     this.email !== '' &&
  //     this.password !== ''){
  //       this.error = false
  //       this.errorMsg = ''
  //       const createUser = await createUserWithEmailAndPassword(getAuth(), this.email, this.password)
  //       const result = await createUser
  //       const dataBase = firebase.database().ref(`users/${uid}/info`).set({
  //         fullName: this.fullName,
  //         email: this.email,
  //       })
  //       this.$router.push('/')
  //       return
  //     }
  //     this.error = true
  //     this.errorMsg = 'Перевірте введенні дані!'
  //     return
  //    },
    
  // },

//}
</script>

<style lang="scss">

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

.mb-0 {
    display: block;
    margin-top: 20px;
}
.error{
  font-size: 12px;
  margin: 10px 0;
  color: red;
}

</style>
