<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card
          class="card-post q-mb-md"
          flat
          bordered
          v-for="post in posts"
          :key="post.id"
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/kirby.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>jakeHacker99</q-item-label>
              <q-item-label caption> {{ post.location }} </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />
          <q-img :src="post.imageUrl"></q-img>
          <q-card-section>
            <div class="text-h6">{{ post.caption }}</div>
            <div class="tex-caption text-grey">{{ post.date | niceDate }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="48px">
              <img src="../assets/kirby.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">jakob yaro</q-item-label>
            <q-item-label caption> jakeHacker99 </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from "quasar";
export default {
  name: "PageHome",
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: "BurgerMansion får finbesök",
          date: 1614432507666,
          location: "Bandhagen, Stockholm",
          imageUrl:
            "https://lh3.googleusercontent.com/p/AF1QipMPUKKc8JZgxhGLYDMg9q3DrG3zLDdbsHN3sZb1=s1280-p-no-v1",
        },
        {
          id: 2,
          caption: "Jag blev hungrig igen, en burgare räckte inte",
          date: 1614433926729,
          location: "Bandhagen, Stockholm",
          imageUrl:
            "https://lh3.googleusercontent.com/uH1aZXNsLSD4TjX6-rIK4hY-Mn1xmylzoq4LQ0J4PtkUQ4NfhUQ66EurU91Y00jS9n9pQeBn-4iFhy3s=w768-h768-n-o-v1",
        },
        {
          id: 3,
          caption: "BurgerMansion vs jakeHacker99 rond 3",
          date: 1614436802223,
          location: "Bandhagen, Stockholm",
          imageUrl:
            "https://instagram.fiev22-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/91497792_246534196525942_7843844311306025019_n.jpg?_nc_ht=instagram.fiev22-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=KD3r2KoYP0QAX-eUsHf&tp=1&oh=85f544860ba67fcc701ae4cff0e2d849&oe=604388A9",
        },
      ],
    };
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "D MMM H:mm");
    },
  },
};
</script>

<style lang="sass">
.card-post
  .q-img
    min-height: 200px
</style>
