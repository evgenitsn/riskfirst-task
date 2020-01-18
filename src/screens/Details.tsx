import React from 'react';
import useLoadInitialData from '../hooks/useLoadInitialData';
import { Loading, Error, NearbyBusinessRow } from '../components';
import { useParams, useHistory } from 'react-router-dom';
import { DataItem } from '../reducers/types';

const Details: React.FC = props => {
  const { id } = useParams();
  const history = useHistory();

  const { data, loading, error } = useLoadInitialData();
  const detailsData = data.find((e: DataItem) => e.id.toString() === id);
  const nearbyBusinesses = detailsData
    ? data.filter(
        (e: DataItem) => e.address.country === detailsData.address.country
      )
    : undefined;

  if (data.length > 0 && !detailsData) {
    history.replace({ pathname: '/404', state: history.location.pathname });
  }

  if (detailsData) {
    return (
      <div>
        {loading ? (
          <Loading />
        ) : error.displayMsg ? (
          <Error error={error} />
        ) : (
          <>
            <img src={detailsData.image} alt='Business' />
            <div>
              <h2>Address</h2>
              <div>
                {detailsData.address.number} {detailsData.address.street}
              </div>
              <div>
                {detailsData.address.city} {detailsData.address.country}{' '}
                {detailsData.address.zip}
              </div>
            </div>
            <div>
              <h2>Contact</h2>
              <div>{detailsData.phone}</div>
              <div>{detailsData.email}</div>
            </div>
            <div>
              <h2>Nearby Places</h2>
              <table>
                <tbody>
                  {nearbyBusinesses?.map((item: DataItem) => {
                    return <NearbyBusinessRow key={item.id} item={item} />;
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Details;
