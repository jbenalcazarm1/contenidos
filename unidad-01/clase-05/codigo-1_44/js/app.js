$(document).ready(function () {
  // Mostrar spinner
  $("#lista-peliculas").html('<div class="col-12 text-center"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Cargando...</span></div></div>');

  // Función para determinar si una película es estreno
  function esEstreno(fechaEstreno) {
    const fechaPelicula = new Date(fechaEstreno);
    const hoy = new Date();
    const diffTiempo = hoy.getTime() - fechaPelicula.getTime();
    const diffDias = diffTiempo / (1000 * 3600 * 24);
    return diffDias >= 0 && diffDias <= 30;
  }

  setTimeout(function() {
    $.ajax({
      url: "data/peliculas.json",
      method: "GET",
      dataType: "json",
      success: function (peliculas) {
        let html = "";
        // Ocultar spinner y preparar para mostrar películas
        $("#lista-peliculas").empty();
        peliculas.forEach(function (peli) {
          const badgeEstreno = esEstreno(peli.estreno) 
            ? '<span class="badge bg-success card-badge">Estreno</span>' 
            : '';
          html += `
            <div class="col-md-4 mb-4">
              <div class="card h-100 shadow">${badgeEstreno}
                <img src="img/${peli.imagen}" class="card-img-top" alt="${peli.titulo}">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${peli.titulo}</h5>
                  <p class="card-text">${peli.generos.join(", ")}</p>
                  <a href="pages/detalle.html?id=${peli.id}" class="btn btn-primary my-2">Ver detalles</a>
                  <button type="button" class="btn btn-secondary ver-trailer-btn" data-bs-toggle="modal" data-bs-target="#trailerModal" data-trailer-url="${peli.trailer}">
                    Ver tráiler
                  </button>
                </div>
              </div>
            </div>`;
        });
        $("#lista-peliculas").html(html).find('.card').each(function(index) {
            $(this).delay(100 * index).queue(function() { $(this).addClass('visible').dequeue(); });
        });

        $('.ver-trailer-btn').on('click', function() {
            const trailerUrl = $(this).data('trailer-url');
            $('#trailerModal iframe').attr('src', trailerUrl + "?autoplay=1");
        });
      },
      error: function (xhr, status, error) {
        console.error("Error al cargar las películas:", error);
        $("#lista-peliculas").html(`
          <div class="col-12">
            <div class="alert alert-danger text-center" role="alert">
              No se pudo cargar la lista de películas. Intenta nuevamente más tarde.
            </div>
          </div>
        `);
      }
    });
  }, 2000); // Retraso artificial de 2 segundos
  
  $('#trailerModal').on('hidden.bs.modal', function () {
      $('#trailerModal iframe').attr('src', '');
  });
});
  