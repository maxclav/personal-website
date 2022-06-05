<template>
  <header class="resume-header pt-4 pt-md-0">
    <div class="media flex-column flex-md-row">
      <img class="mr-3 img-fluid picture mx-auto" src="../../../assets/images/max4.jpg" alt="">
      <div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
          <div class="primary-info">
              <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">
                Maxime Clavel, {{ dictionary['title'][currentLanguage] }}
              </h1>
              <div class="title">
                {{ dictionary['job']['title'][currentLanguage] }}
                ({{ dictionary['job']['place'][currentLanguage] }})
              </div>
              <div class="subtitle  mb-3" style="font-style: italic">
                {{ dictionary['codeToCoffee'][currentLanguage] }} ☕️
              </div>
              <ul class="list-unstyled">
                <!--
                <li>
                  <a href="tel:819-616-7975" style="color:rgb(175,175,175) !important;">
                    <i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>
                    {{ phoneNumber }}
                  </a>
                </li>
                -->
                <li>
                  <a href="mailto:maximeleclavel@gmail.com" target="_top" style="color:rgb(175,175,175) !important;">
                    <i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>
                    {{ email }}
                  </a>
                </li>
              </ul>
          </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: 'ResumeHeader',

    data: () => ({
      phoneNumber: "(819) 616-7975",
      email: "maximeleclavel@gmail.com"
    }),

    computed: {
      ...mapGetters({
        'currentLanguage': 'currentLanguage',
        'dictionary': 'dictionary'
      }),
    },
  }
</script>