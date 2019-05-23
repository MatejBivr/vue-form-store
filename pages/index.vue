<template>
  <section class="container">
    <div>
      <h1 class="title">
        vue-form-store
      </h1>
      <h2 class="subtitle">
        My phenomenal Nuxt.js project
      </h2>
      <div class="row">
        <div class="col">
          <QuestionForm />
          <List />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import List from '~/components/List.vue'
import QuestionForm from '~/components/Question-form.vue'

export default {
  components: {
    List,
    QuestionForm
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-align: center;
}

</style>
