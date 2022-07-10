// import PropTypes from "prop-types";

// export const props = {
//   imgUrl: "https://picsum.photos/400",
//   name: "Ivan",
//   price: 99,
// };

// export const Product = ({
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//   name,
//   price,
// }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="400" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// Product.propTypes = {
//   imgUrl: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.name}</li>
      ))}
    </ul>
  );
};

export const App = () => {
  return (
    <div>
      <BookList books={favouriteBooks} />
    </div>
  );
};
