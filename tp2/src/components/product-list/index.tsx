import { ReactElement } from 'react';
import './styles.scss'
import ProductListItem from './product-item';

export default function ProductList():ReactElement{

    const products = [
      {
          "price": 5473,
          "name": "Orgullo y prejuicio",
          "description": "Una historia de amor y clases sociales en la Inglaterra del siglo XIX, escrita por Jane Austen.",
          "id": "bf0a2bca-12f3-4617-b36a-07a42ab7e0ab",
          "image": "orgullo-y-prejuicio.jpg"
      },
      {
          "price": 6892,
          "name": "Harry Potter y la piedra filosofal",
          "description": "La primera entrega de la saga de Harry Potter, que narra las aventuras del famoso aprendiz de mago.",
          "id": "6ce8d48f-0ff2-4c5c-aa7a-86c8501711c5",
          "image": "harry-potter-y-la-piedra-filosofal.jpg"
      },
      {
          "price": 3461,
          "name": "El principito",
          "description": "Un cuento filosófico sobre un niño proveniente de un pequeño asteroide y sus encuentros en la Tierra.",
          "id": "d4246dab-84f1-4cb2-a107-4accefb55044",
          "image": "el-principito.jpg"
      },
      {
          "price": 7625,
          "name": "Matar a un ruiseñor",
          "description": "Una novela clásica que aborda temas de racismo y justicia a través de los ojos de una niña.",
          "id": "61f77ef5-1a0f-41ce-b23e-3d00d6da02eb",
          "image": "matar-a-un-ruisenor.jpg"
      },
      {
          "price": 4234,
          "name": "El código Da Vinci",
          "description": "Un thriller de misterio que sigue las investigaciones del simbologista Robert Langdon, escrito por Dan Brown.",
          "id": "e2f9d3d1-88fc-4c73-91c7-441e31845fc7",
          "image": "el-codigo-da-vinci.jpg"
      },
      {
          "price": 5489,
          "name": "El alquimista",
          "description": "Una novela que narra el viaje espiritual de un joven pastor en busca de su tesoro personal, escrita por Paulo Coelho.",
          "id": "f2d1a181-22a5-43c7-907f-5e204a0d703b",
          "image": "el-alquimista.jpg"
      },
      {
          "price": 7891,
          "name": "Los juegos del hambre",
          "description": "Una trilogía distópica donde los jóvenes son obligados a participar en un juego mortal televisado.",
          "id": "7e6837b4-080c-4e5c-8756-0d558564c34e",
          "image": "los-juegos-del-hambre.jpg"
      },
      {
          "price": 6254,
          "name": "El señor de los anillos",
          "description": "Una épica historia de fantasía que sigue la lucha por destruir un anillo que otorga poder absoluto.",
          "id": "e7c7c2a6-369f-4e2a-b430-7eeac582fb34",
          "image": "el-senor-de-los-anillos.jpg"
      },
      {
          "price": 2487,
          "name": "Crónica de una muerte anunciada",
          "description": "Una novela que explora los eventos previos y la inevitabilidad de un asesinato en un pequeño pueblo.",
          "id": "43e8feae-fa9e-4e52-9335-2ddc133f18a6",
          "image": "cronica-de-una-muerte-anunciada.jpg"
      },
      {
          "price": 3938,
          "name": "Don Quijote de la Mancha",
          "description": "Una obra maestra de la literatura española que narra las aventuras de un caballero enloquecido.",
          "id": "dccff80d-4ab9-4a84-8bb1-6a6b097d9954",
          "image": "don-quijote-de-la-mancha.jpg"
      }
  ]


    return (
        <ul className='product-list'>
            {products.map((product,id) => <ProductListItem product={product} key={id}/>)}
        </ul>
    )
}