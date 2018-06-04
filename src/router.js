import Vue from 'vue'
import Router from 'vue-router'

// Static Pages
import Home from '@/views/Home.vue'
import Team from '@/views/Team.vue'
import News from '@/views/News.vue'
import Explore from '@/views/Explore.vue'
import PatientResources from '@/views/PatientResources.vue'

// Popups
import Brocas from '@/views/regions/Brocas.vue'
import MotorCortex from '@/views/regions/MotorCortex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',     name: 'Home', component: Home, meta: { side: 'left' } },
    { path: '/team', name: 'Team', component: Team, meta: { side: 'full' } },
    { path: '/news', name: 'News', component: News, meta: { side: 'full' } },
    { path: '/explore', name: 'Explore', component: Explore, meta: { side: 'full' } },
    { path: '/resources-for-patients', name: 'PatientResources', component: PatientResources, meta: { side: 'full' } },

    { path: '/regions/brocas', name: 'Brocas', component: Brocas, meta: { side: 'right' } },
    { path: '/regions/motor-cortex', name: 'MotorCortex', component: MotorCortex, meta: { side: 'left' } },
  ]
})
