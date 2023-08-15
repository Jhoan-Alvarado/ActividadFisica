import { Component } from '@angular/core';

@Component({
  selector: 'app-habitos-saludables',
  templateUrl: './habitos-saludables.component.html',
  styleUrls: ['./habitos-saludables.component.css']
})
export class HabitosSaludablesComponent {
  psicologicos : any =[
    {beneficio: "Mejorar La Resistencia Fisica", img : "https://upload.wikimedia.org/wikipedia/commons/2/26/Ultraman_stage3_brazilian_2011_%C2%A9rick.kent.jpg", description : "Mejorar la resistencia física implica aumentar la capacidad del cuerpo para realizar actividad física durante períodos prolongados."},
    {beneficio :"Aumenta La Densidad OSEA", img : "https://statics-cuidateplus.marca.com/cms/styles/ratio_1_1/azblob/2022-10/osteoporosis-enfermedad.jpg.webp?itok=NpjfoXix", description :"Aumentar la densidad ósea implica fortalecer y mejorar la salud de los huesos, incrementando su contenido mineral y resistencia."}, 
    {beneficio :"Mejora El Perfil Lipidico", img :"https://www.emergency-live.com/wp-content/uploads/2022/12/Profilo-lipidico-arterie-sangue-1.jpg", description:"Mejorar el perfil lipídico significa equilibrar y optimizar los niveles de lípidos en sangre, como el colesterol y los triglicéridos."},
    {beneficio :"Mejora El Equilibrio La Coordinacion", img :"https://www.lafragua.run/wp-content/uploads/2021/09/Coordinacion-y-el-equilibrio-con-estos-ejercicios.jpg", description:"Mejorar el equilibrio y la coordinación implica desarrollar la capacidad de mantener una postura estable y controlar los movimientos de manera armoniosa."},
    {beneficio :"Controla El Peso Corporal", img :"https://www.topdoctors.es/files/Image/large/5afef891-0fa0-4a85-a288-0de88ac97da0.jpg", description:"Controlar el peso corporal implica mantener un equilibrio entre la cantidad de calorías consumidas y las gastadas. Esto es fundamental para mantener un peso saludable."},
    {beneficio :"Mejora La Resistencia Y La Insulina", img :"https://img.freepik.com/vector-gratis/personajes-personas-sosteniendo-ilustracion-iconos-salud_53876-26831.jpg", description:"Mejorar la resistencia a la insulina implica aumentar la sensibilidad del cuerpo a esta hormona."},
    {beneficio :"Mejora La Movilidad Articular y Flexibilidad", img :"https://i1.wp.com/www.alimentatubienestar.es/wp-content/uploads/2019/06/ejercicios-de-movilidad-articular.jpg?fit=620%2C413&ssl=1", description:"Mejorar la movilidad articular y la flexibilidad implica aumentar el rango de movimiento de las articulaciones y la elasticidad de los músculos."},
  ]


  beneficios  :any = [
    {
      beneficio: "Alimentación balanceada",
      text: "Consume una dieta rica en frutas, verduras, proteínas magras, granos enteros y grasas saludables. Evita los alimentos procesados y altos en azúcares añadidos.",
      img: "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/otramedicina/C/Como-elaborar-una-dieta-balanceada-5.jpg"
    },
    {
      beneficio: "Hidratación adecuada",
      text: "Bebe suficiente agua a lo largo del día para mantener tu cuerpo hidratado y favorecer un funcionamiento óptimo.",
      img: "https://www.dietistasnutricionistas.es/wp-content/uploads/2017/06/agua-mineral.jpg"
    },
    {
      beneficio: "Actividad física regular",
      text: "Realiza ejercicio de forma consistente, ya sea caminar, correr, nadar, practicar yoga u otras actividades que te gusten. Apunta a al menos 150 minutos de actividad moderada por semana.",
      img: "https://static.vecteezy.com/system/resources/previews/001/981/995/original/young-athletes-exercising-together-free-vector.jpg"
    },
    {
      beneficio: "Sueño reparador",
      text: "Establece una rutina de sueño regular y asegúrate de dormir de 7 a 9 horas por noche. Un buen descanso es esencial para la salud física y mental.",
      img: "https://www.pilarjerico.com/wp-content/uploads/DORMIR_2_640x463px.png"
    },
    {
      beneficio: "Manejo del estrés",
      text: "Practica técnicas de manejo del estrés, como la meditación, la respiración profunda y el mindfulness, para reducir los efectos negativos del estrés en tu cuerpo y mente.",
      img: "https://d2lcsjo4hzzyvz.cloudfront.net/blog/wp-content/uploads/2020/05/Mindfulness-para-manejar-el-estre%CC%81s-min-1.jpg"
    },
    {
      beneficio: "Relaciones sociales",
      text: "Mantén conexiones sociales significativas. Las relaciones saludables pueden contribuir a tu bienestar emocional y mental.",
      img: "https://utel.mx/blog/wp-content/uploads/2014/01/shutterstock_119250403.jpg"
    },
    {
      beneficio: "Tiempo de ocio",
      text: "Dedica tiempo a actividades que te gusten y te relajen, ya sea leer, escuchar música, hacer manualidades o cualquier otra cosa que te brinde alegría.",
      img: "https://divulgaciondinamica.es/wp-content/uploads/2019/05/definicion-de-ocio-y-tiempo-libre.jpg"
    },
    {
      beneficio: "Evitar el tabaco y el exceso de alcohol",
      text: "Si eres fumador, considera dejar de fumar, y si consumes alcohol, hazlo con moderación.",
      img: "https://blog.genesis.es/wp-content/uploads/2018/05/Webp.net-resizeimage-1.jpg"
    },
    {
      beneficio: "Cuidado personal",
      text: "Dedica tiempo a cuidar tu higiene personal, cuidado de la piel y salud bucal. Sentirse bien consigo mismo puede tener un impacto positivo en tu autoestima.",
      img: "https://centromedicodelcaribe.com/assets/uploads/noticias/_imagenMedia/CUIDADO-PERSONAL-COLON.jpg"
    },
    {
      beneficio: "Aprender y crecer",
      text: "Estimula tu mente mediante la lectura, la adquisición de nuevas habilidades, la resolución de rompecabezas o la toma de cursos. El aprendizaje continuo puede mantener tu mente activa y saludable.",
      img: "https://p.calameoassets.com/170515211315-21c1ec02ca675bee665e9f11a18f0fa5/p1.jpg"
    },
    {
      beneficio: "Revisiones médicas regulares",
      text: "Programa exámenes médicos y chequeos periódicos para asegurarte de que estás al tanto de tu salud y abordar cualquier problema a tiempo.",
      img: "https://1.bp.blogspot.com/-SO8gZVzsuvY/WeXVVq4HXCI/AAAAAAAAJFg/hMEkCgHeVGEBIwqLS7K6Q9lvL3zVSg0vACLcBGAs/s1600/reconocimientos-medicos-pamplona-renovar-carnet.600.png"
    },
    {
      beneficio: "Limitar la exposición a pantallas",
      text: "Reduce el tiempo que pasas frente a dispositivos electrónicos, especialmente antes de acostarte, ya que esto puede afectar negativamente la calidad de tu sueño.",
      img: "https://cdn.aarp.net/content/dam/aarp/home-and-family/personal-technology/2022/04/1140-screen-time-illustration-esp.jpg"
    }
  ]

