import React, { useEffect, useState } from 'react';
import Themes from './Themes';

export default function Main() {
  const [value, setValue] = useState([]);
  const [input, setInput] = useState('');

  const tagHandler = (e) => {
    setInput(e.target.value);
  };

  const tagSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f5e919abe7msh55111e9f3cea076p192978jsn4d0a02cb4ae5',
        'X-RapidAPI-Host': 'giphy.p.rapidapi.com',
      },
    };

    fetch(`https://giphy.p.rapidapi.com/v1/gifs/search?api_key=UOGLSxkTAElybRXu73xlZd15DjKMWah4&q=${input}`, options)
      .then((response) => response.json())
      .then((response) => setValue(response.data))
      .catch((err) => console.error(err));
  };

  console.log(value);

  return (
    <div className="body">
      <div className="container">
        <div className="LOGO">
          <span>GIPHY</span>
          {/* <span style={{ color: '#21d205' }}>G</span>
          <span style={{ color: '#e91e63' }}>I</span>
          <span style={{ color: '#f1da0c' }}>P</span>
          <span style={{ color: '#bd03dd' }}>H</span>
        <span style={{ color: '#0324da' }}>Y</span> */}
        </div>
        <p className="text1">
          Введите тему GIF, которые вы хотите увидеть (На английском)
        </p>

        <form className="formCont" onSubmit={tagSubmit} action="">
          <input onChange={tagHandler} type="text" className="input1" placeholder="Пример: cat" />
          {/* <select onChange={sizeHandler} name="Размер" defaultValue="DEFAULT" className="form-select" aria-label="Пример выбора по умолчанию">
          <option value="DEFAULT" disabled>Выберите размер по умолчанию:</option>
        </select> */}
          {/* <button onChange={tagHandler} type="submit" className="button1">Ввести</button> */}
        </form>
      </div>
      {/* <div className="ThemesList"><Themes /></div> */}
      <div className="gifCont">
        {value?.map((el) => (
          <div className="OnePostCont" key={el.id}>
            <img className="img" src={el.images.original.url} alt="" />
            <p>
              Имя GIF:
              {' '}
              {el.title}
            </p>
            <p>
              Автор:
              {' '}
              {el.username || 'Имя Автора отсутствует'}
            </p>
            <p>
              Ссылка на автора:
              {' '}
              <a href={el.source} target="_blank" rel="noreferrer">{el.source || 'Ссылка отсутствует'}</a>
            </p>
            <p>
              Ссылка на источник GIF:
              {' '}
              <a href={el.url} target="_blank" rel="noreferrer">{el.url || 'Ссылка отсутствует'}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
