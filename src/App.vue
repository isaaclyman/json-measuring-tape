<template>
  <div class="app-root">
    <h1>📏 Welcome to JSON Measuring Tape.</h1>
    <div>
      Paste your JSON into the box below.
      I'll provide a navigable tree where you can explore each property and sub-property by size.
    </div>
    <div>
      <textarea class="json-textarea" v-model="json" />
    </div>
    <button class="button-calculate" @click="calculate()">Calculate</button>
    <div class="error" v-if="jsonError">
      <div>JSON validation failed. Error:</div>
      <div v-text="jsonError"></div>
    </div>
    <template v-if="calculated">
      <h3>Calculated tree:</h3>
      <input id="show-all-rows" type="checkbox" v-model="showAllRows">
      <label for="show-all-rows">Expand all</label>
      <div class="tree" v-if="calculated">
        <json-row :input="calculated" :show-all="showAllRows" :depth="0"></json-row>
      </div>
    </template>
  </div>
</template>

<script>
import Calculator from './calculator'

import JsonRow from './json-row'

export default {
  components: {
    JsonRow
  },
  data () {
    return {
      calculated: null,
      json: '',
      jsonError: '',
      showAllRows: false
    }
  },
  methods: {
    calculate () {
      this.jsonError = ''

      const json = this.json
      try {
        JSON.parse(json)
      } catch (e) {
        this.jsonError = e.message
        throw e
      }

      this.calculated = new Calculator(json).calculate()
    }
  }
}
</script>

<style scoped>
.app-root {
  margin: 15px;
}

.error {
  border: 1px solid red;
  border-radius: 3px;
  color: darkred;
  font-size: 14px;
  margin: 15px 0;
  max-width: 600px;
  padding: 6px;
}

.json-textarea {
  border-radius: 3px;
  box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.2);
  margin: 15px 0;
  min-height: 200px;
  min-width: 600px;
}

.tree {
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid darkgray;
  border-radius: 3px;
  margin: 15px 0;
  padding: 8px;
}
</style>
