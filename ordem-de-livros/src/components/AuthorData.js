const AuthorData = {
    'tolkien': {
      name: 'J.R.R. Tolkien',
      bio: 'John Ronald Reuel Tolkien (1892-1973) foi um escritor, professor universitário e filólogo britânico, mais conhecido por ser o autor das obras "O Hobbit" e "O Senhor dos Anéis".',
      books: [
        { title: 'O Hobbit', year: '1937', link: 'https://www.amazon.com.br/Hobbit-p%C3%B4ster-J-R-Tolkien/dp/8595084750' },
        { title: 'O Senhor dos Anéis: A Sociedade do Anel', year: '1954', link: 'https://www.amazon.com.br/Senhor-dos-An%C3%A9is-Sociedade-vol/dp/8595084777' },
        { title: 'O Senhor dos Anéis: As Duas Torres', year: '1954', link: 'https://www.amazon.com.br/Senhor-dos-An%C3%A9is-Duas-Torres/dp/8595084785' },
        { title: 'O Senhor dos Anéis: O Retorno do Rei', year: '1955', link: 'https://www.amazon.com.br/Senhor-dos-An%C3%A9is-Retorno-vol/dp/8595084793' },
        { title: 'O Silmarillion', year: '1977', link: 'https://www.amazon.com.br/Silmarillion-J-R-Tolkien/dp/8595084742' },
      ].sort((a, b) => parseInt(a.year) - parseInt(b.year)),
    },
    'lewis': {
      name: 'C.S. Lewis',
      bio: 'Clive Staples Lewis (1898-1963) foi um escritor, professor e teólogo irlandês, conhecido por suas obras de ficção, especialmente a série "As Crônicas de Narnia", e por seus trabalhos sobre o Cristianismo.',
      books: [
        { title: 'O Leão, a Feiticeira e o Guarda-Roupa', year: '1950', link: 'https://www.amazon.com.br/Le%C3%A3o-Feiticeira-Guarda-Roupa-Cr%C3%B4nicas-N%C3%A1rnia/dp/8578277376' },
        { title: 'Príncipe Caspian', year: '1951', link: 'https://www.amazon.com.br/Pr%C3%ADncipe-Caspian-Cr%C3%B4nicas-N%C3%A1rnia-vol/dp/8578277433' },
        { title: 'A Viagem do Peregrino da Alvorada', year: '1952', link: 'https://www.amazon.com.br/Viagem-Peregrino-Alvorada-Cr%C3%B4nicas-N%C3%A1rnia/dp/8578277452' },
        { title: 'A Cadeira de Prata', year: '1953', link: 'https://www.amazon.com.br/Cadeira-Prata-Cr%C3%B4nicas-N%C3%A1rnia-vol/dp/8578277476' },
        { title: 'O Cavalo e Seu Menino', year: '1954', link: 'https://www.amazon.com.br/Cavalo-Seu-Menino-Cr%C3%B4nicas-N%C3%A1rnia/dp/857827746X' },
        { title: 'O Sobrinho do Mago', year: '1955', link: 'https://www.amazon.com.br/Sobrinho-Mago-Cr%C3%B4nicas-N%C3%A1rnia-vol/dp/8578277492' },
        { title: 'A Última Batalha', year: '1956', link: 'https://www.amazon.com.br/%C3%9Altima-Batalha-Cr%C3%B4nicas-N%C3%A1rnia-vol/dp/8578277506' },
      ].sort((a, b) => parseInt(a.year) - parseInt(b.year)),
    },
    'meyer': {
      name: 'Stephenie Meyer',
      bio: 'Stephenie Meyer (1973-) é uma escritora americana, conhecida principalmente por ser a autora da série "Crepúsculo", que se tornou um fenômeno mundial.',
      books: [
        { title: 'Crepúsculo', year: '2005', link: 'https://www.amazon.com.br/Crep%C3%BAsculo-Stephenie-Meyer/dp/8598078174' },
        { title: 'Lua Nova', year: '2006', link: 'https://www.amazon.com.br/Lua-Nova-Stephenie-Meyer/dp/8598078220' },
        { title: 'Eclipse', year: '2007', link: 'https://www.amazon.com.br/Eclipse-Stephenie-Meyer/dp/8598078247' },
        { title: 'Amanhecer', year: '2008', link: 'https://www.amazon.com.br/Amanhecer-Stephenie-Meyer/dp/8598078298' },
        { title: 'A Hospedeira', year: '2008', link: 'https://www.amazon.com.br/Hospedeira-Stephenie-Meyer/dp/8598078336' },
        { title: 'A Breve Segunda Vida de Bree Tanner', year: '2010', link: 'https://www.amazon.com.br/Breve-Segunda-Vida-Bree-Tanner/dp/8580573408' },
        { title: 'A Química', year: '2016', link: 'https://www.amazon.com.br/Qu%C3%ADmica-Stephenie-Meyer/dp/8580419271' },
      ].sort((a, b) => parseInt(a.year) - parseInt(b.year)),
    },
    'machado': {
      name: 'Machado de Assis',
      bio: 'Joaquim Maria Machado de Assis (1839-1908) foi um escritor brasileiro, amplamente considerado como o maior nome da literatura brasileira.',
      books: [
        { title: 'Dom Casmurro', year: '1899', link: 'https://www.amazon.com.br/Dom-Casmurro-Machado-Assis/dp/8535910646' },
        { title: 'Memórias Póstumas de Brás Cubas', year: '1881', link: 'https://www.amazon.com.br/Mem%C3%B3rias-P%C3%B3stumas-Br%C3%A1s-Cubas-Machado/dp/8535910639' },
        { title: 'Quincas Borba', year: '1891', link: 'https://www.amazon.com.br/Quincas-Borba-Machado-Assis/dp/8572329935' },
        { title: 'Esaú e Jacó', year: '1904', link: 'https://www.amazon.com.br/Esa%C3%BA-Jac%C3%B3-Machado-Assis/dp/8573263180' },
        { title: 'Memorial de Aires', year: '1908', link: 'https://www.amazon.com.br/Memorial-Aires-Machado-Assis/dp/8572327630' },
        { title: 'Helena', year: '1876', link: 'https://www.amazon.com.br/Helena-Machado-Assis/dp/8573260939' },
        { title: 'A Mão e a Luva', year: '1874', link: 'https://www.amazon.com.br/M%C3%A3o-Luva-Machado-Assis/dp/8544001319' },
      ].sort((a, b) => parseInt(a.year) - parseInt(b.year)),
    },
    'alencar': {
      name: 'José de Alencar',
      bio: 'José Martiniano de Alencar (1829-1877) foi um escritor brasileiro, conhecido por suas obras românticas e indianistas.',
      books: [
        { title: 'Iracema', year: '1865', link: 'https://www.amazon.com.br/Iracema-Jos%C3%A9-Alencar/dp/8572322825' },
        { title: 'O Guarani', year: '1857', link: 'https://www.amazon.com.br/Guarani-Jose-Alencar/dp/8572327010' },
        { title: 'Senhora', year: '1875', link: 'https://www.amazon.com.br/Senhora-Jos%C3%A9-Alencar/dp/8544001068' },
        { title: 'Lucíola', year: '1862', link: 'https://www.amazon.com.br/Luc%C3%ADola-Jos%C3%A9-Alencar/dp/8595560130' },
        { title: 'A Viuvinha', year: '1857', link: 'https://www.amazon.com.br/Viuvinha-Jos%C3%A9-Alencar/dp/8594318316' },
        { title: 'Diva', year: '1864', link: 'https://www.amazon.com.br/Diva-Jos%C3%A9-Alencar/dp/8544001122' },
        { title: 'Ubirajara', year: '1874', link: 'https://www.amazon.com.br/Ubirajara-Jos%C3%A9-Alencar/dp/8594318308' },
      ].sort((a, b) => parseInt(a.year) - parseInt(b.year)),
    },
    'lispector': {
      name: 'Clarice Lispector',
      bio: 'Clarice Lispector (1920-1977) foi uma escritora brasileira, reconhecida como uma das mais importantes escritoras do século XX.',
      books: [
        { title: 'A Hora da Estrela', year: '1977', link: 'https://www.amazon.com.br/Hora-Estrela-Clarice-Lispector/dp/8535914463' },
        { title: 'A Paixão Segundo G.H.', year: '1964', link: 'https://www.amazon.com.br/Paix%C3%A3o-Segundo-G-H-Clarice-Lispector/dp/8535914196' },
        { title: 'Laços de Família', year: '1960', link: 'https://www.amazon.com.br/La%C3%A7os-Fam%C3%ADlia-Clarice-Lispector/dp/853591359X' },
        { title: 'Perto do Coração Selvagem', year: '1943', link: 'https://www.amazon.com.br/Perto-Cora%C3%A7%C3%A3o-Selvagem-Clarice-Lispector/dp/8535922733' },
        { title: 'Água Viva', year: '1973', link: 'https://www.amazon.com.br/%C3%81gua-Viva-Clarice-Lispector/dp/8535921605' },
        { title: 'Um Sopro de Vida', year: '1978', link: 'https://www.amazon.com.br/Sopro-Vida-P%C3%BAlsaciones-Clarice-Lispector/dp/853591420X' },
        { title: 'A Via Crucis do Corpo', year: '1974', link: 'https://www.amazon.com.br/Via-Crucis-Corpo-Clarice-Lispector/dp/8535922350' },
      ].sort((a, b) => parseInt(a.year) - parseInt(b.year)),
    },
    'ramos': {
      name: 'Graciliano Ramos',
      bio: 'Graciliano Ramos (1892-1953) foi um escritor brasileiro, conhecido por suas obras regionalistas e seus romances sociais.',
      books: [
        { title: 'Vidas Secas', year: '1938', link: 'https://www.amazon.com.br/Vidas-Secas-Graciliano-Ramos/dp/8535914048' },
        { title: 'São Bernardo', year: '1934', link: 'https://www.amazon.com.br/S%C3%A3o-Bernardo-Graciliano-Ramos/dp/853591403X' },
        { title: 'Angústia', year: '1936', link: 'https://www.amazon.com.br/Ang%C3%BAstia-Graciliano-Ramos/dp/8535925376' },
        { title: 'Caetés', year: '1933', link: 'https://www.amazon.com.br/Caet%C3%A9s-Graciliano-Ramos/dp/8535904808' },
        { title: 'Infância', year: '1945', link: 'https://www.amazon.com.br/Inf%C3%A2ncia-Graciliano-Ramos/dp/8535912479' },
        { title: 'Memórias do Cárcere', year: '1953', link: 'https://www.amazon.com.br/Mem%C3%B3rias-C%C3%A1rcere-Graciliano-Ramos/dp/8535920021' },
        { title: 'Insônia', year: '1947', link: 'https://www.amazon.com.br/Ins%C3%B4nia-Graciliano-Ramos/dp/8593828446' },
      ].sort((a, b) => parseInt(a.year) - parseInt(b.year)),
    },
    'amado': {
      name: 'Jorge Amado',
      bio: 'Jorge Amado (1912-2001) foi um escritor brasileiro, conhecido por suas obras que retratam a vida na Bahia e a cultura afro-brasileira.',
      books: [
        { title: 'Capitães da Areia', year: '1937', link: 'https://www.amazon.com.br/Capit%C3%A3es-Areia-Jorge-Amado/dp/8535914390' },
        { title: 'Gabriela, Cravo e Canela', year: '1958', link: 'https://www.amazon.com.br/Gabriela-Cravo-Canela-Jorge-Amado/dp/8535902791' },
        { title: 'Dona Flor e Seus Dois Maridos', year: '1966', link: 'https://www.amazon.com.br/Dona-Flor-Seus-Dois-Maridos/dp/8535902775' },
        { title: 'Terras do Sem-Fim', year: '1943', link: 'https://www.amazon.com.br/Terras-Sem-Fim-Jorge-Amado/dp/8535920202' },
        { title: 'Tieta do Agreste', year: '1977', link: 'https://www.amazon.com.br/Tieta-Agreste-Pastora-Cabras-Amado/dp/8535913807' },
        { title: 'Tenda dos Milagres', year: '1969', link: 'https://www.amazon.com.br/Tenda-dos-Milagres-Jorge-Amado/dp/853591669X' },
        { title: 'Jubiabá', year: '1935', link: 'https://www.amazon.com.br/Jubiab%C3%A1-Jorge-Amado/dp/8535903968' },
      ].sort((a, b) => parseInt(a.year) - parseInt(b.year)),
    // Adicione outros autores aqui seguindo o mesmo formato
    }
  }
  
  
  export default AuthorData;