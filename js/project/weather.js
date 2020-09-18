let req = $.get("https://api.openweathermap.org/data/2.5/weather?q=Beaumont,fr&units=metric&lang=fr&appid=e43e71fe3e04a0d3dc7256b71cb6c29c", function (data, status) {
    let weather = data.weather[0].description;
    let temperature = data.main.temp;
    let html = '<div class="card border border-dark" style="width: 18rem;">\n' +
        '            <div class="card-body">\n' +
        '                <h5 class="card-title">Beaumont</h5>\n' +
        '                <h6 class="card-subtitle mb-2 text-muted">Météo : ' + weather + '</h6>\n' +
        '                <h6 class="card-subtitle mb-2 text-muted">Température : ' + temperature + '°C</h6>\n' +
        '            </div>\n' +
        '        </div>'
    $("#weather").html(html);
})
