<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
    </ul>
    <div>{{displayName}}</div>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="far fa-user"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <router-link to="/sign" class="dropdown-item">
                <i class="fas fa-user mr-2"></i> Мій профіль
                </router-link>
                <button @click="signOut" class="dropdown-item">
                <i class="fas fa-sign-out-alt mr-2"></i> Вийти
                </button>
            </div>
        </li>
    </ul>
  </nav>
</template>
<script>

import LoginForm from '@/views/Admin/SignVue'
import RegForm from '@/views/Admin/RegVue'
import { auth } from '../firebase/index.js'
import { signOut } from 'firebase/auth'
import router from '@/router'


export default {
  components: {LoginForm, RegForm},
  data() {
    return {
      displayName: ''
    }
  },
  beforeUpdate() {
    if (auth.currentUser) {
      // set local 'displayName' to user's displayName
      this.displayName = auth.currentUser.displayName
    }
  },
  methods: {
    signOut() {
      router.push('/sign')
    }
  }

}
</script>
<style lang="scss">
.navbar {
  padding: 0.5rem 50px;
}
</style>
