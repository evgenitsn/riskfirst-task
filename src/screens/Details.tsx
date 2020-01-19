import React from 'react';
import useLoadInitialData from '../hooks/useLoadInitialData';
import {
  Loading,
  Error,
  DetailsAddress,
  DetailsContact,
  DetailsNearbyPlaces
} from '../components';
import { useParams, useHistory } from 'react-router-dom';
import { DataItem, DataArray } from '../reducers/types';

const Details: React.FC = props => {
  const { id } = useParams();
  const history = useHistory();

  const { data, loading, error } = useLoadInitialData();
  const detailsData = data.find((e: DataItem) => e.id.toString() === id);
  const nearbyBusinesses: DataArray = detailsData
    ? data.filter(
        (e: DataItem) => e.address.country === detailsData.address.country
      )
    : [];

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
            <DetailsAddress data={detailsData} />
            <DetailsContact data={detailsData} />
            <DetailsNearbyPlaces nearbyBusinesses={nearbyBusinesses} />
          </>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Details;
