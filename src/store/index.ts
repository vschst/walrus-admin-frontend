import Vue from 'vue'
import * as Vuex from 'vuex'
import { createStore, Module } from 'vuex-smart-module'
import { auth } from './modules/auth'
import { profile } from "./modules/profile";

Vue.use(Vuex);

const root = new Module({
    modules: {
        auth,
        profile
    }
})

export default createStore(root)