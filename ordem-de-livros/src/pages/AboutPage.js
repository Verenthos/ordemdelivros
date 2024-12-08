import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="background-image">
        {/* Adicione uma imagem de fundo, se desejar */}
      </div>
      <div className="content">
        <h1>Bem-vindo à Ordem de Livros</h1>
        <p>
          Descubra a ordem perfeita para ler suas séries favoritas! Nosso site é dedicado a ajudar os leitores a encontrar a sequência ideal para aproveitar ao máximo suas aventuras literárias.
        </p>
        <p>
          Sabemos como pode ser confuso acompanhar a ordem correta dos livros em uma série, especialmente quando há prequelas, spin-offs ou cronologias alternativas. É aí que entramos! Nós pesquisamos e organizamos as informações para você, para que possa desfrutar de uma experiência de leitura perfeita.
        </p>
        <p>
          Explore nossa coleção de autores e séries populares, e descubra a ordem recomendada de leitura. Queremos que você mergulhe completamente no mundo criado pelos seus autores favoritos, sem perder nenhum detalhe importante.
        </p>
        <p>
          Junte-se a nós nessa jornada literária e aproveite ao máximo cada página. Feliz leitura!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;