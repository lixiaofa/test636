import { defineComponent } from 'vue';
import CompA from './CompA.vue';
import { ElInput } from 'element-plus';

const App = defineComponent({
  setup() {
    return () => (
      <CompA
        v-slots={{
          header: ({ value, count }) => {
            console.log('value', value);
            console.log('count', count);
            return <ElInput v-model={value} placeholder="Please input" />;
          }
        }}></CompA>
    );
  }
});

export default App;
