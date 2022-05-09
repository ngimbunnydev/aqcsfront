<template>
  <header-page></header-page>
  <div style="float:left; width:100%; font-size:18px; font-weight:bold; text-align: center; padding:10px 0px">
    សន្ទស្សន៍គុណភាពខ្យល់កម្ពុជា (AQI)
  </div>
  <div style="float:left; width:100%;">
    <div style="display:flex; justify-content: center">
      <table border="1" id="table2">
      <tr>
        <th>ការវាយតម្លៃ</th>
        <th>សន្ទស្សន៍គុណភាពខ្យល់(AQI)</th>
        <th>ពណ៌(Color)</th>
        <th>ការពិពណ៌នា </th>
      </tr>
      <tr>
        <td>ល្អណាស់</td>
        <td>0 – 50</td>
        <td style="color:#fff; background-color: blue">ខៀវ</td>
        <td class="des">គុណភាពខ្យល់ល្អណាស់។ សមស្របសម្រាប់សកម្មភាពខាងក្រៅផ្ទះ និងទេសចរណ៍។</td>
      </tr>

      <tr>
        <td>ល្អ</td>
        <td>51 – 100</td>
        <td style="color:#fff; background-color: green">បៃតង</td>
        <td class="des">គុណភាពខ្យល់ល្អ។ អាចធ្វើសកម្មភាពទៅខាងក្រៅ និងការធ្វើដំណើរដូចធម្មតា។ បុគ្គលដែលមានប្រតិកម្មអាលែហ្សីតិចតួចគួរតែកាត់បន្ថយពេលវេលាសម្រាប់សកម្មភាពខាងក្រៅ។</td>
      </tr>

       <tr>
        <td>ធម្យម (ការបំពុលកម្រិតស្រាល)</td>
        <td>101 – 150</td>
        <td style="color:#000; background-color: yellow">លឿង</td>
        <td class="des">
          <span class="hili">មនុស្សទូទៅ៖</span> អាចធ្វើសកម្មភាពក្រៅផ្ទះធម្មតា។<br>
          <span class="hili">អ្នកដែលមានសុខភាពទន់ខ្សោយ៖</span>
 ប្រសិនបើមានរោគសញ្ញាដំបូងដូចជាការក្អក ការដកដង្ហើមពិបាក រលាកភ្នែកនោះ សូមកាត់បន្ថយរយៈពេលនៃសកម្មភាពខាងក្រៅរបស់អ្នក។
</td>
      </tr>

       <tr>
        <td>បង្គួរ (ការបំពុលមធ្យម)</td>
        <td>151 – 200</td>
        <td style="color:#fff; background-color: orange">ទឹកក្រូច</td>
        <td class="des">
          <span class="hili">មនុស្សទូទៅ៖</span> គួរតែតាមដានសុខភាពប្រសិនបើមានរោគសញ្ញាដំបូងដូចជាការក្អក ការពិបាកដកដង្ហើម រលាកភ្នែក សូមកាត់បន្ថយរយៈពេលនៃសកម្មភាពខាងក្រៅរបស់អ្នក ឬប្រើប្រាស់ឧបករណ៍ការពារផ្លូវដង្ហើមប្រសិនបើចាំបាច់។<br>
          <span class="hili">អ្នកដែលមានសុខភាពទន់ខ្សោយ៖</span>
          គួរកាត់បន្ថយរយៈពេលនៃសកម្មភាពខាងក្រៅរបស់អ្នក។ ឬ ប្រើប្រាស់ឧបករណ៍ការពារផ្លូវដង្ហើមប្រសិនបើចាំបាច់។ ប្រសិនបើមានស្ថានភាពសុខភាពដូចជាការក្អក ការពិបាកដកដង្ហើម ឈឺទ្រូង ឈឺក្បាល ចង្វាក់បេះដូងលោតខុសប្រក្រតី ក្អួតចង្អោរ អស់កម្លាំង នោះគួរតែពិគ្រោះជាមួយវេជ្ជបណ្ឌិត។
</td>
      </tr>

      <tr>
        <td>ខ្ពស់</td>
        <td>201 – 300</td>
        <td style="color:#fff; background-color: red">ក្រហម</td>
        <td class="des">មនុស្សគ្រប់គ្នាគួរតែជៀសវាងសកម្មភាពខាងក្រៅ; ជៀសវាងតំបន់ដែលមានការបំពុលខ្យល់ខ្ពស់ ឬប្រើប្រាស់ឧបករណ៍ការពារផ្លូវដង្ហើមប្រសិនបើចាំបាច់។ ប្រសិនបើមានរោគសញ្ញាសុខភាពនោះ គួរតែពិគ្រោះជាមួយវេជ្ជបណ្ឌិត។</td>
      </tr>

      <tr>
        <td>ខ្ពស់ខ្លាំង (ការបំពុលធ្ងន់ធ្ងរ)</td>
        <td>300-500</td>
        <td style="color:#fff; background-color: purple">ស្វាយ</td>
        <td class="des">ការព្រមានអំពីស្ថានភាពអាសន្នចំពោះសុខភាព។ សូម្បីតែមនុស្សដែលមានសុខភាពល្អនឹងពិបាកការស៊ូទ្រាំក្នុងកំឡុងពេលនេះ។ វាអាចមានការរលាកខ្លាំង និងរោគសញ្ញាជាច្រើនទៀត។ ដូច្នេះមនុស្សទាំងអស់គួរតែចៀសវាងសកម្មភាពចេញទៅខាងក្រៅ។</td>
      </tr>


    </table>
    </div>
  </div>
  <footer-page></footer-page>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default{
  components: {
    "header-page": Header,
    "footer-page": Footer,
  },
   
   
   
  
}
</script>

<style scoped>
table, td, th {
  border: 1px solid black;
}

td, th {
  padding: 10px;
}

#table2 {
  border-collapse: collapse;
  width: 90%;
}

.des{
  text-align: left;
}

.hili{
  font-weight: bold;
  text-decoration: underline;
}
</style>