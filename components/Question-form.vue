<template>
  <div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" v-if="!toggleForm" v-on:click="toggle">Ask qestion</button>
    </div>    
    <form @submit.prevent="submit" v-if="toggleForm">
      <div class="form-group row" :class="{ 'form-group--error': $v.name.$error }">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input class="form-control" v-model.trim="$v.name.$model"/>
          <div class="error" v-if="!$v.name.required && $v.name.$dirty">Name is required</div>          
        </div>
      </div>

      <div class="form-group row" :class="{ 'form-group--error': $v.surname.$error }">
        <label for="surname" class="col-sm-2 col-form-label">Surname</label>
        <div class="col-sm-10">
          <input class="form-control" v-model.trim="$v.surname.$model"/>
          <div class="error" v-if="!$v.surname.required && $v.surname.$dirty">Surname is required</div>          
        </div>
      </div>

      <div class="form-group row" :class="{ 'form-group--error': $v.email.$error }">
        <label for="email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input class="form-control" v-model.trim="$v.email.$model"/>
          <div class="error" v-if="$v.email.$error">Valid email is required</div>          
        </div>
      </div>

      <div class="form-group row" :class="{ 'form-group--error': $v.query.$error }">
        <label for="query" class="col-sm-2 col-form-label">Customer query</label>
        <div class="col-sm-10">
          <textarea class="form-control" v-model.trim="$v.query.$model" rows="3" />
        </div>
      </div>

      <button class="btn btn-primary" type="submit" v-if="submitStatus !== 'OK'">Add!</button>

      <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
  </div>
  
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        name: '',
        surname: '',
        email: '',
        query: '',
        submitStatus: null,
        toggleForm: false
      }
    },
    validations: {
      name: {
        required,
      },
      surname: {
        required,
      },
      email: {
        required,
        email
      },
      query: {},
    },

    methods: {
      toggle: function(event) {
        this.toggleForm = true;
      },
      submit() {
        this.$v.$touch()
        console.log(this.$v.email);
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          this.submitStatus = 'OK'

          let formData = {
            name: this.name,
            surname: this.surname,
            email: this.email,
            query: this.query
          }
          this.$store.commit('questions/add',  formData )
        }
      }
    }
  }

</script>

<style scoped>
  .error {
    color: red;
  }

  .form-group--error .form-control {
    border-color: red;
  }
</style>