<template>
	<div>
		<h2>Summary</h2>
	  <ul class="">
	    <li v-for="(question, index) in questions" :key="index" class="list-group">
	      <div class="question list-group-item">
	      	<p class="question__content">{{question.query}}</p>
	      	<div class="question__footer d-flex">
	      		<span>{{ question.name }}</span>
	      		<span>{{ question.surname }}</span>
	      		<span>{{ question.email }}</span>
	      	</div>
	      </div>
	    </li>
	  </ul>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
	  computed: mapGetters({
	    questions: 'questions/get',
	  }),
	  methods: {
	  }
	}
</script>

<style scoped>
	.question__footer span {
		margin-right: 10px;
	}
</style>