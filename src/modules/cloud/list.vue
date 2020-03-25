<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Sortable Table</h4>
            <div class="card-header-action">
              <form>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search" />
                  <div class="input-group-btn">
                    <button class="btn btn-primary">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-striped" id="sortable-table">
                <thead>
                  <tr>
                    <th>文件名</th>
                    <th>Hash</th>
                    <th>大小</th>
                    <th>本地路径</th>
                    <th>上传时间</th>
                  </tr>
                </thead>
                <tbody class="ui-sortable">
                  <tr v-for="file in files">
                    <td>{{ file.name }}/td></td>
                    <td class="align-middle">{{ file.sha }}</td>
                    <td>{{ file.size }}</td>
                    <td>{{ file.location }}</td>
                    <td>{{ file.upload_at }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: []
    };
  },
  methods: {
    loadCloud() {
      this.$http.get("files").then(({ data }) => {
        console.log(data);
        this.files = data;
      });
    }
  },
  mounted() {
    this.loadCloud();
  }
};
</script>
