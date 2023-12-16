import { FOOTER_HEIGHT, HEADER_HEIGHT } from 'consts';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #f1f1f1;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`;

export const ProductGroup = styled.div`
  margin-bottom: 30px;
  > *:first-child {
    margin-bottom: 10px;
  }
`;

export const ProductGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    width: 16.666%;
    margin-bottom: 30px;
  }
`;
