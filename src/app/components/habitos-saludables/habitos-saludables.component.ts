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

}
