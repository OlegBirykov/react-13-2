import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { listRequest } from '../actions/actionCreators';

function List() {
  const { items, loading, error } = useSelector(state => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRequest());
  }, [dispatch]);

  const handleError = () => {
    dispatch(listRequest());
  }
  
  if (error) {
    return (
      <div className="error">
        <p className="error-text">{error}</p>
        <button className="error-button" onClick={handleError}>Повторить запрос</button>
      </div>
    );
  }

  if (loading) {
    return (
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="spinner-circle ServiceList-spinner-circle" cx="25" cy="25" r="20" fill="none"></circle>
      </svg>
    );
  }

  return (
    <ul className="List">
      {items.map(o => (
        <li className="List-item" key={o.id}>
          <Link to={`${process.env.PUBLIC_URL}/${o.id}/details`} className="List-item-link">
            {`${o.name}: ${o.price} руб.`}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default List;
