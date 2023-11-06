import React from 'react'

import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import DetailsBanner from './detailsBanner/DetailsBanner';

const book = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );
  return (
    
    <DetailsBanner  />
 
  )
}

export default book
