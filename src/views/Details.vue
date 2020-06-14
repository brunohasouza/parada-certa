<template>
  <main>
    <div class="details__button">
      <v-btn color="deep-orange" large depressed dark>Comprar</v-btn>
    </div>
    <div class="details__carousel">
      <v-carousel
        height="160"
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="slide"
            height="100%"
          >
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="details__info">
      <h1 class="text-h6 font-weight-bold">Quarto aconchegante com ótima vista</h1>
      <p class="text-subtitle-1">Rua das Pedras Rachadas, 152 - São Paulo</p>
      <div class="details__info--tags">
          <span class="details__info--distance blue-grey lighten-4 text--secondary">5Km de você</span>
          <span class="details__info--gender text--secondary light-green lighten-2">Para Homens</span>
      </div>
      <div class="details__info--convenient">
        <p class="text-caption text--secondary">{{ convenient.join('-') }}</p>
      </div>
      <div class="details__info--price">
        <p class="text-caption text-end">Cartão e Dinheiro</p>
        <div class="details__info--value">
          <span class="details__info--dot"></span>
          <span class="font-weight-bold text-h6">R$ 25</span>
        </div>
      </div>
      <v-divider />
      <div class="details__comfort">
        <h1 class="text-h6 font-weight-bold">Comodidades</h1>
        <div class="details__comfort--list">
          <div class="details__comfort--element" v-for="comfort in filteredComfortList" :key="comfort.icon">
            <v-icon color="light-green lighten-2" large>{{ comfort.icon }}</v-icon>
            <span>{{ comfort.label }}</span>
          </div>
        </div>
      </div>
      <v-divider />
      <div class="details__comments">
        <div class="details__comments--rating">
          <v-icon color="light-green lighten-2">star</v-icon>
          <span class="text-h6">{{ stars }}</span>
          <span class="text--secondary text-h6">({{ comments.length }} Comentários)</span>
        </div>
        <div class="details__comments--list">
          <comment-item 
            v-for="(comment, i) in comments"
            :key="i"
            :author="comment.user"
            :text='comment.coment'
          />
        </div>
      </div>
      <v-divider />
      <div class="details__location">
        <h1 class="text-h6 font-weight-bold">Localização</h1>
        <div class="details__location--map">
          <!-- inserir mapa aqui -->
        </div>
      </div>
      <v-divider />
      <div class="details__owner">
        <div class="details__owner--header">
          <v-icon size="3rem" color="blue-grey lighten-4">account_circle</v-icon>
          <h1 class="text-h6 font-weight-bold">Oferecido por Edinaldo</h1>
        </div>
        <div class="details__owner--info">
          <v-icon color="light-green lighten-2">star</v-icon>
          <span>16 avaliações</span>
          <span class="details__owner--verified">Identidade verificada</span>
        </div>
        <div class="details__owner--description">
          <p>Sou educado e responsável. Gosto de conhecer outras pessoas e sobre outras culturas.</p>
        </div>
        <div class="details__owner--contact">
          <p>Contato (00) 00000-0000</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CommentItem from './../components/details/CommentItem'
export default {
  components: {
    CommentItem
  },

  computed: {
    filteredComfortList: function() {
      const attractives = {
        "securityCam": true,
        "breakfast": false,
        "dinner": true,
        "bathroom": true,
        "wifi": false,
        "tv": true,
        "fan": true
      }

      return this.comfortList.filter(c => attractives[c.key])
    }
  },
  data() {
    return {
      slides: [
        '#FF0',
        '#F0F',
        '#0FF',
        '#F00',
        '#0F0',
        '#00F'
      ],
      convenient: ['Cama', 'Banheiro', 'Cozinha'],
      comfortList: [
        { label: 'Jantar', icon: 'restaurant', key: 'dinner'},
        { label: 'Ventilador', icon: 'toys', key: 'fan' },
        { label: 'WiFi', icon: 'wifi', key: 'wifi' },
        { label: 'Vigilância', icon: 'security', key: 'securityCam' },
        { label: 'TV', icon: 'tv' , key: 'tv' },
        { label: 'Permite Caminhão', icon: 'directions_bus', key: 'truckStation' },
        { label: 'Higiene Pessoal', icon: 'wash', key: 'bathroom' },
      ],
      comments: [
        {
          user:  "Jorge Viana",
          coment: "Obrigado Ariel! Super indico. Abs."
        },
        {
          user:  "Carla",
          coment: "Gostei demais do lugar, com certeza voltaria de novo"
        }
      ],
      stars: 3.56,
    }
  }
}
</script>

<style>

</style>