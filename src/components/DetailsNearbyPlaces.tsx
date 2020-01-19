import React from 'react';
import { DataItem, DataArray } from '../reducers/types';
import { NearbyBusinessRow } from './index';
import styled from 'styled-components/macro';

const DetailsNearbyPlaces: React.FC<{ nearbyBusinesses: DataArray }> = ({
  nearbyBusinesses
}) => {
  return (
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
  );
};

export default DetailsNearbyPlaces;
