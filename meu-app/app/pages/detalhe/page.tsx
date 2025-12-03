'use client'; // Necessário para usar hooks do React/Next.js.

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function PaginaDeDetalhe() {
  const searchParams = useSearchParams();

  // Acessando os parâmetros recebidos:
  const id = searchParams.get('id');
  const nome = searchParams.get('nome');
  const preco = searchParams.get('preco');

  useEffect(() => {
    if (id && nome && preco) {
      console.log(`Dados recebidos: ID ${id}, Nome: ${nome}, Preço: ${preco}`);
    }
  }, [id, nome, preco]);

  return (
    <div>
      <h1>Página de Detalhes</h1>
      {id && nome && preco ? (
        <p>Exibindo detalhes para: ID {id}, Nome: {nome}, Preço: {preco}</p>
      ) : (
        <p>Nenhum dado de produto encontrado.</p>
      )}
    </div>
  );
}
