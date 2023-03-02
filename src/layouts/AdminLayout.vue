<template>
  <div class="hold-transition sidebar-mini">
    <div class="wrapper">
      <AdminHeader />

      <SidebarAdmin />

      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>{{  titleAdmin  }}</h1>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <router-view />
        </section>
      </div>

      <footer class="main-footer">
        <strong>Everything will work out for you</strong>
      </footer>

      <aside class="control-sidebar control-sidebar-dark"></aside>
    </div>
  </div>
</template>
<script>

import AdminHeader from '@/components/HeaderVue.vue'
import SidebarAdmin from '@/components/SidebarAdmin.vue'

export default {

    data(){
        return{
            titleAdmin: '',
        }
    },

    components: {
        AdminHeader,
        SidebarAdmin,
    }

};
</script>
<style lang="">

</style>
