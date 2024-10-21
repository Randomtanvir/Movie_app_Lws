import { getMovieUrl } from "../../Utlity/getMoviUrl";
import MovieRatting from "./MovieRatting";
import Tag from "../../assets/tag.svg";
import MovieDetailsModal from "./MovieDetailsModal";
import { useContext, useState } from "react";
import { MoviContex } from "../../contex";

/* eslint-disable react/prop-types */
const MoviCart = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MoviContex);

  const handelClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handelMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  const handelAddToCart = (event, movie) => {
    event.stopPropagation();

    const find = cartData.find((m) => m.id === movie.id);
    if (!find) {
      setCartData([...cartData, movie]);
    } else {
      alert(`This movie already in cart`);
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handelClose}
          onAddToCart={handelAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <div onClick={() => handelMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getMovieUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <MovieRatting value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#1"
              onClick={(e) => handelAddToCart(e, movie)}
            >
              <img src={Tag} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default MoviCart;
