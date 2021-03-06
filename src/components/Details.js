import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsRequest } from '../actions/actionCreators';

function Details(props) {
  const { match } = props;
  const { item, loading, error } = useSelector(state => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsRequest(match.params.id));
  }, [dispatch, match.params.id]);

  const handleError = () => {
    dispatch(detailsRequest(match.params.id));
  }

  if (error) {
    return (
      <div className="error">
        <p className="error-text">{error}</p>
        <button className="error-button" onClick={handleError}>Повторить запрос</button>
      </div>
    )
  }

  if (loading) {
    return (
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="spinner-circle ServiceList-spinner-circle" cx="25" cy="25" r="20" fill="none"></circle>
      </svg>
    );
  }

  return (
    <div className="Details">
      <label>
        Название
        <input name='name' disabled value={item.name} />
      </label>
      <label>
        Стоимость
        <input name='price' disabled value={item.price} />
      </label>
      <label>
        Описание
        <input name='content' disabled value={item.content} />
      </label>
      <div className="Details-footer">
        <Link to={process.env.PUBLIC_URL} className="Details-button">
          {'<< Назад к списку'}
        </Link>
      </div>
    </div>
  );
}

export default Details;
