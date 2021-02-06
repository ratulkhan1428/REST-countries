fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));


const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}<p>
            <button onclick="displayCountryDetail('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">
    `
}

// $.ajax({
//     url: "https://restcountries.eu/rest/v2/all",
//     type: "get",
//     success: function (data) {
//         var rs = "";
//         var c = 0;
//         for(i in data) {
//             rs += "<tr>";
//             c += 1;
//             rs += "<td>"+c+"</td>";
//             rs += "<td>"+data[i].name+"</td>";
//             rs += "<td>"+data[i].capital+"</td>";
//             rs += "<td>"+data[i].population+"</td>";
//             rs += "<td><ol>";
//             for(j in data[i].borders) {
//                 rs += "<li>"+data[i].borders[j]+"</li>";
//             }
//             rs += "</ol></td>";    
//             rs += "<td><img src='"+data[i].flag+"' style='height: 100px; width: 150px;'</td>";
//             rs += "</td>";
//         }
//         document.getElementById("result").innerHTML = rs;
//     }
// })