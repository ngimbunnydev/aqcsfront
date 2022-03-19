import { createStore } from 'vuex'
import axios from 'axios'
import { settings } from "@/assets/config.js"
export default createStore({
    state: {
        apiurl: settings.apiurl,
        getlang: null,
        livemap: null,
        airtype: null,
        df_airtype: null,
    },
    mutations: {
        SET_GETLANG(state, getlang) {
            state.getlang = getlang
        },

        SET_LIVEMAP(state, livemap) {
            state.livemap = livemap
        },

        SET_AIRTYPE(state, airtype) {
            state.airtype = airtype;
        },

        SET_DFAIRTYPE(state, df_airtype) {
            state.df_airtype = df_airtype;
        },
    },
    actions: {
        async restApiGetLang({ commit }) {
            let lang = localStorage.getItem('lang');
            let langKey = 'en';
            if (lang == null) {
                localStorage.setItem('lang', langKey);
            } else {
                langKey = lang;
            }

            await axios.get(this.state.apiurl + '/storeapi/gettranslate?lang=' + langKey)
                .then(response => {
                    //console.log(response);
                    commit('SET_GETLANG', response.data)
                    localStorage.setItem('translate', JSON.stringify(response.data));
                })
                .catch(error => console.log(error));
        },
        async restIndexData({ commit }) {
            let lang = localStorage.getItem('lang');
            let langKey = 'en';
            if (lang == null) {
                localStorage.setItem('lang', langKey);
            } else {
                langKey = lang;
            }

            await axios.get(this.state.apiurl + '/storeapi/index?lang=' + langKey)
                .then(response => {
                    //console.log(response.data.livemap);
                    commit('SET_LIVEMAP', response.data.livemap);
                    localStorage.setItem('livemap', JSON.stringify(response.data.livemap));

                    commit('SET_AIRTYPE', response.data.airtype);
                    localStorage.setItem('airtype', JSON.stringify(response.data.airtype));

                    commit('SET_DFAIRTYPE', response.data.df_airtype);


                })
                .catch(error => console.log(error));
        },
    },
    modules: {}
})