  psicosociales : any = [
    {beneficio : "Autoestima Estable" ,  img  : "https://images.hive.blog/0x0/http://noticias.universia.pr/net/images/consejos-profesionales/1/18/18-/18-senales-que-indican-baja-autoestima.png", description: "La autoestima estable se refiere a tener una percepción generalmente positiva y constante de uno mismo a lo largo del tiempo, independientemente de los éxitos o fracasos momentáneos."},
    {beneficio : "Disminuye La Presion", img : "https://images.ecestaticos.com/HsosENAIRafRx2EbNgsYhImdRnk=/0x108:2117x1299/1200x675/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F6a6%2F9e5%2F025%2F6a69e5025d9eab105cc8b0acc62bb5b6.jpg", description : "Disminuye la presión hace referencia a la reducción de la fuerza o la tensión ejercida sobre algo, como un fluido en un sistema cerrado o una situación estresante. En un contexto médico, puede aludir a la disminución de la presión sanguínea en el cuerpo. En general, implica una disminución en la intensidad de la fuerza o el estrés en una situación específica."},
    {beneficio : "Estimula El Trabajo En Grupo" , img : "https://pqs.pe/wp-content/uploads/2015/09/pqs-trabajo-en-equipo_0.jpg", description :"Estimula el trabajo en grupo se refiere a fomentar y promover la colaboración y la interacción entre los miembros de un equipo o grupo para lograr objetivos comunes. Esto implica crear un entorno donde se motive y facilite la comunicación"},
    {beneficio  : "Aumenta El Bienestar", img : "https://fundaciondelcorazon.com/images/Blog/iStock-1334264747.jpg" , description  : "Aumenta el bienestar se refiere a mejorar la calidad general de vida y el estado emocional positivo de una persona o grupo. Puede incluir aspectos como la satisfacción con la vida, la felicidad, la salud mental y física,"},
    {beneficio :"Mejora La Autoimagen", img  :"https://i0.wp.com/blog.elartedesabervivir.com/wp-content/uploads/2021/05/5-ejercicios-para-una-autoimagen-positiva.png?fit=900%2C600&ssl=1", description : "Mejora la autoimagen se refiere a la acción de trabajar en la percepción positiva y realista que una persona tiene de sí misma. Implica cultivar una imagen interna y externa saludable y positiva de uno mismo, incluyendo la aceptación de fortalezas y debilidades. Mejorar la autoimagen implica desarrollar la confianza en uno mismo"},
    {beneficio : "Reduce El Estres Y  Previene El Insomio " , img  : "https://www.nascia.com/wp-content/uploads/2017/12/estr%C3%A9s-e-insomnio.jpg", description  :"Reduce el estrés y previene el insomnio hace referencia a las acciones y prácticas que ayudan a disminuir los niveles de estrés y a prevenir problemas de sueño, como el insomnio. El estrés crónico puede afectar negativamente la calidad del sueño,"},
    {beneficio : "Aumenta El Autoestima" , img : "https://www.semana.com/resizer/5aKrds6c5_G7lQq57b9Qr4OzlnM=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/V7XZB27GDRA7JGFKOAE3WQXDEE.jpg", description: "Aumenta la autoestima se refiere a acciones y actitudes que contribuyen a mejorar la percepción que una persona tiene de sí misma. Incrementar la autoestima implica desarrollar una imagen positiva y saludable de uno mismo, "}
  ]

}
