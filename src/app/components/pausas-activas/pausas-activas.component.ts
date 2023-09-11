import { Component } from '@angular/core';

@Component({
  selector: 'app-pausas-activas',
  templateUrl: './pausas-activas.component.html',
  styleUrls: ['./pausas-activas.component.css']
})
export class PausasActivasComponent {

estiramientos :any= [
  {
    parte: 'Cuello', 
    ejercicio: 'Con la ayuda de la mano lleve la cabeza hacia un lado como si tocara el hombro conla oreja hasta sentir una leve tensión sostenga durante 15 segundos y realícelohacia el otro lado.',
    img:'https://userscontent2.emaze.com/images/b04ccc97-8b76-43b5-b1ba-7d7df3188c78/78b8ee34-0ec7-4e22-af2f-c313a6c2a143.png'
  }
  ,
  {
    parte:'Hombros',
    ejercicio:'Lleve los brazos hacia atrás, por la espalda baja y entrelace los dedos e intente subir las manos sin soltar los dedos sostenga esta posición durante 15 segundos y hágalo con el otro brazo',
    img:'https://smpausas.files.wordpress.com/2015/07/324345345.jpg'
  }
,
  {
    parte:'Brazos',
    ejercicio:'Con la espalda recta, cruce los brazos por detrás de la cabeza e intente llevarlos hacia arriba. Sostenga esta posición durante 15 segundos',
    img:'data:image/jpeg;base64,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'
  }
  ,
  {
    parte:'Manos',
    ejercicio:'Estire el brazo hacia el frente y abra la mano como si estuviera haciendo la señal de pare, y con ayuda de la otra mano lleve hacia atrás  todos los dedeos durante 15 segundos.',
    img:'data:image/jpeg;base64,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'
  }
  ,
  {
    parte:'Piernas',
    ejercicio:'De un paso al frente, apoyando el talón en el piso y lleve la punta del pie hacia su cuerpo. Mantenga esta posición durante 15 segundos',
    img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMRExYRExMUExYWERERFxYWFBEWFhYWFhYZGBcYFxYZHiohGRsmHhYWIzMiJistMDAwGCA1OjUuOSovMC0BCgoKDw4PHBERGy8eICAtLy8vLy8vLy8vLy8vLy0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAOcA2gMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABHEAACAQICAwwIAwcDAwUBAAABAgADEQQhBRIxBhNBUVJhcYGRkrHBBxQiMlNyodEjNIIVM0Jic7LhJKLCQ9LwY3SD4vEW/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAMhEAAgIBAwIDBAkFAAAAAAAAAAECEQMEEiExQRNRoSIjYXEFFDJSgZHB0fAVQoKx4f/aAAwDAQACEQMRAD8A7jERAEtVaqqCzEKALkk2AHOZdnEvSrumepiGwiMwpoQrAEhWYZnW488rfyyk57Tvp8Dyyq6S6v8AnmdL/wD7PBa2oK6sRyQzDvDKS2C0jSqi9Nw3Xn2T560Wt7ZCTv7SqUCGRipGzPh4jxTBLWTjOqTR7f8ARccoJxk0/j09EjukTWNxW6UY2mQcqiW1hxjjmzz0ITUlaPBzYpYpuE+qEREscxERAEREAREQBERAEREAREQBERAEREAREQBERAPDOC4jH0xUxFGslJjUxDk69U02uHNtX2TsznepzHSmh8OmPql6YJNSliFOY9rV4QNouWyPHOWSKdN/E26PI1uiurr0ITHbmqdGmK1KqoBIvvgJWx4iu09U1zSGJYEayOoIuCUcKy7LqWAuPvOr6Iai9PUARgjN7ORC+0bC3BMHSdCitA0FpoqWYBQMhc3NuuZnig1b6nqY9XmjKo9O5qXo8xpp4ynY+zUJpnrGV+u07gJwPcpg2TG06XAMRSZDxqSDO96w45003G5eX7GX6WqTx5F3X+mVRKdccY7Z5vg4x2iajyCuJRvq8Y7RG+ryh2iAVxLe+ryh2ie76vKHaIBXEt76vKHaI31eUO0QC5Et7+vKXtEp9ZTlr3hAL0SwcUnLXvCeeuU+WneEAyImMcbS+IneWPXaXxE7ywDJiY/rtP4id5Z567S+IneWAZMTG9dpfETvLHrtLlp3hAMmJjevUviL3hHr1P4i9ogGsGjzt33+8o3gcZ7zfeZpWUlZUvRiGgOftP3kBukwZpFMUoOp+6qbTq8KMebMjsm0aszsDSDIysAQSQQRcEEbCJElZfHLZLcjUND1GRSx3tVOZKgDW55Abp90ae4h1mOQA4TJDT25xPWjQo1t4pb2jsm+ZKzXyUHZkAbc81JtCCliXqg75Sp6qI20FyL26ZnyexFyfY9bDNZ5xhGk2bH6OtDM1dDUGtqa9V757TZR9R2TrA0bR+GvZIjcbog4egNcfiVLO/GOSvUPrebHL6aDjG5dXyzH9I6iOXLUPsxW1fh+7MT9nUvhr2QNHUvhp3RMuJoPPMX9n0vhp3RPfUaXw07qzJiAY3qNL4VPuL9oGBpfDTuL9pkxAMb1Kn8NO6v2j1Gn8NO6v2mTEAxxgqfw07qz31anyE7qy/EAs+rpyF7olW8LyV7BLkQCjel5I7BG9LyR2CVxAKN6XkjsEb0vJHYJXEAo3peSOwRva8Q7BK4gFGoOIdgnuqOISqIBrpEoIl5llnE1Ais5zCqW7BKnQt1nVFLMQANpMpw2lXSw3ioFY5O2Qz2XAzHXIbdm9RVoZaoZzU23vqrcA96/VCbpNREQ2ZmQMdbIW2TLlzqDduttXxd2bcWmlNR2xtyuvhRIYbcgtStUxNSq+vUbWIAWwFgABlsAAmRR3N08KS1Km9ZmKtqvqlbqbq1jYAi+3bJ3RyKyK2qAWUG3FcTMTZ2/SbHOUoVfDPOWKEJ7q5NeOnatLOvhyiXtroda3SJOYXErUUOjBlIuCJqu7zSD00CqfZY6jC3AeHtj0eYn8OqpOQqgjrUXt2TFDJOObw29yavnr6HoTwRlp/GSUWnVK69bo3KJb30c/YZVr52m088qiR+M0rSpOKbtZmtYcJv/APlpIQWcWkm11EREFRERAEREAREQBERAEREAREQBERAIMiYelv3NT+k/hM8iYOl/3FX+k/hKnQjN3BBXCrzM3UFUHxl7QWjaNRabOisVAsSBlLG6pdethqf/AKBPesP+M1/RO6U0DvTgggkA2OYBteZcS3Zcn+K9Dbkk4YcVOuJP82dXpi0XsD1n6zSk3VZXCvbj1WtMarupd7qquTfiPDNhhaRTuvrio298dz2Anymf6OTYV0/mRu0EeUjMPg2elVrvtWpSQc129r+5Zl7g31cRVXjog91v/sZhzezqMb87R6GF7tLlj5UzeqtTVF54g49pmGlXfKgP8INhz5HP6SQm48wgtO6M32th6l7alU35xa9u1ZOyxiRmnzjwMvysVyyWxERLECIiAIiIAiIgCIiAIiIAiIgCIiAQyuGAYG4IBB4wdkwtM/uKv9J/AzX9yFUqQq1zVVtb2dqrq7StxkL5cUkd0WmaNOlUplruabKFGZ9oZSpe+C1pF742jxLhaXQL6xPlMfS2jVQYeqAPapuhy/mLr/c02fQVVKtNqikMLKt/lQD7zXdKabo1aVKghffEdb/huFyBB9oi054sW2Unf2nfpR2y5d6jH7qr9SX0NR1hawnmkaKoWNgLID4zJ3PDI9E808lw/wAijxnWil8lK4TVwLKciaTVT8x9v7DqmrbnUf1m4VwrrUTW1WtnZtvVNy0pWZaLZoPZC2BJOZA85epWG8rssrN/tt/ynLLi3yi/uuy+LM8cZqr3Kv1LuqFdVGwAeBmbIam/4rG9xrrY34AM5J+spyh2idjO1Rax76oVjwOD43mUJA7qNIItIrrC7U6rC3EqG/iJM4V9ZFPGintEopctEF6IiXAiIgCIiAIiIAiIgCIiAIiIAiIgHPdzWjUp3ekwIzS6hSAR72Y2zOr6EViWNiflPkZzrcNjqq4qkiFijMVdRcrqkHMjYLHhnXSJVR2qjo3udlvRFMUaFQZDVapzfwzVd1VZ6a0EBte7McsrAADx7JsOIxyLTq0ywBNYJb5gOyYSUN+1qji6tkAeBRkJyye8g4wlydsT8PIpSja8n3IjRumqyhrOLLtvqgnoyki1aoxD0tZzUXMHO/TMUbmVNTWD2W/CDe3bY9Jm86OwlOmgVBlYC/CZ40NBqJ5E5Sca79fy/c9LU6rBFXBJ31VUq+JAYgs9ABwBU16aMBwMHHlnJreteowvbURFva+ZzPgJCboKu9VabAaweqqEXtmt2B7JM6BxQrK9UAjWqsM/5QF8p7Ucsd/hXylf4fM8ucJbfErhspbAnWI3xslvlqjaeiVYfBBr6xY2JHvETMt+IfkHiZfAnVHGzmPpGrbxXRRkpwta18/aYkHym/6DN6NNuNF7AAB4TQvTDgmqPhdXaztS7zJadHwtHURUH8KKvYLTlCNTZUvRMCvpFFJUtmOZj4CWDpZOUe6/2nWyaJaJEftVeUe6/wBp6NKLyj3X+0mxtJaJFftNeM91/tPf2iOM91vtIsbSUiRgx45+632lXrvzd1vtJsnaSMSOGLPE3db7SoYk8Td1vtA2mfEwhXbibut9p5vzclu632gijOiYlMu3Go4yM+oGV7w3xH7Kf/bBBkRMOqjKpbfGNgTYinwdCy6lW4B5gYBr+jcPhaK6tEUqY5itz0naZm7/AE+WveWapo7dKa2IXDthjT1kZ/btfVHDa3HNlFFOQvdWVOhqen3GvUAIOtiqRFiD/wBMHym8aIpAU7WuLATVdLqivUbVuA1EBVABuQLkc4v9Jt+ibGmpGwiZ9PhWNzr+6TZp1M90Y/BJEBp+2HYMD7JIBHFfykxoTEay34LXkHuoo7/VFG+Vnc24kUnxAnmilNSivt6iat3t7xFtgPBNJnSvgv7phvjKy2Ipk1CefUKgDj2yX3OYY08PTRhZtXWYcTMSx8Zp2LxYNFUUlrlQTnx53M246Op8C9hYeczQxx8V5e7VGnUXGCxLp1/nqSI98/KPEz2sCVIBsdUgEbQbZGYWEw4XWAvmvCWPiZhPgbbA3ff7zTZj2nBcWa1SoWqYis7Kx9pnYkEHaL7Oqde9E9aq+HqGrVeqBVCrrnWIAUXsdtpo2ktx+LFVylPWU1HIIYbCSRe83vcToapQw4SoXRi7MQtRgM9mycot3yRRPUaavXYEAjM59UzzgafIWRuiUtWYXJybMkk8HCZNS5YxDgqfIE89UTkCZDTyQyyZaXCpyRKhhU5Il1RKxBDZZGHXiEpNMcUyLSlhJaCZjss1XdTpSrTqqlN2W6G9jlcnLLom14hwiljwC80LF61aq7MQDqkg8RP+LTlm3bGo9exq08VKa3dO/wCBL7lcRXr1SxqNvVIap/nc8F+ISU0vjHVCVcggtmOYzO0Lg0oUERdgW5PCScyTzzWdN4lm/DUXZ3Kgc5MnT4vDxqLdnLNNZMjklSNiw+JZkVrnNQfpK/WG4zLdCjqqq8SgdglWpLjai4KpKvc3/DbwnlKobDoHhAWyv/TbwmJSatYezT2D+JuLol0c31NO0JonVqUq5Z2cUd79o3yOefRebXSJilSA4JfAlbCRBabBDX4GFOx/mVs/oR2TbtH5Ux0XkDppfwWNthQ9HtiTdN9WiD/JJjwTOVpIg8J+JiarHPVp6nfP2EjdHYdquHNJTY+6eC9jsvwSU0AtxUqcqqR1KLeN5Y0ENWrVTk1ag+pPnATIxdGMhQMbE1UAUW4wLnqGybuGmv4hdfEU14mLd0G31tJ5FtIquhM5Nu2VptPyieykHPql0CSUMEiZWFGXXPalMXHTL4W0UQ2Q+B/fv0N5SVkXgfzD/q8pL6sgMtWi0u6sasUNxRae2lVp7aWoiyi0WldotFEWQ26I/hhB/G4XqGZmkY8mlXK3yZly5rfebtjfxMQF4EX6nM/S0gd0eFC16b89pWUbO+ObjybDh8cu92vwcRkHgRr4pTwDfG8vOTGHPsdUwNFLfFdFJvESSr4J/UjUmQFjVhIrvMaotkf5G8JYo+6PlHhMzEj2G+RvCYVH3R0DwliLvqUas9CSqnSMyFSUouRulqf4NT5b9hB8pk4p7YcH+US7j8PrUnXjpuOuxtIw1tfCfp8pKRUytAUrYenltUueliT5yPoLq4qsOMo3ag+0ndFJ+DS/pU/7RIHSdUU8Wb5a1GmekgsD4CSFIrwK62KJ5NJz2kD7ycam0g9zlcNXq8e9rbo1jfxE2e0By5I8K4OY5pnKsriSUbsoIlc8tPYIIXA/v3/V5SakPgfzD/q8pMSETIRESSBERAE8Jnsoqe6eg+EAitFprF6p/iZj1XykDupq+0gHA4M2LRTfgA/yyH9U34V6hHu02Ren3ifoIOpm4PNOqWdEj/Un+m3iJXopr0weaeaNyxPTTbxEhEy6GxAT2IknEsYv3H+RvCYNH3R8o8Jn4v3H+VvCYFLYOgeEEozhSlzVlVp7AstuMj0Gaxoaoj4SwYEhRexvwSd002rh6x4qFU9iGcn0bpQJh1I1lNgcuiZtRLNGnjhvXc74fBafiTUHxV+p1Tc/V1sPT5l1D+klfKQW7lQr0KlwLmpT6cgw8D2z30caTNfDve3sV3S+y9wrbP1S16VsMWwRrKLmhVp1v031X+jX6p2tuNpc+TOe2KnUnx5rkj8Bj0oVqdQutiwRrEbHy8bHqnQhPnPHaSdkBHs2AOW3LOfQ+GfWRSdpRT2iMccqjeVJX2Jyywt1hbaXdqvyL0REuchERAIbA/mH/V5SZkNgfzD/AKvKTMhFpCIiSVEREAS3VcAEnIAEmXJFbpq+94Wu/FSfwtId9gqvk90EQaI4jcjoMo0OLmsh2b59Cs1bcluk1aYRvaAGWftCTu53SCVK1YKTeyNYjpEzYtVCb2P2Zd0+Ga8unkk5R9qPmuV/z5GPhgaNQ0G47oeUh2dmySdTC6jCsmdhZhxqdsvaawG/Jlk63ZDxEcHQZg6A0zTqpql1vsIJFweEETRKSXV0cY7pLhXROUaocBlNwZcmu4nSlPCvcuDTY5gG5Un+K3FxyfpuGAIzBFx0SIzjLo0ykoSSTa4ZRi/cf5W8JgUtg6B4TPxfuP8AK3hMClsHQPCXIRKxEQQR+6D8tX/9vW/sM4ix1cMny3nb9Pflq/8AQrf2GcM0hfeaSLmSiqBztkPKatN0Zi1atxR030S4TUwIqHbVrVanUDqD6JNr0lg1rUqlFhdalN6Z6GBHnLWhcAMPQpUF2U6aJ2DM9t5nzNJ27NkVSo+ZjRZVNJveSoaLfMrap+on0pQWyqOJVHYJw7d1gd50hWUCwerSrj/5La3+4NO6rsnbM7UWcsSpyXxPYiJwOwiIgENgvzD/AKvKTMhsF+Yf9XlJmQi0hERJKiIiAJqnpLxGrgnXhd6dPtNz9BNrnPvStiMqFEcLvUPQBYeMvjVyRzyyqDZodKqUGXFN59E9BmFfENchnWkpPEou31M0J6T1GSjTF3qMEUc5nb9A6KXC0KdBNiLYnlMc2J6TO+pa4VcmXRxfL7ElOT7uqDYPE66D8Otdxtyce8PPrnWJru7nQ3rWFdQPbT8Wn8y8HWLiY5YseSlkVo9GObLjTeOTi/gc1xGkmqpY5ZWz/wAzofo50gauEVWN2pMaRPGBmv0InJsK9xN+9E9bPEU+em/aCPKapaXDhh7qKj8jDi1WXJk95Jy+Zv2L9x/lbwmBS2DoHhM/F+4/yt4TApbB0Dwmc2IlYiIIMPTP5et/Rq/2Gcc0Hh99xeDpHMa1Jz+hS/8AxE6/p1wuGrE5AUKv9hnNNwVC+kEv/wBPCM3aEX/lO+J1CRlzK8kF8zrcRE4Go5N6VsP/AKtGFgThb9JSobeM6fo3EirSp1RmHpo/eUGcv9LGIPrdJBtXDEn9Tn/tm3+jPFGpgKYO2m1Sl3WNvoRO017uLOEH7ySNriInE7iIiAQ2C/MP+rykzIbB/mH/AFeUmZCLSEREkqIlDsACTkACT0CadV9IVIMQtGs6g2111LHnAJvLRi5dEVlOMero3Sco9IGJ3zFleClTVOs+0fETZ23f0SPYoV2PEVRR2lpz7SmJNRqtZhZncta97X2C80YMbUraMepzRlHbF3ZsPoz0VvlZ8Sw9mkN7T522nqHjOoSF3JaOGHwtKnbMrrtzs2Z/85pNThkluk2asUdsEhERKHQ4tut0X6ti6iAWSp+KnFZto6jeSno1r6mLZPiUSOtTf7zYPSbo3XoLXAzotn8jZH62M0rc9iN6xNCrsG+BT0Nl5zbF78VHnzXh5k/M7Ji/cf5W8JgUtg6B4TPxfuP8jeBmBS2DoHhMR6KJWWcTiEpKalRlRVFyzEAAc5MvTX91mgWxq00FQKqOXZSDZzay3I4s+2Skm+Ssm0uDRt2+7xa4OFwxJpnKpVII1xyUB4OM8Ms+irEGpjnY5/6Vx/vS0s6X9HGNP7sUm6KlvoQJsnot3LVcHv1Suuo7atNVuD7K5lsidpI7Jok4xg4xZmgpSmpSVHQYiJmNRp26/c1Tr1qeI1irimaR9kMrLckXFxmCT2yY3LaITCUBSTWN2aoS20sxzNuDol3SmbovP5yUlt7qiuxJ7u4iIlSwiIgELgf379DeUmpDYP8AMP0N5SZkItIRESSp4RfKajpXcYpY1MOwpMcyhF0J5rZrNviWjJx6FJ44zVSVnKNPaHxeGp79VKMlwp1GYkX4SCBlIfRWFbF16dBBe7B3PAqKbknw652x0DAggEHIgi4PVMTR+iKNAsaVJKZc3YqLXnb6w9tMzfU4KSa6GYFsLCVREzmwRE0Ddjp2sazYWnU3lVVS77HbWF7KeAdEtCDk6RTJkUI2yY3Z7oKVGm1E2epUUqKYOwHLWbiE5rjKIREAPtBQTzHgl2lQVWtT1qtQnbmzE+JleJ0DjSxX1aqSQCD7JGfPfKboRWNU2eZkySzO0uEdT0Xi9+wiVTtajc9OrYxS2DoEq0fhDRwq0jtSjqnp1c/rFIZDoHhMD6nrR6EpERIBbqrcbSOcTD0ex1mBN+GexBJnxEQQRONa9ZRxWktESWBERIAiIgEdW0ZdiwYqTxG0tHRzfEfvGIkUTY/Z1T4jd4/aP2dU+I3eP2iIFno0fU+I3e/xPfUKnxD2/wCIiBZV6lV+Ie3/ABPRhKvxP/OyIkg9GGq8vw+0qFGry/D7REA93qtyx2L9pbqYOo3vFG6UQ+IiIIPUwtRfdKjoVB5Sve63LHYv2iJABoVSCC4sQQcl4eqVDCxEkk//2Q=='
  }
  ,
  {
    parte:'Ojos',
    ejercicio:'Con el cuello recto haga movimientos circulares con los ojos hacia el lado derecho y luego hacia el lado izquierdo durante 10 segundos.',
    img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRUSEhUYGBgYGBISGBUSERIZGBgRGBkZGRgYGBgcIS4lHB4rHxgYJjgnKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQrJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0MTE0NDQ0NP/AABEIAMYA/wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EAEEQAAIBAgMEBwUGBQQABwAAAAECAAMRBBIhBTFBUQYiYXGBkbETMnKhwSMzQlJi0RSCsuHwFSRTkgcWc4OTouL/xAAZAQACAwEAAAAAAAAAAAAAAAAAAQIDBAX/xAAoEQACAgEEAQMEAwEAAAAAAAAAAQIRAwQSITFBMlFxIjNhsROBkRT/2gAMAwEAAhEDEQA/ANjix1vP1MjVaObvkvEjrefrGAQQisKWNjFAk+rRzDt5yGVI0MYCARQIoEeBABFEfacBHAQAS0cFihY4CIBLRQscBHgRWMaBHARQscFhYUNCxwWOAjwsLAYFjlWPCxQIrAaFi5YS0ULHYAgkeEjwscFgAP2c7JC5YoWAwQScUhcsXLACPlnFIfLEKwERysayySUjWWFgQ2WFwA+0T+b+kxXSLgRaon839JjAj4j3vP1jAIWsNT4+saoggEtGVaQYdvOHCxwSAFXktHWk2tQvrxkQjhCwEAjpwEeIWAoEUCcI60QzgIoE4CPAgBwEcBOUR6iRA4LHgTgI4CACASu23tmnhlu+rnRUX3ie3kO2LtrH+yQKpszX1/KgF2bv3DxnlWMxhquzXuCTa+Y6cBvlcp80jTiwWlKXTNX/AOZ8RUOiFV5IvDv1MkJtd/xK/wD8lte5rTNbNvcDID8Nry9o4gWtdk56Blv2jX6THmtvn9nTxxio0v0TV26VOrun/qCwPcdQZZYbpCRbPZhzXQ/3mfrMQDdQw3k0xf8A7IdfImVRyamm1uwaoTyI/CfKRg5LlMk8cJKpJfo9UweKSouam1xxHEd44STlnleA2u9JwQSp5E3BHZznpGxdpriEzLow95eR5jsm3Hk3cPs5mo0/8fMeV+iblnZYTLFCS8yAssQpD5IhWAACkYyxcTiVQXY+Eq6lepVNqYsOf94AFxeKVNN55CRNnGpUrKQLKM39JhP4RE1qHM3LhC4HEFqqgaDrafymMR1Tee8+s5BHONT3n1nARAdaPAnAQgEAG5ZCxQ63gJYASBjPe8BBACiiII4QYCiLOEWAxyxyiNEeIAPVY9RGrHiRHQoEeBEEVmsCTwBPlCx0eb9Mtos1dlTU6UVA4k6G3jeUeN2PWwzqtVbFlDjKbi3Ed4l50Ywvt8YKj6hM9X/3GNl9WnoG29jpiaYVjlZesjj8LbvIiULq/c3OW1peEeb4AA/iGvAgXv42+UtHOVczAcLsoJB5aHWOrbHej1XQ23Z1XMCP85yveuEOXNl4a3y+NtB8plnBtmuOWNUmEr5X6yFTbgCQfA7+e8SrrMrdU3DD82jeDDf4w+Johuta/J6ZBt5ftIZLe6SHA4No47ucnGNE3IGahHVcXXnaxHhwPdpLTYm0nw9RWBuB5MvEHw/eQFYEW3jdr7w7GHKcadhl5aqf875JsW1NU+j27DVVdFqLuYBh3EQlplOge0Q1BkY/dtpf8j9YfPNLutjixy0xc8+E1wdqzjZI7ZNErEYhUF2MrXxT1DamLD8x5RzYdV61RszcoOpiGOg6o5CTKxv8Oidaoc7cuF42riGbQdUchOp0mY2QFj2fU8JY4fY5OtQ2/Sh9W/aCEUy07mwBZjwGp/t4y22fshgwqOctr2VbE6gjU+PCXNGgqCyqAOwevOFjAyrDU959YonHee8+seoiAUCPAnCOEBjZDxadbwEngSLiV63hEhMiBIopwmWOCyQAgkcFhgscFgAG0cIcLFtEMEseITIIvs4DsaIzEqSjgbyrAd9jC5J2UyLQJnmHR6ncVM1R0XqqfZuEckFtM9rgWN9JcJs1Cc1DF4lG4sMSzjxV7yDV6Os9epS1yLiFLhTYikwBuPDlrrO2TsZDjqtFqDIl2yPSd1NKx0biGFuYIJMWODa4fRpyTW7lXZv9mMwporOajAAF3ADOeZA0vIW38MlWk1NyUzC2dAocfCSDaF2Rg3pko5zAE5Wta630JHA2gNr4d6hKU9+7XdeV82WWqMTjNjYWkv3jq2vXqPqeO4AcuEoK1XX3lqL/APbwO8ePIza7W2C2HooUoDEVnV1qVKil8jki2RfwqLkbtYp2AXwtOnURVqC5D5QrKt7gMRqdNLHslrxrbbZSs0lKkjErU/ECSBob++o5MOI7ZOptmF+XLh/aF27s32ZDUyAwAvbceyQsBUzWI0I3jl3dn1macaN+DLudM03Qh1/iGpuTlZGuBxZSCB8zN+1ewyoMo+c846I0y2NRV4+0420Kkz1ahsxd7nN2bh/fxl2L0mLV/cZU0qLOeoL8zw8WhsNhgXCNwLXAJsSBL8KANJUYb7/xf0ltGQtqdMKLKAByA0hIgixgdOnToAZUbz3n1MKBGKNT3n1MIBEA4RwiAR4EBnSLife8BJkiYj3vASIAgI8CIsdHYCgRwE4CPAhYHARQIoEcBGBwEXLHARwEAGgRcsdadaRsCqxYC1QwGrKLnnY2EsqFW8q9t9Vqbc8yeO/94XC1JXLhmuCUoIm16lmHczeAEhbLqhszdsrdt7WNNrBC10K35X1MH0exZysCpGtxfjF4JJeDQ4mvaUeMr3vJWJq3lLjKu+JckqSRn9uPeUKIVdWG4nXuO/1+Us9rVbyNTqIy9U3ta57SLW+UJ9DwK5l90Hv/AKjTH6KrHwW31nsAnlX/AIc0M+OqVOCUreLtYfJTPVZbiX0mfVu8rOMpcJ9+fiqS6MpcJ9+fiqSZmLoRYkWMDp06dADMJvPefrCCDXee8woiBDljwI0R4gM60iYk9bwk0SuxzWfwEAFUx0jCrrCpVkNyuh7XVkgRyxqxRGIKojxGLCCNAKBAHGICQXAINiDzkiZnEjrv8bSnPleONouw41kltZo0xCHc6+YhgRwmSIjlEyrW+6NL0fsy823hi9IkDVCKg8L3HleVmAxF1uNeNoyk7XtnYDsYyvZjQf8AQx0PI/lMtjnjPgSxSxrktHx6nQ0HYdgB9DANtAbvYuvLRR6mL7BanWDMp5o1jGfwqpdiSx5uxJlvBO41dDsRU0uRbsve0oNo4oC8JtXaIHHnMrj8ffUmw9Y0imUgOOxF7+QhNlUOpf8AM+nctgT5mVisXYW46ATV0sNlC01FytqajnUP/wCiBK8sukjRp1X1vwbb/wAOcHlp1q3/ACVMo+GmMv8AVmm1lT0cwopYenSH4Qb9rEksfEky1vNMVtSRzsk983L3FMpsJ9+fiqS5MpsJ9+e+pGQLkRYgixgdOnToAZlN57zCiCTj3mEEQIII8RgjxAYolNtR7P8Ayr9ZdTO7be1W36V+sXkBFeFWpxmYGLdrsGI1OgMMuLf8xlbxNuyxZElRsEccx5iEDjmPMTE+0OfOdW117+yK5LHMd+ny7JZtZFON8m7QwgmRwe1HQZVAtyNyPDXSafA1s6K53kXsIVQm14JImarrd3H62mlEzj/eP8bzJrFcF8mnSet/A32e+/CcsNlvccyBJAropyMi258bc7znKCfLZvlNrhKyHR3+Ek4ekruEcAqQwIO4i0CFAYgajgezhJWA+8Tub0k8KqSX5IZXcG/wVu1NmvhlepRfMi9Yo56yj9LcfGZfGbZqvoFt3kT0Hb9dEpEVDo5VBu3seN+FheU1Xo/TYBlYc9GE67VeDnxlaps88xRY3Zzz0lDnLG5N5uekOz1QEX8ARe3ZKdejJASqj5qT6hjoy23qw3X0I0ik9sdzJxW6SiuwexMNY+0I3aIDxfgfCbjongM7+3PuIcqfqqfibw1HeTymf2fhGr1koURa91zcFQe+/wBBznp2Gwq0kWkgsqWUfK5PadSe+VYo7pbmXamahHZEn7OHUXx9ZNkTAe4PH1kqa32zmx4SOvKjBn7c97y2lRg/v2+KpI+SSLoRYgixgdOnToAZhN57zCrBLvPeYVYgQ8QgghHgwGPmS6T1bVwP0J6mawTEdLn/ANyPgT1aCEVeFPVHj6wwkbBHqDx9ZJEkIeDCLA3hBAAimbHZP3SfD9TMYhmz2Ufsk+H6xMZOmcb7x/jeaO8zjfeP8bzHq/Qvk1aT1v4CshsT3SNi6trFjbS1iNfCSHqWDE7gB8tYTo1RR2dnAZibWYA2XSYsUXKW1M2ynsjuZVrtNAdQw035f2lns3Eozo4PVs2pBA3dsk7V2AAC9IXG8py7R+0To/RBVqfFTcD9J/vLsWBxnUu+0VZc0Z47j/ZQ9L8b7SslFdVTrk83YaeQj8DhlKElQTbiBNk+yKbj7RFbkSNR3GcuxaQFgptyDNOxGcUjj5McpS4Z5JtSn1jLHo116NTDPcKCWRx+rUi+4EG/nPQa3R+iDdaa35tr6wdegtNMzAADcABqeQEhklFxafRbhhKMk0+Sp6NYalhszuygles53AAiyr2ce0ybW2/QzGzMdb9VHP0lemBqYh726vC/uqPqZeUdh0qa5nGc/q3eCzFGc5OoKkvLNklBczdt+EM2d0hwzWTPlbk6ld55nSXwYTzfpFh0uHQAXJVlG69r3Ek9B9rMtQ4VySrBnpkn3SNWW/LW/hJxyvdtkQngWzdFnoBlPgvv273lxKfBfft8VSX+ShdF0IsQRYxHTp06AGXXee8/WFUyOTqe8/WFWIEFUxwgi4XUkDvIgU2jTLFc4uO8RWgJomC6ZvbEgfop+rTVY3aWVfsypc3yq19QN5vwmL6SOalUVLj3EFxe1td3zhuVgBwB6i+PrJMiYA9RZKBkxC3hUbd8JECY5W9LRgHWbDZX3Sd31mNUzY7KP2Sd31iYywBmaqPZ3P62miBmarnrv8bTDrPQvk1aT1v4ExTnI/dCdGXy1v5bfMQGJ9x/hhOj4s5P6frMem+4jdm+2ze3uNJBfDqjiqqnXqsFBOh1vYdoHnD06oC3Y2A1JMjJtmizZQ3iQQPOdWU4qlJnJUZO6RLXGIfxeYYeohlqA8Yqm8W0mRBvXUcfkTIRwYqtnqAkDRVOgt+YjmTJw0NuevlvhIPkadA1QDQCwHAbpV7ZxNlIEsMRVsJnNpPcGBJLyzHWJaozG93bwA0gcA5TFYZh/wA1MeDHKfWLSLCvVpn3bB1/mOsXCKP4rD33e2QnuBvOc+M7OjHnB/p66JUYL79viqR67dw3/MnmZX4TadEVWY1EAu5BvznROYacRZW/63h/+ZP+0Ubaw/8AzJ/3EYixnQGHxKuLowYbrqQdYeAGRdrE+O7vlZV20QWVVAsbam57dITbdcIrEsRv3GxPjvmeVxkUsAXZ7XB1635geEqnJrhAap6jMnUJZm3Z1UAX424yjx+Fekym5feSdBrbfftN9JZbKxhWyHVB1dbXU9/EX4yL0ixDh1XKMlxqALk98i+VYFClY3a7truU69bkDyAjMZQFQmoxycDYixPcdxveFdTmUZAACA3arGwYHz8ZG2+4T7PUNowJBDZTz5g/SVxtyAXAgBFAN++0ki3M+QkLZx+zTuksTYhBAR2+QiiDWEEYD1M2GyT9knd9ZjVmu2Sfsk7vrExliplFVwjl3IRiCzEHTUS7UwisOcoy44zjTLMU3CVoz2MwzhHYoVFuNuyC2XcVFtxBBk3pBi2FqYIyva+lz7268BstL1B2CY3iUM8VH5N0crngbl70S+kmPyeyTg2Z27QLC3zkOlXRxy0lztnYgxCqdcyXy5SBe/A3lZszo5VLD2gyIOAYFmHLTQSOp00sk7RLBlxxxcumjU7KYmkhOpsNeyT4KkmUAAaCwHdCTpQjUUvY5knbbA4g2ytyYDwOn1EKx0gMebU2PIX8tY+s2kbBdkDFPM/tKpYGXWJaZvaz74kSZR4Rc1So3Yo9f2ga7ZKtN+Tj56SfsdMy125NTH9X7yu2ythfkQfI3+k52b6dQn70dHDzga+RpEYwjyYxmnUOWMMaRH3jbwEehdAB9g3xn0mrmZ6CD/bX5u000Qzy/pZigrBbC+UvfiAC2luUz2CxRfLcqranW1gdLE6aGX3TCndlIAJKsu/hmJN+yZSkgDWfeOt2C+6/dulE+xGpxdYFFzoFc31S3WQfiFt/DnBUNp+4KidVTnI03qNP3klcYihSrhnKlVBUWVeIHlK8AOHzAMxbQpppYAWUndc6wGLtHEZftBlIZjuFgUJ10OtpCx7LWb21QX6gQWNgFFypPnI1VHzaqMoup1JFxFeu9NC9NdCMhJW4A7pFN7uACYA9RbaDkZMFv8Eg7Pe6ITykoGakIMDFBggY4NGAVTNXspvsk7vrMkDNTspvsk7vrEwRZq0caStvECjQqtI0MrNt4VVVGA1zgC/KxJ9BF2KvXbuAjtutcUx+pj5L/eD2M9nbwEwPnVV7I3rjTfLNjh10hrSPhnuJJm9GF9izol4sYiNjxem/wt6Ra+6Liz1H+FvSMxDjLExx7KnFNMttt9DNDjag1mQ29W0PbpBEmTeiyZqFc8+t5GVm210J8ZedEadkqJ+lh4kSo22nUPcZg1fGSLN2kf0SRWFxGFxK32+g7hG+3M6KOc+yxLxpeQPbmOFbtgI9c6Cj/ar8TGaSZroGf9onxN6zSxDPNuklJS4LM68BlAsesTa/M3mSxNmZ8gIJP5TuubMec0HS/EOHVE4qSL2sDmIvrx3Siw2LCWdwxa5AtYhltu7u2US7ASlTCkBwdCLXvqCetaXVeqgVgqZXXKRmAHV4MDx0gcPjEtTugY3cWYiwF75iN4t2yBicTfM1Q57XVFNxYcLW4DSKqAJjwzhbDcuhGUX1vrIGPBygGzB1BzUyQwsSfHj5x+GxQBCOrEb7i11PMf5whqOJVHGmdbcPysDY9nd22kU+bADs/wC7TXhJYtz9YymiZA1NrrroRYjXlOmqLtCCLbt8pymMvOBjANmmq2U/2Sd31mQvNFs1z7NO76xhZdq45wi1hzlapj1gFjNrVgzIAdwY+doGjVyIX5P8rCSamzalTroA1hltcA336XlfjqbpQYFGvdzuHdvv2TDGEv8AocmuKNspx/gUU+bNRgceCoIMtaeKnn2BeoqKQLGw6txqLdnGWFLbOXRwR3gzXRmTTNuMSIvtxMiu215x67ZU/ii5CkaLG4gZGHNWHylY2Muinmq+glVX2utt/OUw2wAgW+q3TyjoOEWm0MWNdZksTW9pUVeFxeFxFd6hsoIHODw2HsSeHueJFz8vWMTZr+ixu79tvS0qNrL1WHePUSx6ImzMBuFgJE2ytmcfqcfMzBrV6X+TdonzJfgylLC3RTk4bwd/CDfCDkR5S52ZgMU1JXppmS7gWKaZWIOhN42o1dWyvS1sTb2dzYd03QdpMwzVSaKVsIOZ8RGfwvIy3bFW9+lbwcesm7MxSO4QJbtNiJIgbXoAtsIoP5n9ZppUbGdEpimGBtckgWFz2CWi1AdxBg0wtHlnTVQWAsLhL5uNs+omZomzXfrgMpsdNBwHLl3Tp0ol2MskqAMuVFBYMh4jU7x4G0fjcGQua4seFtR1tBflOnQS4AlfZPTKhMpCgMRa5a51Db5X1sKMOy5uuCq3B095rgjkRFnRpARUp5bqDuJHz/vCqLzp0vESUwZPEfOHTZ/NvITp0EAans9eJPnLTDoFAUbhOnQAkKYQGdOgCNLsAfZ35s0qulItQ/lJ8506Q8kkUuCO7uSXCYZW3geU6dJMaCps6nvyjyETEbJpn8I8p06RGVtTY1PlK/8A01FqMAo1QNu4g2nTowGYpQoNhwMbsfAe1pgE2uzPcctBadOil0Jdl9hcIKDLl1zA3ubbvCQNp4Uu9Qiwu3EnfbuizpmzK4L5NOBtS4HdHsG9JHUPqKjHqlhvAP8AmkOcZ1wzDNlBBGguLdk6dL4cRRmm7myxoIlUHKCLcGAIkarg1U3yrfdcAX9J06SEDNME2/z94bZldvaKAxt1tDr+Ezp0afImuD//2Q=='
  }
      ]

}
