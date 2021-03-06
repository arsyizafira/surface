import Api from '@/api/api'

export default {
  Get() {
    return Api().get('floor/')
  },
  GetActive() {
    return Api().get('floor?active=1')
  },
  Add(data) {
    return Api().post('floor/', data)
  },
  Delete(id) {
    return Api().delete('floor/' + id)
  },
  Detail(id) {
    return Api().get('floor/' + id)
  },
  Update(id, data) {
    return Api().put('floor/' + id, data)
  }
}