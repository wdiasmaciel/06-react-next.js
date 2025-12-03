'use client'; // Necessário para usar hooks do React/Next.js.

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function PaginaDeDetalhe() {
  const searchParams = useSearchParams();
  const estiloDoDetalhe = "w-full p-3 my-3 rounded-lg text-white bg-red-500";

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
    <div className='p-4'>
      <h1>Página de Detalhes</h1>
      {id && nome && preco ? (
        <p className={estiloDoDetalhe}>Exibindo detalhes para: ID {id}, Nome: {nome}, Preço: {preco}</p>
      ) : (
        <p className={estiloDoDetalhe}>Nenhum dado de produto encontrado.</p>
      )}
    </div>
  );
}
