
<script>
import { Bubble, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
  name: 'BubbleChart',
  extends: Bubble,
  mixins: [ reactiveProp ],
  props: [ 'options' ],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
}
</script>

<style scoped>

</style>