<template>
  <header-page></header-page>
  <div style="width: 100%; height: 60vh">
    <GMapMap
      map-type-id="terrain"
      style="width: 100%; height: relative"
      :center="center"
      :zoom="7"
  >
  <GMapMarker
      v-for="(m, index) in livemap_byairtype"
      :key="index"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      :icon="chooseMarker(m.result.status)"
      @click="openMarker(m.location_id)"
    >
    <GMapInfoWindow
      :opened="openedMarkerID === m.location_id"
      >
      <div class="container" style="width:300px" :style="'color:'+ m.result.color">
      <div class="row">
        <div class="col-sm-6" style="text-align:left; font-size:16px; font-weight: bold">
          {{m.title}}
          <br>
          {{m.code}}
        </div>
        <div class="col-sm-6" style="font-size:16px; font-weight: bold;">
          AQI
          <br>
          {{m.result.qty}}
        </div>
        
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <span v-html="m.result.text"></span>
        </div>
      </div>
    </div>
      </GMapInfoWindow>
    </GMapMarker>
  </GMapMap>


  </div>
 
  <div class="index-container">
          <div class="index-item">
            <div class="label-item">ល្អណាស់</div>
            <div class="color-item" style="background-color: blue;"></div>
          </div>
          <div class="index-item">
            <div class="label-item">ល្អ</div>
            <div class="color-item" style="background-color: green;"></div>
          </div>
          <div class="index-item">
            <div class="label-item">ធម្យម(ការបំពុលកម្រិតស្រាល)</div>
            <div class="color-item" style="background-color: yellow;"></div>  
          </div> 
          <div class="index-item">
            <div class="label-item">បង្គួរ(ការបំពុលមធ្យម)</div>
            <div class="color-item" style="background-color: orange;"></div>
          </div>
          <div class="index-item">
            <div class="label-item">ខ្ពស់(ការបំពុលខ្លាំង)</div>
            <div class="color-item" style="background-color: red;"></div>
          </div>
          <div class="index-item">
            <div class="label-item">ខ្ពស់ខ្លាំង(ការបំពុលធ្ងន់ធ្ងរ)</div>
            <div class="color-item" style="background-color: purple;"></div>
          </div>
  </div>
    <!-- <GoogleMap
    api-key="AIzaSyDvyOF88aHMTHk4unuINCvxhqlfI1Fxje8"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="7"
    >

      <Marker 
      :options="{ position: {lat:10.7433000, lng:103.6200000}, icon: {url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'} }" 
      
      />
      <InfoWindow
        :opened="true"
      >
        <div>I am in info window <MyComponent/>
        </div>
      </InfoWindow>

    </GoogleMap> -->

  
  <!-- <div class="container">
  <h1><fas icon="chevron-left"></fas></h1>
  <div class="row">
    <div class="col-sm-6" style="background-color:yellow;">
      <p>Lorem ipsum...</p>
    </div>
    <div class="col-sm-6" style="background-color:pink;">
      <p>{{config.apiurl}}</p>
    </div>
  </div>
</div> -->
<!-- <line-chart :data="{'2021-01-01': 11, '2021-01-03': 6, '2021-01-02': 5}" height="100px"></line-chart> -->

<footer-page></footer-page>
</template>

<script>
import { defineComponent } from 'vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default defineComponent({
  components: {
    "header-page": Header,
    "footer-page": Footer,
  },
    setup() {
        const center = { lat: 12.562108, lng: 104.888535 };
        return { center };
    },
    data() {
        return {
            appjs: window.appjs,
            livemap: JSON.parse(localStorage.getItem("livemap")),
            location: JSON.parse(localStorage.getItem("location")),
            livemap_byairtype: [],
            openedMarkerID: null,
        };
    },
    computed: {
        getlang() {
            return this.appjs.getlang();
            //return this.$store.state.getlang;
        },
        // livemap() {
        //   return this.$store.state.livemap;
        // },
        df_airtype() {
            return this.$store.state.df_airtype;
        },
    },
    methods: {
        openMarker(id) {
            this.openedMarkerID = id;
        },
        chooseMarker(status) {
            if (status == 1) {
                return this.config.apiurl + "/resources/filelibrary/blue.png";
            }
            else if (status == 2) {
                return this.config.apiurl + "/resources/filelibrary/green.png";
            }
            else if (status == 3) {
                return this.config.apiurl + "/resources/filelibrary/yellow.png";
            }
            else if (status == 4) {
                return this.config.apiurl + "/resources/filelibrary/orang.png";
            }
            else if (status == 5) {
                return this.config.apiurl + "/resources/filelibrary/red.png";
            }
            else if (status == 6) {
                return this.config.apiurl + "/resources/filelibrary/voilet.png";
            }
            else {
                return this.config.apiurl + "/resources/filelibrary/voilet.png";
            }
        }
    },
    mounted() {
        //console.log(this.livemap);
        if (this.livemap.length > 0) {
            this.livemap_byairtype = [];
            let that = this;
            this.livemap.forEach(function (arrayItem) {
                //console.log(arrayItem.result.status);
                let latlong = arrayItem.latlong;
                let position = {};
                if (latlong.length > 0) {
                    let latlong_array = latlong.split(",");
                    position = { lat: parseFloat(latlong_array[0]), lng: parseFloat(latlong_array[1]) };
                }
                else {
                    position = { lat: 10.7433, lng: 103.62 };
                }
                that.livemap_byairtype.push({
                    location_id: arrayItem.location_id,
                    title: arrayItem.title,
                    code: arrayItem.code,
                    avg_qty: 0,
                    position,
                    result: arrayItem.result
                });
            });
        }
    },
  
})


//https://sites.google.com/site/gmapsdevelopment/
//https://vue-map.netlify.app/components/marker.html
//https://www.npmjs.com/package/vue-echarts
</script>

<style scoped>
.vue-map-container{
  height: 100%;
}

.index-container {
  display: flex;
  width: 100%;
  background-color: #fff;
  margin: 10px 0px;
}

.index-item {
  display: flex;
  flex-direction: column;
  color: black;
  text-align: center;
  flex-grow:1;
}

.label-item {
  flex-grow:1;
  font-size: 14px;
}
.color-item {
  flex-grow:0;
  height: 5px;
}
</style>