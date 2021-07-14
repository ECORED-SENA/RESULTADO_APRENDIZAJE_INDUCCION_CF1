export default {
  global: {
    componenteFormativo: 'Contextualización SENA',
    descripcionCurso:
      'Conoce la entidad más querida por los colombianos, la cual funciona desde su creación en permanente alianza entre el Gobierno, los empresarios y los trabajadores, con el firme propósito de aumentar la capacidad de progreso en Colombia a través de programas de formación profesional integral.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contextualización SENA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Misión',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Visión',
            hash: 't1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Símbolos SENA',
            hash: 't1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Himno SENA',
            hash: 't1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Organigrama general del SENA',
            hash: 't1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Dirección de formación profesional SENA',
            hash: 't1_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gros, B. (2011). Evolución y retos de la educación virtual: construyendo el e-learning del Siglo XXI. Editorial UOC.',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2017). Formación virtual.',
      link:
        'https://www.mineducacion.gov.co/1759/w3-article-196492.html?_noredirect=1',
    },
    {
      referencia:
        'SENA. (2015). Formación tecnopedagógica en ambientes virtuales de aprendizaje. Dirección de Formación Profesional. Grupo de Formación Virtual y a Distancia.',
    },
    {
      referencia:
        'SENA. (2016). Instructivo para orientar el desempeño del instructor en ambientes virtuales de aprendizaje. Versión 2. Dirección de Formación Profesional. Grupo de Formación Virtual y a Distancia.',
    },
    {
      referencia: 'SENA. (2021). Quiénes somos. SENA ',
      link: 'https://www.sena.edu.co/es-co/sena/Paginas/quienesSomos.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Aula virtual',
      significado:
        'entorno telemático en el cual el aprendiz tiene acceso a la red (intranet o internet) para desarrollar un proceso de aprendizaje. Permite la consulta de la documentación de estudio, el desarrollo de actividades de aprendizaje y la utilización de herramientas de interacción como foros de discusión y correo electrónico, entre otros.',
    },
    {
      termino: 'B-Learning',
      significado:
        'proviene del término en idioma inglés <i>Blended Learning</i>, en español aprendizaje mixto o combinado. Este tipo de aprendizaje se caracteriza por combinar de acuerdo con las necesidades del aprendiz o del programa de formación, sesiones sincrónicas en las cuales el instructor aborda temáticas del curso.',
    },
    {
      termino: 'E-Learning',
      significado:
        'proceso de enseñanza-aprendizaje que se lleva a cabo a través de internet, caracterizado por una separación física entre el instructor y el aprendiz, pero con el predominio de una comunicación tanto sincrónica como asincrónica a través de la cual se lleva a cabo una interacción didáctica continuada. Además, el aprendiz es el protagonista de su proceso de formación al tener que autogestionar su aprendizaje con el apoyo del instructor.<br><br>Una de las ventajas más relevantes del e-learning es la disponibilidad de la información y contenidos de aprendizaje las 24 horas, los 7 días a la semana. Los aprendices, además de acceder a los mismos, pueden comunicarse con su instructor y compañeros de forma sincrónica o asincrónica, realizando aprendizaje altamente colaborativo y significativo, a cualquier hora y en cualquier lugar.',
    },
    {
      termino: 'FAVA',
      significado:
        'se refiere exclusivamente a la orientación de programas de formación en ambientes virtuales de aprendizaje, esta contempla aquellas propuestas que están diseñadas y se desarrollan dentro de un software.<br><br>Allí se permite hacer la gestión académica y administrativa de los programas de formación, procesos como la inscripción de estudiantes, la conformación de grupos, proponer actividades de diferentes tipos, hacer la tutoría y seguimiento, aplicar la evaluación, así como comunicarse de manera sincrónica y asincrónica con los aprendices y generar reportes.<br><br>La FAVA se puede dar en varias modalidades, entre ellas el e-learning y el b-learning.',
    },
    {
      termino: 'LMS',
      significado:
        'la necesidad de tener una FAVA efectiva y unos AVA cada vez más completos y atractivos para los aprendices, genera la emergencia de los sistemas de gestión de aprendizaje, conocidos en el idioma inglés como Learning Management System (LMS) y difundidos con este acrónimo en nuestro país.',
    },
  ],
  complementario: [
    {
      texto:
        'Historia del SENA - SENA. (7 de septiembre de 2012). La historia del SENA contada por Rodolfo Martínez Tono. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/U_exqn8Khpk',
    },
    {
      texto: 'Símbolos del SENA - SENA. (s.f.). Símbolos del SENA.',
      tipo: 'Video',
      link: 'https://youtu.be/OP4z_14gFU8',
    },
    {
      texto:
        'Himno del SENA - SENA. (6 de junio de 2012). Himno Nuevo. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/N410esgqADc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
