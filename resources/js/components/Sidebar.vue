<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Core</div>
          <a class="nav-link" href="index.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>Dashboard
          </a>

          <div class="sb-sidenav-menu-heading">Interface</div>
          <router-link to="/" class="nav-link">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>대시보드</span>
          </router-link>

          <router-link to="/categories" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>카테고리</span>
          </router-link>
          
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
           
          </a>
          <div
            class="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-parent="#sidenavAccordion"
          >
            
          </div>
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-book-open"></i>
            </div>Pages
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapsePages"
            aria-labelledby="headingTwo"
            data-parent="#sidenavAccordion"
          ></div>

          <!-- 사이드 메뉴 헤더 -->
          <div class="sb-sidenav-menu-heading">Addons</div>
          <a class="nav-link" href="charts.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-chart-area"></i>
            </div>Charts
          </a>
          <a class="nav-link" href="tables.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-table"></i>
            </div>Tables
          </a>
        </div>
      </div>
      
      <!-- 사이드메뉴 푸터 -->
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>Start Bootstrap
      </div>
    </nav>
  </div>
</template>