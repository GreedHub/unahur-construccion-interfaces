import ForumMessage from "../types/forum-message";

const TIMEOUT = 100;

const MESSAGES: ForumMessage[] = [
  {
    id: "1",
    ownerId: "bsmith43",
    topicId: "id-topic-mate1-1",
    creationDateTime: "2023-11-22T14:43:05.861Z",
    content: `Hola compañeros!<br/><br/>Adjunto los parciales tomados el 31/12/1990 con sus respectivas soluciones.<br/><br/>Si tienen preguntas, observaciones o sugerencias, estaré encantada de escucharlas. La idea es generar un espacio de aprendizaje colaborativo.`,
    likesCount: 15,
    attachments: [{ id: "1", title: "Parciales_Mate1_31-12-1990" }],
  },
  {
    id: "2",
    ownerId: "rsanchez53",
    topicId: "id-topic-mate1-1",
    creationDateTime: "2023-11-22T14:53:05.861Z",
    content: `Hola @bsmith43,<br/><br/>Solo quería dejarte un mensaje rápido para agradecerte por compartir esos parciales resueltos de Matemática 1. Realmente aprecio el esfuerzo que pusiste en proporcionar este recurso.<br/><br/>¿Podrías darme algún consejo sobre cómo abordar mejor los problemas de conjuntos? ¡Gracias nuevamente!`,
    likesCount: 1,
  },
  {
    id: "3",
    ownerId: "bsmith43",
    topicId: "id-topic-mate1-1",
    creationDateTime: "2023-11-22T15:43:05.861Z",
    content:
      "<blockquote>Hola @bsmith43,<br/><br/>Solo quería dejarte un mensaje rápido para agradecerte por compartir esos parciales resueltos de Matemática 1. Realmente aprecio el esfuerzo que pusiste en proporcionar este recurso.<br/><br/>¿Podrías darme algún consejo sobre cómo abordar mejor los problemas de conjuntos? ¡Gracias nuevamente!</blockquote><br/><br/> No :c",
    likesCount: 0,
  },
  {
    id: "4",
    ownerId: "bsmith43",
    topicId: "id-topic-mate1-2",
    creationDateTime: "2023-11-22T14:43:05.861Z",
    content: `Hola compañeros!<br/><br/>Adjunto los parciales tomados el 31/12/1990 con sus respectivas soluciones.<br/><br/>Si tienen preguntas, observaciones o sugerencias, estaré encantada de escucharlas. La idea es generar un espacio de aprendizaje colaborativo.`,
    likesCount: 15,
    attachments: [{ id: "1", title: "Parciales_Mate1_31-12-1990" }],
  },
  {
    id: "5",
    ownerId: "rsanchez53",
    topicId: "id-topic-mate1-2",
    creationDateTime: "2023-11-22T14:53:05.861Z",
    content: `Hola @bsmith43,<br/><br/>Solo quería dejarte un mensaje rápido para agradecerte por compartir esos parciales resueltos de Matemática 1. Realmente aprecio el esfuerzo que pusiste en proporcionar este recurso.<br/><br/>¿Podrías darme algún consejo sobre cómo abordar mejor los problemas de conjuntos? ¡Gracias nuevamente!`,
    likesCount: 1,
  },
  {
    id: "6",
    ownerId: "bsmith43",
    topicId: "id-topic-mate1-2",
    creationDateTime: "2023-11-22T15:43:05.861Z",
    content:
      "<blockquote>Hola @bsmith43,<br/><br/>Solo quería dejarte un mensaje rápido para agradecerte por compartir esos parciales resueltos de Matemática 1. Realmente aprecio el esfuerzo que pusiste en proporcionar este recurso.<br/><br/>¿Podrías darme algún consejo sobre cómo abordar mejor los problemas de conjuntos? ¡Gracias nuevamente!</blockquote><br/><br/> No :c",
    likesCount: 0,
  },
];

export async function GetMessagesByTopicId(
  topicId: string
): Promise<ForumMessage[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MESSAGES.filter((message) => message.topicId === topicId));
    }, TIMEOUT);
  });
}
