<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Contextualización SENA

    p Somos un establecimiento público del orden nacional y con autonomía administrativa, adscrito al Ministerio del Trabajo.
    p.mb-5 Contamos con:

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(data-aos="slide-left")
              img(src='@/assets/curso/img01.svg' alt='AvatarTop')
              .tarjeta.color-primario.bg01.w-100
                .p-4
                  p.text-center.FirstLtrColor Personería jurídica.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/img02.svg' alt='AvatarTop')
              .tarjeta.color-primario.bg01.w-100
                .p-4
                  p.text-center.FirstLtrColor Patrimonio propio e independiente.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(data-aos="slide-right")
              img(src='@/assets/curso/img03.svg' alt='AvatarTop')
              .tarjeta.color-primario.bg01.w-100
                .p-4
                  p.text-center.FirstLtrColor Autonomía administrativa.
        
        hr
        
        .tarjeta-avatar-b.my-4.align-items-center
          img.imgM1(src='@/assets/curso/img04.png' alt='AvatarTop')
          .tarjeta.color-acento-contenido.bg02
            .p-4
              p.mb-0 Ofrecemos formación gratuita a millones de colombianos que se benefician con programas técnicos, tecnológicos y complementarios que, enfocados en el desarrollo económico, científico y social del país, entran a fortalecer las actividades productivas de las empresas y de la industria para obtener mejor competitividad y mayores resultados en los diferentes mercados.

        hr

        .tarjeta-avatar-b.my-4.align-items-center
          img.imgM1(src='@/assets/curso/img05.png' alt='AvatarTop')
          .tarjeta.color-acento-contenido.bg02
            .p-4
              p.mb-0 Autorizada por el Estado para invertir en la infraestructura necesaria para mejorar el desarrollo social y técnico de los trabajadores en las diferentes regiones, a través de la formación profesional integral que logra incorporarse con las metas del Gobierno nacional, mediante el cubrimiento de las necesidades específicas de recurso humano en las empresas. Por medio de la vinculación al mercado laboral –bien sea como empleado o subempleado–, con grandes oportunidades para el desarrollo empresarial, comunitario y tecnológico.
        
        hr

        .tarjeta-avatar-b.my-4.align-items-center
          img.imgM1(src='@/assets/curso/img06.png' alt='AvatarTop')
          .tarjeta.color-acento-contenido.bg02
            .p-4
              p.mb-0 La entidad más querida por los colombianos funciona desde su creación en permanente alianza entre el Gobierno, los empresarios y los trabajadores, con el firme propósito de aumentar la capacidad de progreso en Colombia a través del incremento de la productividad en las empresas y regiones, sin dejar de lado la inclusión social, alineados con la política nacional “Más empleo y menos pobreza”. Por tal razón, se generan continuamente programas y proyectos de responsabilidad social, empresarial, formación, innovación, internacionalización y transferencia de conocimientos y tecnologías.
        
        hr
    
    h3.mt-4 Historia del SENA 

    p.mb-5 Desde nuestros inicios, siempre buscamos proporcionar instrucción técnica al empleado, formación complementaria para adultos, y ayudarles a los empleadores y trabajadores a establecer un sistema nacional de aprendizaje.

    .row.justify-content-center
      .col-lg-10
        figure.mb-3
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/V2ZTz17C7M0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    #t1_1.titulo-segundo
      h2 1.1 Misión

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/img07.png')})`}")(data-aos="fade")
          .bloque-texto-g__texto.p-4
            p.mb-0 El SENA está encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país.
    
    Separador

    #t1_2.titulo-segundo
      h2 1.2 Visión
    
    .row.justify-content-center
      .col-lg-8.mb-3
        .DecTextIzq
          div
            p En el 2020 el SENA será una Entidad de clase mundial en formación profesional integral y en el uso y apropiación de tecnología e innovación al servicio de personas y empresas; habrá contribuido decisivamente a incrementar la competitividad de Colombia a través de:
          
        .row.justify-content-center
          .col-11
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Aportes relevantes a la productividad de las empresas. 
              li 
                i.fas.fa-check
                | Contribución a la efectiva generación de empleo y la superación de la pobreza. 
              li 
                i.fas.fa-check
                | Aporte de fuerza laboral innovadora a las empresas y las regiones. 
              li 
                i.fas.fa-check
                | Integralidad de sus egresados y su vocación de servicio. 
              li 
                i.fas.fa-check
                | Calidad y estándares internacionales de su formación profesional integral. 
              li 
                i.fas.fa-check
                | Incorporación de las últimas tecnologías en las empresas y en la formación profesional integral. 
              li 
                i.fas.fa-check
                | Estrecha relación con el sector educativo (media y superior). 
              li 
                i.fas.fa-check
                | Excelencia en la gestión de sus recursos (humanos, físicos, tecnológicos y financieros).
      .col-8.col-lg-4
        figure(data-aos="fade")
          img(src='@/assets/curso/img08.svg' alt=' Visión')
    
    Separador

    #t1_3.titulo-segundo
      h2 1.3 Símbolos SENA
    
    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.bg01.p-4.mb-5
          p.mb-0 El escudo y la bandera del SENA fueron diseñados cuando se fundó́ nuestra institución y reflejan los tres sectores económicos dentro de los cuales operamos:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.mb-4(data-aos="flip-left")
        figure
          img(src='@/assets/curso/img09.svg' alt='Escudo')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.mb-4(data-aos="flip-left")
        figure
          img(src='@/assets/curso/img10.svg' alt='Bandera')

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4
              .bloque-texto-a__texto.p-4
                p.my-4 El logosímbolo representa gráficamente los enfoques de la formación que impartimos en la que el individuo es el responsable de su propio proceso de aprendizaje. 
            .col-lg-4.mb-4.mb-lg-0
              figure(data-aos="fade")
                img.w-75.mx-auto(src='@/assets/curso/img11.svg' alt='Logo SENA')
    
    h3.mt-4 Símbolos del SENA 

    p.mb-5 Observa el vídeo de los símbolos que nos identifican.

    .row.justify-content-center.mb-3
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/VCgWoplELpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador
    
    #t1_4.titulo-segundo
      h2 1.4 Himno SENA
    
    LineaTiempoC.color-acento-contenido.bg03.p-5.mb-5
      .row(titulo="Coro")
        P.text-center Estudiantes del SENA adelante por Colombia luchad con amor con el ánimo noble y radiante transformémosla en mundo mejor

      .row(titulo="I")
        P.text-center De la patria el futuro destino, en las manos del joven está, el trabajo es seguro camino, que el progreso a Colombia dará.

      .row(titulo="II")
        P.text-center En la forja del SENA se forman, hombres libres que anhelan triunfar, con la ciencia y la técnica unidas, nuevos rumbos de paz trazarán.

      .row(titulo="III")
        P.text-center Hoy la patria nos grita sentida, ¡estudiantes del SENA triunfad! solo así lograréis en la vida, más justicia, mayor libertad.

      
      .row(titulo="IV")
        P.text-center Avancemos con fuerza guerrera, ¡estudiantes con firme tesón! que la patria en nosotros espera, su pacífica revolución.
    
    h3.mt-4 Himno del SENA 

    p.mb-5 Escucha y aprende nuestro himno, escrito por el maestro Luis Alfredo Sarmiento. La música es del maestro Daniel Marles Endo. 
    
    .row.justify-content-center.mb-3
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/LqPzZSco-Ns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    #t1_5.titulo-segundo
      h2 1.5 Organigrama general del SENA
    
    p.mb-4 En la siguiente gráfica puede observar la estructura formal que actualmente tiene el SENA para el desarrollo de sus funciones.

    figure(data-aos="flip-down")
      img(src='@/assets/curso/img12.svg' alt='estructura formal SENA')
    
    Separador

    #t1_6.titulo-segundo
      h2 1.6 Dirección de formación profesional SENA
    
    p.mb-4 Sus funciones las reglamenta el artículo 11 del Decreto 249 de 2004 y se estructura administrativamente, así:

    figure(data-aos="flip-down")
      img(src='@/assets/curso/img13.svg' alt='estructura administrativa SENA')

            

    
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
