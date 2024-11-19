import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };
  return (
    <ItemContainer onClick={handleRemove}>
      <h3>
        {repo.name}
      </h3>
      <p>
        {repo.full_name}
      </p>
      <a href={repo.html_url} target='blank' rel='noreferrer'>
        Ver Repositório
      </a>
      <a href='#' rel='noreferrer' className='remove' onClick={handleRemove}> <br />
        Remover
      </a>
      <hr />
    </ItemContainer>
  )
}
export default  ItemRepo