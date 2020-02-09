<template>
  <div id="app">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>
        <Content />
        <Content />
        <div class="wrap">
          <a-table :columns="columns"
                   :dataSource="data"
                   :scroll="{ x: 1200 }"
                   :pagination="false"
                   bordered
          >
           <a slot="action" href="javascript:;">action</a>
        </a-table>
        </div>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
    <!-- <a-layout>
      <a-layout-header>
        <Header />
      </a-layout-header>
      <a-layout>
        <a-layout-sider>Sider</a-layout-sider>
        <a-layout-content>
          <Content />
          <Content />
        </a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout> -->
  </div>
</template>

<script>
// import Header from './components/Header.vue';
import Content from './components/Content.vue';

const columns = [
  {
    title: 'Full Name', width: 100, dataIndex: 'name', key: 'name',
  },
  {
    title: 'Age', width: 100, dataIndex: 'age', key: 'age',
  },
  {
    title: 'Column 1', dataIndex: 'address', key: '1', width: 100,
  },
  {
    title: 'Column 2', dataIndex: 'address', key: '2', width: 300,
  },
  {
    title: 'Column 3', dataIndex: 'address', key: '3', width: 100,
  },
  {
    title: 'Column 4', dataIndex: 'address', key: '4', width: 100,
  },
  {
    title: 'Column 5', dataIndex: 'address', key: '5', width: 100,
  },
  {
    title: 'Column 6', dataIndex: 'address', key: '6', width: 100,
  },
  {
    title: 'Column 7', dataIndex: 'address', key: '7', width: 100,
  },
];

const data = [];

for (let i = 0; i < 30; i += 1) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

export default {
  name: 'app',
  components: {
    // Header,
    Content,
  },
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>

<style lang="scss" scoped>
  .wrap {
    max-width: 1200px;
  }
</style>
