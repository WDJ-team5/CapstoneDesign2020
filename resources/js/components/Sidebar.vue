<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Interface</div>

          <router-link to="/audition" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>오디션</span>
          </router-link>

          <router-link to="/lecture" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>댄스강좌</span>
          </router-link>

          <router-link to="/categories" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>카테고리</span>
          </router-link>

          <router-link to="/userlist" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>사용자 관리</span>
          </router-link>
          
        </div>
      </div>
      
      <!-- 사이드메뉴 푸터 -->
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>Start Bootstrap
      </div>
    </nav>
  </div>
</template>