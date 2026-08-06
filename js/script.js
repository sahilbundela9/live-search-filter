'use strict';

/* ===================================
   DATA SOURCE
=================================== */

const cities = [
    {
        id: 1,
        name: 'Ahmedabad',
        country: 'India'
    },
    {
        id: 2,
        name: 'Mumbai',
        country: 'India'
    },
    {
        id: 3,
        name: 'Delhi',
        country: 'India'
    },
    {
        id: 4,
        name: 'Bangalore',
        country: 'India'
    },
    {
        id: 5,
        name: 'Hyderabad',
        country: 'India'
    },
    {
        id: 6,
        name: 'Pune',
        country: 'India'
    },
    {
        id: 7,
        name: 'Chennai',
        country: 'India'
    },
    {
        id: 8,
        name: 'Kolkata',
        country: 'India'
    },
    {
        id: 9,
        name: 'Surat',
        country: 'India'
    },
    {
        id: 10,
        name: 'Jaipur',
        country: 'India'
    }
];

/* ===================================
   DOM CACHE
=================================== */

const searchInput = document.querySelector('#searchInput');

const resultList = document.querySelector('#resultList');

/* ===================================
   RENDER LIST
=================================== */

const renderCities = (items) => {

    if (!items.length) {

        resultList.innerHTML = `
            <li class="empty-state">
                No results found.
            </li>
        `;

        return;
    }

    const html = items.map(city => `
        <li
            class="result-item"
            data-id="${city.id}">

            <div class="city">
                ${city.name}
            </div>

            <div class="country">
                ${city.country}
            </div>

        </li>
    `).join('');

    resultList.innerHTML = html;
};

/* ===================================
   FILTER LOGIC
=================================== */

const filterCities = (keyword) => {

    const searchTerm = keyword.trim().toLowerCase();

    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm)
    );

    renderCities(filteredCities);
};

/* ===================================
   EVENT LISTENER
=================================== */

const initializeSearch = () => {

    renderCities(cities);

    searchInput.addEventListener('input', event => {

        filterCities(event.target.value);

    });

};

/* ===================================
   INITIALIZE
=================================== */

initializeSearch();