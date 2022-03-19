import router from '@/router'
import store from '@/store'
import axios from "axios";




let appJs = {
    isNum(val) {
        return !isNaN(val)
    },
    getlang() {
        let translate = localStorage.getItem('translate');
        if (translate == null) {
            router.replace({ path: '/' });
        } else {
            return JSON.parse(translate);
        }

    },

    currentLang() {
        let lang = localStorage.getItem('lang');
        let langKey = 'en';
        if (lang == null) {
            localStorage.setItem('lang', langKey);
        } else {
            langKey = lang;
        }
        return langKey;
    },

    domDecoder(str) {
        let parser = new DOMParser();
        let dom = parser.parseFromString('<!doctype html><body>' + str, 'text/html');
        return dom.body.textContent;
    },
    decoder(str) {
        let textArea = document.createElement('textarea');
        textArea.innerHTML = str;
        return textArea.value;
    },

    scrollTitle(title_container, product_title) {
        let $ = window.$;
        $(document).delegate("." + title_container, "mouseover", function() {
            var title = $(this).find('.' + product_title);
            var canScroll = parseInt(title.width()) - parseInt($(this).width());
            if (canScroll < 0) { canScroll = 0; }
            var moveStr = 'translateX(' + (canScroll * -1) + 'px)';
            title.css("transform", moveStr);
        });

        $(document).delegate("." + title_container, "mouseout", function() {
            var title = $(this).find('.' + product_title);
            title.css("transform", 'translateX(0px)');
        });
    },



    //////// start cart ///////
    containsKey(obj, key) {
        return Object.keys(obj).includes(key);
    },



    sumBy(items) {
        return items.reduce(function(total, item) {

            return parseFloat(total) + parseFloat(item.subqty);
        }, 0);
    },




    async checkOnlineStatus() {
        try {
            const online = await fetch(store.state.apiurl + "/api/internet");
            //const online = await axios.get(store.state.apiurl + '/api/internet');
            return online.status >= 200 && online.status < 300; // either true or false
        } catch (err) {
            return false; // definitely offline
        }


    },



    async getdb(apiurl, host) {
        await axios.get(apiurl + '/storeapi/dbinuse?host=' + host)
            .then(response => {
                console.log('aa', response);
            })
            .catch(error => console.log(error));
    },

    leftPad(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    },

    convertDate(dateString) {
        var p = dateString.split(/\D/g)
        return [p[2], p[1], p[0]].join("-")
    },

    //

    playSound(sound) {
        if (sound) {
            var audio = new Audio(sound);
            audio.play();
        }
    },
    //


}

export default appJs