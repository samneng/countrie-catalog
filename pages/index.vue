<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Countries Catalog</h1>
    <div class="flex items-center mb-4">
      <input v-model="searchText" placeholder="Search by country name" class="border rounded px-4 py-2 mr-4 w-64">
      <select v-model="sortOrder" class="border rounded px-4 py-2 mr-4">
        <option value="asc">Sort A-Z</option>
        <option value="desc">Sort Z-A</option>
      </select>
    </div>
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">Flag</th>
          <th class="px-4 py-2">Country Name</th>
          <th class="px-4 py-2">2-character Code</th>
          <th class="px-4 py-2">3-character Code</th>
          <th class="px-4 py-2">Native Name</th>
          <th class="px-4 py-2">Alternative Names</th>
          <th class="px-4 py-2">Calling Codes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="country in filteredCountries" :key="country.cca3">
          <td class="px-4 py-2"><img :src="country.flags.png" :alt="country.name.official" class="w-8 h-8 object-contain"></td>
          <td class="px-4 py-2"><a href="#" @click.prevent="showModal(country)" class="text-blue-500 hover:underline">{{ country.name.official }}</a></td>
          <td class="px-4 py-2">{{ country.cca2 }}</td>
          <td class="px-4 py-2">{{ country.cca3 }}</td>
          <td class="px-4 py-2">{{ country.name.nativeName }}</td>
          <td class="px-4 py-2">{{ country.altSpellings.join(", ") }}</td>
          <td class="px-4 py-2">{{ Array.isArray(country.idd) ? country.idd.join(", ") : country.idd }}</td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center items-center mt-4">
      <button @click="previousPage" :disabled="currentPage === 1" class="border rounded px-4 py-2 mr-4" :class="currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''">Previous</button>
      <span class="text-lg font-bold">{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="border rounded px-4 py-2 ml-4" :class="currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''">Next</button>
    </div>
    <div v-if="modalVisible" class="fixed z-50 inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div class="bg-white rounded-lg px-8 py-6">
        <span class="text-gray-700 text-2xl font-bold mb-4 block">{{ selectedCountry.name.official }}</span>
        <p class="text-gray-700 mb-2"><strong>Capital:</strong> {{ selectedCountry.capital }}</p>
        <p class="text-gray-700 mb-2"><strong>Region:</strong> {{ selectedCountry.region }}</p>
        <p class="text-gray-700 mb-2"><strong>Subregion:</strong> {{ selectedCountry.subregion }}</p>
        <p class="text-gray-700 mb-2"><strong>Population:</strong> {{ selectedCountry.population }}</p>
        <p class="text-gray-700 mb-2"><strong>Languages:</strong> {{ Array.isArray(selectedCountry.languages) ? selectedCountry.languages.map(l => l.name).join(", ") : selectedCountry.languages }}</p>
        <p class="text-gray-700 mb-2"><strong>Timezones:</strong> {{ selectedCountry.timezones?.join(", ") }}</p>
        <p class="text-gray-700 mb-2"><strong>Currencies:</strong> {{ Array.isArray(selectedCountry.currencies) ? selectedCountry.currencies.map(c => c.name).join(", ") : selectedCountry.currencies }}</p>
        <p class="text-blue-500 mb-2"><strong><a class="underline" :href="selectedCountry.maps.googleMaps" target="_blank">View on map</a></strong></p>
        <button @click="closeModal" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'IndexPage',
  data() {
    return {
      countries: [],
      searchText: '',
      sortOrder: 'asc',
      currentPage: 1,
      totalPages: 1,
      modalVisible: false,
      selectedCountry: {}
    }
  },
  async mounted() {
    await this.loadCountries()
  },
  methods: {
    async loadCountries() {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      this.countries = response.data
      this.totalPages = Math.ceil(this.countries.length / 25)
    },
    showModal(country) {
      this.selectedCountry = country
      this.modalVisible = true
    },
    closeModal() {
      this.modalVisible = false
    },
    previousPage() {
      this.currentPage -= 1
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    nextPage() {
      this.currentPage += 1
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  computed: {
    filteredCountries() {
      let result = this.countries
      if (this.searchText) {
        result = result.filter(c => c.name.official.toLowerCase().includes(this.searchText.toLowerCase()))
      }
      if (this.sortOrder === 'asc') {
        result = result.sort((a, b) => a.name.official.localeCompare(b.name.official))
      } else {
        result = result.sort((a, b) => b.name.official.localeCompare(a.name.official))
      }
      const start = (this.currentPage - 1) * 25
      const end = start + 25
      return result.slice(start, end)
    }
  }
}
</script>
