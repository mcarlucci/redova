import Reflux from 'reflux'
import StateMixin from 'reflux-state-mixin'

export default Reflux.createStore({
  mixins: [StateMixin.store],
  getInitialState() {      //that's a must!
    return{
      dogs:5,
      cats:3
    }
  }
})
