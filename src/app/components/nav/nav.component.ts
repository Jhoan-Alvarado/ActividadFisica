import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

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
