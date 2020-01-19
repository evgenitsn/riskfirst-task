import React from 'react';
import ReactImageFallback from 'react-image-fallback';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import placeholder from '../assets/placeholder.png';
import {
  DetailsAddress,
  DetailsContact,
  DetailsNearbyPlaces,
  Error,
  Loading
} from '../components';
import useLoadInitialData from '../hooks/useLoadInitialData';
import { DataArray, DataItem } from '../reducers/types';

const HeroImage = styled(ReactImageFallback)`
  height: 300px;
  object-fit: cover;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;

const DetailsSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;

const Details: React.FC = () => {
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
      <>
        {loading ? (
          <Loading />
        ) : error.displayMsg ? (
          <Error error={error} />
        ) : (
          <>
            <HeroImage
              src={detailsData.image}
              fallbackImage={placeholder}
              initialImage={placeholder}
              alt='Business Image'
            />
            <DetailsContainer>
              <DetailsSection>
                <DetailsAddress data={detailsData} />
                <DetailsContact data={detailsData} />
              </DetailsSection>
              <DetailsSection>
                <DetailsNearbyPlaces nearbyBusinesses={nearbyBusinesses} />
              </DetailsSection>
            </DetailsContainer>
          </>
        )}
      </>
    );
  } else {
    return null;
  }
};

export default Details;
