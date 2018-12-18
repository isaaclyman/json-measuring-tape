<template>
  <div class="json-row-root">
    <div class="current-row" :style="currentRowStyle">
      <button class="button-expand" v-if="input.children" @click="toggleChildren()" :style="{ cursor: showAll ? 'default' : 'pointer' }">
        {{ expandButtonIndicator }}
      </button>
      <span class="row-info">
        {{ input.name }}: {{ displaySize }} ({{ input.percent }}%)
      </span>
    </div>
    <div class="next-row" v-if="input.children" v-show="showChildren || showAll">
      <json-row v-for="item in input.children" :key="item.name" :input="item" :show-all="showAll" :depth="depth + 1"></json-row>
    </div>
  </div>
</template>

<script>
import Rainbow from './rainbow-picker'

export default {
  computed: {
    currentRowStyle () {
      return { backgroundColor: Rainbow(this.depth) }
    },
    displaySize () {
      const size = this.input.size
      if (size < 1000) {
        return `${size}B`
      }

      if (size < 1000 * 1000) {
        const kb = size / 1000
        return `${this.floatToDisplay(kb)}KB`
      }

      if (size < 1000 * 1000 * 1000) {
        const mb = size / (1000 * 1000)
        return `${this.floatToDisplay(mb)}MB`
      }

      if (size < 1000 * 1000 * 1000 * 1000) {
        const gb = size / (1000 * 1000 * 1000)
        return `${this.floatToDisplay(gb)}GB`
      }

      const tb = size / (1000 * 1000 * 1000 * 1000)
      return `${this.floatToDisplay(tb)}TB`
    },
    expandButtonIndicator() {
      return this.showAll ? '>' : this.showChildren ? '-' : '+'
    }
  },
  data () {
    return {
      showChildren: false
    }
  },
  methods: {
    floatToDisplay (num) {
      return Number(num.toFixed(2))
    },
    toggleChildren () {
      if (this.showAll) {
        return
      }

      this.showChildren = !this.showChildren
    }
  },
  name: 'json-row',
  props: {
    input: {
      type: Object,
      required: true
    },
    showAll: {
      type: Boolean,
      required: true
    },
    depth: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

.json-row-root {
  font-family: 'Roboto Mono', monospace;
}

.current-row {
  padding-left: 20px;
  position: relative;
}

.button-expand {
  background-color: transparent;
  border: none;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  left: 0;
  padding: 4px 6px;
  position: absolute;
  top: 0;
}

.next-row {
  margin-left: 20px;
}
</style>
