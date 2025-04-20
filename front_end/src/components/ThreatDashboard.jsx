import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThreats, searchThreats } from '../redux/threatSlice';
import ThreatTable from './ThreatTable';

const ThreatDashboard = () => {
  const dispatch = useDispatch();
  const threats = useSelector(state => state.threats.filteredThreats);
  
  useEffect(() => {
    dispatch(fetchThreats());
  }, [dispatch]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch(searchThreats(searchTerm));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Cybersecurity Threat Dashboard</h1>
      <div className="mb-4 d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by IP, Domain, or Threat Level"
          onChange={handleSearch}
        />
      </div>
      <ThreatTable threats={threats} />
    </div>
  );
};

export default ThreatDashboard;
