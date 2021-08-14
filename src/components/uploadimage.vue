<template>
  <div>
    <div style="max-width:100%">
      <div class="row">
        <div style="max-width:100%">
          <form>
            <div class="form-group d-flex flex-column">
              <div class="d-flex align-center">
                <div class="text-xl mb-5">圖片上傳:</div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple="multiple"
                    @change="previewMultiImage"
                    class="form-control-file"
                    id="my-file"
                    style="width:200px"
                  />
                  <!-- accept="image/*" -- 如只接受影像圖檔（包含 jpg、png、gif 等各種圖檔） -->
                </div>
                <div
                  class="text-center"
                  style="background-color:black;border-radius:20px;color:white;max-width:60px"
                >
                  <button style="font-size:11px; width:60px" @click.prevent="reset">刪除圖檔</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      preview: null,
      image: null,
      preview_list: [],
      image_list: []
    }
  },
  methods: {
    previewMultiImage (event) {
      var input = event.target
      var count = input.files.length
      var index = 0
      if (input.files) {
        while (count--) {
          var reader = new FileReader() // FileReader ==> 用來讀取input type='file' 的file資料
          reader.onload = e => { // onload ==> 當讀取操作成功完成時調用 ==>最後執行
            this.preview_list.push(e.target.result) // 將圖片來源(filereader.result)推進陣列
            console.log(this.preview_list.length)
          }
          this.image_list.push(input.files[index])
          reader.readAsDataURL(input.files[index])
          index++
        }
      }
      console.log(input.files)
      console.log(reader)
      console.log(this.preview_list.length)
      const photo = event.target.files[0]
      this.$emit('photofile', photo)
      console.log(photo)
      // input.files==> 所有 <input> 元素節點的 DOM 物件都擁有 files 屬性（property），此屬性即為 FileList，是一個可藉此存取使用者選取之檔案的類陣列物件。
    },
    reset: function () {
      this.image = null
      this.preview = null
      this.image_list = []
      this.preview_list = []
    }
  }
}
</script>
