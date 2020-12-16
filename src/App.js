import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { ListImage } from "./components/ListImage";

function App() {


  const [saveWord, setSaveWord] = useState('');
  const [data, setData] = useState([]);

  const [actualPage, setActualPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const prevPage = () => {

    setActualPage(actualPage - 1);

  };
  const nextPage = () => {
    if (actualPage >= totalPage) return;
    setActualPage(actualPage + 1);
  };

  useEffect(() => {
    const callAPI = async () => {

      if (saveWord === '') return;

      const imageForPage = 35;
      const API_KEY = '19537257-14ce412ec514da9682eaa0532';
      const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${saveWord}&per_page=${imageForPage}&page=${actualPage}`;
      const result = await fetch(URL);
      const data = await result.json();
      setData(data.hits);

      setTotalPage(Math.ceil(data.totalHits / imageForPage));

    };

    callAPI();

  }, [saveWord, actualPage])

  return (
    <div className="content-app">
      <div className="container" >
        <div className="text-center mt-2" >
          <h2 className="title">Buscador de Imagenes</h2>

          <Form
            setSaveWord={setSaveWord}
          />
        </div>
        <div className="row justify-content-center">
          <ListImage images={data} />
        </div>
        <div className="position-button">

          {
            actualPage > 1
            &&
            <button
              onClick={prevPage}
              type="button"
              className="btn btn-info mr-1 mb-2"
            >Anterior
        </button>
          }

          {
            saveWord !== ''
            &&
            <button
              onClick={nextPage}
              type="button"
              className="btn btn-info mr-1 mb-2"
            >Siguiente
        </button>
          }

        </div>


      </div>
    </div>
  );
}

export default App;
