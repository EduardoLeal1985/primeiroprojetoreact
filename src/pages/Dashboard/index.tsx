import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://scontent.fgru14-1.fna.fbcdn.net/v/t1.0-9/91480665_566270473986134_2136913793614086144_n.png?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=YoZkwO0nTQUAX8qQgId&_nc_ht=scontent.fgru14-1.fna&oh=4a873ef51eda06b1daa652cc601e71fe&oe=5F11DF16"
            alt="Eduardo Leal"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
