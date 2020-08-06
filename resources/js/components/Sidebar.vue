<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Interface</div>

          <router-link to="/audition" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>オーディション</span>
          </router-link>

          <router-link to="/lecture" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>ダンス講座</span>
          </router-link>

          <router-link to="/categories" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>カテゴリ</span>
          </router-link>

          <router-link to="/userlist" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>ユーザー管理</span>
          </router-link>

          <router-link to="/expert/list" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>専門家のフィードバック</span>
          </router-link>

          <router-link to="/advice/list" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>私のフィードバック活動</span>
          </router-link>

          <router-link to="/mypage/profile" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>マイページ</span>
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