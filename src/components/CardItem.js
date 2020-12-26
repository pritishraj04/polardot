import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const url = `/.netlify/functions/instagram`;

function CardItem() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  function FetchURL() {
    setLoading(true);
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function useInstagram() {
    useEffect(() => {
      FetchURL();
    }, []);
    return posts;
  }

  const gramz = useInstagram();
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <>
        {gramz.map((gram) => (
          <li className="cards__item" key={gram.id}>
            <a className="cards__item__link" href={gram.url}>
              <figure className="cards__item__pic-wrap">
                <img
                  src={gram.thumbnail}
                  alt={gram.url}
                  className="cards__item__img"
                />
              </figure>
            </a>
          </li>
        ))}
      </>
    );
  }
}

export default CardItem;
