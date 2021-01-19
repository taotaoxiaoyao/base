import { get_ppcgGetSuppilerId } from '@/api/register-api'
import { mapGetters } from 'vuex'
const registerMixin = {
  data() {
    return {
      suppilerId: ''
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    // 获取供应商id
    async getSuppilerId() {
      try {
        const params = {
          createAt: this.user.createAt
        }
        this.suppilerId = (await get_ppcgGetSuppilerId(params)).data || ''
      } catch (e) {
        console.log(e)
        this.suppilerId = ''
      }
    },
    onCancel(formName) {
      this.$refs[formName].resetFields()
    },
    onNext() {
      console.log('onNext: ')
    }
  }
}
export default registerMixin
