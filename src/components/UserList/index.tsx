import React from 'react';

import { Container, Role, User, Avatar} from './styles';

interface UserProps {
  nickName: string;
  isBot?: boolean;
}

const UserRow:React.FC<UserProps> = ({nickName,isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>

      <strong>{nickName}</strong>

      {isBot &&  <span>Bot</span>}
    </User>
  )
}

const UserList:React.FC = () =>  {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow  nickName="Mateus Santana"/>

      <Role>Offline - 1</Role>
      <UserRow  nickName="Eu sou um bot " isBot/>
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />
      <UserRow  nickName="Fulano " />

    </Container>
  );
}

export default UserList;
