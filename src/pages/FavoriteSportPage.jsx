import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import NavBarAdmin from '../components/NavBarAdmin';

const SportsPage = () => {
  const { user } = useParams();
  const [userSports, setUserSports] = useState([]);

  useEffect(() => {
    fetchUserSports();
  }, []);

  const fetchUserSports = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/favorites/${user}`);
      setUserSports(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFavorite = async (favoriteId) => {
    try {
      await axios.delete(`http://localhost:5005/favorites/${favoriteId}/removefavorite/${user}`);
      fetchUserSports();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <NavBarAdmin />
      <div className="sport-container">
        <h1>Favorites Sports</h1>
   
        <div className="sport-list">
          {userSports.map(({ sport, _id }) => (
            <div key={_id} className="sport-card">
              <h3>Sport: {sport.name}</h3>
              <p>Location: {sport.location}</p>
              <p>Venue: {sport.venue}</p>
              <p>Date: {sport.date}</p>
              <p>Comments {sport.comments}</p>
              <div className="heart-icon">
                <FontAwesomeIcon icon={solidHeart} style={{ color: 'red', fontSize: '20px' }} />
                <button onClick={() => handleDeleteFavorite(_id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsPage;
