import React from "react";
import { IUser } from "../types/types";
import styled from "styled-components";

type UserCardProps = {
  user: IUser;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <CardStyle>
     <ImageWrapper>
     <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          
        />
     </ImageWrapper>
    
      <InfoStyle>
      <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
     
      </InfoStyle>
      </CardStyle>
  );
};


const CardStyle = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 10rem;
  transition: flex-direction 0.3s ease;

  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 90%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4%;
    width: 100px;
    height: 100px;
    max-width: 100%;
  }
`;

const InfoStyle = styled.div`
  margin: 1rem;
  text-align: left;
`;


export default UserCard;
