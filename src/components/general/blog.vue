<template>  
  <div class="blog-home1 spacer bg-white">
      <div class="container">
          <!-- Row  -->
          <div class="row justify-content-center">
              <!-- Column -->
                  <div class="col-md-8 text-center">
                    <h1 class="op-5 title">Fique por dentro</h1>
                    <h6 class="op-5 subtitle">Veja as publicações mis recentes do blog da TecnoSpeed</h6>
                  </div>
              <!-- Column -->

              <!-- Column -->
          </div>
          <div class="row m-t-40">
              <!-- Column -->
              <div class="col-md-4" v-for="post of posts" :key="post.id">
                  <div class="card card-shadow" data-aos="flip-left" data-aos-duration="1200">
                      <a href="#"><img class="card-img-top" v-bind:src="post.imagem" alt="wrappixel kit"></a>
                      <div class="p-30">
                          <div class="d-flex no-block font-14">
                              <a href="#" :style="squadColor">{{post.produto}}</a>
                              <span class="ml-auto">{{post.data}}</span>
                          </div>    
                          <h5 class="op-8 font-medium m-t-20"><a href="#" class="link">{{post.titulo}}</a></h5>
                          
                      </div>
                  </div>
              </div>
              <!-- Column -->
          </div>
      </div>
  </div>
</template>
<script>
  export default {
    props: {
        cor: String
    },
    data() {
      return {
        posts: []
      }
    },
    created() {
      this.posts = [
        { id: 1, produto: 'eSocial', titulo: 'Todos os Eventos não períodicos do eSocial', data: 'Sept 18, 2017', imagem: 'http://via.placeholder.com/350x234' },
        { id: 2, produto: 'NFCe', titulo: 'Sefaz do Paraná realizará manutenção nos servidores', data: 'Sept 18, 2017', imagem: 'http://via.placeholder.com/350x234' },
        { id: 3, produto: 'NFe', titulo: 'O que mudou na NT 2017.001 versão 1.20', data: 'Sept 18, 2017', imagem: 'http://via.placeholder.com/350x234' }
      ]
    },
    computed: {
        squadColor() {
            return `color: ${this.cor}; !important`
        }
    }
  }
</script>

<style>
.blog-home1 .title {
        line-height: 30px;
}
</style>
