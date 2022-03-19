<template>
  <div style="display:flex; justify-content:space-between; padding:20px 100px 20px 100px">
    <div style="">
      <img width="336" src="/cropped-ic-moe-logo.png">
    </div>
    <div style="">
      <img width="336" src="/aqcs_logo.png">
    </div>
  </div>
  <div style="width: 100vw; height: 60vh">
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
<footer id="footer">
        <div class="container" style="padding:10px 100px 10px 100px; color: #fff;">
            <div class="row">

                <div class="col-md-12 col-ms-12">
                    <div class="widget-footer widget-footer-01">
                        <h2 style="font-size: 15px;">ទំនាក់ទំនងក្រសួង</h2>
                        <div style="font-size: 13px;">
                            <ul style="list-style-type: none;">
                                <li>
                                    អគារមរតកតេជោ ដីឡូលេខ៥០៣ ផ្លូវកៅស៊ូអមមាត់ទន្លេបាសាក់<br>សង្កាត់ទន្លេបាសាក់ ខណ្ឌចំការមន រាជធានីភ្នំពេញ
                                </li>
                                <li>
                                    (+855) 23 213 908<br>(+855) 23 220 369
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
            <div class="row">
                <div class="col-12">
                    <div style="text-align: center; font-size: 11px;">
                        <p>&copy; ឆ្នាំ២០១៧ រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ៖ ក្រសួងបរិស្ថាន</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const center = { lat: 12.562108, lng: 104.888535 }
    return { center }
  },
  data() {
    return {
      appjs: window.appjs,
      livemap: JSON.parse(localStorage.getItem("livemap")),
      location: JSON.parse(localStorage.getItem("location")),
      livemap_byairtype:[],
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
       this.openedMarkerID = id
    },
    chooseMarker(status){
      if(status==1){
        return this.config.apiurl + '/resources/filelibrary/blue.png';
      }
      else if(status==2){
        return this.config.apiurl + '/resources/filelibrary/green.png';
      }
      else if(status==3){
        return this.config.apiurl + '/resources/filelibrary/yellow.png';
      }
      else if(status==4){
        return this.config.apiurl + '/resources/filelibrary/orang.png';
      }
      else if(status==5){
        return this.config.apiurl + '/resources/filelibrary/red.png';
      }
      else if(status==6){
        return this.config.apiurl + '/resources/filelibrary/voilet.png';
      }
      else{
        return this.config.apiurl + '/resources/filelibrary/voilet.png';
      }
      
    }
  },
   mounted() {
    //console.log(this.livemap);
    if(this.livemap.length>0){
      this.livemap_byairtype = [];
      let that = this;
      this.livemap.forEach(function (arrayItem) {
        //console.log(arrayItem.result.status);
        let latlong = arrayItem.latlong;
        let position = {};
        if(latlong.length>0){
          let latlong_array = latlong.split(',');
          position = {lat: parseFloat(latlong_array[0]), lng: parseFloat(latlong_array[1])};
        }
        else{
          position = {lat: 10.7433000, lng: 103.6200000};
        }

        that.livemap_byairtype.push({
          location_id: arrayItem.location_id,
          title : arrayItem.title,
          code : arrayItem.code,
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
 #footer {
            background-color: #077f36;
        }
</style>