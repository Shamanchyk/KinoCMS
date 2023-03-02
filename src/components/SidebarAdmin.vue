<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <router-link to="/" class="brand-link">
          <img
            src="/adminlte/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3"
            style="opacity: 0.8"
          />
          <span class="brand-text font-weight-light">KinoCMS</span>
        </router-link>

        <div class="sidebar">

          <!-- <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
              <input
                class="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div class="input-group-append">
                <button class="btn btn-sidebar">
                  <i class="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div> -->

          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li class="nav-item">
                <router-link to="/statis" class="nav-link">
                  <p>
                    Статистика
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to='/baners' class="nav-link">
                  <p>
                    Банера/Слайдери
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link  class="nav-link" to="/films">
                  <p>
                    Фільми
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="/pageFilm" class="nav-link">
                      <p>Сторінка фільма</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/theatres" class="nav-link">
                    <p>Кінотеатри
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="/pageTheatre" class="nav-link">
                      <p>Карточка кінотеатра</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pageHall" class="nav-link">
                      <p>Карточка зала</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/news" class="nav-link">
                    <p>Новини
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="/pageNews" class="nav-link">
                      <p>Сторінка новини</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/shares" class="nav-link">
                    <p>Акції
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="/pageShares" class="nav-link">
                      <p>Сторінка акції</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/pages" class="nav-link">
                    <p>Сторінки
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="/pageHolovna" class="nav-link">
                      <p>Головна сторінка</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pageOTheatre" class="nav-link">
                      <p>Про кінотеатр</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pageBar" class="nav-link">
                      <p>Кафе - Бар</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pageVip" class="nav-link">
                      <p>Vip-зал</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pageAdvertising" class="nav-link">
                      <p>Реклама</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pageChildren" class="nav-link">
                      <p>Дитяча кімната</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pageContact" class="nav-link">
                      <p>Контакти</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/users" class="nav-link">
                    <p>Користувачі
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="/pageUsers" class="nav-link">
                      <p>Редагувати користувача</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/mailing" class="nav-link">
                    <p>Розсилання
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="/mailingUser" class="nav-link">
                      <p>Вибір користувача</p>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

      </aside>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">

.brand-text{
    display: block;
    text-align: left;
}

.sidebar {
    padding-top: 20px;
}


.nav-link{
    text-align: left;
}
    
</style>