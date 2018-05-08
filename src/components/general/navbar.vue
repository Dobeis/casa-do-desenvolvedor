<template>
  <div class="topbar">
      <div class="header5">
          <div class="container po-relative">
              <nav class="navbar navbar-expand-lg h5-nav-bar">
                  <a href="javascript:void(0)" class="navbar-brand"><img src="../../assets/images/home/logo.png" alt="wrapkit"/></a>
                  <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#h5-info" aria-controls="h4-info" aria-expanded="false" aria-label="Toggle navigation"><span class="ti-menu"></span></button>
                  <div class="collapse navbar-collapse text-uppercase" id="h5-info">
                      <ul class="navbar-nav ml-auto">
                          <li class="nav-item"><a href="javascript:void(0)" class="nav-link">Documentação fiscal</a></li>
                          <li class="nav-item"><a href="javascript:void(0)" class="nav-link">Gestão Financeira</a></li>
                          <li class="nav-item"><a href="javascript:void(0)" class="nav-link">Certificação digital</a></li>
                          <li class="nav-item"><a href="javascript:void(0)" class="nav-link">Mobile</a></li>
                          <li class="nav-item"><a href="javascript:void(0)" class="nav-link">Capacitação</a></li>
                          <li class="nav-item"><a href="javascript:void(0)" class="nav-link">Suporte</a></li>
                          <li class="nav-item"><a href="javascript:void(0)" class="nav-link">Institucional</a></li>
                      </ul>
                  </div>
              </nav>
          </div>
      </div>
  </div>
</template>

<style>
.h5-nav-bar {
  padding: 25px 15px;
  position: relative;
  width: 100%;
  left: 0px;
}
.h5-nav-bar .navbar-brand {
  position: absolute;
}
.h5-nav-bar .navbar-nav .nav-link {
  color: #ffffff;
  font-size: 10px;
  padding: 20px 10px;
  font-weight: 500;
}
.h5-nav-bar .navbar-nav .nav-item:hover .nav-link {
  color: #ff4d7e;
}
.h5-nav-bar .rounded-button {
  border-radius: 60px;
  padding: 10px 30px;
  display: inline-block;
  border: 2px solid #ff4d7e;
  position: absolute;
  right: 0px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}
.h5-nav-bar .rounded-button a {
  color: #ffffff;
  font-weight: 500;
}
.h5-nav-bar .rounded-button a:hover {
  color: #ff4d7e;
}

@media (max-width: 1023px) {
  .h5-nav-bar .navbar-brand {
    position: relative;
  }
  .h5-nav-bar .navbar-collapse {
    background: #263238;
    padding: 15px 15px 20px;
    border-radius: 4px;
    -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
    box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
    z-index: 10;
  }
  .h5-nav-bar .rounded-button {
    position: relative;
  }
}
</style>
