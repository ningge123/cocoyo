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
                  <tr>
                    <td>Create a mobile app</td>
                    <td class="align-middle">
                      <div
                        class="progress"
                        data-height="4"
                        data-toggle="tooltip"
                        title
                        data-original-title="100%"
                        style="height: 4px;"
                      >
                        <div class="progress-bar bg-success" data-width="100" style="width: 100px;"></div>
                      </div>
                    </td>
                    <td>
                      <img
                        alt="image"
                        src="assets/img/avatar/avatar-5.png"
                        class="rounded-circle"
                        width="35"
                        data-toggle="tooltip"
                        title
                        data-original-title="Wildan Ahdian"
                      />
                    </td>
                    <td>2018-01-20</td>
                    <td>
                      <div class="badge badge-success">Completed</div>
                    </td>
                    <td>
                      <a href="#" class="btn btn-secondary">Detail</a>
                    </td>
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
      //   this.$http.get("files").then(({ data }) => {
      //     this.files = data;
      //   });
    }
  },
  mounted() {
    this.loadCloud();
  }
};
</script>
