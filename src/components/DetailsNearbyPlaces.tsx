import React from 'react';
import { DataItem, DataArray } from '../reducers/types';
import { NearbyBusinessRow } from './index';
import styled from 'styled-components/macro';
import { SectionTitle } from './styled/index';

const Container = styled.div`
  width: 80%;
  background-color: #ffffff;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const DetailsNearbyPlaces: React.FC<{ nearbyBusinesses: DataArray }> = ({
  nearbyBusinesses
}) => {
  return (
    <Container>
      <SectionTitle>Nearby Places</SectionTitle>
      <Table>
        <tbody>
          {nearbyBusinesses?.map((item: DataItem) => {
            return <NearbyBusinessRow key={item.id} item={item} />;
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default DetailsNearbyPlaces;
