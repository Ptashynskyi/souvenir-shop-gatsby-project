import React from "react"

export default function Title({ title }) {
  /* Записуємо пропс, щоб юзати в iнших частинах програми */

  /* Записуємо рядок, бо ми знаходимось в контейнері і дальше стилізуємо заголовок бустрапівськими прописами*/

  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className="display-4 text-capitalize font-weight-bolt">{title}</h1>
      </div>
    </div>
  )
}
